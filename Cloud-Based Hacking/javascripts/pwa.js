(() => {
  const standalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  document.documentElement.classList.toggle("is-standalone", standalone);

  const syncThemeColor = () => {
    const dark = document.body.dataset.mdColorScheme === "slate";
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = dark ? "#15211e" : "#e8ebe3";
    });
  };
  syncThemeColor();
  new MutationObserver(syncThemeColor).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"],
  });

  if (
    !("serviceWorker" in navigator) ||
    (["localhost", "127.0.0.1"].includes(window.location.hostname) &&
      !new URLSearchParams(location.search).has("offline-test"))
  ) {
    return;
  }

  window.addEventListener("load", () => {
    const manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) return;

    const appRoot = new URL("./", manifest.href);
    navigator.serviceWorker
      .register(new URL("service-worker.js", appRoot), {
        scope: appRoot.pathname,
      })
      .catch((error) => {
        console.error("Não foi possível ativar a leitura offline.", error);
      });
  });
})();