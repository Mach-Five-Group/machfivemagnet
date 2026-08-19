import { A as AuthController, c as capList, P as PubSub, b as AppBroadcast } from "./index.js";
import { i as inPortfolio, a as initPicker, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const fmt = (n) => Number(n || 0).toLocaleString();
const state = { magnets: [], stats: {}, canManage: false };
const B_LABELS = { mag_title: "header title", mag_subtitle: "subtitle", mag_welcome: "welcome message", mag_theme_color: "color", mag_launcher_label: "launcher label" };
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-abt-styles";
  s.textContent = `
    .page-shell .abt-card { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px); background: var(--color-bg, #fff); padding: 20px 22px; margin-bottom: 18px; }
    .page-shell .abt-head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .page-shell .abt-name { font-size: 1.05rem; font-weight: 700; margin: 0; }
    .page-shell .abt-status { display: inline-flex; align-items: center; gap: 6px; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; }
    .page-shell .abt-status.running { background: #DCFCE7; color: #047857; }
    .page-shell .abt-status.completed { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-status .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: #047857; }
    .page-shell .abt-actions { margin-left: auto; display: flex; gap: 8px; }
    .page-shell .abt-meta { display: flex; gap: 18px; flex-wrap: wrap; margin: 10px 0 16px; font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-meta span { display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .abt-meta .material-symbols-outlined { font-size: 16px; color: var(--color-text-subtle, #6C7C9A); }

    .page-shell .abt-compare { display: grid; grid-template-columns: 1fr auto 1fr; gap: 14px; align-items: stretch; }
    .page-shell .abt-variant { border: 1.5px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px); padding: 14px 16px; }
    .page-shell .abt-variant.leader { border-color: var(--color-tip, #059669); background: var(--color-tip-soft, #F0FDF4); }
    .page-shell .abt-vhead { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
    .page-shell .abt-vname { font-weight: 700; font-size: 0.92rem; }
    .page-shell .abt-vtag { font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-vtag.win { background: #DCFCE7; color: #047857; }
    .page-shell .abt-vdesc { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 10px; }
    .page-shell .abt-mrow { display: flex; justify-content: space-between; align-items: baseline; padding: 6px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.84rem; }
    .page-shell .abt-mrow:last-child { border-bottom: 0; }
    .page-shell .abt-mrow .k { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .abt-mrow .v { font-weight: 700; }
    .page-shell .abt-mrow.hl .v { font-size: 1.25rem; color: var(--color-accent-hover, #00558D); }
    .page-shell .abt-variant.leader .abt-mrow.hl .v { color: var(--color-tip, #059669); }
    .page-shell .abt-improve { font-size: 0.72rem; font-weight: 700; color: var(--color-tip, #059669); margin-left: 6px; }
    .page-shell .abt-vs { align-self: center; display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; background: var(--color-surface-2, #EAF0F7); font-weight: 800; font-size: 0.76rem; color: var(--color-text-muted, #4A5A78); }

    .page-shell .abt-sig { margin-top: 16px; }
    .page-shell .abt-sig__bar { height: 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .page-shell .abt-sig__fill { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); }
    .page-shell .abt-sig__fill.sig { background: #047857; }
    .page-shell .abt-sig__text { display: flex; align-items: center; gap: 6px; margin-top: 7px; font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .abt-sig__text .material-symbols-outlined { font-size: 16px; }

    .page-shell .abt-summary { display: flex; gap: 26px; flex-wrap: wrap; margin-top: 8px; font-size: 0.84rem; }
    .page-shell .abt-summary .k { color: var(--color-text-subtle, #6C7C9A); margin-right: 6px; }
    .page-shell .abt-summary .v { font-weight: 700; }
    .page-shell .abt-summary .v.pos { color: #047857; }
    .page-shell .abt-sect { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 22px 0 10px; }
    @media (max-width: 640px) { .page-shell .abt-compare { grid-template-columns: 1fr; } .page-shell .abt-vs { display: none; } }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function render() {
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "ab-testing",
      title: "A/B Testing",
      description: "Pick a client to view their experiments."
    });
  }
  ensureStyles();
  return `
    <div class="page-shell" data-section="ab-testing">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">A/B Testing</h1>
          <p class="page-description">Compare magnet variants to optimize conversion rates.</p>
        </div>
        <a class="btn btn-primary" href="#/magnets">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          Create New Test
        </a>
      </div>
      <div id="abt-body">${emptyState("hourglass_empty", "Loading tests…")}</div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    return initPicker(apiBase(), [
      { h: "Running", td: (r) => fmt(r.ab_tests?.running) },
      { h: "Completed", td: (r) => fmt(r.ab_tests?.completed) },
      { h: "Compl. %", td: (r) => r.completion_rate != null ? `${r.completion_rate}%` : "—" }
    ], { emptyMsg: "No client orgs yet. Experiments appear per client once you have one." });
  }
  const body = document.getElementById("abt-body");
  try {
    const now = /* @__PURE__ */ new Date();
    const from = new Date(now.getTime() - 89 * 864e5).toISOString().slice(0, 10);
    const to = now.toISOString().slice(0, 10);
    const [mres, sres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/magnets`),
      fetch(`${apiBase()}/m5t/v5/magnets/stats?from=${from}&to=${to}`)
    ]);
    const mdata = await mres.json().catch(() => ({}));
    if (!mdata.ok) throw new Error(mdata.message || "Failed to load");
    state.magnets = mdata.magnets || [];
    state.canManage = !!mdata.canManage;
    const sdata = await sres.json().catch(() => ({}));
    state.stats = sdata?.stats || {};
  } catch (err) {
    console.warn("[ab-testing] load failed:", err);
    if (body) body.innerHTML = emptyState("error", "Could not load your tests. Please try again.");
    return;
  }
  renderBody();
}
function renderBody() {
  const body = document.getElementById("abt-body");
  if (!body) return;
  const running = state.magnets.filter((m) => m.ab?.enabled);
  const completed = state.magnets.filter((m) => !m.ab?.enabled && m.ab?.declared);
  if (!running.length && !completed.length) {
    body.innerHTML = emptyState(
      "science",
      "No experiments yet. Open a magnet on Your Magnets → Edit → “A/B experiment”, give variant B a change, and results appear here."
    );
    return;
  }
  body.innerHTML = (running.length ? `<div class="abt-sect">Running</div>${running.map(runningCardHTML).join("")}` : "") + (completed.length ? `<div class="abt-sect">Completed Tests</div>${completed.map(completedCardHTML).join("")}` : "");
  capList(body, { rowSelector: ".abt-card", noun: "tests" });
  body.querySelectorAll("[data-declare]").forEach((btn) => btn.addEventListener("click", () => declareWinner(btn.dataset.declare, btn.dataset.winner)));
}
function variantMetrics(m) {
  const v = state.stats[m.guid]?.variants || {};
  const A = { opens: 0, engaged: 0, completions: 0, rate: null, ...v.A || {} };
  const B = { opens: 0, engaged: 0, completions: 0, rate: null, ...v.B || {} };
  return { A, B };
}
function bChanges(ab) {
  const keys = Object.keys(ab?.b || {}).map((k) => B_LABELS[k] || k);
  return keys.length ? `Changes: ${keys.join(", ")}` : "";
}
function daysSince(iso) {
  try {
    return Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 864e5));
  } catch {
    return null;
  }
}
function variantCardHTML(name, tag, desc, mtr, isLeader, improve) {
  return `
    <div class="abt-variant${isLeader ? " leader" : ""}">
      <div class="abt-vhead"><span class="abt-vname">${esc(name)}</span><span class="abt-vtag${isLeader ? " win" : ""}">${esc(tag)}</span></div>
      ${desc ? `<div class="abt-vdesc">${esc(desc)}</div>` : ""}
      <div class="abt-mrow"><span class="k">Visitors</span><span class="v">${fmt(mtr.opens)}</span></div>
      <div class="abt-mrow"><span class="k">Completions</span><span class="v">${fmt(mtr.completions)}</span></div>
      <div class="abt-mrow hl"><span class="k">Conversion Rate</span><span class="v">${mtr.rate != null ? mtr.rate + "%" : "—"}${improve ? `<span class="abt-improve">${improve}</span>` : ""}</span></div>
    </div>`;
}
function runningCardHTML(m) {
  const ab = m.ab;
  const { A, B } = variantMetrics(m);
  const leader = (B.rate ?? -1) > (A.rate ?? -1) ? "B" : (A.rate ?? -1) > (B.rate ?? -1) ? "A" : null;
  const improve = leader && A.rate != null && B.rate != null ? `+${Math.round(Math.abs(B.rate - A.rate) * 10) / 10}%` : "";
  const conf = confidencePct(A, B);
  const started = ab.started_tz ? daysSince(ab.started_tz) : null;
  const totalVisitors = (A.opens || 0) + (B.opens || 0);
  const split = ab.split || 50;
  return `
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${esc(m.name)}</h2>
        <span class="abt-status running"><span class="pulse-dot"></span>Running</span>
        <div class="abt-actions">
          ${state.canManage && leader ? `<button class="btn btn-primary" type="button" data-declare="${esc(m.guid)}" data-winner="${leader}"><span class="material-symbols-outlined" aria-hidden="true">emoji_events</span>Declare Winner</button>` : ""}
        </div>
      </div>
      <div class="abt-meta">
        ${started != null ? `<span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>Started ${started === 0 ? "today" : `${started} day${started === 1 ? "" : "s"} ago`}</span>` : ""}
        <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span>${fmt(totalVisitors)} total visitors</span>
        <span><span class="material-symbols-outlined" aria-hidden="true">swap_horiz</span>${100 - split}/${split} traffic split</span>
      </div>
      <div class="abt-compare">
        ${variantCardHTML("Variant A", "Control", "The magnet as configured", A, leader === "A", leader === "A" ? improve : "")}
        <div class="abt-vs">VS</div>
        ${variantCardHTML("Variant B", leader === "B" ? "Leading" : "Challenger", bChanges(ab), B, leader === "B", leader === "B" ? improve : "")}
      </div>
      <div class="abt-sig">
        <div class="abt-sig__bar"><div class="abt-sig__fill${conf != null && conf >= 95 ? " sig" : ""}" style="width:${conf != null ? Math.min(100, conf) : 0}%"></div></div>
        <div class="abt-sig__text">
          <span class="material-symbols-outlined" aria-hidden="true">${conf != null && conf >= 95 ? "check_circle" : "hourglass_top"}</span>
          ${conf != null ? `<span><strong>${conf}% Statistical Confidence</strong>: results ${conf >= 95 ? "are statistically significant" : "are not yet significant; keep it running"}</span>` : "<span>Not enough data yet. Confidence appears after ~30 visitors per variant.</span>"}
        </div>
      </div>
    </div>`;
}
function completedCardHTML(m) {
  const d = m.ab.declared;
  const aRate = d.A?.opens ? d.A.completions / d.A.opens * 100 : null;
  const bRate = d.B?.opens ? d.B.completions / d.B.opens * 100 : null;
  const improve = aRate != null && bRate != null && Math.min(aRate, bRate) > 0 ? Math.round(Math.abs(bRate - aRate) / Math.min(aRate, bRate) * 100) : null;
  const dur = m.ab.started_tz && d.tz ? Math.max(1, Math.round((new Date(d.tz) - new Date(m.ab.started_tz)) / 864e5)) : null;
  const visitors = (d.A?.opens || 0) + (d.B?.opens || 0);
  return `
    <div class="abt-card">
      <div class="abt-head">
        <h2 class="abt-name">${esc(m.name)}</h2>
        <span class="abt-status completed"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:14px">check_circle</span>Completed</span>
      </div>
      <div class="abt-summary">
        <span><span class="k">Winner:</span><span class="v">Variant ${esc(d.winner)}</span></span>
        ${improve != null ? `<span><span class="k">Improvement:</span><span class="v pos">+${improve}%</span></span>` : ""}
        ${dur != null ? `<span><span class="k">Duration:</span><span class="v">${dur} day${dur === 1 ? "" : "s"}</span></span>` : ""}
        <span><span class="k">Total Visitors:</span><span class="v">${fmt(visitors)}</span></span>
      </div>
    </div>`;
}
async function declareWinner(guid, winner) {
  const m = state.magnets.find((x) => x.guid === guid);
  if (!m) return;
  if (!window.confirm(`Declare Variant ${winner} the winner for “${m.name}”?

${winner === "B" ? "Variant B’s changes become the magnet’s configuration for everyone." : "The magnet keeps its current configuration."} The experiment ends and moves to Completed.`)) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(guid)}/ab/declare`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ winner })
    });
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.message || "Declare failed");
    toast(`Variant ${winner} declared the winner`, "success");
  } catch (err) {
    toast(err.message || "Could not declare a winner", "danger");
    return;
  }
  try {
    await init();
  } catch (e) {
    console.warn("[ab-testing] refresh after declare failed:", e);
  }
}
function confidencePct(A, B) {
  const n1 = A.opens || 0, n2 = B.opens || 0, c1 = A.completions || 0, c2 = B.completions || 0;
  if (n1 < 30 || n2 < 30 || c1 + c2 < 5) return null;
  const p1 = c1 / n1, p2 = c2 / n2;
  const p = (c1 + c2) / (n1 + n2);
  const se = Math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2));
  if (!se) return null;
  const z = Math.abs(p2 - p1) / se;
  return Math.round(2 * (normCdf(z) - 0.5) * 1e3) / 10;
}
function normCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}
const abTestingRoute = { render, init };
export {
  abTestingRoute as default,
  init,
  render
};
//# sourceMappingURL=ab-testing-route-Y-AVD4aF.js.map
