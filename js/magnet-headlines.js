/* Magnet motion, sitewide: section headlines assemble word by word with an
   attract-snap-settle ease, and glyph rows get caught into line one box at a
   time. Runs once per element on first view. Requires gsap (loaded earlier
   on pages that use this); reduced motion or no gsap leaves everything as-is. */
(function () {
  if (typeof gsap === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function splitWords(el) {
    var parts = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(function (chunk) {
          if (!chunk) return;
          if (/^\s+$/.test(chunk)) parts.push(document.createTextNode(chunk));
          else {
            var s = document.createElement("span");
            s.style.display = "inline-block";
            s.className = "m5-magw";
            s.textContent = chunk;
            parts.push(s);
          }
        });
      } else parts.push(node);
    });
    el.textContent = "";
    parts.forEach(function (p) { el.appendChild(p); });
    return Array.prototype.slice.call(el.querySelectorAll(".m5-magw"));
  }

  function assemble(el) {
    var words = splitWords(el);
    if (!words.length) return;
    gsap.fromTo(words,
      {
        x: function () { return gsap.utils.random(-16, 16); },
        y: function () { return gsap.utils.random(-12, 12); },
        rotation: function () { return gsap.utils.random(-4, 4); },
        autoAlpha: 0
      },
      { x: 0, y: 0, rotation: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(2.2)", stagger: 0.055, clearProps: "all" });
  }

  function glyphsnap(row) {
    var glyphs = row.querySelectorAll(".m5-flowglyph, .m5-fmt-glyph");
    if (!glyphs.length) return;
    gsap.fromTo(glyphs,
      {
        x: function (i) { return (i - (glyphs.length - 1) / 2) * -26; },
        scale: 0.55,
        autoAlpha: 0
      },
      { x: 0, scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(2.4)", stagger: 0.07, clearProps: "all" });
  }

  function onView(el, fn) {
    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) { obs.disconnect(); fn(el); }
    }, { threshold: 0.5 }).observe(el);
  }

  document.querySelectorAll("[data-magnet-h]").forEach(function (el) { onView(el, assemble); });
  document.querySelectorAll(".m5-fmt-glyphrow").forEach(function (el) { onView(el, glyphsnap); });
})();
