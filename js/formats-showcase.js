/* Formats showcase: a deck of cards, one per display format, each playing a clip of the
   real magnet being filled out (recorded by tools/examples-shooter/record-formats.js).
   Advancing shuffles the deck: the spent card tucks back while the next fades in on top.
   Clips attach lazily when the section nears the viewport (desktop only, no reduced
   motion, no save-data; the static crops stand as posters otherwise). Autoplay advances
   slowly enough for a clip to play through, and any manual control stops it for good. */
(function () {
  "use strict";

  var INTERVAL = 11000;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var small = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var allowVideo = !reduced && !small && !saveData;

  document.querySelectorAll("[data-formats]").forEach(init);

  function init(root) {
    var cards = Array.prototype.slice.call(root.querySelectorAll("[data-fmt-card]"));
    var panels = root.querySelectorAll("[data-fmt-panel]");
    var navBtns = root.querySelectorAll("[data-fmt-nav]");
    var prev = root.querySelector("[data-fmt-prev]");
    var next = root.querySelector("[data-fmt-next]");
    if (!cards.length || cards.length !== panels.length) return;

    var count = cards.length;
    var index = 0;
    var timer = null;
    var stopped = false;   // set true on any manual interaction
    var inView = false;
    var hovered = false;
    var attached = false;

    function videoOf(card) { return card.querySelector("video"); }

    function attachVideos() {
      if (attached || !allowVideo) return;
      attached = true;
      cards.forEach(function (card) {
        var v = videoOf(card);
        if (!v) return;
        var s = document.createElement("source");
        s.src = v.getAttribute("data-src");
        s.type = "video/mp4";
        v.appendChild(s);
        v.load();
        v.addEventListener("playing", function () { card.classList.add("is-playing"); });
      });
    }

    function tryPlay(v) {
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    }

    function render() {
      cards.forEach(function (card, i) {
        var active = i === index;
        card.classList.toggle("is-active", active);
        var v = videoOf(card);
        if (!v) return;
        if (active && attached && inView && !document.hidden) tryPlay(v);
        else v.pause();
      });
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
    function haltVideos() {
      cards.forEach(function (card) { var v = videoOf(card); if (v) v.pause(); });
    }

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
        if (inView) { attachVideos(); render(); start(); }
        else { pause(); haltVideos(); }
      }, { threshold: 0.3 }).observe(root);
    } else {
      inView = true;
      attachVideos();
      render();
      start();
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { pause(); haltVideos(); }
      else { render(); start(); }
    });
  }
})();
