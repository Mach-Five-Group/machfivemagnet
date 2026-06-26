(function () {
  var el = document.getElementById("js-theme-toggle");
  if (!el) return;

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function sync() {
    el.setAttribute("aria-checked", getTheme() === "dark" ? "true" : "false");
  }

  sync();

  el.addEventListener("click", function () {
    if (window.M5Theme && window.M5Theme.toggle) window.M5Theme.toggle();
    sync();
  });

  // Cross-tab sync
  window.addEventListener("storage", function (e) {
    if (e.key === "m5_theme") sync();
  });
})();
