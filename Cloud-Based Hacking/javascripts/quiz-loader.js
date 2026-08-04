(() => {
  const loaderScript = document.currentScript;
  const scriptRoot = new URL("./", loaderScript.src);
  const lessonPaths = new Set([
    "01-introduction-to-cloud-computing-for-hackers/01-teaser/",
    "01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/",
    "01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/",
    "01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/",
    "02-cloud-basics/05-introduction-to-cloud-basics/",
    "02-cloud-basics/06-signing-up-with-aws/",
    "02-cloud-basics/07-installing-kali-linux-on-the-cloud/",
    "02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/",
    "02-cloud-basics/09-linux-terminal-basics/",
    "03-phishing/10-introduction-to-phishing/",
    "03-phishing/11-file-hosting-and-firewall-settings/",
    "03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/",
    "03-phishing/13-creating-a-fake-login-page-on-the-cloud/",
  ]);
  let loadPromise;

  const getPagePath = () => {
    const manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) return "";

    const appRoot = new URL("./", manifest.href);
    const pathname = decodeURIComponent(window.location.pathname);
    if (!pathname.startsWith(appRoot.pathname)) return "";

    return pathname.slice(appRoot.pathname.length).replace(/^\/+|\/+$/g, "") + "/";
  };

  const ensureLessonQuiz = () => {
    const lessonPath = getPagePath();
    if (!lessonPaths.has(lessonPath)) return null;

    const existing = document.querySelector("[data-lesson-quiz]");
    if (existing) return existing;

    const content = document.querySelector(".md-content__inner");
    if (!content) return null;

    const root = document.createElement("section");
    root.className = "lesson-quiz-shell";
    root.dataset.lessonQuiz = "";
    root.dataset.lessonPath = lessonPath;
    root.setAttribute("aria-label", "Quiz desta aula");
    root.innerHTML = `
      <div class="quiz-loading" role="status" aria-live="polite">
        <strong>Preparando o quiz da aula</strong>
        <span>Carregando as perguntas deste capítulo.</span>
      </div>`;
    content.append(root);
    return root;
  };

  const loadScript = (fileName) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = new URL(fileName, scriptRoot).href;
      script.defer = true;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.append(script);
    });

  const showLoadError = () => {
    const root = document.querySelector("[data-quiz-app], [data-lesson-quiz]");
    if (!root) return;

    root.innerHTML = "";
    const error = document.createElement("div");
    error.className = "quiz-error";
    error.setAttribute("role", "alert");

    const title = document.createElement("strong");
    title.textContent = "Não foi possível carregar o quiz.";
    const message = document.createElement("span");
    message.textContent = "Atualize a página para tentar novamente.";
    error.append(title, message);
    root.append(error);
  };

  const loadQuiz = () => {
    document.documentElement.classList.remove("quiz-session-open");
    const root = document.querySelector("[data-quiz-app]") || ensureLessonQuiz();
    if (!root) return;

    if (!loadPromise) {
      loadPromise = loadScript("quiz-data.js?v=20260803-1")
        .then(() => loadScript("quiz-lesson-data.js?v=20260803-1"))
        .then(() => loadScript("quiz-fixation-data.js?v=20260804-2"))
        .then(() => loadScript("quiz.js?v=20260804-1"));
    }

    loadPromise.catch(showLoadError);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(loadQuiz);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadQuiz, { once: true });
  } else {
    loadQuiz();
  }
})();