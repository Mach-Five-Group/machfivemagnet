(function () {
  var root = document.querySelector('[data-features-carousel]');
  if (!root) return;

  var track = root.querySelector('[data-feat-track]');
  var panels = Array.from(root.querySelectorAll('[data-feat-panel]'));
  var thumbs = Array.from(root.querySelectorAll('[data-feat-thumb]'));
  var counter = root.querySelector('[data-carousel-counter]');
  var prevBtn = root.querySelector('[data-carousel-prev]');
  var nextBtn = root.querySelector('[data-carousel-next]');
  var playPauseBtn = root.querySelector('[data-carousel-playpause]');
  var playPauseIcon = root.querySelector('[data-playpause-icon]');

  var total = panels.length;
  var current = 0;
  var timer = null;
  var paused = false;
  var scrollTicking = false;
  var INTERVAL = 6000;

  function scrollToIndex(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    var target = panels[index];
    if (!target) return;
    // Compute position relative to the track (offsetLeft unreliable across layouts)
    var trackRect = track.getBoundingClientRect();
    var targetRect = target.getBoundingClientRect();
    var left = track.scrollLeft + (targetRect.left - trackRect.left);
    track.scrollTo({ left: left, behavior: 'smooth' });
    updateActive(index);
  }

  function updateActive(index) {
    current = index;

    thumbs.forEach(function (thumb, i) {
      var active = i === current;
      thumb.setAttribute('aria-selected', active ? 'true' : 'false');
      thumb.classList.toggle('is-active', active);
    });

    if (counter) {
      counter.textContent = (current + 1) + ' / ' + total;
    }
  }

  // Detect the currently visible card as user scrolls
  function detectVisible() {
    var trackRect = track.getBoundingClientRect();
    var trackCenter = trackRect.left + trackRect.width / 2;
    var closest = 0;
    var minDist = Infinity;
    panels.forEach(function (panel, i) {
      var rect = panel.getBoundingClientRect();
      var center = rect.left + rect.width / 2;
      var dist = Math.abs(center - trackCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    if (closest !== current) {
      updateActive(closest);
    }
  }

  track.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        detectVisible();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Thumbnail clicks
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      scrollToIndex(parseInt(thumb.dataset.featThumb, 10));
      pause();
    });
  });

  // Arrow buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      scrollToIndex(current - 1);
      pause();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      scrollToIndex(current + 1);
      pause();
    });
  }

  // Play/pause
  function updatePlayPauseIcon() {
    if (playPauseIcon) {
      playPauseIcon.textContent = paused ? 'Play' : 'Pause';
    }
    if (playPauseBtn) {
      playPauseBtn.setAttribute('aria-label', paused ? 'Resume autoplay' : 'Pause autoplay');
    }
  }

  function startTimer() {
    if (paused) return;
    clearInterval(timer);
    timer = setInterval(function () {
      scrollToIndex(current + 1);
    }, INTERVAL);
  }

  function pause() {
    paused = true;
    clearInterval(timer);
    timer = null;
    updatePlayPauseIcon();
  }

  function play() {
    paused = false;
    startTimer();
    updatePlayPauseIcon();
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', function () {
      if (paused) play();
      else pause();
    });
  }

  // Keyboard when in view
  document.addEventListener('keydown', function (e) {
    var rect = root.getBoundingClientRect();
    var inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') {
      scrollToIndex(current - 1);
      pause();
    } else if (e.key === 'ArrowRight') {
      scrollToIndex(current + 1);
      pause();
    }
  });

  // Pause autoplay when the user drags the track manually
  ['pointerdown', 'touchstart'].forEach(function (evt) {
    track.addEventListener(evt, function () {
      pause();
    }, { passive: true });
  });

  // Init
  updateActive(0);
  startTimer();
  updatePlayPauseIcon();
})();
