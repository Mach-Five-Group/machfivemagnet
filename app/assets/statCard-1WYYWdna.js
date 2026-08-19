const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
function statCard({ icon, label, valueId, value = "—", subId, sub = "", href, trendId } = {}) {
  const tag = href ? "a" : "div";
  const attrs = href ? ` href="${esc(href)}" class="stat-card stat-card--link"` : ' class="stat-card"';
  return `
  <${tag}${attrs}>
    <div class="stat-header">
      <span class="material-symbols-outlined stat-icon" aria-hidden="true">${esc(icon)}</span>
      <span class="stat-label">${esc(label)}</span>
      ${href ? '<span class="stat-go material-symbols-outlined" aria-hidden="true">north_east</span>' : ""}
    </div>
    <div class="stat-value"${valueId ? ` id="${esc(valueId)}"` : ""}>${value}</div>
    <div class="stat-change">${trendId ? `<span class="stat-trend" id="${esc(trendId)}"></span>` : ""}<span class="stat-sublabel"${subId ? ` id="${esc(subId)}"` : ""}>${sub}</span></div>
  </${tag}>`;
}
export {
  statCard as s
};
//# sourceMappingURL=statCard-1WYYWdna.js.map
