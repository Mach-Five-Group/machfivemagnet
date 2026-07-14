/* Hero phone showcase: four real magnet conversations (recorded from the example builds,
   see tools/examples-shooter/record-phone.js) cycling inside the floating phone. The phone
   spins to switch scenarios; the caption, dots, and glow swap at the spin's midpoint while
   the screen faces away. Clips attach only on desktop, without reduced motion or save-data,
   and only after the hero typewriter finishes (m5:hero-typed) so the two never compete. */
(function () {
  "use strict";

  var scene = document.querySelector("[data-hero-phone]");
  if (!scene) return;
  var phone = scene.querySelector("[data-phone]");
  var videos = Array.prototype.slice.call(scene.querySelectorAll("video[data-scn]"));
  var pages = document.querySelectorAll("[data-hero-pages] img");
  var urlBar = document.querySelector("[data-hero-url]");
  var scenes = Array.prototype.slice.call(document.querySelectorAll("[data-hero-scenes] video"));
  if (!phone || !videos.length) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var small = window.matchMedia("(max-width: 767px)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  if (reduced || small || saveData) return; // the static poster phone stands

  var INTERVAL = 9500;
  var SPIN_MS = 850;
  var index = 0;
  var timer = null;
  var inView = false;
  var started = false;

  function tryPlay(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  function applyActive() {
    videos.forEach(function (v, i) {
      v.classList.toggle("is-active", i === index);
      if (i === index && inView && !document.hidden) tryPlay(v);
      else v.pause();
    });
    var key = videos[index].getAttribute("data-scn");
    pages.forEach(function (img) {
      var active = img.getAttribute("data-scn") === key;
      img.classList.toggle("is-active", active);
      if (active && urlBar) urlBar.textContent = img.getAttribute("data-url") || "";
    });
    scenes.forEach(function (v) {
      var active = v.getAttribute("data-scn") === key;
      v.classList.toggle("is-active", active);
      if (active && inView && !document.hidden) tryPlay(v);
      else v.pause();
    });
  }

  function spinTo(next) {
    var zoom = phone.parentElement; // .m5-phone-zoom: recedes mid-spin so the flip doesn't lift the silhouette
    phone.classList.add("is-spin");
    zoom.classList.add("is-spin");
    window.setTimeout(function () {
      index = next;
      applyActive();
    }, Math.round(SPIN_MS / 2)); // screen faces away at the midpoint
    window.setTimeout(function () {
      phone.classList.remove("is-spin");
      zoom.classList.remove("is-spin");
    }, SPIN_MS + 50);
  }

  function tick() { spinTo((index + 1) % videos.length); }

  function schedule() {
    if (timer || !started || !inView || document.hidden) return;
    timer = window.setInterval(tick, INTERVAL);
  }
  function halt() {
    if (timer) { window.clearInterval(timer); timer = null; }
    videos.forEach(function (v) { v.pause(); });
    scenes.forEach(function (v) { v.pause(); });
  }

  function attach() {
    if (started) return;
    started = true;
    videos.forEach(function (v) {
      var s = document.createElement("source");
      s.src = v.getAttribute("data-src");
      s.type = "video/mp4";
      v.appendChild(s);
      v.load();
    });
    videos[0].addEventListener("playing", function () { scene.classList.add("is-live"); }, { once: true });
    // the ghosted landing pages + scene footage render lg+ only; don't fetch them below that
    if (window.matchMedia("(min-width: 1024px)").matches) {
      pages.forEach(function (img) { img.src = img.getAttribute("data-src"); });
      scenes.forEach(function (v) {
        var src = document.createElement("source");
        src.src = v.getAttribute("data-src");
        src.type = "video/mp4";
        v.appendChild(src);
        v.load();
      });
    }
    applyActive();
    schedule();
  }
  document.addEventListener("m5:hero-typed", attach);
  window.setTimeout(attach, 16000); // safety net if the reveal never fires

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting;
      if (inView && started) { applyActive(); schedule(); }
      else if (!inView) halt();
    }, { threshold: 0.2 }).observe(scene);
  } else {
    inView = true;
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) halt();
    else if (started) { applyActive(); schedule(); }
  });
})();
