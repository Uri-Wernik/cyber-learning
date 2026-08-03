(() => {
  const standalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  document.documentElement.classList.toggle("is-standalone", standalone);

  if (
    !("serviceWorker" in navigator) ||
    ["localhost", "127.0.0.1"].includes(window.location.hostname)
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
      .catch(() => {});
  });
})();