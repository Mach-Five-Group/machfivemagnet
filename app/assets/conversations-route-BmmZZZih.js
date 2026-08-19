import { A as AuthController, c as capList } from "./index.js";
import { e as ensurePortfolioStyles, i as inPortfolio, b as clientNameMap, d as clientChipHTML } from "./portfolio-view-D5t4pXOZ.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const fmt = (n) => Number(n || 0).toLocaleString();
const state = { conversations: [], counts: {}, magnetNames: {}, filter: "ALL", book: false, magnetOwnerNames: {} };
const STATUS_META = {
  COMPLETED: { label: "Completed", icon: "check_circle" },
  IN_PROGRESS: { label: "In progress", icon: "pending" },
  ABANDONED: { label: "Abandoned", icon: "highlight_off" }
};
const ROUTE_LABEL = { book: "Book", chat: "Chat", call: "Call", email: "Email", support: "Support" };
function leadName(l) {
  if (!l) return null;
  return [l.first_name, l.last_name].filter(Boolean).join(" ").trim() || l.email || null;
}
function initialsOf(name) {
  return (name.split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("") || "?").toUpperCase();
}
function whenShort(iso) {
  try {
    return new Date(iso).toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}
function relTime(iso) {
  try {
    const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1e3);
    if (s < 60) return "just now";
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  } catch {
    return "";
  }
}
function fmtDur(s) {
  if (s == null) return "—";
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;
}
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-convs-styles";
  style.textContent = `
    .page-shell .convs-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .convs-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .convs-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .convs-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .convs-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-left: auto; }
    .page-shell .convs-tablewrap { overflow-x: auto; }
    .page-shell .convs-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .convs-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .convs-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .convs-row { cursor: pointer; }
    .page-shell .convs-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .convs-who { display: flex; align-items: center; gap: 10px; }
    .page-shell .convs-ava { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .convs-ava.anon { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-name { font-weight: 600; }
    .page-shell .convs-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .convs-badge { display: inline-flex; align-items: center; gap: 4px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .convs-badge .material-symbols-outlined { font-size: 13px; }
    .page-shell .convs-badge[data-s="COMPLETED"] { background: #DCFCE7; color: #047857; }
    .page-shell .convs-badge[data-s="IN_PROGRESS"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .convs-badge[data-s="ABANDONED"] { background: #FEF3C7; color: #92400E; }
    .page-shell .convs-prog { display: inline-flex; align-items: center; gap: 8px; }
    .page-shell .convs-prog__track { width: 62px; height: 6px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .page-shell .convs-prog__fill { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); }

    .convs-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .convs-drawer-scrim.open { opacity: 1; }
    .convs-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(420px, 94vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .convs-drawer.open { transform: translateX(0); }
    .convs-drawer__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .convs-drawer__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 700; }
    .convs-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .convs-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .convs-drawer__body { padding: 20px; overflow-y: auto; }
    .convs-tl { position: relative; margin: 6px 0 0 8px; padding-left: 20px; border-left: 2px solid var(--color-surface-2, #EAF0F7); display: flex; flex-direction: column; gap: 14px; }
    .convs-tl__item { position: relative; }
    .convs-tl__dot { position: absolute; left: -27px; top: 2px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-primary-600, #0072BA); border: 2px solid var(--color-bg, #fff); }
    .convs-tl__item.done .convs-tl__dot { background: #047857; }
    .convs-tl__label { font-size: 0.86rem; font-weight: 600; }
    .convs-tl__time { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .convs-drawer__lead { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 12px; margin-bottom: 16px; text-decoration: none; color: inherit; }
    .convs-drawer__lead:hover { background: var(--color-surface, #F7FAFD); }
    .convs-drawer__anon { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function render() {
  ensureStyles();
  ensurePortfolioStyles();
  return `
    <div class="page-shell" data-section="conversations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Conversations</h1>
          <p class="page-description">${inPortfolio() ? "All conversations across your clients." : "Every visitor journey through your magnets: completed, in progress, or abandoned."}</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="convs-body">
          ${emptyState("hourglass_empty", "Loading journeys…")}
        </div>
      </div>
    </div>`;
}
async function init() {
  await load();
}
async function load() {
  const body = document.getElementById("convs-body");
  if (!body) return;
  try {
    const [cres, mres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/conversations`),
      fetch(`${apiBase()}/m5t/v5/magnets`).catch(() => null)
    ]);
    const cdata = await cres.json().catch(() => ({}));
    if (!cdata.ok) throw new Error(cdata.message || "Failed to load");
    state.conversations = cdata.conversations || [];
    state.counts = cdata.counts || {};
    state.book = inPortfolio();
    if (mres) {
      const mdata = await mres.json().catch(() => ({}));
      state.magnetNames = {};
      state.magnetOwnerNames = {};
      const orgNames = state.book ? clientNameMap() : {};
      (mdata.magnets || []).forEach((m) => {
        state.magnetNames[m.guid] = m.name;
        if (state.book) state.magnetOwnerNames[m.guid] = m.owner_name || orgNames[m.owner_guid] || "";
      });
    }
  } catch (err) {
    console.warn("[conversations] load failed:", err);
    body.innerHTML = emptyState("error", "Could not load journeys. Please try again.");
    return;
  }
  renderBody();
}
function filtered() {
  return state.filter === "ALL" ? state.conversations : state.conversations.filter((c) => c.status === state.filter);
}
function rowHTML(c) {
  const name = leadName(c.lead);
  const magnet = state.magnetNames[c.magnet_guid] || "—";
  const sm = STATUS_META[c.status] || STATUS_META.ABANDONED;
  const pct = c.steps_total ? Math.min(100, Math.round((c.steps_reached || 0) / c.steps_total * 100)) : null;
  const routes = (c.routes || []).map((r) => ROUTE_LABEL[r] || r).join(", ");
  return `
    <tr class="convs-row" data-session="${esc(c.session)}">
      <td>
        <span class="convs-who">
          <span class="convs-ava${name ? "" : " anon"}">${name ? esc(initialsOf(name)) : '<span class="material-symbols-outlined" style="font-size:16px">person_off</span>'}</span>
          <span><span class="convs-name">${name ? esc(name) : '<span class="convs-muted">Anonymous visitor</span>'}</span>
            ${c.lead?.email ? `<div class="convs-sub">${esc(c.lead.email)}</div>` : routes ? `<div class="convs-sub">Picked: ${esc(routes)}</div>` : ""}</span>
        </span>
      </td>
      ${state.book ? `<td>${clientChipHTML(state.magnetOwnerNames[c.magnet_guid] || "") || '<span class="convs-muted">—</span>'}</td>` : ""}
      <td><span class="convs-sub">${esc(magnet)}</span></td>
      <td><span class="convs-badge" data-s="${esc(c.status)}"><span class="material-symbols-outlined" aria-hidden="true">${sm.icon}</span>${sm.label}</span></td>
      <td>${pct != null ? `<span class="convs-prog"><span class="convs-prog__track"><span class="convs-prog__fill" style="width:${pct}%"></span></span><span class="convs-sub">${c.steps_reached}/${c.steps_total}</span></span>` : '<span class="convs-muted">—</span>'}</td>
      <td class="convs-muted" style="white-space:nowrap" title="${esc(whenShort(c.started_at))}">${esc(relTime(c.started_at))}</td>
      <td class="convs-muted" style="white-space:nowrap">${esc(fmtDur(c.duration_s))}</td>
    </tr>`;
}
function renderBody() {
  const body = document.getElementById("convs-body");
  if (!body) return;
  if (!state.conversations.length) {
    body.innerHTML = emptyState(
      "route",
      "No journeys yet. As visitors open your magnets, every session, completed or abandoned, appears here."
    );
    return;
  }
  const rows = filtered();
  const FILTERS = [["ALL", "All"], ["COMPLETED", "Completed"], ["IN_PROGRESS", "In progress"], ["ABANDONED", "Abandoned"]];
  body.innerHTML = `
    <div class="convs-bar">
      <div class="convs-filter">
        ${FILTERS.map(([k, label]) => `<button data-filter="${k}" class="${state.filter === k ? "active" : ""}">${label}${k !== "ALL" && state.counts[k] ? ` (${fmt(state.counts[k])})` : ""}</button>`).join("")}
      </div>
      <span class="convs-count">${fmt(rows.length)} of ${fmt(state.conversations.length)} (30 days)</span>
    </div>
    <div class="convs-tablewrap">
      <table class="convs-table">
        <thead><tr><th>Visitor</th>${state.book ? "<th>Client</th>" : ""}<th>Magnet</th><th>Status</th><th>Progress</th><th>Started</th><th>Duration</th></tr></thead>
        <tbody id="convs-tbody">${rows.map(rowHTML).join("") || `<tr><td colspan="${state.book ? 7 : 6}"><div class="convs-muted" style="padding:14px 4px">No ${state.filter.toLowerCase().replace("_", " ")} journeys.</div></td></tr>`}</tbody>
      </table>
    </div>`;
  const tbody = body.querySelector("#convs-tbody");
  if (tbody) {
    capList(tbody, {
      rowSelector: "tr.convs-row",
      noun: "journeys",
      controlHost: body.querySelector(".convs-tablewrap") || tbody.parentElement
    });
  }
  body.querySelector(".convs-filter")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    renderBody();
  });
  body.querySelector("#convs-tbody")?.addEventListener("click", (e) => {
    const tr = e.target.closest(".convs-row");
    if (tr) openDrawer(tr.dataset.session);
  });
}
const EVENT_LABEL = {
  open: () => "Opened the magnet",
  engage: (d) => `First interaction${d ? `: ${ROUTE_LABEL[d] || d}` : ""}`,
  route: (d) => `Picked ${ROUTE_LABEL[d] || d || "a channel"}`,
  step: (d) => `Reached step ${d || ""}`,
  complete: () => "Completed: lead captured"
};
async function openDrawer(session) {
  const c = state.conversations.find((x) => x.session === session);
  if (!c) return;
  let detail = null;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/conversations/${encodeURIComponent(session)}`);
    detail = await res.json().catch(() => null);
    if (!detail?.ok) detail = null;
  } catch {
    detail = null;
  }
  const name = leadName(c.lead);
  const magnet = state.magnetNames[c.magnet_guid] || "—";
  const events = (detail?.events || []).filter((e, i, arr) => e.event !== "step" || !(arr[i + 1] && arr[i + 1].event === "step"));
  const timeline = events.map((e) => `
    <div class="convs-tl__item${e.event === "complete" ? " done" : ""}">
      <span class="convs-tl__dot"></span>
      <div class="convs-tl__label">${esc((EVENT_LABEL[e.event] || (() => e.event))(e.detail))}</div>
      <div class="convs-tl__time">${esc(whenShort(e.at))}${e.variant ? ` · Variant ${esc(e.variant)}` : ""}</div>
    </div>`).join("");
  const scrim = document.createElement("div");
  scrim.className = "convs-drawer-scrim";
  scrim.innerHTML = `
    <aside class="convs-drawer" role="dialog" aria-modal="true" aria-label="Journey detail">
      <div class="convs-drawer__head">
        <span class="convs-drawer__title">${name ? esc(name) : "Anonymous visitor"}</span>
        <button class="convs-drawer__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="convs-drawer__body">
        ${name ? `<a class="convs-drawer__lead" href="#/leads">
              <span class="convs-ava">${esc(initialsOf(name))}</span>
              <span><div class="convs-name">${esc(name)}</div><div class="convs-sub">${esc(c.lead?.email || c.lead?.phone || "")}</div></span>
              <span class="material-symbols-outlined" style="margin-left:auto;color:var(--color-text-subtle,#6C7C9A)">chevron_right</span>
            </a>` : `<div class="convs-drawer__anon">This visitor didn’t finish, so no contact details were captured. Answers are only collected when a journey completes.</div>`}
        <div class="convs-sub" style="margin-bottom:6px">${esc(magnet)} · ${esc(fmtDur(c.duration_s))}${c.variant ? ` · Variant ${esc(c.variant)}` : ""}</div>
        ${timeline ? `<div class="convs-tl">${timeline}</div>` : emptyState("timeline", "No timeline available for this journey.")}
      </div>
    </aside>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    scrim.querySelector(".convs-drawer").classList.add("open");
  });
  const close = () => {
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 220);
  };
  scrim.querySelector(".convs-drawer__close").addEventListener("click", close);
  scrim.addEventListener("click", (e) => {
    if (e.target === scrim) close();
  });
}
const conversationsRoute = { render, init };
export {
  conversationsRoute as default,
  init,
  render
};
//# sourceMappingURL=conversations-route-BmmZZZih.js.map
