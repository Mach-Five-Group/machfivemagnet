import { A as AuthController, f as LIST_CAP, P as PubSub, b as AppBroadcast, h as expandButtonHTML, i as LIST_STEP } from "./index.js";
import { i as inPortfolio, a as initPicker, e as ensurePortfolioStyles, b as clientNameMap, d as clientChipHTML } from "./portfolio-view-D5t4pXOZ.js";
import { t as takeHandoff, H as HANDOFF } from "./routeHandoff-CzcXjRAH.js";
let stylesInjected = false;
const state = {
  leads: [],
  magnetNames: {},
  filter: "ALL",
  canManage: false,
  book: false,
  ownerNames: {},
  // `day` is a single YYYY-MM-DD or '' — set by a trend-chart drill-through, cleared
  // from its own chip. Unlike the other filters it has no permanent control, because
  // picking an arbitrary day by hand is what the chart is for.
  clientFilter: "ALL",
  search: "",
  shown: LIST_CAP,
  selectedId: null,
  day: "",
  // How many leads exist server-side vs how many we were handed. Searching and filtering
  // happen in the browser, so a truncated fetch has to be said out loud.
  total: 0,
  truncated: false
};
const PAGE_SIZE = LIST_CAP;
const STATUSES = ["NEW", "WORKING", "QUALIFIED", "UNQUALIFIED", "CONVERTED", "EXPORTED"];
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const fullName = (l) => [l.first_name, l.last_name].filter(Boolean).join(" ").trim() || l.email || "(no name)";
const initials = (l) => (fullName(l).split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("") || "?").toUpperCase();
const capturedTz = (l) => l.created?.created_tz || "";
function when(l) {
  const tz = capturedTz(l);
  if (!tz) return "";
  try {
    return new Date(tz).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}
function whenRel(l) {
  const tz = capturedTz(l);
  if (!tz) return "";
  try {
    const ms = Date.now() - new Date(tz).getTime();
    if (ms < 0) return when(l);
    const h = ms / 36e5;
    if (h < 1) return `${Math.max(1, Math.floor(ms / 6e4))}m ago`;
    if (h < 24) return `${Math.floor(h)}h ago`;
    if (h < 48) return "Yesterday";
    return when(l);
  } catch {
    return when(l);
  }
}
const isFresh = (l) => {
  const tz = capturedTz(l);
  if (!tz) return false;
  try {
    return Date.now() - new Date(tz).getTime() < 24 * 36e5;
  } catch {
    return false;
  }
};
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-leads-styles";
  style.textContent = `
    .page-shell .leads-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .leads-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; }
    .page-shell .leads-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .leads-filter .leads-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .leads-clientsel { font: inherit; font-size: 0.8rem; font-weight: 600; padding: 7px 10px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 220px; }
    .page-shell .leads-searchwrap { position: relative; margin-left: auto; }
    .page-shell .leads-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .leads-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 230px; }
    .page-shell .leads-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .leads-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    /* Day filter chip: the ONLY way out of a trend-chart drill-through, so it reads as
       a removable token rather than a label. */
    .page-shell .leads-daychip { display: inline-flex; align-items: center; gap: 6px; appearance: none; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; white-space: nowrap; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.1)); color: var(--color-accent-hover, #00558D); }
    .page-shell .leads-daychip:hover { background: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .leads-daychip .material-symbols-outlined { font-size: 16px; }
    .page-shell .leads-daychip__x { opacity: 0.7; }
    .page-shell .leads-daychip:hover .leads-daychip__x { opacity: 1; }

    .page-shell .leads-tablewrap { overflow-x: auto; }
    .page-shell .leads-table { width: 100%; table-layout: fixed; border-collapse: collapse; font-size: 0.88rem; min-width: 1000px; }
    /* Book mode adds the Client column, so the same fixed 300px of Status/Captured/
       actions has to fit alongside 82% of flexible columns instead of 70%. Its own
       floor keeps those three from being squeezed below their content. */
    .page-shell .leads-table--book { min-width: 1200px; }
    .page-shell .leads-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-table th.num, .page-shell .leads-table td.num { text-align: right; }
    /* NOTE: text-overflow here is inert and kept only because removing it invites
       someone to "restore" it. Ellipsis needs a single line, and this rule sets no
       white-space:nowrap — real truncation is done by the inner spans (.leads-name,
       .leads-sub, a.leads-contactlink), which each set overflow+ellipsis+nowrap
       themselves. overflow:hidden IS load-bearing: it keeps a cell's content inside
       its fixed-layout column. That combination is also the trap behind the Status
       clipping — a cell squeezed under its content clips silently here rather than
       widening the table, so the wrapper's overflow-x never gets anything to scroll.
       Size columns to fit (see colgroup below) rather than relying on this to cope. */
    .page-shell .leads-table td { padding: 10px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; overflow: hidden; text-overflow: ellipsis; }
    .page-shell .leads-row { cursor: pointer; }
    .page-shell .leads-row:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .leads-row:focus-visible { outline: 2px solid var(--color-primary-600, #0072BA); outline-offset: -2px; }
    .page-shell .leads-open { text-align: right; }
    .page-shell .leads-open .material-symbols-outlined { font-size: 20px; color: var(--color-border, #D4DCE8); vertical-align: middle; transition: color .12s ease, transform .12s ease; }
    .page-shell .leads-row:hover .leads-open .material-symbols-outlined { color: var(--color-accent, #0072BA); transform: translateX(2px); }
    .page-shell .leads-who { display: flex; align-items: center; gap: 10px; min-width: 0; }
    .page-shell .leads-who > span:last-child { min-width: 0; }
    .page-shell .leads-avatar { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.72rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .leads-name { font-weight: 600; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .leads-muted { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell a.leads-contactlink { color: inherit; text-decoration: none; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell a.leads-contactlink:hover { color: var(--color-accent, #0072BA); text-decoration: underline; }
    .page-shell .leads-fresh { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--color-success, #009473); margin-right: 6px; vertical-align: 1px; }
    .page-shell .leads-status { font: inherit; font-size: 0.76rem; font-weight: 600; padding: 5px 8px; border-radius: 8px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); cursor: pointer; max-width: 100%; }
    /* nowrap so a single long status ("UNQUALIFIED") can never break mid-word inside
       a tight cell — td has overflow:hidden, so a wrap there reads as truncation with
       no scrollbar to reach the rest. */
    .page-shell .leads-badge { display: inline-block; white-space: nowrap; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .leads-badge[data-s="NEW"] { background: #DBEAFE; color: #1D4ED8; }
    .page-shell .leads-badge[data-s="WORKING"] { background: #FEF3C7; color: #92400E; }
    .page-shell .leads-badge[data-s="QUALIFIED"], .page-shell .leads-badge[data-s="CONVERTED"] { background: #DCFCE7; color: #047857; }

    /* Two-pane layout: table left, detail panel right — but the panel column only exists
       once a lead is actually selected.
       It used to reserve its 360px permanently while holding nothing but "Click to see
       lead information", and because the table in the left column has min-width 1000px
       (1200px in book mode), that reserved strip is exactly what pushed the table past
       the viewport and produced a horizontal scrollbar on the default view. The space was
       being spent to display a prompt.
       Driven by [data-has-selection] on the layout element, so the grid owns the widths
       rather than JS; the gap collapses with the column so there is no phantom 24px left
       behind either. */
    .page-shell .leads-layout { display: grid; grid-template-columns: minmax(0, 1fr); gap: 0; align-items: start; }
    .page-shell .leads-layout[data-has-selection="true"] { grid-template-columns: minmax(0, 1fr) 360px; gap: 24px; }
    .page-shell .leads-layout:not([data-has-selection="true"]) .leads-panel { display: none; }
    /* Clears the sticky sub-nav instead of guessing 24px from the viewport top. */
    .page-shell .leads-panel { position: sticky; top: calc(var(--subnav-height, 61px) + 24px); max-height: calc(100vh - var(--subnav-height, 61px) - 48px); overflow-y: auto; }
    @media (max-width: 1180px) {
      .page-shell .leads-layout[data-has-selection="true"] { grid-template-columns: 1fr; }
      .page-shell .leads-panel { position: static; max-height: none; }
    }
    .page-shell .leads-row.selected td { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-row.selected .leads-open .material-symbols-outlined { color: var(--color-accent, #0072BA); }

    .page-shell .leads-det__head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .page-shell .leads-det__ava { width: 42px; height: 42px; font-size: 0.9rem; }
    .page-shell .leads-det__name { font-family: var(--font-display, inherit); font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
    .page-shell .leads-det__contact { display: flex; gap: 8px; margin: 4px 0 14px; flex-wrap: wrap; }
    .page-shell .leads-det__cbtn { display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 600; padding: 8px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); color: var(--color-accent-hover, #00558D); }
    .page-shell .leads-det__cbtn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .leads-det__cbtn .material-symbols-outlined { font-size: 17px; }
    .page-shell .leads-det__field { padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); display: flex; gap: 12px; }
    .page-shell .leads-det__k { flex: 0 0 96px; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .leads-det__v { flex: 1; font-size: 0.86rem; word-break: break-word; }
    .page-shell .leads-det__notes { white-space: pre-wrap; font-size: 0.84rem; line-height: 1.5; color: var(--color-text-muted, #4A5A78); background: var(--color-surface, #F4F7FB); border-radius: 10px; padding: 12px 14px; margin-top: 14px; }
    /* Destructive action sits below everything else and behind a divider, so it is
       never adjacent to the routine controls (status, contact) a user clicks often. */
    .page-shell .leads-det__actions { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--color-surface-2, #EAF0F7); }
    .page-shell .leads-det__del { display: inline-flex; align-items: center; gap: 6px; appearance: none; cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; padding: 7px 12px; border-radius: 9px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-danger, #DD4124); }
    .page-shell .leads-det__del:hover:not(:disabled) { background: var(--color-danger-soft, rgba(221,65,36,0.08)); border-color: var(--color-danger, #DD4124); }
    .page-shell .leads-det__del:disabled { opacity: 0.55; cursor: default; }
    .page-shell .leads-det__del .material-symbols-outlined { font-size: 17px; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function emptyState(icon, msg) {
  return `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
}
function statusSelect(l) {
  return `<select class="leads-status" data-id="${esc(l.id)}" data-act="status" onclick="event.stopPropagation()">
    ${STATUSES.map((s) => `<option value="${s}" ${l.status === s ? "selected" : ""}>${s[0]}${s.slice(1).toLowerCase()}</option>`).join("")}
  </select>`;
}
function rowHTML(l) {
  const magnet = state.magnetNames[l.magnet_guid] || (l.lead_source || "—");
  const tel = l.phone ? String(l.phone).replace(/[^\d+]/g, "") : "";
  return `
    <tr class="leads-row${String(l.id) === state.selectedId ? " selected" : ""}" data-id="${esc(l.id)}" tabindex="0" role="button" aria-label="Open lead ${esc(fullName(l))}">
      <td>
        <span class="leads-who">
          <span class="leads-avatar">${esc(initials(l))}</span>
          <span><span class="leads-name">${esc(fullName(l))}</span>${l.company ? `<span class="leads-sub">${esc(l.company)}</span>` : ""}</span>
        </span>
      </td>
      ${state.book ? `<td>${clientChipHTML(state.ownerNames[l.owner_guid] || "") || '<span class="leads-muted">—</span>'}</td>` : ""}
      <td>
        ${l.email ? `<a class="leads-contactlink" href="mailto:${esc(l.email)}" title="Email ${esc(l.email)}">${esc(l.email)}</a>` : '<span class="leads-muted">—</span>'}
        ${l.phone ? `<a class="leads-contactlink leads-sub" href="tel:${esc(tel)}" title="Call ${esc(l.phone)}">${esc(l.phone)}</a>` : ""}
      </td>
      <td>${l.product_interest ? esc(l.product_interest) : '<span class="leads-muted">—</span>'}</td>
      <td><span class="leads-sub">${esc(magnet)}</span>${l.utm_campaign || l.utm_source ? `<span class="leads-sub" title="Campaign / source">${esc(l.utm_campaign || l.utm_source)}${l.gclid ? ' <span class="leads-badge" data-s="QUALIFIED" style="font-size:0.58rem;padding:1px 6px">Ads</span>' : ""}</span>` : ""}</td>
      <td>${state.canManage ? statusSelect(l) : `<span class="leads-badge" data-s="${esc(l.status)}">${esc(l.status)}</span>`}</td>
      <td class="num leads-muted" style="white-space:nowrap" title="${esc(when(l))}">${isFresh(l) ? '<span class="leads-fresh" title="Captured in the last 24 hours"></span>' : ""}${esc(whenRel(l))}</td>
      <td class="leads-open" aria-hidden="true"><span class="material-symbols-outlined">chevron_right</span></td>
    </tr>`;
}
const clientPass = (l) => state.clientFilter === "ALL" || l.owner_guid === state.clientFilter;
function searchPass(l) {
  const q = state.search.trim().toLowerCase();
  if (!q) return true;
  const hay = [
    l.first_name,
    l.last_name,
    l.email,
    l.company,
    l.phone,
    l.product_interest,
    state.magnetNames[l.magnet_guid],
    state.book ? state.ownerNames[l.owner_guid] : "",
    // Attribution was searchable nowhere despite being rendered in the table (next to
    // the magnet name) and in the detail drawer, so typing a campaign you could see
    // on screen returned nothing. Also what makes the dashboard's Top Campaigns
    // drill-through work — it lands here by pre-filling this same search.
    l.utm_campaign,
    l.utm_source
  ].filter(Boolean).join(" ").toLowerCase();
  return q.split(/\s+/).every((w) => hay.includes(w));
}
const dayPass = (l) => !state.day || capturedTz(l).slice(0, 10) === state.day;
function filtered() {
  return state.leads.filter((l) => (state.filter === "ALL" || l.status === state.filter) && clientPass(l) && searchPass(l) && dayPass(l));
}
function dayChipHTML() {
  if (!state.day) return "";
  let label = state.day;
  try {
    label = (/* @__PURE__ */ new Date(`${state.day}T00:00:00Z`)).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  } catch {
  }
  return `<button class="leads-daychip" type="button" id="leads-dayclear" title="Show every day again">
    <span class="material-symbols-outlined" aria-hidden="true">event</span>${esc(label)}
    <span class="material-symbols-outlined leads-daychip__x" aria-hidden="true">close</span>
  </button>`;
}
const panelEmpty = () => emptyState("touch_app", "Click to see lead information.");
function render() {
  ensureStyles();
  ensurePortfolioStyles();
  const book = inPortfolio();
  return `
    <div class="page-shell" data-section="leads">
      ${book ? `
      <div class="dashboard-card" style="margin-bottom:24px">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="pf-picker-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>` : ""}
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Leads</h1>
          <p class="page-description">${book ? "All leads across your clients." : "All your magnet leads."}</p>
        </div>
        <button class="btn btn-secondary" id="leads-export" type="button" style="display:none">
          <span class="material-symbols-outlined" aria-hidden="true">download</span>
          Export CSV
        </button>
      </div>
      <div class="leads-layout">
        <div class="dashboard-card">
          <div class="card-body" id="leads-body">
            ${emptyState("hourglass_empty", "Loading leads…")}
          </div>
        </div>
        <aside class="dashboard-card leads-panel" aria-label="Lead detail">
          <div class="card-body" id="leads-panel-body">${panelEmpty()}</div>
        </aside>
      </div>
    </div>`;
}
async function init() {
  document.getElementById("leads-export")?.addEventListener("click", exportCsv);
  const pendingSearch = takeHandoff(HANDOFF.LEADS_SEARCH);
  const pendingDay = takeHandoff(HANDOFF.LEADS_DAY);
  if (pendingSearch || pendingDay) {
    state.search = pendingSearch || "";
    state.day = pendingDay || "";
    state.filter = "ALL";
    state.clientFilter = "ALL";
    state.shown = PAGE_SIZE;
  }
  if (inPortfolio()) {
    const fmtN = (n) => Number(n || 0).toLocaleString();
    initPicker(apiBase(), [
      { h: "Leads · wk", td: (r) => fmtN(r.leads.this_week) },
      { h: "Leads · total", td: (r) => fmtN(r.leads.total) },
      { h: "Compl.", td: (r) => r.completion_rate != null ? `${r.completion_rate}%` : "—" }
    ], { emptyMsg: "No client orgs yet. Create one under Clients first." });
  }
  await load();
}
async function load() {
  const body = document.getElementById("leads-body");
  if (!body) return;
  try {
    const [lres, mres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/m5mLead`),
      fetch(`${apiBase()}/m5t/v5/magnets`).catch(() => null)
    ]);
    const ldata = await lres.json().catch(() => ({}));
    if (!ldata.ok) throw new Error(ldata.message || "Failed to load");
    state.leads = (ldata.data || []).filter((l) => !["DELETED", "ARCHIVED"].includes(l.status));
    state.total = Number.isFinite(ldata.total) ? ldata.total : state.leads.length;
    state.truncated = state.total > (ldata.data || []).length;
    state.book = inPortfolio();
    state.ownerNames = state.book ? clientNameMap() : {};
    if (mres) {
      const mdata = await mres.json().catch(() => ({}));
      state.magnetNames = {};
      (mdata.magnets || []).forEach((m) => {
        state.magnetNames[m.guid] = m.name;
        if (m.owner_guid && m.owner_name && !state.ownerNames[m.owner_guid]) state.ownerNames[m.owner_guid] = m.owner_name;
      });
      state.canManage = !!mdata.canManage;
    }
  } catch (err) {
    body.innerHTML = emptyState("error", "Could not load your leads. Please try again.");
    return;
  }
  renderBody();
}
const colgroup = () => `
  <colgroup>
    <col style="width:22%">
    ${state.book ? '<col style="width:12%">' : ""}
    <col style="width:20%">
    <col style="width:13%">
    <col style="width:15%">
    <col style="width:150px">
    <col style="width:110px">
    <col style="width:40px">
  </colgroup>`;
