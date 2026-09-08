/* Tour stage (home): light scroll parallax on the office photo backdrop.
   Skips reduced motion. */
(function () {
  var section = document.querySelector(".m5-tour");
  if (!section) return;
  var img = section.querySelector("[data-tour-parallax]");
  if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var ticking = false;
  function apply() {
    ticking = false;
    var r = section.getBoundingClientRect();
    var mid = r.top + r.height / 2 - window.innerHeight / 2;
    var shift = Math.max(-85, Math.min(85, mid * -0.16));
    img.style.transform = "translateY(" + shift.toFixed(1) + "px) scale(1.22)";
  }
  function onScroll() { if (!ticking) { ticking = true; window.requestAnimationFrame(apply); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  apply();
})();
