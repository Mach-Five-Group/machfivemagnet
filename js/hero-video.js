/* Hero background loop: a real magnet conversation (see tools/examples-shooter/record-hero.js).
   The video src/poster attach ONLY on desktop, without reduced-motion or save-data, so
   phones and motion-sensitive visitors never fetch a byte. It fades in after the hero
   typewriter finishes (m5:hero-typed from hero-reveal.js) so the two never compete. */
(function () {
  "use strict";

  var bg = document.querySelector("[data-hero-bg]");
  if (!bg) return;
  var video = bg.querySelector("video");
  if (!video) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var small = window.matchMedia("(max-width: 767px)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  if (reduced || small || saveData) return;

  var poster = video.getAttribute("data-poster");
  if (poster) video.poster = poster;
  var source = document.createElement("source");
  source.src = video.getAttribute("data-src");
  source.type = "video/mp4";
  video.appendChild(source);
  video.load();

  var typed = false;
  var playing = false;
  function maybeLive() {
    if (typed && playing) bg.classList.add("is-live");
  }
  document.addEventListener("m5:hero-typed", function () { typed = true; maybeLive(); });
  window.setTimeout(function () { typed = true; maybeLive(); }, 16000); // safety net

  video.addEventListener("playing", function () { playing = true; maybeLive(); });
  function tryPlay() {
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }
  tryPlay();

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) tryPlay();
      else video.pause();
    }, { threshold: 0.1 }).observe(bg);
  }
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) video.pause();
    else tryPlay();
  });
})();
