/* Why-it-converts wall (home-b): same manners as every rotator on the page -
   auto-advance only while visible, stop for good on a manual pick, never
   under reduced motion. 8s interval offsets the neighbors' 7s, 9s and 11s. */
(function () {
  var root = document.querySelector('[data-why]');
  if (!root) return;
  var cards = Array.prototype.slice.call(root.querySelectorAll('[data-why-card]'));
  var tiles = Array.prototype.slice.call(root.querySelectorAll('[data-why-nav]'));
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0, touched = false, timer = null, visible = false;

  function show(i) {
    current = (i + cards.length) % cards.length;
    cards.forEach(function (c, j) { c.classList.toggle('is-active', j === current); });
    tiles.forEach(function (t, j) {
      t.classList.toggle('is-active', j === current);
      t.setAttribute('aria-pressed', j === current ? 'true' : 'false');
    });
  }
  function tick() { if (!touched && visible) show(current + 1); }
  function arm() { if (!timer && !reduced) timer = setInterval(tick, 8000); }
  function disarm() { if (timer) { clearInterval(timer); timer = null; } }

  tiles.forEach(function (t, i) {
    t.addEventListener('click', function () { touched = true; disarm(); show(i); });
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) arm(); else disarm();
    }, { threshold: 0.25 }).observe(root);
  } else { visible = true; arm(); }
})();
