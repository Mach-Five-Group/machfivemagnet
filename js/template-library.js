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
    var seen = [];
    (t.steps || []).forEach(function (s) {
      (s.step_columns || []).forEach(function (c) {
        if (c && seen.indexOf(c) === -1) seen.push(c);
      });
    });
    return seen.map(function (c) { return FIELD_LABELS[c] || c; });
  }

  function cardHTML(t, teaser) {
    var caps = captures(t);
    return (
      '<div class="m5-tpl-card" data-cat="' + esc(t.category) + '">' +
        (t.featured ? '<span class="m5-tpl-badge">Most Popular</span>' : "") +
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
          "</div>") +
      "</div>"
    );
  }

  // ── detail modal (library page): live preview iframe + the facts ───────────
  function openModal(t) {
    closeModal();
    var caps = captures(t);
    var wrap = document.createElement("div");
    wrap.className = "m5-tpl-modal";
    wrap.innerHTML =
      '<div class="m5-tpl-modal__scrim" data-close></div>' +
      '<div class="m5-tpl-modal__panel" role="dialog" aria-modal="true" aria-label="' + esc(t.name) + '">' +
        '<button type="button" class="m5-tpl-modal__close" data-close aria-label="Close">&times;</button>' +
        '<div class="m5-tpl-modal__preview">' +
          '<iframe title="' + esc(t.name) + ' preview" loading="eager" src="/templates/preview/?appguid=' + esc(t.appguid) + '"></iframe>' +
        "</div>" +
        '<div class="m5-tpl-modal__info">' +
          '<p class="m5-tpl-modal__kicker">' + esc(CATEGORIES[t.category] || t.category) + "</p>" +
          "<h3>" + esc(t.name) + "</h3>" +
          "<p>" + esc(t.description) + "</p>" +
          '<p class="m5-tpl-modal__line"><span class="material-symbols-rounded" aria-hidden="true">list_alt</span>' + (t.steps || []).length + " steps</p>" +
          (caps.length ? '<p class="m5-tpl-modal__line"><span class="material-symbols-rounded" aria-hidden="true">badge</span>Captures ' + esc(caps.join(", ")) + "</p>" : "") +
          '<p class="m5-tpl-modal__hint">This preview is the real template running live. Try it. Nothing you type here reaches a business.</p>' +
          '<div class="m5-tpl-modal__ctas">' +
            '<a class="m5-tpl-cta" href="' + APP + '#/signup">Start With This Template</a>' +
            '<a class="m5-tpl-cta m5-tpl-cta--ghost" href="' + APP + '#/templates">Browse in the App</a>' +
          "</div>" +
        "</div>" +
      "</div>";
    document.body.appendChild(wrap);
    document.body.style.overflow = "hidden";
    wrap.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) closeModal();
    });
    document.addEventListener("keydown", onKey);
  }
  function onKey(e) { if (e.key === "Escape") closeModal(); }
  function closeModal() {
    var m = document.querySelector(".m5-tpl-modal");
    if (m) m.remove();
    document.body.style.overflow = "";
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
      filters.addEventListener("click", function (e) {
        var chip = e.target.closest("[data-cat]");
        if (!chip) return;
        filters.querySelectorAll("[data-cat]").forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        renderGrid(chip.dataset.cat);
      });
    }

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-open]");
      if (!btn) return;
      var t = templates.find(function (x) { return x.slug === btn.dataset.open; });
      if (t) openModal(t);
    });

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

  fetch(API)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (d && d.ok && d.templates && d.templates.length) hydrate(d.templates);
      // else: the baked markup stands.
    })
    .catch(function () { /* baked markup stands */ });
})();
