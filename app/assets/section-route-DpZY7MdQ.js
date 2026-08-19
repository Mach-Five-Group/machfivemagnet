let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-section-page-styles";
  style.textContent = `
    .section-page {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 48px 24px;
      background: var(--color-surface, #F4F7FB);
      color: var(--color-text, #0B1220);
      font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .section-page__inner {
      max-width: 540px;
      text-align: center;
      background: var(--color-bg, #FFFFFF);
      border: 1px solid var(--color-border, #D4DCE8);
      border-radius: var(--radius-lg, 16px);
      padding: 48px 40px;
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10));
    }
    .section-page__icon {
      font-family: 'Material Symbols Outlined';
      font-size: 56px;
      line-height: 1;
      color: var(--color-primary-600, #0072BA);
      display: inline-block;
      margin-bottom: 16px;
    }
    .section-page__title {
      font-family: var(--font-display, 'Inter', system-ui, sans-serif);
      font-size: 1.9rem;
      font-weight: 600;
      letter-spacing: -0.02em;
      margin: 0 0 10px;
    }
    .section-page__sub { font-size: 1rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 6px; }
    .section-page__hint { font-size: 0.85rem; color: var(--color-text-subtle, #6C7C9A); margin: 0; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function render({ title = "Section", icon = "widgets", name = "" } = {}) {
  ensureStyles();
  return `
    <section class="section-page" data-section="${name}">
      <div class="section-page__inner">
        <span class="section-page__icon" aria-hidden="true">${icon}</span>
        <h1 class="section-page__title">${title}</h1>
        <p class="section-page__sub">This area is being translated from the Mach Five Magnet demo.</p>
        <p class="section-page__hint">Navigation, auth, and persona scoping are wired. Content lands next.</p>
      </div>
    </section>`;
}
function init() {
}
const sectionRoute = { render, init };
export {
  sectionRoute as default,
  init,
  render
};
//# sourceMappingURL=section-route-DpZY7MdQ.js.map
