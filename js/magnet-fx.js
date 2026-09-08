/* Magnet FX test page: five candidate headline treatments, one per section.
   Each runs once when its section scrolls into view; Replay re-runs it.
   Reduced motion: everything just appears. */
(function () {
  if (typeof gsap === "undefined") return;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function splitWords(el) {
    if (el.dataset.split) return Array.prototype.slice.call(el.querySelectorAll(".fx-w"));
    var parts = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach(function (chunk) {
          if (!chunk) return;
          if (/^\s+$/.test(chunk)) parts.push(document.createTextNode(chunk));
          else {
            var s = document.createElement("span");
            s.className = "fx-w";
            s.style.display = "inline-block";
            s.textContent = chunk;
            parts.push(s);
          }
        });
      } else parts.push(node);
    });
    el.textContent = "";
    parts.forEach(function (p) { el.appendChild(p); });
    el.dataset.split = "1";
    return Array.prototype.slice.call(el.querySelectorAll(".fx-w"));
  }

  var FX = {
    assemble: function (section) {
      var words = splitWords(section.querySelector("[data-fx-target]"));
      if (reduced) return;
      gsap.fromTo(words,
        {
          x: function () { return gsap.utils.random(-16, 16); },
          y: function () { return gsap.utils.random(-12, 12); },
          rotation: function () { return gsap.utils.random(-4, 4); },
          autoAlpha: 0
        },
        { x: 0, y: 0, rotation: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(2.2)", stagger: 0.055 });
    },

    glyphsnap: function (section) {
      var glyphs = section.querySelectorAll("[data-fx-target] .m5-flowglyph");
      if (reduced) return;
      gsap.fromTo(glyphs,
        {
          x: function (i) { return (i - (glyphs.length - 1) / 2) * -26; },
          scale: 0.55,
          autoAlpha: 0
        },
        { x: 0, scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(2.4)", stagger: 0.07 });
    },

    attract: function (section) {
      var words = splitWords(section.querySelector("[data-fx-target]"));
      if (reduced || section.dataset.attracting) return;
      section.dataset.attracting = "1";
      var targets = words.map(function () { return { x: 0, y: 0 }; });
      section.addEventListener("mousemove", function (e) {
        words.forEach(function (w, i) {
          var r = w.getBoundingClientRect();
          var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
          var dx = e.clientX - cx, dy = e.clientY - cy;
          var dist = Math.hypot(dx, dy);
          var pull = Math.max(0, 1 - dist / 260) * 5;
          targets[i].x = dist ? (dx / dist) * pull : 0;
          targets[i].y = dist ? (dy / dist) * pull : 0;
        });
      });
      section.addEventListener("mouseleave", function () {
        targets.forEach(function (t) { t.x = 0; t.y = 0; });
      });
      gsap.ticker.add(function () {
        words.forEach(function (w, i) {
          var curX = gsap.getProperty(w, "x"), curY = gsap.getProperty(w, "y");
          gsap.set(w, { x: curX + (targets[i].x - curX) * 0.12, y: curY + (targets[i].y - curY) * 0.12 });
        });
      });
    },

    field: function (section) {
      var word = section.querySelector("[data-fx-word]");
      var svg = word.querySelector("svg");
      if (!svg) {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 200 100");
        svg.setAttribute("preserveAspectRatio", "none");
        [22, 34, 46].forEach(function (r) {
          var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
          p.setAttribute("d", "M " + (100 - r * 2) + " 50 A " + (r * 2) + " " + r + " 0 1 1 " + (100 + r * 2) + " 50 A " + (r * 2) + " " + r + " 0 1 1 " + (100 - r * 2) + " 50");
          svg.appendChild(p);
        });
        word.appendChild(svg);
      }
      var paths = svg.querySelectorAll("path");
      if (reduced) { gsap.set(paths, { opacity: 0.12 }); return; }
      paths.forEach(function (p, i) {
        var len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 0.55 });
        gsap.to(p, { strokeDashoffset: 0, duration: 0.9, delay: i * 0.18, ease: "power2.inOut" });
        gsap.to(p, { opacity: 0.12, duration: 0.7, delay: 1.1 + i * 0.18 });
      });
    },

    filings: function (section) {
      var svg = section.querySelector("[data-fx-svg]");
      var W = 544, H = 46, N = 42;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      if (!svg.dataset.built) {
        for (var i = 0; i < N; i++) {
          var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
          l.setAttribute("x1", -4); l.setAttribute("x2", 4); l.setAttribute("y1", 0); l.setAttribute("y2", 0);
          svg.appendChild(l);
        }
        svg.dataset.built = "1";
      }
      var lines = svg.querySelectorAll("line");
      lines.forEach(function (l, i) {
        var t = i / (N - 1);
        var x = 8 + t * (W - 16);
        // shallow field arc: dips mid, tangent rotation follows the curve
        var y = 14 + Math.sin(t * Math.PI) * 18;
        var angle = Math.cos(t * Math.PI) * -32;
        if (reduced) { gsap.set(l, { x: x, y: y, rotation: angle, opacity: 0.85 }); return; }
        gsap.fromTo(l,
          {
            x: x + gsap.utils.random(-30, 30),
            y: gsap.utils.random(2, H - 4),
            rotation: gsap.utils.random(-90, 90),
            opacity: 0.25
          },
          { x: x, y: y, rotation: angle, opacity: 0.85, duration: 0.7, ease: "power3.out", delay: 0.15 + t * 0.35 });
      });
    }
  };

  document.querySelectorAll("[data-fx]").forEach(function (section) {
    var kind = section.getAttribute("data-fx");
    var run = function () { if (FX[kind]) FX[kind](section); };
    if ("IntersectionObserver" in window) {
      var seen = false;
      new IntersectionObserver(function (entries, obs) {
        if (entries[0].isIntersecting && !seen) { seen = true; run(); obs.disconnect(); }
      }, { threshold: 0.4 }).observe(section);
    } else run();
    var replay = section.querySelector("[data-fx-replay]");
    if (replay) replay.addEventListener("click", run);
  });
})();
