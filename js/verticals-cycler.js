(function () {
  var roots = document.querySelectorAll('[data-vert-cycler]');
  if (!roots.length) return;

  var INTERVAL = 4000;
  var reducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var instances = [];

  Array.prototype.forEach.call(roots, function (root) {
    var shots = Array.prototype.slice.call(root.querySelectorAll('[data-vert-shot]'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-vert-dot]'));
    if (shots.length < 2) return;

    var inst = {
      root: root,
      current: 0,
      timer: null,
      inView: false,
      paused: false,
      stopped: reducedMotion // reduced motion: never start the timer
    };

    function render() {
      shots.forEach(function (img, j) {
        img.classList.toggle('is-active', j === inst.current);
      });
      dots.forEach(function (dot, j) {
        dot.classList.toggle('is-active', j === inst.current);
      });
    }

    function goTo(index) {
      inst.current = ((index % shots.length) + shots.length) % shots.length;
      render();
    }

    inst.sync = function () {
      var shouldRun = !inst.stopped && !inst.paused && inst.inView && !document.hidden;
      if (shouldRun) {
        if (!inst.timer) {
          inst.timer = setInterval(function () {
            goTo(inst.current + 1);
          }, INTERVAL);
        }
      } else if (inst.timer) {
        clearInterval(inst.timer);
        inst.timer = null;
      }
    };

    // Dot click jumps and permanently stops autoplay for this instance
    dots.forEach(function (dot, j) {
      dot.addEventListener('click', function () {
        inst.stopped = true;
        inst.sync();
        goTo(j);
      });
    });

    // Pause on hover/focus, resume on leave/blur
    root.addEventListener('pointerenter', function () { inst.paused = true; inst.sync(); });
    root.addEventListener('pointerleave', function () { inst.paused = false; inst.sync(); });
    root.addEventListener('focusin', function () { inst.paused = true; inst.sync(); });
    root.addEventListener('focusout', function () { inst.paused = false; inst.sync(); });

    instances.push(inst);
  });

  if (!instances.length) return;

  // Run only while intersecting the viewport
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        instances.forEach(function (inst) {
          if (inst.root === entry.target) {
            inst.inView = entry.isIntersecting;
            inst.sync();
          }
        });
      });
    }, { threshold: 0.25 });
    instances.forEach(function (inst) { io.observe(inst.root); });
  } else {
    instances.forEach(function (inst) {
      inst.inView = true;
      inst.sync();
    });
  }

  // ...and only while the page is visible
  document.addEventListener('visibilitychange', function () {
    instances.forEach(function (inst) { inst.sync(); });
  });
})();
