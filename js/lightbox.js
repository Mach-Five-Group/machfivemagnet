(function () {
  // Create lightbox DOM
  var lightbox = document.createElement('div');
  lightbox.className = 'm5-lightbox';
  lightbox.id = 'm5-lightbox';
  lightbox.innerHTML =
    '<button class="m5-lightbox-close" type="button" aria-label="Close">' +
      '<span class="material-symbols-rounded">close</span>' +
    '</button>' +
    '<div class="m5-lightbox-content">' +
      '<img src="" alt="">' +
      '<div class="m5-lightbox-caption"></div>' +
    '</div>';
  document.body.appendChild(lightbox);

  var lightboxImg = lightbox.querySelector('img');
  var lightboxCaption = lightbox.querySelector('.m5-lightbox-caption');

  function open(src, alt, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    if (caption) {
      lightboxCaption.textContent = caption;
      lightboxCaption.style.display = 'block';
    } else {
      lightboxCaption.style.display = 'none';
    }
    lightbox.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // Close on backdrop or X click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.closest('.m5-lightbox-close')) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      close();
    }
  });

  // Expose globally for use by other scripts
  window.M5Lightbox = { open: open, close: close };

  // Auto-bind any image with data-lightbox attribute
  // Skip images inside carousels (they bind via their own JS)
  document.querySelectorAll('[data-lightbox]').forEach(function (img) {
    if (img.closest('[data-features-carousel], [data-walkthrough]')) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        open(img.src, img.alt, img.dataset.lightbox || img.alt);
      });
      return;
    }

    var wrapper = document.createElement('div');
    wrapper.className = 'm5-image-clickable';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    wrapper.addEventListener('click', function () {
      open(img.src, img.alt, img.dataset.lightbox || img.alt);
    });
  });
})();
