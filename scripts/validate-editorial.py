from html.parser import HTMLParser
from pathlib import Path
import re
import json
import unittest
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
LESSON = Path("01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/index.html")


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.elements = []
        self.ids = []
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.elements.append((tag, attrs))
        if attrs.get("id"):
            self.ids.append(attrs["id"])


class EditorialTests(unittest.TestCase):
    def test_all_highlights_have_distinct_definition_cards(self):
        doc = Document(SITE / LESSON)
        marks = [attrs for tag, attrs in doc.elements if tag == "mark"]
        cards = [attrs for tag, attrs in doc.elements
                 if "definition-card" in attrs.get("class", "").split()]
        self.assertEqual(len(marks), 23)
        self.assertEqual(len(cards), 23)
        self.assertEqual(len(doc.ids), len(set(doc.ids)), "Duplicate HTML IDs")
        references = [mark["aria-describedby"] for mark in marks]
        self.assertEqual(len(references), len(set(references)))
        for ref in references:
            self.assertIn(ref, doc.ids)
            self.assertIn(ref + "-title", [card["aria-labelledby"] for card in cards])

    def test_lesson_images_and_no_numbered_captions(self):
        path = SITE / LESSON
        doc = Document(path)
        images = [attrs for tag, attrs in doc.elements
                  if tag == "img" and "aula-03/" in attrs.get("src", "")]
        self.assertEqual(len(images), 10)
        for image in images:
            self.assertTrue((path.parent / image["src"]).is_file(), image["src"])
            self.assertGreater(len(image["alt"]), 40)
            self.assertGreater(int(image["width"]), 0)
            self.assertGreater(int(image["height"]), 0)
            root = ET.parse(path.parent / image["src"]).getroot()
            self.assertIsNotNone(root.find("{http://www.w3.org/2000/svg}desc"))
        self.assertNotRegex(path.read_text(encoding="utf-8"),
                            r"(?i)\b(?:figura|foto|imagem)\s*\d+\b")

    def test_legacy_anchors_preserved(self):
        ids = Document(SITE / LESSON).ids
        for anchor in (
            "o-que-e-computacao-em-nuvem", "a-nuvem-como-modelo-de-uso",
            "a-nuvem-continua-sendo-infraestrutura-fisica",
            "o-que-e-um-servidor-remoto", "rede-local-internet-e-web",
            "ip-dominio-url-e-porta", "como-uma-requisicao-chega-a-um-servico-hospedado",
            "publico-e-privado-tres-distincoes", "provedor-e-hospedagem",
            "disponibilidade", "escalabilidade-e-elasticidade",
        ):
            self.assertIn(anchor, ids)

    def test_offline_resources_exist(self):
        worker = (SITE / "service-worker.js").read_text(encoding="utf-8")
        resources = re.findall(r'`\$\{APP_ROOT\}([^`]+)`', worker.split("];", 1)[0])
        self.assertGreater(len(resources), 40)
        for resource in resources:
            target = SITE / resource.split("?", 1)[0]
            self.assertTrue(target.exists(), resource)
        for name in ("provision", "virtual", "control", "network", "url", "request",
                     "conditions", "responsibility", "availability", "scale"):
            self.assertTrue(any(f"aula-03/{name}.svg" in r for r in resources))
        self.assertIn("stylesheets/book.css?v=20261025-8", resources)
        self.assertIn("javascripts/book.js?v=20261025-7", resources)
        self.assertIn("assets/site/course-cover-illustrated.svg",resources)
        catalog=json.loads((ROOT/"scripts/lesson-editorial.json").read_text(encoding="utf-8"))
        for number,data in catalog.items():
            self.assertIn(f"assets/lessons/aula-{number}-{data['diagram']}.svg",resources)
        versions = re.findall(r'((?:stylesheets|javascripts)/[^"\s]+)', (ROOT / "mkdocs.yml").read_text(encoding="utf-8"))
        for version in versions:
            self.assertIn(version, resources)

    def test_home_uses_local_art_and_book_entry(self):
        path = SITE / "index.html"
        doc = Document(path)
        image = next(attrs for tag, attrs in doc.elements
                     if tag == "img" and "volume__drawing" in attrs.get("class", "").split())
        self.assertTrue((path.parent / image["src"]).exists())
        self.assertIn("alt",image)
        self.assertGreater(len(image["alt"]),40)
        cover=ET.parse(path.parent/image["src"]).getroot()
        self.assertIsNotNone(cover.find("{http://www.w3.org/2000/svg}desc"))
        self.assertFalse(any(el.tag.rsplit("}",1)[-1] in {"image","script","foreignObject"} for el in cover.iter()))
        self.assertTrue(any("data-resume" in attrs for tag,attrs in doc.elements))
        self.assertTrue(any(attrs.get("data-open")=="contents-dialog" and "volume" in attrs.get("class","").split() for tag,attrs in doc.elements))
        for tag, attrs in doc.elements:
            if tag == "a":
                self.assertNotEqual(attrs.get("href"), "#")

    def test_chapters_use_new_reader_shell(self):
        doc=Document(SITE/LESSON)
        self.assertTrue(any("data-book-reader" in attrs for tag,attrs in doc.elements))
        self.assertTrue(any("data-page-next" in attrs for tag,attrs in doc.elements))
        self.assertTrue(any("data-page-previous" in attrs for tag,attrs in doc.elements))
        for control in ("data-page-layout","data-page-zoom","data-fullscreen","data-reader-stage"):
            self.assertTrue(any(control in attrs for tag,attrs in doc.elements))
        source=(SITE/LESSON).read_text(encoding="utf-8")
        self.assertNotIn('data-md-component="header"',source)
        self.assertNotIn("bundle.d7400e89",source)

    def test_section_four_clean_editorial(self):
        directory=SITE/"04-phishing-bypassing-2fa-mfa"
        support=json.loads((SITE/"assets/lessons/secao-04-apoio.json").read_text(encoding="utf-8"))
        self.assertEqual([a["aula"] for a in support["aulas"]],[20,21,22])
        for entry in support["aulas"]:
            self.assertTrue(entry["status"])
            self.assertTrue(entry["titulo_original"])
            for ref in entry["referencias"]:
                if not ref.startswith("https://"):
                    self.assertTrue((SITE/"assets/lessons"/ref/"index.html").is_file(),ref)
            if entry.get("ilustracao_anterior_preservada"):
                self.assertTrue((SITE/"assets/lessons"/entry["ilustracao_anterior_preservada"]).is_file())
        for path in directory.glob("*/index.html"):
            source=BeautifulSoup(path.read_text(encoding="utf-8"),"html.parser").select_one("[data-book-source]")
            self.assertIsNotNone(source)
            self.assertEqual(len(source.select("h1")),1)
            self.assertIsNone(source.select_one(".lesson-opening + blockquote"))
            self.assertNotIn("Título original:",source.get_text())
            self.assertFalse(any(h.get_text(strip=True).startswith("Referências") for h in source.select("h2")))
            for caption in source.select("figure + p"):
                self.assertIsNone(caption.find("em",recursive=False))
            self.assertIn("ainda não",source.get_text().casefold())

    def test_every_published_lesson_is_illustrated(self):
        catalog=json.loads((ROOT/"scripts/lesson-editorial.json").read_text(encoding="utf-8"))
        seen=set()
        total=0
        for prefix in ["01-introduction-to-cloud-computing-for-hackers","02-cloud-basics",
                       "03-phishing","04-phishing-bypassing-2fa-mfa"]:
            for path in (SITE/prefix).glob("*/index.html"):
                number=path.parent.name[:2]
                if number not in catalog and number!="03":continue
                source=BeautifulSoup(path.read_text(encoding="utf-8"),"html.parser").select_one("[data-book-source]")
                self.assertIsNotNone(source,str(path))
                marks=source.select("mark")
                cards=source.select(".definition-card")
                self.assertEqual(len(marks),len(cards),str(path))
                self.assertEqual(len(marks),23 if number=="03" else len(catalog[number]["terms"]))
                for mark in marks:
                    definition=source.find(id=mark["aria-describedby"])
                    self.assertIsNotNone(definition,(number,mark.get_text()))
                    self.assertIsNotNone(definition.find_parent(class_="definition-card"))
                figures=source.select(".lesson-figure img")
                self.assertEqual(len(figures),10 if number=="03" else 1)
                for image in figures:self.assertTrue((path.parent/image["src"]).is_file(),image["src"])
                self.assertIsNotNone(source.select_one(".lesson-opening h1"))
                self.assertNotRegex(source.get_text(),r"(?i)\b(?:figura|foto|imagem)\s*\d+\b")
                seen.add(number);total+=len(cards)
        self.assertEqual(seen,{f"{n:02}" for n in range(1,23)})
        self.assertEqual(total,152)


if __name__ == "__main__":
    unittest.main(verbosity=2)
