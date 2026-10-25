(() => {
  let theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  try {
    const saved = localStorage.getItem("cyber-book-theme");
    if (saved === "light" || saved === "dark") theme = saved;
  } catch (error) {
    console.warn("O navegador não permitiu ler a preferência de tema.", error);
  }
  document.documentElement.dataset.bookTheme = theme;
})();
