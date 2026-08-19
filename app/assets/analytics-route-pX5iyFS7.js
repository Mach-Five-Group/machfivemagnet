import { A as AuthController, c as capList } from "./index.js";
import { i as inPortfolio, a as initPicker, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
import { s as statCard } from "./statCard-1WYYWdna.js";
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const ymd = (d) => d.toISOString().slice(0, 10);
const fmtNum = (n) => Number(n || 0).toLocaleString();
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const fmtRate = (r) => r == null ? "—" : `${r}%`;
const PERIODS = [{ d: 7, label: "7 Days" }, { d: 30, label: "30 Days" }, { d: 90, label: "90 Days" }];
let periodDays = 30;
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-analytics-styles";
  s.textContent = `
    .page-shell .anl-wrap { overflow-x: auto; }
    .page-shell .anl-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .anl-table th { text-align: right; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .anl-table th:first-child { text-align: left; }
    .page-shell .anl-table td { padding: 10px 12px; text-align: right; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-variant-numeric: tabular-nums; white-space: nowrap; }
    .page-shell .anl-table td:first-child { text-align: left; white-space: normal; }
    .page-shell .anl-table tr:last-child td { border-bottom: 0; }
    .page-shell .anl-name { font-weight: 600; color: inherit; text-decoration: none; }
    .page-shell .anl-name:hover { text-decoration: underline; }
    .page-shell .anl-sub { display: block; font-size: 0.74rem; font-weight: 400; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .anl-chip { display: inline-block; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 2px 6px; border-radius: 5px; margin-left: 6px; vertical-align: 2px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .anl-bar { display: block; }
    .page-shell .anl-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .anl-warn { font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F7FAFD); border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; padding: 8px 12px; margin: 0 0 12px; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function shareBar(leads, max) {
  const w = max > 0 ? Math.round(leads / max * 100) : 0;
  return `<svg class="anl-bar" width="72" height="8" viewBox="0 0 72 8" role="img"
      aria-label="${leads} of ${max} leads for the busiest magnet">
      <rect x="0" y="1" width="72" height="6" rx="3" fill="var(--color-surface-2, #EAF0F7)"></rect>
      ${w > 0 ? `<rect x="0" y="1" width="${Math.max(2, Math.round(w * 0.72))}" height="6" rx="3" fill="var(--color-primary-600, #0072BA)"></rect>` : ""}
    </svg>`;
}
const STATUS_CHIP = { DRAFT: "Draft", DISABLED: "Paused" };
function rowHTML(m, max, showOwner) {
  const chip = STATUS_CHIP[m.status] ? `<span class="anl-chip">${esc(STATUS_CHIP[m.status])}</span>` : "";
  const owner = showOwner && m.owner_name ? `<span class="anl-sub">${esc(m.owner_name)}</span>` : "";
  const ab = m.ab_tests && (m.ab_tests.running || m.ab_tests.completed) ? `${fmtNum(m.ab_tests.running)} / ${fmtNum(m.ab_tests.completed)}` : "—";
  return `<tr data-guid="${esc(m.magnet_guid)}">
    <td><a class="anl-name" href="#/magnets">${esc(m.name)}</a>${chip}${owner}</td>
    <td>${shareBar(Number(m.leads?.window || 0), max)}</td>
    <td>${fmtNum(m.leads?.window)}</td>
    <td>${fmtNum(m.opens)}</td>
    <td>${fmtRate(m.engagement_rate)}</td>
    <td>${fmtRate(m.completion_rate)}</td>
    <td>${fmtRate(m.lead_rate)}</td>
    <td>${ab}</td>
  </tr>`;
}
function tableHTML(rows, showOwner) {
  const max = rows.reduce((a, r) => Math.max(a, Number(r.leads?.window || 0)), 0);
  return `<div class="anl-wrap"><table class="anl-table">
    <thead><tr>
      <th>Magnet</th><th></th><th>Leads</th><th>Opens</th>
      <th>Engaged</th><th>Completed</th><th>Leads / Open</th><th>A/B run / done</th>
    </tr></thead>
    <tbody>${rows.map((m) => rowHTML(m, max, showOwner)).join("")}</tbody>
  </table></div>`;
}
function render() {
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "analytics",
      title: "Analytics",
      description: "Pick a client to see how their magnets are performing."
    });
  }
  ensureStyles();
  return `
    <div class="page-shell" data-section="analytics">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Analytics</h1>
          <p class="page-description">How each magnet is performing, so you can tell them apart.</p>
        </div>
        <div class="chart-controls" id="anl-periods">
          ${PERIODS.map((p) => `<button class="chart-period-btn${p.d === periodDays ? " active" : ""}" type="button" data-days="${p.d}">${p.label}</button>`).join("")}
        </div>
      </div>

      <div class="stats-grid">
        ${statCard({ icon: "person_add", label: "Leads", valueId: "anl-leads", href: "#/leads" })}
        ${statCard({ icon: "visibility", label: "Opens", valueId: "anl-opens" })}
        ${statCard({ icon: "task_alt", label: "Completion Rate", valueId: "anl-completion", href: "#/conversations" })}
        ${statCard({ icon: "widgets", label: "Active Magnets", valueId: "anl-active", href: "#/magnets" })}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">leaderboard</span> By magnet</h2>
          <span class="live-indicator" id="anl-range"></span>
        </div>
        <div class="card-body" id="anl-body">
          ${emptyState("hourglass_empty", "Loading magnet performance…")}
        </div>
      </div>
      <p class="anl-note">Leads / Open is the share of visitors who opened a magnet and left contact details. Rates show “—” where nothing opened in the period, rather than 0%.</p>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    return initPicker(apiBase(), [
      { h: "Leads", td: (r) => fmtNum(r.leads.window ?? r.leads.total) },
      { h: "Opens", td: (r) => fmtNum(r.opens) },
      { h: "Completed", td: (r) => fmtRate(r.completion_rate) }
    ]);
  }
  ensureStyles();
  await load();
  const periods = document.getElementById("anl-periods");
  if (periods) {
    periods.addEventListener("click", (e) => {
      const btn = e.target.closest(".chart-period-btn");
      if (!btn) return;
      periodDays = Number(btn.dataset.days) || 30;
      periods.querySelectorAll(".chart-period-btn").forEach((b) => {
        b.classList.toggle("active", Number(b.dataset.days) === periodDays);
      });
      load();
    });
  }
}
async function load() {
  const body = document.getElementById("anl-body");
  const range = document.getElementById("anl-range");
  if (!body) return;
  body.innerHTML = emptyState("hourglass_empty", "Loading magnet performance…");
  const now = /* @__PURE__ */ new Date();
  const to = ymd(now);
  const from = ymd(new Date(now.getTime() - (periodDays - 1) * 864e5));
  if (range) range.textContent = `${from} → ${to}`;
  let data;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/dashboard/stats?from=${from}&to=${to}&group_by=magnet`);
    data = await res.json();
    if (!res.ok || !data?.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  } catch (err) {
    body.innerHTML = emptyState("cloud_off", "Could not load analytics. Refresh to try again.");
    console.error("[analytics] load failed:", err);
    return;
  }
  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };
  setText("anl-leads", fmtNum(data.by_day?.reduce((a, d) => a + Number(d.leads || 0), 0)));
  setText("anl-opens", fmtNum(data.funnel?.opens));
  setText("anl-completion", fmtRate(data.funnel?.completion_rate));
  setText("anl-active", fmtNum(data.magnets?.active));
  const rows = Array.isArray(data.by_magnet) ? data.by_magnet : [];
  if (!rows.length) {
    body.innerHTML = emptyState("widgets", "No magnets yet. Create one and its numbers will show up here.");
    return;
  }
  const anyActivity = rows.some((m) => Number(m.opens || 0) > 0 || Number(m.leads?.window || 0) > 0);
  const showOwner = new Set(rows.map((m) => m.owner_guid)).size > 1;
  const truncated = data.by_magnet_truncated ? `<p class="anl-warn">Showing the top ${rows.length} magnets by leads. You have more than that, so this list is not complete.</p>` : "";
  const quiet = !anyActivity ? `<p class="anl-warn">No opens or leads for any magnet in this period. Try a longer range.</p>` : "";
  body.innerHTML = truncated + quiet + tableHTML(rows, showOwner);
  const anlBody = body.querySelector(".anl-table tbody");
  if (anlBody) capList(anlBody, { rowSelector: "tr", noun: "magnets", controlHost: body.querySelector(".anl-wrap") || body });
}
export {
  init,
  render,
  tableHTML
};
//# sourceMappingURL=analytics-route-pX5iyFS7.js.map
