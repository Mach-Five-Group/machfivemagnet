// Meet the Magnet: seam-of-light reveal. The stage starts blacked out behind
// two flat panels split by a glowing center seam; on scroll-in the seam
// brightens, the darkness parts, the beam blooms into the gap, and the magnet
// and title rise into the light. Runs once.
// Guards: never arms without GSAP, never under reduced motion, and the panels
// are display:none unless armed - a failure here can't cover the stage.
(function () {
  function init() {
    var section = document.getElementById('showcase');
    if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    var curtainL = section.querySelector('.m5-curtain--l');
    var curtainR = section.querySelector('.m5-curtain--r');
    var title = section.querySelector('.m5-spot-title');
    var chip = section.querySelector('.m5-live-chip');
    var sub = section.querySelector('.m5-spot-sub');
    var slot = section.querySelector('.m5-spot-slot');
    var beam = section.querySelector('.m5-spot-beam');
    if (!curtainL || !curtainR || !title || !slot) return;

    // Arm: panels become visible, content drops to its pre-reveal state.
    section.classList.add('m5-curtains-armed');
    gsap.set([curtainL, curtainR], { xPercent: 0 });
    gsap.set(title, { autoAlpha: 0, y: 30 });
    if (chip) gsap.set(chip, { autoAlpha: 0, y: 12 });
    if (sub) gsap.set(sub, { autoAlpha: 0, y: 16 });
    gsap.set(slot, { autoAlpha: 0, y: 40, scale: 0.97 });
    // The breathe keyframes animate opacity and would override the tween.
    if (beam) { beam.style.animation = 'none'; gsap.set(beam, { autoAlpha: 0 }); }

    var tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: 'top 55%', once: true },
      defaults: { ease: 'power3.out' }
    });

    // A breath of anticipation: the seam flares just before the dark parts.
    tl.to(section, { '--seam': 1, duration: 0.25, ease: 'power2.out' }, 0)
      .to(curtainL, { xPercent: -102, duration: 1.2, ease: 'power2.inOut' }, 0.25)
      .to(curtainR, { xPercent: 102, duration: 1.2, ease: 'power2.inOut' }, 0.25);
    if (beam) tl.to(beam, { autoAlpha: 1, duration: 1.0, ease: 'power2.out' }, 0.55);
    tl.to(title, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.6);
    if (chip) tl.to(chip, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.85);
    if (sub) tl.to(sub, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.95);
    tl.to(slot, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, 0.75)
      .set([curtainL, curtainR], { display: 'none' })
      .call(function () { if (beam) { gsap.set(beam, { clearProps: 'opacity,visibility' }); beam.style.animation = ''; } });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
