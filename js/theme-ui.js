(function () {
  var el = document.getElementById("js-theme-toggle");
  if (!el) return;

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function sync() {
    var dark = getTheme() === "dark";
    el.setAttribute("aria-checked", dark ? "true" : "false");
    el.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  sync();

  el.addEventListener("click", function () {
    var apply = function () {
      if (window.M5Theme && window.M5Theme.toggle) window.M5Theme.toggle();
      sync();
    };
    // Cross-fade the whole page on theme change where the browser supports it;
    // everywhere else keeps the instant switch.
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduced) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  });

  // Cross-tab sync
  window.addEventListener("storage", function (e) {
    if (e.key === "m5_theme") sync();
  });
})();
