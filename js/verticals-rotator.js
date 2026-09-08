/* Verticals rotator (home-b): tab rail + one visible panel. Auto-rotates
   every 7s, only while the section is on screen, and stops for good the
   moment the visitor picks a tab. Reduced motion never auto-rotates. */
(function () {
  var root = document.querySelector('[data-verts]');
  if (!root) return;
  var tabs = Array.prototype.slice.call(root.querySelectorAll('[data-vtab]'));
  var panels = Array.prototype.slice.call(root.querySelectorAll('[data-vpanel]'));
  if (!tabs.length || !panels.length) return;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var current = 0;
  var touched = false;
  var timer = null;
  var visible = false;

  function show(i) {
    current = (i + panels.length) % panels.length;
    tabs.forEach(function (t, j) {
      t.classList.toggle('is-active', j === current);
      t.setAttribute('aria-selected', j === current ? 'true' : 'false');
    });
    panels.forEach(function (p, j) { p.classList.toggle('is-active', j === current); });
  }

  function tick() { if (!touched && visible) show(current + 1); }
  function arm() {
    if (timer || reduced) return;
    timer = setInterval(tick, 7000);
  }
  function disarm() { if (timer) { clearInterval(timer); timer = null; } }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { touched = true; disarm(); show(i); });
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) arm(); else disarm();
    }, { threshold: 0.25 }).observe(root);
  } else {
    visible = true;
    arm();
  }
})();
