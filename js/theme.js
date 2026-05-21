(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const label = document.querySelector("[data-theme-toggle-text]");

  if (!toggle || !label) return;

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    root.dataset.theme = isLight ? "light" : "dark";
    toggle.setAttribute("aria-pressed", String(!isLight));
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );

    label.textContent = isLight ? "Light" : "Dark";
  };

  applyTheme(root.dataset.theme === "light" ? "light" : "dark");

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
})();
