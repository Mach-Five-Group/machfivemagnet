/* home-b page behaviors:
   1) Typed headings: [data-type-heading] types itself on first reveal (the
      hero's gesture, reused sparingly).
   2) You are the lead: the page's real magnets emit funnel events via
      MachFiveMagnet.on(); engaging turns the thread green, a completed
      capture tags the thread as yours.
   3) The CTA band's walkthrough button opens the live slide-out magnet. */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1 ── typed headings */
  if (!reduced && 'IntersectionObserver' in window) {
    var typeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        typeObs.unobserve(entry.target);
        var el = entry.target;
        var full = el.textContent.replace(/\s+/g, ' ').trim();
        el.setAttribute('aria-label', full);
        el.textContent = '';
        var i = 0;
        var tick = function () {
          el.textContent = full.slice(0, ++i);
          if (i < full.length) setTimeout(tick, 22);
        };
        tick();
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-type-heading]').forEach(function (el) { typeObs.observe(el); });
  }

  /* 2 ── you are the lead */
  function wireMagnetEvents() {
    var g = window.MachFiveMagnet;
    if (!g || typeof g.on !== 'function') return false;
    g.on('engage', function () {
      document.body.classList.add('m5-you-lead');
    });
    g.on('capture', function () {
      document.body.classList.add('m5-you-lead', 'm5-you-lead-captured');
      var threads = document.querySelectorAll('.m5-thread');
      if (threads.length && !document.querySelector('.m5-thread-tag')) {
        [threads[0], threads[threads.length - 1]].forEach(function (t) {
          var tag = document.createElement('span');
          tag.className = 'm5-thread-tag';
          tag.textContent = 'Your lead';
          t.appendChild(tag);
        });
      }
    });
    return true;
  }
  if (!wireMagnetEvents()) {
    var tries = 0;
    var timer = setInterval(function () {
      if (wireMagnetEvents() || ++tries > 40) clearInterval(timer);
    }, 250);
  }

  /* 3 ── CTA walkthrough: the product closes its own sale */
  document.querySelectorAll('[data-open-magnet]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var g = window.MachFiveMagnet;
      if (g && typeof g.open === 'function') g.open(btn.getAttribute('data-open-magnet'), { reset: false });
    });
  });
})();
