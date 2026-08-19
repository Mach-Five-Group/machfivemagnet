import { A as AuthController } from "./index.js";
import { M as MAGNET_TEMPLATES, o as openPreviewModal, s as setPendingTemplate, T as TEMPLATE_CATEGORIES, c as templateCardHTML, e as ensureTemplateStyles, b as magnetToPackage } from "./magnet-templates-D_rF6WkH.js";
import "./routeHandoff-CzcXjRAH.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const USE_CAPS = ["provision_magnets", "manage_magnets"];
const canUseTemplates = () => AuthController.getCapabilities().some((c) => USE_CAPS.includes(c));
function categoryCounts() {
  const counts = /* @__PURE__ */ new Map();
  for (const t of MAGNET_TEMPLATES) counts.set(t.category, (counts.get(t.category) || 0) + 1);
  return Object.keys(TEMPLATE_CATEGORIES).filter((c) => counts.has(c)).map((c) => [c, counts.get(c)]);
}
const chipHTML = (cat, label, count, pressed) => `<button class="m5t-chip--filter" type="button" data-cat="${esc(cat)}" aria-pressed="${pressed}">${esc(label)}<span class="m5t-chip__count">${count}</span></button>`;
let stylesInjected = false;
function ensureStyles() {
  ensureTemplateStyles();
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-templates-page-styles";
  style.textContent = `
    .page-shell[data-section="templates"] .tpl-filters { margin: 0 0 20px; }
    .page-shell[data-section="templates"] .settings-note { margin: 0 0 20px; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function render() {
  ensureStyles();
  const canUse = canUseTemplates();
  return `
    <div class="page-shell" data-section="templates">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Templates</h1>
          <p class="page-description">Start from a proven flow instead of a blank magnet.</p>
        </div>
        <a class="btn btn-secondary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">bolt</span>
          Your magnets
        </a>
      </div>

      ${canUse ? "" : `<div class="settings-note" id="tpl-readonly-note">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        Setup managed by your provider.
      </div>`}

      <div class="m5t-chip-row tpl-filters" id="tpl-filters" role="group" aria-label="Filter templates by category">
        ${chipHTML("all", "All", MAGNET_TEMPLATES.length, "true")}
        ${categoryCounts().map(([cat, count]) => chipHTML(cat, TEMPLATE_CATEGORIES[cat], count, "false")).join("")}
      </div>

      <div class="mag-tpl-grid mag-tpl-grid--page" id="tpl-grid">
        ${MAGNET_TEMPLATES.map((t) => templateCardHTML(t, { detail: true, gallery: true, canUse })).join("")}
      </div>
    </div>`;
}
function init() {
  const grid = document.getElementById("tpl-grid");
  document.getElementById("tpl-filters")?.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (!chip) return;
    chip.parentElement.querySelectorAll("[data-cat]").forEach((c) => {
      c.setAttribute("aria-pressed", String(c === chip));
    });
    const cat = chip.dataset.cat;
    grid?.querySelectorAll(".mag-tpl-card").forEach((card) => {
      card.hidden = !(cat === "all" || card.dataset.cat === cat);
    });
  });
  grid?.addEventListener("click", (e) => {
    const preview = e.target.closest("[data-preview]");
    if (preview) {
      const t = MAGNET_TEMPLATES.find((x) => x.id === preview.dataset.preview);
      if (t) openPreviewModal(() => magnetToPackage({ ...t.appearance, steps: t.steps, name: t.name }));
      return;
    }
    const btn = e.target.closest("[data-tpl]");
    if (!btn) return;
    setPendingTemplate(btn.dataset.tpl);
    window.location.hash = "#/magnets";
  });
}
const templatesRoute = { render, init };
export {
  templatesRoute as default,
  init,
  render
};
//# sourceMappingURL=templates-route-6jt4emcG.js.map
