(() => {
  "use strict";
  const root = new URL("./", document.querySelector('link[rel="manifest"]').href);
  const notice = document.querySelector("[data-book-notice]");
  const normalize = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
  const readSaved = (key) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn(`Não foi possível recuperar ${key}.`, error);
      return null;
    }
  };
  const save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("O navegador não permitiu salvar sua leitura.", error);
      notice.textContent = "Sua leitura continua funcionando, mas este navegador não permitiu salvar a posição.";
      notice.hidden = false;
    }
  };
  const setTheme = (theme) => {
    document.documentElement.dataset.bookTheme = theme;
    document.body.dataset.mdColorScheme = theme === "dark" ? "slate" : "default";
    document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#15211e" : "#e8ebe3";
    document.querySelector("[data-theme-toggle]").setAttribute("aria-label", theme === "dark" ? "Usar tema claro" : "Usar tema escuro");
  };
  setTheme(document.documentElement.dataset.bookTheme);
  document.querySelector("[data-library-link]").href = root.href;
  document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
    const theme = document.documentElement.dataset.bookTheme === "dark" ? "light" : "dark";
    setTheme(theme);
    try {
      localStorage.setItem("cyber-book-theme", theme);
    } catch (error) {
      console.warn("Não foi possível guardar o tema escolhido.", error);
    }
  });

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById(button.dataset.open).showModal();
    });
  });
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        dialog.close();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      }
    });
  });

  const chapterFilter = document.getElementById("chapter-filter");
  const groups = [...document.querySelectorAll(".contents-list > .contents-group")];
  const sectionPicker = document.querySelector(".section-picker");
  let chosenGroup = null;
  const filterChapters = () => {
    const query = normalize(chapterFilter.value.trim()).replace(/^aula\s+/, "");
    let count = 0;
    document.querySelectorAll(".contents-list .chapter-link").forEach((link) => {
      const group = link.closest(".contents-group");
      const visible = (!chosenGroup || group === chosenGroup) &&
        (!query || (/^\d+$/.test(query) ?
          new RegExp(`^${Number(query)}\\.\\s`).test(link.textContent.trim()) :
          normalize(link.textContent).includes(query)));
      link.hidden = !visible;
      if (visible) count++;
    });
    groups.forEach((group) => { group.hidden = !group.querySelector(".chapter-link:not([hidden])"); });
    document.querySelector("[data-chapter-count]").textContent = count ?
      `${count} ${count === 1 ? "opção disponível" : "opções disponíveis"}. Escolha uma aula para abrir o livro.` :
      "Nenhuma aula encontrada. Escolha outra seção ou altere a busca.";
  };
  for (const group of [null, ...groups]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-option";
    button.textContent = group ? group.querySelector("h3").textContent.replace(/^\d+\.\s*/, "") : "Todas as seções";
    button.setAttribute("aria-pressed", String(group === null));
    button.addEventListener("click", () => {
      chosenGroup = group;
      sectionPicker.querySelectorAll("button").forEach((option) => option.setAttribute("aria-pressed", String(option === button)));
      filterChapters();
    });
    sectionPicker.append(button);
  }
  chapterFilter.addEventListener("input", filterChapters);
  filterChapters();

  const resume = document.querySelector("[data-resume]");
  const previous = readSaved("cyber-book-last");
  if (resume && previous && typeof previous.path === "string") {
    const url = new URL(previous.path, root);
    if (url.origin === root.origin && url.pathname.startsWith(root.pathname) &&
        [...document.querySelectorAll(".chapter-link")].some((a) => a.href === url.href)) {
      resume.href = url.href;
      resume.firstChild.textContent = "Continuar a leitura ";
      document.querySelector("[data-resume-detail]").textContent = previous.title || "Retome de onde parou.";
    }
  }

  let searchData;
  let searchRequest;
  let searchVersion = 0;
  const search = document.getElementById("book-search");
  const results = document.querySelector("[data-search-results]");
  const searchStatus = document.querySelector("[data-search-status]");
  search.addEventListener("input", async () => {
    const version = ++searchVersion;
    const query = normalize(search.value.trim());
    results.replaceChildren();
    if (!query) {
      searchStatus.textContent = "Digite para encontrar um trecho nas aulas.";
      return;
    }
    searchStatus.textContent = "Buscando nas aulas…";
    try {
      if (!searchData) {
        searchRequest ??= fetch(new URL("search/search_index.json", root))
          .then((response) => {
            if (!response.ok) throw new Error(`Busca indisponível: HTTP ${response.status}`);
            return response.json();
          });
        searchData = (await searchRequest).docs;
        if (!Array.isArray(searchData)) throw new Error("O índice de busca não contém as aulas.");
      }
      if (version !== searchVersion) return;
      const words = query.split(/\s+/);
      const matches = searchData.filter((doc) => words.every((word) =>
        normalize(`${doc.title} ${doc.text}`).includes(word))).slice(0, 30);
      searchStatus.textContent = matches.length ? `${matches.length} ${matches.length === 1 ? "trecho encontrado" : "trechos encontrados"}.` : "Nenhum trecho encontrado. Tente outro conceito.";
      for (const match of matches) {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = new URL(match.location, root).href;
        const title = document.createElement("strong");
        title.textContent = match.title;
        const text = document.createElement("p");
        const plain = match.text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
        const location = Math.max(0, normalize(plain).indexOf(words[0]) - 60);
        text.textContent = `${location ? "…" : ""}${plain.slice(location, location + 180)}${plain.length > location + 180 ? "…" : ""}`;
        link.append(title, text);
        results.append(link);
      }
    } catch (error) {
      searchRequest = null;
      console.error("A busca não pôde ser concluída.", error);
      if (version === searchVersion) searchStatus.textContent = "Não foi possível carregar a busca. Verifique a conexão e digite novamente para tentar.";
    }
  });

  class BookReader {
    constructor(element) {
      this.root = element;
      this.source = element.querySelector("[data-book-source]");
      this.spread = element.querySelector("[data-spread]");
      this.controls = element.querySelector("[data-page-controls]");
      this.size = element.querySelector("[data-text-size]");
      this.previousButton = element.querySelector("[data-page-previous]");
      this.nextButton = element.querySelector("[data-page-next]");
      this.jump = element.querySelector("[data-page-jump]");
      this.status = element.querySelector("[data-page-status]");
      this.stage = element.querySelector("[data-reader-stage]");
      this.layout = element.querySelector("[data-page-layout]");
      this.zoom = element.querySelector("[data-page-zoom]");
      this.fullscreen = element.querySelector("[data-fullscreen]");
      this.desktopQuery = matchMedia("(min-width:1000px)");
      this.pages = [];
      this.index = 0;
      this.columns = 1;
      this.key = `cyber-book-position:${element.dataset.pagePath}`;
      this.restore = readSaved(this.key);
      this.original = [];
      this.busy = false;
      this.pendingResize = null;
      this.touchQuery = matchMedia("(any-pointer: coarse)");
    }

    async start() {
      const savedSize = readSaved("cyber-book-text-v2");
      this.layout.value = readSaved("cyber-book-layout") === "2" ? "2" : "1";
      const savedZoom = readSaved("cyber-book-zoom");
      this.zoom.value = ["fit", "0.75", "1", "1.25", "1.5"].includes(savedZoom) ? savedZoom : "fit";
      this.size.value = String([17, 19, 22, 24, 26].includes(savedSize) ?
        savedSize : 19);
      document.documentElement.style.setProperty("--reader-text", `${this.size.value}px`);
      await document.fonts.ready;
      await Promise.all([...this.source.querySelectorAll("img")].map(async (image) => {
        image.loading = "eager";
        try {
          await image.decode();
          image.width = image.naturalWidth;
          image.height = image.naturalHeight;
        } catch (error) {
          console.warn("Não foi possível carregar uma imagem da aula.", image.src, error);
          notice.textContent = "Uma imagem não carregou. Sua descrição permanece disponível; verifique a conexão e recarregue para tentar novamente.";
          notice.hidden = false;
        }
      }));
      this.source.querySelectorAll("details").forEach((details) => { details.open = true; });
      this.source.querySelectorAll(".headerlink").forEach((link) => link.remove());
      this.original = [...this.source.children].filter((node) => node.tagName !== "SCRIPT");
      this.original.forEach((node, index) => {
        node.dataset.bookUnit = String(index);
        node.dataset.bookOffset = "0";
      });
      const template = document.createElement("template");
      template.id = "book-original";
      this.original.forEach((node) => template.content.append(node));
      this.source.remove();
      this.root.append(template);
      this.root.querySelector("[data-reader-loading]").hidden = true;
      this.controls.hidden = false;
      this.spread.hidden = false;
      document.documentElement.classList.add("is-paginated");
      this.paginate();
      this.bind();
      this.root.querySelector("[data-reader-loading]").hidden = true;
      this.root.dataset.readerReady = "true";
    }

    makeLeaf() {
      const leaf = document.createElement("section");
      leaf.className = "book-leaf";
      const body = document.createElement("div");
      body.className = "page-body";
      leaf.append(body);
      return leaf;
    }

    updateScale() {
      if (!this.desktopQuery.matches) {
        this.spread.style.transform = "";
        this.spread.parentElement.style.width = "";
        this.spread.parentElement.style.height = "";
        return;
      }
      const width = 794 * this.columns + 20 * (this.columns - 1);
      const fit = Math.min((this.stage.clientWidth - 32) / width, (this.stage.clientHeight - 32) / 1123);
      const scale = this.zoom.value === "fit" ? Math.max(.1, fit) : Number(this.zoom.value);
      this.spread.style.transform = `scale(${scale})`;
      this.spread.parentElement.style.width = `${width * scale}px`;
      this.spread.parentElement.style.height = `${1123 * scale}px`;
    }

    fits() {
      const bounds = this.measureBody.getBoundingClientRect();
      const last = this.measureBody.lastElementChild;
      return this.measureBody.scrollHeight <= this.measureBody.clientHeight + 1 &&
        (!last || last.getBoundingClientRect().bottom <= bounds.bottom + .5);
    }

    test(node) {
      this.measureBody.append(node);
      const fits = this.fits();
      node.remove();
      return fits;
    }

    breakpoints(element) {
      const result = [];
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const text = walker.currentNode;
        if (text.parentElement.closest("mark")) continue;
        for (const match of text.textContent.matchAll(/\s+/g)) {
          result.push([text, match.index + match[0].length]);
        }
        if (text.textContent.trim()) result.push([text, text.textContent.length]);
      }
      return result;
    }

    fragments(element, point) {
      const headRange = document.createRange();
      headRange.selectNodeContents(element);
      headRange.setEnd(...point);
      const tailRange = document.createRange();
      tailRange.selectNodeContents(element);
      tailRange.setStart(...point);
      const head = element.cloneNode(false);
      const tail = element.cloneNode(false);
      head.append(headRange.cloneContents());
      tail.append(tailRange.cloneContents());
      tail.removeAttribute("id");
      for (const fragment of [head, tail]) {
        fragment.querySelectorAll("a:not([id]),strong,em,code").forEach((element) => {
          if (!element.textContent.trim() && !element.querySelector("img,svg")) element.remove();
        });
      }
      return [head, tail];
    }

    splitText(node, wrap = (element) => element) {
      const lesson = node.matches(".lesson-block");
      const textElement = lesson ? node.querySelector(".lesson-copy") : node;
      const points = this.breakpoints(textElement);
      const create = (point) => {
        const pieces = this.fragments(textElement, point);
        if (!lesson) return pieces;
        return pieces.map((piece) => {
          const block = node.cloneNode(false);
          block.append(piece);
          const rail = document.createElement("div");
          rail.className = "definition-rail";
          const refs = new Set([...piece.querySelectorAll("mark")].map((m) => m.getAttribute("aria-describedby")));
          node.querySelectorAll(".definition-card").forEach((card) => {
            if ([...card.querySelectorAll("[id]")].some((el) => refs.has(el.id))) rail.append(card.cloneNode(true));
          });
          if (rail.children.length) block.append(rail);
          return block;
        });
      };
      let low = 0;
      let high = points.length - 1;
      let best = null;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const [head, tail] = create(points[mid]);
        if (head.textContent.trim() && this.test(wrap(head))) {
          if (tail.textContent.trim()) best = [head, tail];
          low = mid + 1;
        } else high = mid - 1;
      }
      return best;
    }

    splitCollection(node) {
      const children = [...node.children];
      if (!children.length) return null;
      const head = node.cloneNode(false);
      let count = 0;
      for (const child of children) {
        head.append(child.cloneNode(true));
        if (!this.test(head)) {
          head.lastElementChild.remove();
          break;
        }
        count++;
      }
      if (!count) {
        const pieces = this.splitText(children[0], (part) => {
          const wrapper = node.cloneNode(false);
          wrapper.append(part.cloneNode(true));
          return wrapper;
        });
        if (!pieces) return null;
        head.replaceChildren(pieces[0]);
        const tail = node.cloneNode(false);
        tail.removeAttribute("id");
        tail.append(pieces[1], ...children.slice(1).map((child) => child.cloneNode(true)));
        return [head, tail];
      }
      if (count === children.length) return null;
      const tail = node.cloneNode(false);
      tail.removeAttribute("id");
      children.slice(count).forEach((child) => tail.append(child.cloneNode(true)));
      if (node.tagName === "OL") tail.start = (node.start || 1) + count;
      return [head, tail];
    }

    splitTable(node) {
      const table = node.matches("table") ? node : node.querySelector("table");
      if (!table || table.tBodies.length !== 1 || table.tBodies[0].rows.length < 2) return null;
      const rows = [...table.tBodies[0].rows];
      const head = node.cloneNode(true);
      const headTable = head.matches("table") ? head : head.querySelector("table");
      headTable.tBodies[0].replaceChildren();
      let count = 0;
      for (const row of rows) {
        headTable.tBodies[0].append(row.cloneNode(true));
        if (!this.test(head)) { headTable.tBodies[0].lastElementChild.remove(); break; }
        count++;
      }
      if (!count || count === rows.length) return null;
      const tail = node.cloneNode(true);
      const tailTable = tail.matches("table") ? tail : tail.querySelector("table");
      tailTable.tBodies[0].replaceChildren(...rows.slice(count).map((row) => row.cloneNode(true)));
      tail.removeAttribute("id");
      return [head, tail];
    }

    split(node) {
      let pieces;
      if (node.matches(".book-end") && this.measureBody.children.length) return null;
      if (node.matches("ul,ol,.lesson-opening,details,.book-table,.book-end")) pieces = this.splitCollection(node);
      else if (node.matches("table") || node.querySelector("table")) pieces = this.splitTable(node);
      else if (!node.matches("figure") && !node.querySelector("img")) pieces = this.splitText(node);
      if (!pieces) return null;
      const offset = Number(node.dataset.bookOffset || 0);
      pieces[0].dataset.bookUnit = node.dataset.bookUnit;
      pieces[1].dataset.bookUnit = node.dataset.bookUnit;
      pieces[0].dataset.bookOffset = String(offset);
      pieces[1].dataset.bookOffset = String(offset + pieces[0].textContent.length);
      return pieces;
    }

    paginate() {
      if (this.busy) return;
      this.busy = true;
      this.root.querySelector(".book-source")?.remove();
      this.spread.hidden = false;
      this.controls.hidden = false;
      document.documentElement.classList.add("is-paginated");
      const anchor = this.pages[this.index]?.firstElementChild;
      const position = anchor ? { unit: Number(anchor.dataset.bookUnit), offset: Number(anchor.dataset.bookOffset || 0) } : this.restore;
      this.columns = this.desktopQuery.matches ? Number(this.layout.value) : 1;
      this.spread.style.setProperty("--sheet-columns", this.columns);
      this.updateScale();
      this.spread.classList.remove("has-touch-pages");
      this.spread.replaceChildren(...Array.from({ length: this.columns }, () => this.makeLeaf()));
      const reference = this.spread.firstElementChild.getBoundingClientRect();
      this.pageSize = { width: this.spread.clientWidth, height: this.spread.clientHeight };
      this.measureLeaf = this.makeLeaf();
      this.measureLeaf.classList.add("measure-leaf");
      this.measureLeaf.style.width = `${this.desktopQuery.matches ? 794 : reference.width}px`;
      this.measureLeaf.style.height = `${this.desktopQuery.matches ? 1123 : reference.height}px`;
      document.body.append(this.measureLeaf);
      this.measureBody = this.measureLeaf.firstElementChild;
      const usable = this.measureBody.clientHeight;
      if (usable < 100) {
        this.measureLeaf.remove();
        this.busy = false;
        throw new Error("A janela está pequena demais para compor uma página legível.");
      }
      document.documentElement.style.setProperty("--image-limit", `${Math.max(80, usable - 40)}px`);
      const queue = this.original.map((node) => {
        const clone = node.cloneNode(true);
        if (this.measureBody.clientWidth < 460) {
          const tables = clone.matches("table") ? [clone] : [...clone.querySelectorAll("table")];
          for (const table of tables) {
            const stack = document.createElement("section");
            stack.className = "book-table";
            const labels = [...(table.tHead?.rows[0]?.cells || [])].map((cell) => cell.textContent);
            for (const row of [...table.tBodies].flatMap((body) => [...body.rows])) {
              const record = document.createElement("dl");
              record.className = "book-row";
              [...row.cells].forEach((cell, index) => {
                const term = document.createElement("dt");
                term.textContent = labels[index] || `Coluna ${index + 1}`;
                const value = document.createElement("dd");
                value.append(...[...cell.childNodes].map((child) => child.cloneNode(true)));
                record.append(term, value);
              });
              stack.append(record);
            }
            if (table === clone) {
              stack.dataset.bookUnit = clone.dataset.bookUnit;
              stack.dataset.bookOffset = clone.dataset.bookOffset;
              if (clone.id) stack.id = clone.id;
              return stack;
            }
            table.replaceWith(stack);
          }
        }
        return clone;
      });
      const end = document.createElement("nav");
      end.className = "book-end";
      end.dataset.bookUnit = String(this.original.length);
      end.setAttribute("aria-label", "Continuar depois da leitura");
      const quizLink = document.querySelector('.chapter-link[href*="/quiz/"]');
      const isLesson = /^\d{2}-/.test(this.root.dataset.pagePath.split("/").filter(Boolean).at(-1) || "") &&
        !this.root.dataset.pagePath.includes("preparacao");
      if (isLesson && quizLink) {
        const quiz = document.createElement("a");
        const url = new URL("quiz/", root);
        url.searchParams.set("lesson", this.root.dataset.pagePath);
        quiz.href = url.href;
        quiz.textContent = "Praticar no quiz desta aula";
        end.append(quiz);
      }
      if (this.root.dataset.nextChapter) {
        const next = document.createElement("a");
        next.href = this.root.dataset.nextChapter;
        next.textContent = `Continuar: ${this.root.dataset.nextTitle} →`;
        end.append(next);
      }
      const library = document.createElement("a");
      library.href = root.href;
      library.textContent = "Voltar à biblioteca";
      end.append(library);
      queue.push(end);
      const pages = [];
      const finish = () => {
        if (!this.measureBody.children.length) return;
        const fragment = document.createElement("div");
        while (this.measureBody.firstChild) fragment.append(this.measureBody.firstChild);
        pages.push(fragment);
      };
      try {
        while (queue.length) {
          let node = queue.shift();
          if (!node.textContent.trim() && !node.querySelector("img,svg,hr")) continue;
          if (node.matches("h1,h2,h3,h4") && this.measureBody.children.length) {
            const heading = node.cloneNode(true);
            const sample = queue[0]?.matches(".lesson-block") ? queue[0].cloneNode(true) : document.createElement("p");
            if (!sample.textContent) sample.textContent = "Este trecho precisa de espaço para começar sua explicação com clareza.";
            this.measureBody.append(heading, sample);
            let fits = this.fits();
            if (!fits && queue.length) {
              sample.remove();
              fits = Boolean(this.split(queue[0].cloneNode(true)));
            }
            heading.remove(); sample.remove();
            if (!fits) finish();
          }
          if (this.test(node)) {
            this.measureBody.append(node);
            continue;
          }
          const pieces = this.split(node);
          if (pieces) {
            this.measureBody.append(pieces[0]);
            finish();
            queue.unshift(pieces[1]);
          } else if (this.measureBody.children.length) {
            finish();
            queue.unshift(node);
          } else if (node.querySelector("img")) {
            node.classList.add("page-media");
            if (!this.test(node)) throw new Error("Uma ilustração não coube na página. Aumente a altura da janela.");
            this.measureBody.append(node);
          } else {
            throw new Error(`Não foi possível paginar o bloco: ${node.textContent.trim().slice(0, 90)}`);
          }
        }
        finish();
        if (!pages.length) throw new Error("Este capítulo não contém páginas.");
        this.pages = pages;
        this.index = 0;
        if (position && Number.isInteger(position.unit)) {
          for (let i = 0; i < pages.length; i++) {
            const candidates = [...pages[i].children];
            if (candidates.some((el) => Number(el.dataset.bookUnit) === position.unit &&
                Number(el.dataset.bookOffset || 0) <= (position.offset || 0))) this.index = i;
          }
        }
        const hash = decodeURIComponent(location.hash.slice(1));
        if (hash && !this.hasAppliedHash) {
          if (this.restore?.hash !== location.hash) {
            const found = pages.findIndex((p) => [...p.querySelectorAll("[id]")].some((el) => el.id === hash));
            if (found >= 0) this.index = found;
          }
          this.hasAppliedHash = true;
        }
        this.index -= this.index % this.columns;
        this.measureLeaf.remove();
        this.render(false);
        this.root.querySelector("[data-reader-error]").hidden = true;
      } finally {
        this.measureLeaf.remove();
        this.busy = false;
      }
    }

    render(animate) {
      const touch = this.touchQuery.matches && !this.desktopQuery.matches;
      this.spread.classList.toggle("has-touch-pages", touch);
      const indices = touch ?
        [this.index - 1, this.index, this.index + 1].filter((i) => i >= 0 && i < this.pages.length) :
        Array.from({ length: this.columns }, (_, i) => this.index + i);
      this.spread.replaceChildren(...indices.map((number) => {
        const leaf = this.makeLeaf();
        const body = leaf.firstElementChild;
        leaf.dataset.pageIndex = number;
        leaf.inert = number < this.index || number >= Math.min(this.index + this.columns, this.pages.length);
        if (leaf.inert) leaf.setAttribute("aria-hidden", "true");
        if (this.pages[number]) {
          body.append(...[...this.pages[number].children].map((child) => child.cloneNode(true)));
          leaf.setAttribute("aria-label", `Página ${number + 1} de ${this.pages.length}`);
          const folio = document.createElement("span");
          folio.className = "page-folio";
          folio.textContent = number + 1;
          folio.setAttribute("aria-hidden", "true");
          leaf.append(folio);
        } else {
          leaf.setAttribute("aria-label", "Fim do capítulo");
        }
        return leaf;
      }));
      this.spread.querySelectorAll("img").forEach((image) => {
        image.loading = "eager";
        const originalLink = image.closest("a");
        if (originalLink && originalLink.href !== image.src) return;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "image-button";
        button.setAttribute("aria-label", "Ampliar desenho: " + image.alt);
        if (originalLink) originalLink.replaceWith(button);
        else image.replaceWith(button);
        button.append(image);
        button.addEventListener("click", () => {
          const dialog = document.getElementById("image-dialog");
          const copy = image.cloneNode(true);
          const description = document.createElement("p");
          description.className = "image-description";
          description.textContent = image.alt;
          dialog.querySelector("[data-image-content]").replaceChildren(copy, description);
          dialog.showModal();
        });
      });
      this.spread.querySelectorAll("pre").forEach((pre) => {
        const unit = Number(pre.closest("[data-book-unit]").dataset.bookUnit);
        const original = this.original[unit];
        const code = (original?.matches("pre") ? original : original?.querySelector("pre"))?.textContent || pre.textContent;
        const button = document.createElement("button");
        button.type = "button";
        button.className = "code-copy";
        button.textContent = "Copiar";
        button.setAttribute("aria-label", "Copiar o bloco de código completo");
        button.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(code);
            button.textContent = "Copiado";
          } catch (error) {
            console.error("Não foi possível copiar o código.", error);
            notice.textContent = "Não foi possível copiar automaticamente. Selecione o código para copiá-lo.";
            notice.hidden = false;
          }
        });
        pre.append(button);
      });
      const last = Math.min(this.index + this.columns, this.pages.length);
      this.status.textContent = this.columns === 2 && last !== this.index + 1 ?
        `Páginas ${this.index + 1} e ${last} de ${this.pages.length}` :
        `Página ${this.index + 1} de ${this.pages.length}`;
      this.jump.max = this.pages.length;
      this.jump.value = this.index + 1;
      this.currentLeaf = this.spread.querySelector(`[data-page-index="${this.index}"]`);
      this.spread.scrollLeft = this.currentLeaf.getBoundingClientRect().left -
        this.spread.firstElementChild.getBoundingClientRect().left;
      this.previousButton.disabled = this.index === 0;
      this.nextButton.disabled = last === this.pages.length;
      this.updateScale();
      const first = this.pages[this.index].firstElementChild;
      save(this.key, { unit: Number(first.dataset.bookUnit), offset: Number(first.dataset.bookOffset || 0), hash: location.hash });
      save("cyber-book-last", { path: this.root.dataset.pagePath, title: this.root.dataset.pageTitle });
      if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        this.animation?.cancel();
        this.animation = this.spread.animate([{ opacity: .6 }, { opacity: 1 }],
          { duration: 120, easing: "cubic-bezier(0.23, 1, 0.32, 1)" });
      }
    }

    turn(direction, animate = false) {
      const index = Math.max(0, Math.min(this.pages.length - 1, this.index + direction * this.columns));
      const aligned = index - index % this.columns;
      if (aligned === this.index) return;
      this.index = aligned;
      this.render(animate);
    }

    showError(error) {
      console.error("O leitor não conseguiu compor as páginas.", error);
      const message = this.root.querySelector("[data-reader-error]");
      message.textContent = `${error.message} O texto completo está disponível abaixo para que você possa continuar lendo.`;
      message.hidden = false;
      this.root.querySelector("[data-reader-loading]").hidden = true;
      this.spread.hidden = true;
      this.controls.hidden = true;
      document.documentElement.classList.remove("is-paginated");
      const fallback = document.createElement("article");
      fallback.className = "book-source page-body";
      this.original.forEach((node) => fallback.append(node.cloneNode(true)));
      this.root.querySelector(".book-source")?.remove();
      this.root.append(fallback);
    }

    bind() {
      let settleTimer;
      let touching = false;
      let pinching = false;
      let pendingTouchLayout = false;
      const reflow = () => {
        if (touching) { pendingTouchLayout = true; return; }
        pendingTouchLayout = false;
        this.updateScale();
        if (Math.abs(this.spread.clientWidth - this.pageSize.width) <= 1 &&
            Math.abs(this.spread.clientHeight - this.pageSize.height) <= 1) return;
        try { this.paginate(); } catch (error) { this.showError(error); }
      };
      const commitSwipe = () => {
        if (touching || !this.touchQuery.matches || this.desktopQuery.matches || this.busy) return;
        const leaves = [...this.spread.children];
        const origin = leaves[0]?.getBoundingClientRect().left || 0;
        if (pinching) {
          this.spread.scrollLeft = this.currentLeaf.getBoundingClientRect().left - origin;
          pinching = false;
          if (pendingTouchLayout) reflow();
          return;
        }
        const closest = leaves.reduce((best, leaf) =>
          Math.abs(leaf.getBoundingClientRect().left - origin - this.spread.scrollLeft) <
          Math.abs(best.getBoundingClientRect().left - origin - this.spread.scrollLeft) ? leaf : best, leaves[0]);
        if (closest && Number(closest.dataset.pageIndex) !== this.index) {
          this.index = Number(closest.dataset.pageIndex);
          this.render(false);
        }
        if (pendingTouchLayout) reflow();
      };
      this.spread.addEventListener("touchstart", (event) => {
        if (!touching && event.touches.length === 1) pinching = false;
        touching = true;
        if (event.touches.length > 1) pinching = true;
      }, { passive: true });
      const releaseTouch = (event) => {
        touching = event.touches.length > 0;
        clearTimeout(settleTimer);
        settleTimer = setTimeout(commitSwipe, 160);
      };
      this.spread.addEventListener("touchend", releaseTouch, { passive: true });
      this.spread.addEventListener("touchcancel", (event) => {
        releaseTouch(event);
        pinching = true;
      }, { passive: true });
      this.spread.addEventListener("scrollend", commitSwipe);
      this.spread.addEventListener("scroll", () => {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(commitSwipe, 160);
      }, { passive: true });
      this.touchQuery.addEventListener("change", () => this.render(false));
      this.desktopQuery.addEventListener("change", () => {
        try { this.paginate(); } catch (error) { this.showError(error); }
      });
      this.layout.addEventListener("change", () => {
        save("cyber-book-layout", this.layout.value);
        this.columns = this.desktopQuery.matches ? Number(this.layout.value) : 1;
        this.index -= this.index % this.columns;
        this.spread.style.setProperty("--sheet-columns", this.columns);
        this.render(false);
      });
      this.zoom.addEventListener("change", () => {
        save("cyber-book-zoom", this.zoom.value);
        this.updateScale();
      });
      this.fullscreen.hidden = !document.fullscreenEnabled;
      this.fullscreen.addEventListener("click", async () => {
        try {
          if (document.fullscreenElement) await document.exitFullscreen();
          else await document.documentElement.requestFullscreen();
        } catch (error) {
          console.error("Não foi possível alterar a tela cheia.", error);
          notice.textContent = "Não foi possível abrir a tela cheia. Use o comando de tela cheia do seu navegador.";
          notice.hidden = false;
        }
      });
      document.addEventListener("fullscreenchange", () => {
        this.fullscreen.textContent = document.fullscreenElement ? "Sair da tela cheia" : "Tela cheia";
        this.fullscreen.setAttribute("aria-label", document.fullscreenElement ? "Sair da tela cheia" : "Entrar em tela cheia");
        this.updateScale();
      });
      this.previousButton.addEventListener("click", (event) => this.turn(-1, event.detail > 0));
      this.nextButton.addEventListener("click", (event) => this.turn(1, event.detail > 0));
      this.jump.addEventListener("change", () => {
        const number = Number(this.jump.value);
        if (!Number.isInteger(number) || number < 1 || number > this.pages.length) {
          this.jump.setCustomValidity(`Escolha uma página entre 1 e ${this.pages.length}.`);
          this.jump.reportValidity();
          this.jump.value = this.index + 1;
          return;
        }
        this.jump.setCustomValidity("");
        this.index = number - 1 - (number - 1) % this.columns;
        this.render(false);
      });
      this.jump.addEventListener("input", () => this.jump.setCustomValidity(""));
      this.size.addEventListener("change", () => {
        const size = Number(this.size.value);
        save("cyber-book-text-v2", size);
        document.documentElement.style.setProperty("--reader-text", `${size}px`);
        try { this.paginate(); } catch (error) { this.showError(error); }
      });
      document.addEventListener("keydown", (event) => {
        if (document.querySelector("dialog[open]") || event.target.closest("input,select,textarea,[contenteditable]") ||
            event.altKey || event.ctrlKey || event.metaKey) return;
        if (["ArrowRight", "PageDown", "ArrowLeft", "PageUp"].includes(event.key)) {
          event.preventDefault();
          this.turn(["ArrowRight", "PageDown"].includes(event.key) ? 1 : -1);
        }
      });
      const openSection = (hash) => {
        const id = decodeURIComponent(hash.slice(1));
        const index = this.pages.findIndex((p) => [...p.querySelectorAll("[id]")].some((el) => el.id === id));
        if (index < 0) return false;
        this.index = index - index % this.columns;
        if (location.hash !== hash) history.replaceState(null, "", hash);
        document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
        this.render(false);
        const heading = document.getElementById(id);
        if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
        return true;
      };
      document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link) return;
        const url = new URL(link.href);
        if (url.origin === location.origin && url.pathname === location.pathname && url.hash && openSection(url.hash)) {
          event.preventDefault();
          history.replaceState(null, "", link.hash);
        }
      });
      window.addEventListener("hashchange", () => { if (location.hash) openSection(location.hash); });
      window.addEventListener("resize", () => {
        clearTimeout(this.pendingResize);
        this.pendingResize = setTimeout(reflow, 160);
      });
    }
  }

  const reader = document.querySelector("[data-book-reader]");
  if (reader) {
    const book = new BookReader(reader);
    book.start().catch((error) => book.showError(error));
    // A read-only test seam: no globals on production origins.
    if (["localhost", "127.0.0.1"].includes(location.hostname)) {
      window.bookTest = {
        pages: () => book.pages,
        original: () => book.original,
        index: () => book.index,
        navigate: (index) => { book.index = index - index % book.columns; book.render(false); },
      };
    }
  }
})();
