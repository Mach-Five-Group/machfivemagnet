(function () {
  var root = document.querySelector('[data-mega-menu]');
  if (!root) return;

  var trigger = root.querySelector('[data-mega-trigger]');
  var panel = root.querySelector('[data-mega-panel]');
  var chevron = root.querySelector('[data-mega-chevron]');

  function open() {
    panel.classList.add('is-open');
    if (chevron) chevron.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function close() {
    panel.classList.remove('is-open');
    if (chevron) chevron.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function toggle() {
    if (panel.classList.contains('is-open')) {
      close();
    } else {
      open();
    }
  }

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggle();
  });

  // Close on click outside
  document.addEventListener('click', function (e) {
    if (!root.contains(e.target)) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      close();
    }
  });
})();
