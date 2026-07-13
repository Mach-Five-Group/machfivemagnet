/* Formats showcase: dramatic crossfade between the four display-format crops,
   copy panels fading in sync. Autoplay only while visible; any manual control
   (arrows, labels) stops autoplay for good. Mirrors verticals-cycler conventions. */
(function () {
  "use strict";

  var INTERVAL = 5200;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-formats]").forEach(init);

  function init(root) {
    var shots = root.querySelectorAll("[data-fmt-shot]");
    var panels = root.querySelectorAll("[data-fmt-panel]");
    var navBtns = root.querySelectorAll("[data-fmt-nav]");
    var prev = root.querySelector("[data-fmt-prev]");
    var next = root.querySelector("[data-fmt-next]");
    if (!shots.length || shots.length !== panels.length) return;

    var count = shots.length;
    var index = 0;
    var timer = null;
    var stopped = false;   // set true on any manual interaction
    var inView = false;
    var hovered = false;

    function render() {
      shots.forEach(function (el, i) { el.classList.toggle("is-active", i === index); });
      panels.forEach(function (el, i) { el.classList.toggle("is-active", i === index); });
      navBtns.forEach(function (el, i) {
        el.classList.toggle("is-active", i === index);
        el.setAttribute("aria-pressed", i === index ? "true" : "false");
      });
    }
    function go(i, manual) {
      index = (i + count) % count;
      if (manual) stop();
      render();
    }
    function tick() { go(index + 1, false); }

    function start() {
      if (stopped || reduced || timer || !inView || hovered || document.hidden) return;
      timer = setInterval(tick, INTERVAL);
    }
    function pause() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function stop() { stopped = true; pause(); }

    if (prev) prev.addEventListener("click", function () { go(index - 1, true); });
    if (next) next.addEventListener("click", function () { go(index + 1, true); });
    navBtns.forEach(function (btn, i) {
      btn.addEventListener("click", function () { go(i, true); });
    });

    root.addEventListener("pointerenter", function () { hovered = true; pause(); });
    root.addEventListener("pointerleave", function () { hovered = false; start(); });
    root.addEventListener("focusin", function () { hovered = true; pause(); });
    root.addEventListener("focusout", function () { hovered = false; start(); });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) start(); else pause();
      }, { threshold: 0.35 }).observe(root);
    } else {
      inView = true;
      start();
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pause(); else start();
    });
  }
})();
