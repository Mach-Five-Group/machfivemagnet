/* Scroll choreography: reveal-on-arrival, integrations wake, sticky-header glass.
   Everything is additive: without this file (or without IntersectionObserver),
   .js-reveal never lands on <html> and the page renders fully visible. */
(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky header glass: fade the blur/shadow in once the page scrolls. */
  var header = document.querySelector(".m5-header");
  if (header) {
    var scrolled = false;
    var onScroll = function () {
      var next = window.scrollY > 8;
      if (next !== scrolled) {
        scrolled = next;
        header.classList.toggle("is-scrolled", scrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-reveal");

  /* Staggered reveal: parents marked data-reveal-stagger hand each revealing
     child an incremental delay; everything reveals once and unobserves. */
  if (!reduced) {
    document.querySelectorAll("[data-reveal-stagger]").forEach(function (group) {
      var items = group.querySelectorAll(".m5-reveal");
      items.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 80) + "ms");
      });
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

    document.querySelectorAll(".m5-reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".m5-reveal").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  /* Integrations diagram: run its animations only while near the viewport. */
  var flow = document.querySelector(".m5-flow");
  if (flow) {
    var flowObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        flow.classList.toggle("is-awake", entry.isIntersecting);
      });
    }, { rootMargin: "10% 0px 10% 0px" });
    flowObserver.observe(flow);
  }
})();
