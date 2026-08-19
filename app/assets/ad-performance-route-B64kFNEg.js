import { A as AuthController, c as capList } from "./index.js";
import { i as inPortfolio, a as initPicker, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
import { f as fetchIntegrations, c as connFor, d as statusOf, P as PROVIDERS, m as canManage, e as ensureStyles$1, h as statusPill } from "./integrations-shared-DIkAqJCS.js";
import { s as statCard } from "./statCard-1WYYWdna.js";
import "./confirmDialog-B9956zZ8.js";
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const ymd = (d) => d.toISOString().slice(0, 10);
const fmtMoney = (n) => n == null ? "—" : "$" + Number(n).toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
const fmtNum = (n) => Number(n || 0).toLocaleString();
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-adperf-styles";
  s.textContent = `
    .page-shell .adperf-chart { width: 100%; height: auto; display: block; }
    .page-shell text.ax { font-size: 11px; fill: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-legend { display: flex; gap: 16px; margin: 0 0 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-legend i { display: inline-block; width: 11px; height: 11px; border-radius: 3px; margin-right: 5px; vertical-align: middle; }
    .page-shell .adperf-note { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: 12px 2px 0; }
    .page-shell .chart-period-btn { cursor: pointer; }
    .page-shell .chart-period-btn.active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .adperf-srcwrap { overflow-x: auto; }
    .page-shell .adperf-srctable { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .adperf-srctable th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .adperf-srctable td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .adperf-srctable .num { text-align: right; white-space: nowrap; }
    .page-shell .adperf-src-sub { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .adperf-src-untracked { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .page-shell .adperf-conn { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adperf-conn:empty { display: none; }
    .page-shell .adperf-conn a { color: var(--color-accent, #0072BA); font-weight: 600; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
const PERIODS = [{ d: 7, label: "7 Days" }, { d: 30, label: "30 Days" }, { d: 90, label: "90 Days" }];
let periodDays = 30;
function render() {
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "ad-performance",
      title: "Ad Performance",
      description: "Pick a client to view their spend and lead performance."
    });
  }
  ensureStyles();
  return `
    <div class="page-shell" data-section="ad-performance">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Performance</h1>
          <p class="page-description">Your advertising spend alongside the leads your magnets captured.</p>
          <div class="adperf-conn" id="adperf-conn"></div>
        </div>
        <div class="chart-controls" id="adperf-periods">
          ${PERIODS.map((p) => `<button class="chart-period-btn${p.d === periodDays ? " active" : ""}" type="button" data-days="${p.d}">${p.label}</button>`).join("")}
        </div>
      </div>

      <div class="stats-grid" id="adperf-stats">
        ${statCard({ icon: "payments", label: "Ad Spend", valueId: "adperf-spend", href: "#/ad-accounts" })}
        ${statCard({ icon: "ads_click", label: "Clicks", valueId: "adperf-clicks", href: "#/ad-accounts" })}
        ${statCard({ icon: "person_add", label: "Magnet Leads", valueId: "adperf-leads", href: "#/leads" })}
        ${statCard({ icon: "request_quote", label: "Cost / Lead", valueId: "adperf-cpl" })}
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">insights</span> Spend vs Leads</h2>
          <span class="live-indicator" id="adperf-range"></span>
        </div>
        <div class="card-body" id="adperf-body">
          ${emptyState("hourglass_empty", "Loading ad performance…")}
        </div>
      </div>
      <p class="adperf-note">Spend and leads are shown on the same timeline for comparison. Leads are not yet matched to individual ad clicks.</p>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">campaign</span> Leads by campaign</h2>
          <span class="live-indicator" id="adperf-src-summary"></span>
        </div>
        <div class="card-body" id="adperf-sources">
          ${emptyState("hourglass_empty", "Loading…")}
        </div>
      </div>

      <div class="dashboard-card" id="adperf-conv-card" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">flag</span> Other conversions</h2>
          <span class="live-indicator">Reported by Google Ads</span>
        </div>
        <div class="card-body" id="adperf-conv-body"></div>
      </div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    const fmtN = (n) => Number(n || 0).toLocaleString();
    return initPicker(apiBase(), [
      { h: "Spend", td: (r) => r.ad ? `$${fmtN(r.ad.spend)}` : "—" },
      { h: "Clicks", td: (r) => r.ad ? fmtN(r.ad.clicks) : "—" },
      { h: "Leads", td: (r) => fmtN(r.leads.window ?? r.leads.total) },
      { h: "CPL", td: (r) => r.ad?.cost_per_lead != null ? `$${fmtN(r.ad.cost_per_lead)}` : "—" }
    ], { emptyMsg: "No client orgs yet. Connect a client ad account to see spend here." });
  }
  const periods = document.getElementById("adperf-periods");
  periods?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-days]");
    if (!btn) return;
    periodDays = Number(btn.dataset.days) || 30;
    periods.querySelectorAll(".chart-period-btn").forEach((b) => b.classList.toggle("active", Number(b.dataset.days) === periodDays));
    load();
  });
  await load();
}
async function load() {
  const base = apiBase();
  const body = document.getElementById("adperf-body");
  const rangeEl = document.getElementById("adperf-range");
  const now = /* @__PURE__ */ new Date();
  const to = ymd(now);
  const from = ymd(new Date(now.getTime() - (periodDays - 1) * 864e5));
  if (rangeEl) rangeEl.textContent = `${from} → ${to}`;
  let overlay, accounts = [], sources = null, intg = null, conv = null;
  try {
    const [oRes, aRes, sRes, intgRes, cRes] = await Promise.all([
      fetch(`${base}/m5t/v5/coreAdMetrics/overlay?from=${from}&to=${to}`),
      fetch(`${base}/m5t/v5/coreAdAccount`),
      fetch(`${base}/m5t/v5/coreAdMetrics/by-source?from=${from}&to=${to}`),
      fetchIntegrations().catch(() => null),
      // notation only — never blocks the page
      fetch(`${base}/m5t/v5/coreAdMetrics/conversions?from=${from}&to=${to}`).then((r) => r.json()).catch(() => null)
    ]);
    if (!oRes.ok) throw new Error(`HTTP ${oRes.status}`);
    overlay = await oRes.json();
    const aJson = await aRes.json().catch(() => ({}));
    accounts = (aJson?.data || []).filter((a) => a.status !== "DELETED");
    sources = await sRes.json().catch(() => null);
    intg = intgRes;
    conv = cRes;
  } catch (err) {
    console.warn("[ad-performance] load failed:", err);
    if (body) body.innerHTML = emptyState("error", "Could not load ad performance. Please try again.");
    return;
  }
  renderConnNote(intg, accounts);
  renderConversions(conv);
  const t = overlay.totals || {};
  setText("adperf-spend", fmtMoney(t.spend));
  setText("adperf-clicks", fmtNum(t.clicks));
  setText("adperf-leads", fmtNum(t.magnet_leads));
  setText("adperf-cpl", fmtMoney(t.cost_per_lead));
  renderSources(sources);
  if (!accounts.length) {
    body.innerHTML = emptyState("link_off", "No ad account connected yet. Your agency can connect Google Ads or Local Services Ads to see performance here.");
    return;
  }
  if (!overlay.connected) {
    body.innerHTML = emptyState("cloud_sync", "Account connected. No ad data for this range yet. Metrics appear here once they sync.");
    return;
  }
  body.innerHTML = svgOverlayChart(overlay.rows || []);
}
function renderConnNote(intg, accounts) {
  const host = document.getElementById("adperf-conn");
  if (!host) return;
  if (!intg || intg.denied) {
    host.innerHTML = "";
    return;
  }
  const p = PROVIDERS.google_ads;
  const conn = connFor(intg.providers, "google_ads");
  const status = statusOf(p, conn, !!intg.configured?.google_ads);
  const manage = canManage() ? ` <a href="#/settings/integrations/${p.urlSlug}">Manage</a>` : "";
  if (status === "connected" || status === "broken") {
    ensureStyles$1();
    host.innerHTML = `<span>Google Ads</span> ${statusPill(status, conn)}${manage}`;
    return;
  }
  if (accounts.length) {
    host.innerHTML = `<span>Google Ads</span> <span>${accounts.length} associated account${accounts.length === 1 ? "" : "s"}</span>`;
    return;
  }
  host.innerHTML = "";
}
function renderConversions(conv) {
  const card = document.getElementById("adperf-conv-card");
  const bodyEl = document.getElementById("adperf-conv-body");
  const grid = document.getElementById("adperf-stats");
  const oldStat = document.getElementById("adperf-conv-stat");
  if (oldStat) oldStat.remove();
  if (!card || !bodyEl) return;
  if (!conv?.ok || !conv.has_selection) {
    card.style.display = "none";
    return;
  }
  if (grid) {
    const holder = document.createElement("div");
    holder.innerHTML = statCard({
      icon: "flag",
      label: "Ads Conversions",
      value: fmtNum(conv.totals?.conversions),
      sub: "Reported by Google Ads",
      // Which actions are counted is chosen on the integration page the sublabel names.
      href: "#/settings/integrations/google-ads"
    });
    const stat = holder.firstElementChild;
    stat.id = "adperf-conv-stat";
    grid.appendChild(stat);
  }
  const actions = conv.actions || [];
  card.style.display = "";
  if (!actions.length) {
    bodyEl.innerHTML = emptyState("search_off", "No conversions in this range for the selected actions.");
    return;
  }
  const showValue = actions.some((a) => a.value > 0);
  bodyEl.innerHTML = `
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Conversion action</th><th>Category</th><th class="num">Conversions</th>${showValue ? '<th class="num">Value</th>' : ""}</tr></thead>
        <tbody>${actions.map((a) => `
          <tr>
            <td>${esc(a.name || a.id)}</td>
            <td class="adperf-src-sub">${esc(String(a.category || "").toLowerCase().replace(/_/g, " ") || "—")}</td>
            <td class="num"><b>${fmtNum(a.conversions)}</b></td>
            ${showValue ? `<td class="num">${fmtMoney(a.value)}</td>` : ""}
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="adperf-note">Counted actions are chosen on the Google Ads integration page. These are Google's own numbers and may overlap magnet leads, so they are never added together.</p>`;
}
function renderSources(data) {
  const host = document.getElementById("adperf-sources");
  const sum = document.getElementById("adperf-src-summary");
  if (!host) return;
  const rows = data && Array.isArray(data.rows) ? data.rows : [];
  if (!rows.length) {
    if (sum) sum.textContent = "";
    host.innerHTML = emptyState("search_off", "No leads in this range yet. Campaigns appear here as tagged leads (?utm_campaign=…) come in.");
    return;
  }
  const total = data.total_leads || rows.reduce((a, r) => a + (r.leads || 0), 0);
  const tracked = data.tracked_leads || 0;
  if (sum) sum.textContent = `${fmtNum(tracked)} of ${fmtNum(total)} leads tagged to a source`;
  const label = (r) => {
    if (r.campaign && r.campaign !== "(none)") return esc(r.campaign);
    if (r.source && r.source !== "(direct)") return esc(r.source);
    return '<span class="adperf-src-untracked">Untracked / direct</span>';
  };
  host.innerHTML = `
    <div class="adperf-srcwrap">
      <table class="adperf-srctable">
        <thead><tr><th>Campaign</th><th>Source</th><th class="num">Paid clicks</th><th class="num">Leads</th></tr></thead>
        <tbody>${rows.map((r) => `
          <tr>
            <td>${label(r)}</td>
            <td class="adperf-src-sub">${esc(r.source || "—")}${r.medium ? ` · ${esc(r.medium)}` : ""}</td>
            <td class="num">${r.paid_clicks ? fmtNum(r.paid_clicks) : '<span class="adperf-src-sub">—</span>'}</td>
            <td class="num"><b>${fmtNum(r.leads)}</b></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`;
  const srcTb = host.querySelector(".adperf-srctable tbody");
  if (srcTb) capList(srcTb, { rowSelector: "tr", noun: "sources", controlHost: host.querySelector(".adperf-srcwrap") || host });
}
function setText(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}
function niceMax(v) {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}
function fmtAxis(v) {
  v = Math.round(v);
  return v >= 1e3 ? (v / 1e3).toFixed(v % 1e3 === 0 ? 0 : 1) + "k" : String(v);
}
function svgOverlayChart(rows) {
  const W = 840, H = 340, mr = 46, ml = 56, mt = 22, mb = 36;
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const plotH = y1 - y0, plotW = x1 - x0;
  const n = rows.length || 1;
  const maxSpend = niceMax(Math.max(1, ...rows.map((r) => r.spend || 0)));
  const maxLeads = niceMax(Math.max(1, ...rows.map((r) => r.magnet_leads || 0)));
  const band = plotW / n;
  const bw = Math.min(24, band * 0.55);
  const cx = (i) => x0 + band * (i + 0.5);
  const spendY = (v) => y1 - v / maxSpend * plotH;
  const leadY = (v) => y1 - v / maxLeads * plotH;
  const grid = [0, 0.25, 0.5, 0.75, 1].map((t) => {
    const y = y1 - t * plotH;
    return `<line x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" stroke="#EAF0F7"/><text x="${x0 - 8}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" class="ax">$${fmtAxis(maxSpend * t)}</text><text x="${x1 + 8}" y="${(y + 3.5).toFixed(1)}" text-anchor="start" class="ax">${fmtAxis(maxLeads * t)}</text>`;
  }).join("");
  const bars = rows.map((r, i) => {
    const y = spendY(r.spend || 0);
    return `<rect x="${(cx(i) - bw / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(0, y1 - y).toFixed(1)}" rx="3" fill="#0072BA"><title>${r.date}: $${r.spend} spend</title></rect>`;
  }).join("");
  const pts = rows.map((r, i) => `${cx(i).toFixed(1)},${leadY(r.magnet_leads || 0).toFixed(1)}`).join(" ");
  const line = n > 1 ? `<polyline points="${pts}" fill="none" stroke="#009473" stroke-width="2.5"/>` : "";
  const dots = rows.map((r, i) => `<circle cx="${cx(i).toFixed(1)}" cy="${leadY(r.magnet_leads || 0).toFixed(1)}" r="3.5" fill="#009473"><title>${r.date}: ${r.magnet_leads} leads</title></circle>`).join("");
  const step = Math.max(1, Math.ceil(n / 6));
  const xlabels = rows.map((r, i) => i % step === 0 || i === n - 1 ? `<text x="${cx(i).toFixed(1)}" y="${H - 14}" text-anchor="middle" class="ax">${r.date.slice(5)}</text>` : "").join("");
  return `
    <div class="adperf-legend">
      <span><i style="background:#0072BA"></i>Ad Spend</span>
      <span><i style="background:#009473"></i>Magnet Leads</span>
    </div>
    <svg class="adperf-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Ad spend versus magnet leads over time">
      ${grid}${bars}${line}${dots}${xlabels}
    </svg>`;
}
const adPerformanceRoute = { render, init };
export {
  adPerformanceRoute as default,
  init,
  render
};
//# sourceMappingURL=ad-performance-route-B64kFNEg.js.map
