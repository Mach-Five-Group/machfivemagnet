import { A as AuthController, c as capList } from "./index.js";
const inPortfolio = () => AuthController.getManagedClients().length > 0 && !AuthController.getStoredActiveOrg();
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const CHANNEL_CHIP = { reseller_org: "Your org", managed_client: "Client", saas_org: "Org" };
let stylesInjected = false;
function ensurePortfolioStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-portfolio-styles";
  s.textContent = `
    .page-shell .dash-clients { width:100%; border-collapse:collapse; font-size:0.86rem; }
    .page-shell .dash-clients th { text-align:right; font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--color-text-subtle,#6C7C9A); padding:6px 10px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); white-space:nowrap; }
    .page-shell .dash-clients th:first-child { text-align:left; }
    .page-shell .dash-clients td { padding:10px; text-align:right; border-bottom:1px solid var(--color-surface-2,#EAF0F7); font-variant-numeric:tabular-nums; white-space:nowrap; }
    .page-shell .dash-clients td:first-child { text-align:left; }
    .page-shell .dash-clients tr:last-child td { border-bottom:0; }
    .page-shell .dash-clients tbody tr { cursor:pointer; transition:background .12s ease; }
    .page-shell .dash-clients tbody tr:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .dash-clients .dc-name { font-weight:600; display:flex; align-items:center; gap:8px; }
    .page-shell .dash-clients .dc-chip { font-size:0.62rem; font-weight:700; letter-spacing:0.04em; padding:2px 7px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-clients .dc-delta-up { color:var(--color-tip,#059669); font-weight:600; }
    .page-shell .dash-clients .dc-delta-down { color:var(--color-danger,#DC2626); font-weight:600; }
    .page-shell .dash-clients .dc-view { color:var(--color-accent,#0072BA); font-weight:600; }
    .page-shell .dash-clients-scroll { overflow-x:auto; }
    .page-shell .pf-client-chip { font-size:0.64rem; font-weight:700; letter-spacing:0.03em; padding:2px 8px; border-radius:999px; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-accent-hover,#00558D); white-space:nowrap; }
    .page-shell .pf-access-error { display:flex; align-items:center; gap:8px; font-size:0.84rem; font-weight:500; color:var(--color-danger,#DD4124); background:var(--color-danger-soft,rgba(221,65,36,0.08)); border:1px solid var(--color-danger,#DD4124); border-radius:var(--radius-md,10px); padding:10px 14px; margin-bottom:12px; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const ymd = (d) => d.toISOString().slice(0, 10);
async function fetchPortfolioRows(base, { days = 30 } = {}) {
  const now = /* @__PURE__ */ new Date();
  const from = ymd(new Date(now.getTime() - (days - 1) * 864e5));
  const to = ymd(now);
  const res = await fetch(`${base}/m5t/v5/dashboard/stats?from=${from}&to=${to}&group_by=owner`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const s = await res.json();
  if (!s.ok) throw new Error("stats not ok");
  return s.by_owner || [];
}
function clientsTableHTML(rows, columns) {
  const list = rows;
  return `<div class="dash-clients-scroll"><table class="dash-clients">
    <thead><tr>
      <th>Client</th>${columns.map((c) => `<th>${c.h}</th>`).join("")}<th></th>
    </tr></thead>
    <tbody>${list.map((r) => `
      <tr data-org="${esc(r.owner_guid)}" tabindex="0" role="button"
          aria-label="Open ${esc(r.name || "client")}">
        <td><span class="dc-name">${esc(r.name || r.owner_guid)}
          <span class="dc-chip">${esc(CHANNEL_CHIP[r.channel] || r.channel || "")}</span></span></td>
        ${columns.map((c) => `<td>${c.td(r)}</td>`).join("")}
        <td><span class="dc-view">View →</span></td>
      </tr>`).join("")}</tbody>
  </table></div>`;
}
function showAccessError(container) {
  let el = container.querySelector(".pf-access-error");
  if (!el) {
    el = document.createElement("div");
    el.className = "pf-access-error";
    container.prepend(el);
  }
  el.textContent = "You don't have direct access to manage this org. Use the admin console to act on its behalf.";
}
function wireClientRows(container) {
  if (!container) return;
  capList(container.querySelector(".dash-clients tbody") || container, {
    rowSelector: "tr[data-org]",
    noun: "clients",
    controlHost: container.querySelector(".dash-clients-scroll") || container
  });
  const open = async (tr) => {
    const guid = tr?.dataset?.org;
    if (!guid) return;
    const result = await AuthController.setActiveOrg(guid);
    if (result?.activeOrgError) showAccessError(container);
  };
  container.querySelectorAll("tbody tr[data-org]").forEach((tr) => {
    tr.addEventListener("click", () => open(tr));
    tr.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(tr);
      }
    });
  });
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function pickerPageHTML({ section, title, description }) {
  ensurePortfolioStyles();
  return `
    <div class="page-shell" data-section="${esc(section)}">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${esc(title)}</h1>
          <p class="page-description">${esc(description)}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
        </div>
        <div class="card-body" id="pf-picker-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>
    </div>`;
}
async function initPicker(base, columns, { emptyMsg } = {}) {
  const el = document.getElementById("pf-picker-body");
  if (!el) return;
  try {
    const rows = await fetchPortfolioRows(base);
    if (!rows.length) {
      el.innerHTML = emptyState("groups", emptyMsg || "No client orgs yet. Create one under Clients first.");
      return;
    }
    el.innerHTML = clientsTableHTML(rows, columns);
    wireClientRows(el);
  } catch (err) {
    console.warn("[portfolio] picker load failed:", err);
    el.innerHTML = emptyState("error", "Could not load your clients. Please refresh.");
  }
}
function clientNameMap() {
  const map = {};
  AuthController.getManagedClients().forEach((c) => {
    map[c.orgGuid] = c.name;
  });
  AuthController.getMemberships().forEach((m) => {
    if (m.orgGuid && !map[m.orgGuid]) map[m.orgGuid] = m.name || "";
  });
  return map;
}
const clientChipHTML = (name) => name ? `<span class="pf-client-chip">${esc(name)}</span>` : "";
export {
  initPicker as a,
  clientNameMap as b,
  clientsTableHTML as c,
  clientChipHTML as d,
  ensurePortfolioStyles as e,
  inPortfolio as i,
  pickerPageHTML as p,
  wireClientRows as w
};
//# sourceMappingURL=portfolio-view-D5t4pXOZ.js.map
