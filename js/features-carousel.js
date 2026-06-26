(function () {
  var root = document.querySelector('[data-features-carousel]');
  if (!root) return;

  var tabs = Array.from(root.querySelectorAll('[data-slide]'));
  var panels = Array.from(root.querySelectorAll('[data-slide-panel]'));
  var counter = root.querySelector('[data-carousel-counter]');
  var prevBtn = root.querySelector('[data-carousel-prev]');
  var nextBtn = root.querySelector('[data-carousel-next]');
  var playPauseBtn = root.querySelector('[data-carousel-playpause]');
  var playPauseIcon = root.querySelector('[data-playpause-icon]');
  var total = panels.length;
  var current = 0;
  var timer = null;
  var paused = false;
  var INTERVAL = 6000;
  var PLAY_LABEL = 'Play';
  var PAUSE_LABEL = 'Pause';

  function setSlide(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;

    tabs.forEach(function (tab, i) {
      var active = i === current;
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      if (active) {
        tab.classList.add('is-active');
      } else {
        tab.classList.remove('is-active');
      }
    });

    panels.forEach(function (panel, i) {
      if (i === current) {
        panel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });

    if (counter) {
      counter.textContent = (current + 1) + ' / ' + total;
    }
  }

  function updatePlayPauseIcon() {
    if (playPauseIcon) {
      playPauseIcon.textContent = paused ? PLAY_LABEL : PAUSE_LABEL;
    }
    if (playPauseBtn) {
      playPauseBtn.setAttribute('aria-label', paused ? 'Resume autoplay' : 'Pause autoplay');
    }
  }

  function startTimer() {
    if (paused) return;
    clearInterval(timer);
    timer = setInterval(function () {
      setSlide(current + 1);
    }, INTERVAL);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function pause() {
    paused = true;
    stopTimer();
    updatePlayPauseIcon();
  }

  function play() {
    paused = false;
    startTimer();
    updatePlayPauseIcon();
  }

  // Tab clicks — pause autoplay
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setSlide(parseInt(tab.dataset.slide, 10));
      pause();
    });
  });

  // Arrow buttons — pause autoplay
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      setSlide(current - 1);
      pause();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      setSlide(current + 1);
      pause();
    });
  }

  // Play/pause toggle
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
      if (paused) {
        play();
      } else {
        pause();
      }
    });
  }

  // Keyboard navigation — pause autoplay
  document.addEventListener('keydown', function (e) {
    var rect = root.getBoundingClientRect();
    var inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') {
      setSlide(current - 1);
      pause();
    } else if (e.key === 'ArrowRight') {
      setSlide(current + 1);
      pause();
    }
  });

  // Init
  setSlide(0);
  startTimer();
  updatePlayPauseIcon();
})();
