/**
 * template-library.js — hydrates the homepage teaser and the /templates/ page
 * from the live Template Library catalog (the same public endpoint the app's
 * own gallery reads), so a template added in the app shows here with no site
 * deploy. The HTML ships a baked copy of the catalog as fallback: if this
 * script or the API fails, the page still shows templates — just possibly a
 * release behind.
 */
(function () {
  var API = "https://machfivemagnet-saas.onrender.com/m5t/v5/templates";
  var APP = "https://machfivemagnet.com/app/";
  var CATEGORIES = {
    lead_capture: "Lead Capture",
    booking: "Booking",
    engagement: "Engagement",
    support: "Support",
  };
  var FIELD_LABELS = {
    name: "Name", email: "Email", phone: "Phone", company: "Company",
    industry: "Industry", product_interest: "Interest", description: "Details",
    preferred_time: "Preferred Time", team_size: "Team Size",
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function captures(t) {
    var seen = new Set(), labels = [];
    (t.steps || []).forEach(function (step) {
      (step.step_columns || []).forEach(function (key) {
        if (!key || seen.has(key)) return;
        seen.add(key);
        var authored = step.step_answer && step.step_answer.label;
        labels.push(authored || FIELD_LABELS[key] || 'Additional answer');
      });
    });
    return labels;
  }
  function templateHref(t) {
    return APP + '?template=' + encodeURIComponent(t.slug) + '#/templates';
  }
  function exampleHref(t) {
    var href = (window.M5M_TEMPLATE_EXAMPLES || {})[t.slug];
    return typeof href === 'string' && /^\/examples\/[a-z0-9-]+\/$/.test(href) ? href : '';
  }

  function cardHTML(t, teaser) {
    var example = exampleHref(t);
    return (
      '<div class="m5-tpl-card" data-cat="' + esc(t.category) + '">' +
        (t.featured ? '<span class="m5-tpl-badge">Featured</span>' : "") +
        '<span class="m5-tpl-icon"><span class="material-symbols-rounded" aria-hidden="true">' + esc(t.icon || "smart_toy") + "</span></span>" +
        '<div class="font-semibold">' + esc(t.name) + "</div>" +
        '<p class="mt-2 text-sm text-muted">' + esc(t.description) + "</p>" +
        '<div class="m5-tpl-meta">' +
          '<span class="m5-tpl-chip">' + esc(CATEGORIES[t.category] || t.category) + "</span>" +
          '<span class="m5-tpl-count">' + (t.steps || []).length + " steps</span>" +
        "</div>" +
        (teaser ? "" :
          '<div class="m5-tpl-actions">' +
            '<button type="button" class="m5-tpl-open" data-open="' + esc(t.slug) + '">' +
              '<span class="material-symbols-rounded" aria-hidden="true">play_circle</span>See It Run</button>' +
          (example ? '<a class="m5-tpl-open" href="' + example + '">Try on a website →</a>' : '') +
          "</div>") +
      "</div>"
    );
  }

  // ── detail modal (library page): live preview iframe + the facts ───────────
  var returnFocus = null, previousOverflow = "";
  function openModal(t) {
    closeModal();
    returnFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    var caps = captures(t);
    var wrap = document.createElement("div");
    wrap.className = "m5-tpl-modal";
    wrap.innerHTML =
      '<div class="m5-tpl-modal__scrim" data-close></div>' +
      '<div class="m5-tpl-modal__panel" role="dialog" aria-modal="true" aria-label="' + esc(t.name) + '">' +
        '<div class="m5-tpl-modal__toolbar"><span>Try the conversation</span><button type="button" class="m5-tpl-modal__close" data-close aria-label="Close">&times;</button></div>' +
        '<div class="m5-tpl-modal__preview">' +
          '<iframe title="' + esc(t.name) + ' preview" loading="eager" src="/templates/preview/?appguid=' + esc(t.appguid) + '"></iframe>' +
        "</div>" +
        '<div class="m5-tpl-modal__info">' +
          '<p class="m5-tpl-modal__kicker">' + esc(CATEGORIES[t.category] || t.category) + "</p>" +
          "<h3>" + esc(t.name) + "</h3>" +
          "<p>" + esc(t.description) + "</p>" +
          '<p class="m5-tpl-modal__line"><span class="material-symbols-rounded" aria-hidden="true">list_alt</span>' + (t.steps || []).length + " steps</p>" +
          (caps.length ? '<p class="m5-tpl-modal__line"><span class="material-symbols-rounded" aria-hidden="true">badge</span>Captures ' + esc(caps.join(", ")) + "</p>" : "") +
          '<p class="m5-tpl-modal__hint">Use sample details to try the conversation. Customize the wording, look and delivery settings in the builder.</p>' +
          '<div class="m5-tpl-modal__ctas">' +
            '<a class="m5-tpl-cta" href="' + templateHref(t) + '">Use this template</a>' +
            (exampleHref(t) ? '<a class="m5-tpl-cta m5-tpl-cta--ghost" href="' + exampleHref(t) + '">Try on a website</a>' : '<a class="m5-tpl-cta m5-tpl-cta--ghost" href="' + APP + '#/templates">Browse in the app</a>') +
          "</div>" +
        "</div>" +
      "</div>";
    document.body.appendChild(wrap);
    document.body.style.overflow = "hidden";
    wrap.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) closeModal();
    });
    document.addEventListener("keydown", onKey);
    wrap.querySelector(".m5-tpl-modal__close").focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
    if (e.key !== 'Tab') return;
    var panel = document.querySelector('.m5-tpl-modal__panel');
    if (!panel) return;
    var nodes = Array.from(panel.querySelectorAll('button, a[href], iframe')).filter(function(el){ return !el.disabled; });
    var first = nodes[0], last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function closeModal() {
    var m = document.querySelector(".m5-tpl-modal");
    if (m) m.remove();
    if (m) document.body.style.overflow = previousOverflow;
    if (returnFocus && returnFocus.isConnected) returnFocus.focus();
    returnFocus = null;
    document.removeEventListener("keydown", onKey);
  }

  function wireLibrary(mount, templates) {
    var grid = mount.querySelector("[data-tpl-grid]");
    var filters = mount.querySelector("[data-tpl-filters]");
    if (!grid) return;

    function renderGrid(cat) {
      var list = templates.filter(function (t) { return cat === "all" || t.category === cat; });
      grid.innerHTML = list.map(function (t) { return cardHTML(t, false); }).join("");
    }

    if (filters) {
      var counts = { all: templates.length };
      templates.forEach(function (t) { counts[t.category] = (counts[t.category] || 0) + 1; });
      filters.innerHTML = ["all"].concat(Object.keys(CATEGORIES).filter(function (c) { return counts[c]; }))
        .map(function (c) {
          return '<button type="button" class="m5-tpl-filter" data-cat="' + c + '" aria-pressed="' + (c === "all") + '">' +
            (c === "all" ? "All" : CATEGORIES[c]) + '<span>' + counts[c] + "</span></button>";
        }).join("");
      filters.onclick = function (e) {
        var chip = e.target.closest("[data-cat]");
        if (!chip) return;
        filters.querySelectorAll("[data-cat]").forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        renderGrid(chip.dataset.cat);
      };
    }

    grid.onclick = function (e) {
      var btn = e.target.closest("[data-open]");
      if (!btn) return;
      var t = templates.find(function (x) { return x.slug === btn.dataset.open; });
      if (t) openModal(t);
    };

    renderGrid("all");
  }

  function hydrate(templates) {
    var teaser = document.querySelector("[data-tpl-teaser-grid]");
    if (teaser) {
      var top = templates.slice().sort(function (a, b) {
        return (b.featured - a.featured) || (a.sort - b.sort);
      }).slice(0, 4);
      teaser.innerHTML = top.map(function (t) { return cardHTML(t, true); }).join("");
    }
    var lib = document.querySelector("[data-tpl-library]");
    if (lib) wireLibrary(lib, templates);
    document.querySelectorAll("[data-tpl-count]").forEach(function (el) {
      el.textContent = templates.length;
    });
  }

  var fallback = document.querySelector('[data-template-fallback]');
  if (fallback) { try { hydrate(JSON.parse(fallback.textContent)); } catch (_) { /* links in baked markup remain usable */ } }
  fetch(API)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (d && d.ok && d.templates && d.templates.length) hydrate(d.templates);
      // else: the baked markup stands.
    })
    .catch(function () { /* baked markup stands */ });
})();