function renderBody() {
  const body = document.getElementById("leads-body");
  const exportBtn = document.getElementById("leads-export");
  if (!body) return;
  if (exportBtn) exportBtn.style.display = state.leads.length ? "" : "none";
  if (!state.leads.length) {
    body.innerHTML = emptyState("inbox", "No leads captured yet. Publish a magnet and share it to start collecting.");
    renderPanel();
    return;
  }
  const scoped = state.leads.filter(clientPass);
  const counts = { ALL: scoped.length };
  STATUSES.forEach((s) => {
    counts[s] = scoped.filter((l) => l.status === s).length;
  });
  const clients = state.book ? [...new Set(state.leads.map((l) => l.owner_guid).filter(Boolean))].map((g) => ({ guid: g, name: state.ownerNames[g] || g })).sort((a, b) => a.name.localeCompare(b.name)) : [];
  body.innerHTML = `
    <div class="leads-bar">
      <div class="leads-filter">
        ${["ALL", ...STATUSES].map((s) => `<button data-filter="${s}" class="${state.filter === s ? "active" : ""}">${s === "ALL" ? "All" : s[0] + s.slice(1).toLowerCase()}${counts[s] ? `<span class="leads-pillnum">${counts[s]}</span>` : ""}</button>`).join("")}
      </div>
      ${state.book && clients.length > 1 ? `
      <select class="leads-clientsel" id="leads-clientsel" aria-label="Filter by client">
        <option value="ALL">All clients</option>
        ${clients.map((c) => `<option value="${esc(c.guid)}" ${state.clientFilter === c.guid ? "selected" : ""}>${esc(c.name)}</option>`).join("")}
      </select>` : ""}
      ${dayChipHTML()}
      <span class="leads-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="leads-search" id="leads-search" type="search" placeholder="Search leads" value="${esc(state.search)}" aria-label="Search leads" />
      </span>
      <span class="leads-count" id="leads-countlbl"></span>
    </div>
    <div id="leads-tablezone"></div>`;
  body.querySelector(".leads-filter")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    state.shown = PAGE_SIZE;
    renderBody();
  });
  body.querySelector("#leads-clientsel")?.addEventListener("change", (e) => {
    state.clientFilter = e.target.value;
    state.shown = PAGE_SIZE;
    renderBody();
  });
  body.querySelector("#leads-dayclear")?.addEventListener("click", () => {
    state.day = "";
    state.shown = PAGE_SIZE;
    renderBody();
  });
  body.querySelector("#leads-search")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    state.shown = PAGE_SIZE;
    renderTable();
  });
  renderTable();
}
function renderTable() {
  const zone = document.getElementById("leads-tablezone");
  const countLbl = document.getElementById("leads-countlbl");
  if (!zone) return;
  const rows = filtered();
  const visible = rows.slice(0, state.shown);
  const cols = state.book ? 8 : 7;
  if (countLbl) countLbl.textContent = `${rows.length} of ${state.leads.length}`;
  zone.innerHTML = `
    <div class="leads-tablewrap">
      <table class="leads-table${state.book ? " leads-table--book" : ""}">
        ${colgroup()}
        <thead><tr><th>Name</th>${state.book ? "<th>Client</th>" : ""}<th>Contact</th><th>Interest</th><th>Magnet</th><th>Status</th><th class="num">Captured</th><th></th></tr></thead>
        <tbody id="leads-tbody">${visible.map(rowHTML).join("") || `<tr><td colspan="${cols}"><div class="leads-muted" style="padding:14px 4px">${state.search.trim() ? "No leads match your search." : `No ${state.filter.toLowerCase()} leads.`}</div></td></tr>`}</tbody>
      </table>
    </div>
    ${expandButtonHTML({ total: rows.length, shown: state.shown, noun: "leads" })}
    ${state.truncated ? `<div class="leads-muted" style="padding:10px 4px">Showing your ${state.leads.length.toLocaleString()} most recent leads of ${state.total.toLocaleString()}. Search and filters cover these; older leads aren't included yet.</div>` : ""}`;
  zone.querySelector('[data-action="list-expand"]')?.addEventListener("click", () => {
    state.shown += LIST_STEP;
    renderTable();
  });
  zone.querySelector("#leads-tbody")?.addEventListener("change", onStatusChange);
  zone.querySelector("#leads-tbody")?.addEventListener("click", (e) => {
    if (e.target.closest(".leads-status, a.leads-contactlink")) return;
    const tr = e.target.closest(".leads-row");
    if (tr) selectLead(tr.dataset.id);
  });
  zone.querySelector("#leads-tbody")?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const tr = e.target.closest(".leads-row");
    if (tr && e.target === tr) {
      e.preventDefault();
      selectLead(tr.dataset.id);
    }
  });
}
async function onStatusChange(e) {
  const sel = e.target.closest(".leads-status");
  if (!sel) return;
  const id = sel.dataset.id;
  const lead = state.leads.find((l) => String(l.id) === String(id));
  const next = sel.value;
  const prev = lead?.status;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mLead/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next })
    });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    if (lead) lead.status = next;
    toast(`Marked ${next[0]}${next.slice(1).toLowerCase()}`, "success");
  } catch {
    sel.value = prev || "NEW";
    toast("Could not update status", "danger");
    return;
  }
  try {
    if (String(id) === state.selectedId) renderPanel();
    if (state.filter !== "ALL") renderBody();
  } catch (e2) {
    console.warn("[leads] re-render after status change failed:", e2);
  }
}
function selectLead(id) {
  state.selectedId = String(id);
  document.querySelectorAll(".leads-row").forEach((tr) => tr.classList.toggle("selected", tr.dataset.id === state.selectedId));
  renderPanel();
}
function lastTag(l, name) {
  const tags = Array.isArray(l.tags) ? l.tags : [];
  for (let i = tags.length - 1; i >= 0; i--) {
    if (tags[i] && tags[i].tag === name && tags[i].value != null) return String(tags[i].value);
  }
  return "";
}
function appointmentOf(l) {
  const start = lastTag(l, "appointment_start");
  if (!start) return null;
  const status = lastTag(l, "appointment_status") || "booked";
  const tz = lastTag(l, "appointment_timezone");
  const type = lastTag(l, "appointment_event_type");
  const d = new Date(start);
  let when2 = start;
  if (!Number.isNaN(d.getTime())) {
    const opts = { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" };
    try {
      when2 = new Intl.DateTimeFormat(void 0, tz ? { ...opts, timeZone: tz } : opts).format(d);
    } catch {
      when2 = new Intl.DateTimeFormat(void 0, opts).format(d);
    }
  }
  return { when: when2, status, type, start };
}
const APPT_BADGE = {
  booked: ["QUALIFIED", "Booked"],
  rescheduled: ["WORKING", "Rescheduled"],
  canceled: ["CANCELED", "Canceled"]
};
function callOf(l) {
  const tags = Array.isArray(l.tags) ? l.tags : [];
  let group = null;
  for (const t of tags) {
    if (!t || !t.tag) continue;
    if (t.tag === "callrail_call_id") {
      group = {};
      continue;
    }
    if (group && t.tag.indexOf("call_") === 0 && t.value != null) group[t.tag] = String(t.value);
  }
  if (!group || !group.call_started) return null;
  const started = group.call_started;
  const d = new Date(started);
  let when2 = started;
  if (!Number.isNaN(d.getTime())) {
    when2 = new Intl.DateTimeFormat(void 0, { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(d);
  }
  const secs = Number(group.call_duration) || 0;
  const dur = secs ? secs < 60 ? `${secs}s` : `${Math.floor(secs / 60)}m ${secs % 60}s` : "";
  return {
    when: when2,
    dur,
    source: group.call_source || "",
    answered: group.call_answered || "",
    recording: group.call_recording_player || "",
    started
  };
}
function renderPanel() {
  const el = document.getElementById("leads-panel-body");
  if (!el) return;
  const l = state.leads.find((x) => String(x.id) === state.selectedId);
  const layout = document.querySelector(".leads-layout");
  if (layout) layout.dataset.hasSelection = l ? "true" : "false";
  if (!l) {
    el.innerHTML = panelEmpty();
    return;
  }
  const magnet = state.magnetNames[l.magnet_guid] || l.lead_source || "—";
  const ap = appointmentOf(l);
  const [apS, apLabel] = ap ? APPT_BADGE[ap.status] || APPT_BADGE.booked : ["", ""];
  const cl = callOf(l);
  const field = (k, v) => v ? `<div class="leads-det__field"><span class="leads-det__k">${esc(k)}</span><span class="leads-det__v">${esc(v)}</span></div>` : "";
  el.innerHTML = `
    <div class="leads-det__head">
      <span class="leads-avatar leads-det__ava">${esc(initials(l))}</span>
      <div>
        <div class="leads-det__name">${esc(fullName(l))}</div>
        <span class="leads-badge" data-s="${esc(l.status)}">${esc(l.status)}</span>
      </div>
    </div>
    <div class="leads-det__contact">
      ${l.email ? `<a class="leads-det__cbtn" href="mailto:${esc(l.email)}"><span class="material-symbols-outlined" aria-hidden="true">mail</span>Email</a>` : ""}
      ${l.phone ? `<a class="leads-det__cbtn" href="tel:${esc(String(l.phone).replace(/[^\d+]/g, ""))}"><span class="material-symbols-outlined" aria-hidden="true">call</span>Call</a>` : ""}
    </div>
    ${field("Email", l.email)}
    ${field("Phone", l.phone)}
    ${field("Mobile", l.mobile)}
    ${field("Company", l.company)}
    ${field("Title", l.title)}
    ${field("Interest", l.product_interest)}
    ${field("Location", [l.city, l.state].filter(Boolean).join(", "))}
    ${field("Channel", l.lead_source)}
    ${state.book ? field("Client", state.ownerNames[l.owner_guid] || "") : ""}
    ${field("Magnet", magnet)}
    ${field("Captured", when(l))}
    ${ap ? `<div class="leads-det__field"><span class="leads-det__k">Appointment</span><span class="leads-det__v">${esc([ap.when, ap.type].filter(Boolean).join(" · "))} <span class="leads-badge" data-s="${esc(apS)}">${esc(apLabel)}</span></span></div>` : ""}
    ${cl ? `<div class="leads-det__field"><span class="leads-det__k">Last call</span><span class="leads-det__v">${esc([cl.when, cl.dur, cl.source].filter(Boolean).join(" · "))} <span class="leads-badge" data-s="${cl.answered === "no" ? "WORKING" : "QUALIFIED"}">${cl.answered === "no" ? "Missed" : "Answered"}</span>${cl.recording && /^https:\/\//i.test(cl.recording) ? ` <a href="${esc(cl.recording)}" target="_blank" rel="noopener">Recording</a>` : ""}</span></div>` : ""}
    ${field("Campaign", l.utm_campaign)}
    ${field("Ad source", [l.utm_source, l.utm_medium].filter(Boolean).join(" / "))}
    ${l.gclid ? `<div class="leads-det__field"><span class="leads-det__k">Paid click</span><span class="leads-det__v"><span class="leads-badge" data-s="QUALIFIED">Google Ads</span></span></div>` : ""}
    ${l.description ? `<div class="leads-det__notes">${esc(l.description)}</div>` : ""}
    ${state.canManage ? `
      <div class="leads-det__actions">
        <button type="button" class="leads-det__del" data-action="delete-lead" data-id="${esc(l.id)}">
          <span class="material-symbols-outlined" aria-hidden="true">delete</span>Remove lead
        </button>
      </div>` : ""}`;
  el.querySelector('[data-action="delete-lead"]')?.addEventListener("click", onDeleteLead);
}
async function onDeleteLead(e) {
  const id = e.currentTarget?.dataset?.id;
  const lead = state.leads.find((x) => String(x.id) === String(id));
  if (!lead) return;
  const who = fullName(lead);
  if (!window.confirm(
    `Remove ${who} from your leads?

This takes the lead out of your dashboard, lists and exports. The record is kept in our system, and this address can be captured again if they come back through one of your magnets.`
  )) return;
  const btn = e.currentTarget;
  btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mLead/${encodeURIComponent(id)}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || `HTTP ${res.status}`);
    state.leads = state.leads.filter((x) => String(x.id) !== String(id));
    state.selectedId = null;
    toast(`${who} removed`, "success");
    renderBody();
  } catch (err) {
    btn.disabled = false;
    toast("Could not remove that lead. Please try again.", "danger");
  }
}
function exportCsv() {
  const rows = filtered();
  if (!rows.length) {
    toast("Nothing to export", "info");
    return;
  }
  const cols = ["first_name", "last_name", "email", "phone", "company", "product_interest", "lead_source", "utm_source", "utm_medium", "utm_campaign", "gclid", "status"];
  const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const header = [...state.book ? ["client"] : [], ...cols, "magnet", "captured", "appointment", "last_call"];
  const lines = [header.join(",")];
  for (const l of rows) {
    const ap = appointmentOf(l);
    const cl = callOf(l);
    lines.push([
      ...state.book ? [cell(state.ownerNames[l.owner_guid] || "")] : [],
      ...cols.map((c) => cell(l[c])),
      cell(state.magnetNames[l.magnet_guid] || l.lead_source || ""),
      cell(when(l)),
      cell(ap ? `${ap.start} (${ap.status})` : ""),
      cell(cl ? `${cl.started} (${cl.answered === "no" ? "missed" : "answered"})` : "")
    ].join(","));
  }
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads-${state.filter.toLowerCase()}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(`Exported ${rows.length} lead${rows.length === 1 ? "" : "s"}`, "success");
}
export {
  init,
  render
};
//# sourceMappingURL=leads-route-DIutAyLV.js.map
