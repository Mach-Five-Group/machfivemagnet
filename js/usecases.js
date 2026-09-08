/* Use-case pills (home): manual selection only - the section answers a
   question the visitor is asking, so nothing auto-rotates. The active pill's
   phrase completes the headline, typed in; steps stagger in via CSS. */
(function () {
  var root = document.querySelector("[data-usecases]");
  if (!root) return;
  var pills = Array.prototype.slice.call(root.querySelectorAll("[data-uc-nav]"));
  var panels = Array.prototype.slice.call(root.querySelectorAll("[data-uc-panel]"));
  var answer = document.querySelector("[data-uc-answer]");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var typeTimer = null;

  function setAnswer(text) {
    if (!answer) return;
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
    if (reduced) { answer.textContent = "\u2026 " + text + "?"; return; }
    var i = 0;
    answer.textContent = "\u2026\u00A0";
    typeTimer = setInterval(function () {
      i++;
      answer.textContent = "\u2026\u00A0" + text.slice(0, i) + (i >= text.length ? "?" : "");
      if (i >= text.length) { clearInterval(typeTimer); typeTimer = null; }
    }, 26);
  }

  pills.forEach(function (pill, i) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p, j) {
        p.classList.toggle("is-active", j === i);
        p.setAttribute("aria-pressed", j === i ? "true" : "false");
      });
      panels.forEach(function (p, j) { p.classList.toggle("is-active", j === i); });
      setAnswer(pill.getAttribute("data-answer") || "");
    });
  });

  // Type the first answer once the section comes into view.
  var typed = false;
  function initial() {
    if (typed) return;
    typed = true;
    setAnswer(pills[0] ? pills[0].getAttribute("data-answer") || "" : "");
  }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries, obs) {
      if (entries[0].isIntersecting) { initial(); obs.disconnect(); }
    }, { threshold: 0.3 }).observe(root);
  } else initial();
})();
