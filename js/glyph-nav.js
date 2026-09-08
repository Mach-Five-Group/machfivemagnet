/* Header glyph rows: hover slides a label out beside the glyph; click proxies
   to the section's real tile/pill/tab, so every rotator's manners (including
   stop-on-manual-pick) apply unchanged. */
(function () {
  document.querySelectorAll("[data-glyph-for]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-glyph-for"));
      if (target) target.click();
    });
  });
})();
