/* The pipeline scene: scroll position drives the connector draw, the
   traveling dot, and which zone/caption is forward. Mobile and
   reduced-motion set data-phase="all" (everything lit, no pin). */
(function () {
  var wrap = document.querySelector('[data-pipe]');
  if (!wrap) return;
  var path = wrap.querySelector('[data-pipe-path]');
  var dot = wrap.querySelector('[data-pipe-dot]');
  var desktop = window.matchMedia('(min-width: 768px)');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var L = 0;

  function progress() {
    var r = wrap.getBoundingClientRect();
    var range = r.height - window.innerHeight;
    if (range <= 0) return 1;
    return Math.min(1, Math.max(0, -r.top / range));
  }

  function update() {
    if (!desktop.matches || reduced) {
      wrap.setAttribute('data-phase', 'all');
      if (path && L) path.style.strokeDashoffset = '0';
      return;
    }
    var p = progress();
    wrap.setAttribute('data-phase', p < 0.35 ? '1' : p < 0.72 ? '2' : '3');
    if (path && L) path.style.strokeDashoffset = String(L * (1 - p));
    if (dot && path && L) {
      var pt = path.getPointAtLength(Math.max(0.001, L * p));
      dot.setAttribute('cx', pt.x);
      dot.setAttribute('cy', pt.y);
      dot.style.opacity = (p > 0.02 && p < 0.98) ? '1' : '0';
    }
  }

  function prep() {
    if (path) {
      L = path.getTotalLength();
      path.style.strokeDasharray = String(L);
      path.style.strokeDashoffset = String(L);
    }
    update();
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  desktop.addEventListener ? desktop.addEventListener('change', update) : desktop.addListener(update);
  prep();
})();
