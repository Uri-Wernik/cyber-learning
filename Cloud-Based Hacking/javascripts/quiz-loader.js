(() => {
  const loaderScript = document.currentScript;
  const scriptRoot = new URL("./", loaderScript.src);
  let loadPromise;

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
    const root = document.querySelector("[data-quiz-app]");
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
    if (!document.querySelector("[data-quiz-app]")) return;

    if (!loadPromise) {
      loadPromise = loadScript("quiz-data.js?v=20260803-1").then(() =>
        loadScript("quiz.js?v=20260803-1")
      );
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