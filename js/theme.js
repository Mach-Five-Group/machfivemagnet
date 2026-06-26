(function () {
  var STORAGE_KEY = "m5_theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  // Apply immediately to avoid flash
  applyTheme(getPreferredTheme());

  window.M5Theme = {
    toggle: function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    },
    set: function (theme) {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    },
    get: function () {
      return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }
  };
})();
