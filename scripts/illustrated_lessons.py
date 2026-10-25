from pathlib import Path
from urllib.parse import quote
import json
import logging
import posixpath
import re

from bs4 import BeautifulSoup, NavigableString

ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((Path(__file__).with_name("lesson-editorial.json")).read_text(encoding="utf-8"))
LOG = logging.getLogger("mkdocs.illustrated")


def diagram_code(soup):
    return [code for code in soup.select("pre > code")
            if code.get_text().lstrip().startswith(("flowchart ", "sequenceDiagram"))]


def lesson_text(soup):
    copy = BeautifulSoup(str(soup), "html.parser")
    for extra in copy.select(".definition-rail, figure[data-editorial-generated], .lesson-kicker[data-editorial-generated]"):
        extra.decompose()
    for code in diagram_code(copy):
        code.parent.decompose()
    for paragraph in copy.find_all("p"):
        emphasis = paragraph.find("em", recursive=False)
        if emphasis and re.match(r"^\s*Figura\s+\d+\s*[:.]", emphasis.get_text()):
            first = next(emphasis.strings)
            first.replace_with(re.sub(r"^\s*Figura\s+\d+\s*[:.]\s*", "", str(first), count=1))
    return re.sub(r"\s+", "", copy.get_text())


def on_page_content(html, page, config, files):
    number = page.file.src_uri.rsplit("/", 1)[-1][:2]
    if number not in CATALOG or page.file.src_uri.split("/", 1)[0] not in {
        "01-introduction-to-cloud-computing-for-hackers", "02-cloud-basics",
        "03-phishing", "04-phishing-bypassing-2fa-mfa",
    }:
        return html
    data = CATALOG[number]
    soup = BeautifulSoup(html, "html.parser")
    original_text = lesson_text(soup)
    remaining = {item["term"]: item for item in data["terms"]}
    diagram_anchor = None
    for paragraph in list(soup.find_all("p")):
        if paragraph.find_parent(["blockquote", "pre", "figure", "table", "aside", "li"]):
            continue
        if paragraph.find_parent(class_=["lesson-block", "definition-card"]):
            continue
        selected = []
        for text in list(paragraph.find_all(string=True)):
            if not isinstance(text, NavigableString) or text.find_parent(["a", "pre", "mark"]):
                continue
            candidates = []
            for term, item in remaining.items():
                if text.find_parent("code") and not item.get("code"):
                    continue
                if item.get("styled") and not text.find_parent(["strong", "code"]):
                    continue
                match = re.search(r"(?<!\w)" + re.escape(term) + r"(?!\w)", str(text), re.IGNORECASE)
                if match:
                    candidates.append((match.start(), match.end(), term, match.group()))
            if not candidates:
                continue
            parts = []
            cursor = 0
            for start, end, term, label in sorted(candidates):
                if start < cursor or term not in remaining:
                    continue
                parts.append(NavigableString(str(text)[cursor:start]))
                identity = f"def-aula-{number}-{len(selected)}-{len(data['terms']) - len(remaining)}"
                mark = soup.new_tag("mark", attrs={"aria-describedby": identity})
                mark.string = label
                parts.append(mark)
                selected.append((identity, label, remaining.pop(term)))
                cursor = end
            parts.append(NavigableString(str(text)[cursor:]))
            text.replace_with(*parts)
        if not selected:
            continue
        block = soup.new_tag("div", attrs={"class": "lesson-block", "data-editorial-generated": ""})
        paragraph.wrap(block)
        copy = soup.new_tag("div", attrs={"class": "lesson-copy"})
        paragraph.wrap(copy)
        rail = soup.new_tag("div", attrs={"class": "definition-rail"})
        block.append(rail)
        for identity, label, item in selected:
            card = soup.new_tag("aside", attrs={"class": "definition-card", "aria-labelledby": identity + "-title"})
            title = soup.new_tag("p", attrs={"class": "definition-card__term", "id": identity + "-title"})
            title.string = label
            definition = soup.new_tag("p", attrs={"id": identity})
            definition.string = item["definition"]
            card.extend([title, definition])
            rail.append(card)
            if item["term"] == data["anchor"]:
                diagram_anchor = block
    if remaining:
        raise ValueError(f"Aula {number}: termos sem ocorrência elegível na prosa: {', '.join(remaining)}")
    if diagram_anchor is None:
        raise ValueError(f"Aula {number}: ponto de inserção do desenho não encontrado.")

    asset = f"assets/lessons/aula-{number}-{data['diagram']}.svg"
    if not (Path(config.docs_dir) / asset).is_file():
        raise FileNotFoundError(f"Ilustração ausente: {asset}")
    # This event follows MkDocs' relative URL rewriting; calculate from the output page.
    start = posixpath.dirname(page.url) if page.url.endswith(".html") else page.url
    src = quote(posixpath.relpath(asset, start or "."), safe="/")
    figure = soup.new_tag("figure", attrs={"class": "lesson-figure", "data-editorial-generated": ""})
    image = soup.new_tag("img", attrs={
        "src": src, "alt": data["alt"], "width": "900", "height": "400",
        "loading": "lazy", "decoding": "async",
    })
    figure.append(image)
    legacy = diagram_code(soup)
    if legacy:
        container = legacy[0].parent
        if container.parent and "highlight" in container.parent.get("class", []):
            container = container.parent
        container.replace_with(figure)
    else:
        diagram_anchor.insert_after(figure)
    heading = soup.find("h1")
    if heading and not heading.find_parent(class_="lesson-opening"):
        opening = soup.new_tag("div", attrs={"class": "lesson-opening"})
        heading.wrap(opening)
        kicker = soup.new_tag("p", attrs={"class": "lesson-kicker", "data-editorial-generated": ""})
        kicker.string = f"Cloud-Based Hacking / Aula {int(number)}"
        heading.insert_before(kicker)
    for paragraph in soup.find_all("p"):
        if paragraph.find_parent(class_="definition-card"):
            continue
        emphasis = paragraph.find("em", recursive=False)
        if emphasis and re.match(r"^\s*Figura\s+\d+\s*[:.]", emphasis.get_text()):
            first = next(emphasis.strings)
            first.replace_with(re.sub(r"^\s*Figura\s+\d+\s*[:.]\s*", "", str(first), count=1))
    LOG.debug("Aula %s: %s cartões e um desenho editorial aplicados.", number, len(data["terms"]))
    if lesson_text(soup) != original_text:
        raise ValueError(f"Aula {number}: a adaptação alterou o texto da aula.")
    return str(soup)
