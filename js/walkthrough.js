(function () {
  var roots = document.querySelectorAll('[data-walkthrough]');
  if (!roots.length) return;

  Array.prototype.forEach.call(roots, initWalkthrough);

  function initWalkthrough(root) {
    var tablist = root.querySelector('[role="tablist"]');
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
    if (!tablist || !tabs.length || tabs.length !== panels.length) return;

    var activeTab = 0;
    // Per-panel step position, preserved across tab switches
    var stepIndex = panels.map(function () { return 0; });
    var promoted = panels.map(function () { return false; });

    // Promote a panel's lazy images to eager, once
    function promote(i) {
      if (promoted[i]) return;
      promoted[i] = true;
      panels[i].querySelectorAll('img[loading="lazy"]').forEach(function (img) {
        img.setAttribute('loading', 'eager');
      });
    }

    function renderStep(i) {
      var panel = panels[i];
      var idx = stepIndex[i];
      panel.querySelectorAll('[data-walk-step]').forEach(function (img, j) {
        img.classList.toggle('is-active', j === idx);
      });
      panel.querySelectorAll('[data-walk-dot]').forEach(function (dot, j) {
        dot.classList.toggle('is-active', j === idx);
      });
      var caps = panel.querySelectorAll('[data-walk-cap]');
      caps.forEach(function (cap, j) {
        cap.hidden = j !== idx;
      });
      var counter = panel.querySelector('[data-walk-counter]');
      if (counter) counter.textContent = (idx + 1) + ' / ' + caps.length;
    }

    function setStep(i, idx) {
      var total = panels[i].querySelectorAll('[data-walk-step]').length;
      if (!total) return;
      stepIndex[i] = ((idx % total) + total) % total; // wrap both directions
      renderStep(i);
    }

    function activateTab(i, focus) {
      activeTab = i;
      tabs.forEach(function (tab, j) {
        var active = j === i;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.setAttribute('tabindex', active ? '0' : '-1');
      });
      panels.forEach(function (panel, j) {
        panel.hidden = j !== i;
      });
      promote(i);
      if (focus) tabs[i].focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        activateTab(i, false);
      });
      // Lazy-promotion on hover/focus of an inactive tab
      tab.addEventListener('pointerenter', function () { promote(i); });
      tab.addEventListener('focus', function () { promote(i); });
    });

    // Roving tabindex keyboard support on the tablist
    tablist.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = (activeTab + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (activeTab - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      activateTab(next, true);
    });

    panels.forEach(function (panel, i) {
      var prev = panel.querySelector('[data-walk-prev]');
      var next = panel.querySelector('[data-walk-next]');
      if (prev) {
        prev.addEventListener('click', function () { setStep(i, stepIndex[i] - 1); });
      }
      if (next) {
        next.addEventListener('click', function () { setStep(i, stepIndex[i] + 1); });
      }
      panel.querySelectorAll('[data-walk-dot]').forEach(function (dot, j) {
        dot.addEventListener('click', function () { setStep(i, j); });
      });
      // Arrow keys inside the panel (controls/stage) also step.
      // Scoped to the component; never a document-level handler.
      panel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setStep(i, stepIndex[i] - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setStep(i, stepIndex[i] + 1);
        }
      });
      renderStep(i);
    });

    // Deep-link: #example-<slug> activates that tab
    var initial = 0;
    var hash = window.location.hash ? window.location.hash.slice(1) : '';
    if (hash) {
      tabs.forEach(function (tab, i) {
        if (tab.id === hash) initial = i;
      });
    }
    activateTab(initial, false);
  }
})();
