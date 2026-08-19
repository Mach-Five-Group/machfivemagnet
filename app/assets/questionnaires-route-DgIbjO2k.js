import { A as AuthController, c as capList, P as PubSub, b as AppBroadcast } from "./index.js";
import { e as ensureQuestionnaireAnswerStyles, f as fmtDateTime, a as answersMetaHtml, b as answersHtml } from "./questionnaireAnswers-BUs4-Lnv.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const MANAGED_CHANNEL = "managed_client";
const STATUSES = [
  ["ALL", "All"],
  ["NOT_SENT", "Not sent"],
  ["DRAFT", "Awaiting response"],
  ["SUBMITTED", "Submitted"],
  ["CANCELLED", "Cancelled"]
];
const STATUS_LABEL = Object.fromEntries(STATUSES);
const state = { clients: [], responses: [], filter: "ALL", search: "", openGuid: null };
let stylesInjected = false;
function ensureStyles() {
  ensureQuestionnaireAnswerStyles();
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-questionnaires-styles";
  style.textContent = `
    .page-shell .qz-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .qz-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; flex-wrap: wrap; }
    .page-shell .qz-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .qz-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .qz-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .qz-searchwrap { position: relative; margin-left: auto; }
    .page-shell .qz-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .qz-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 220px; }
    .page-shell .qz-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .qz-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }

    .page-shell .qz-tablewrap { overflow-x: auto; }
    .page-shell .qz-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 720px; }
    .page-shell .qz-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .qz-table td { padding: 11px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .qz-table tr:last-child td { border-bottom: 0; }
    .page-shell .qz-row--open { cursor: pointer; }
    .page-shell .qz-row--open:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .qz-client { font-weight: 600; }
    .page-shell .qz-earlier { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); font-weight: 400; margin-left: 6px; }
    .page-shell .qz-when { color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .qz-badge { display: inline-block; white-space: nowrap; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .qz-badge[data-s="SUBMITTED"] { background: #DCFCE7; color: #047857; }
    .page-shell .qz-badge[data-s="DRAFT"] { background: #FEF3C7; color: #92400E; }
    .page-shell .qz-badge[data-s="CANCELLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
    .page-shell .qz-act { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 5px 11px; border-radius: 8px; white-space: nowrap; }
    .page-shell .qz-act:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell td.qz-actcell { text-align: right; }

    /* Detail drawer — same shape as the Conversations drawer, deliberately. */
    .qz-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .qz-drawer-scrim.open { opacity: 1; }
    .qz-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(560px, 96vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .qz-drawer.open { transform: translateX(0); }
    .qz-drawer__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qz-drawer__title { font-size: 1.02rem; font-weight: 600; }
    .qz-drawer__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .qz-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; flex: 0 0 auto; }
    .qz-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .qz-drawer__body { flex: 1 1 auto; overflow-y: auto; padding: 20px; }
    html.ff-no-animations .qz-drawer, html.ff-no-animations .qz-drawer-scrim { transition: none; }
    @media (prefers-reduced-motion: reduce) { .qz-drawer, .qz-drawer-scrim { transition: none; } }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function rows() {
  return state.clients.map((c) => {
    const mine = state.responses.filter((r) => r.owner_guid === c.guid);
    const latest = mine[0] || null;
    return {
      guid: c.guid,
      name: c.caption || c.name || c.guid,
      latest,
      earlier: Math.max(0, mine.length - 1),
      status: latest ? latest.status : "NOT_SENT"
    };
  });
}
function visibleRows() {
  const q = state.search.trim().toLowerCase();
  return rows().filter((r) => (state.filter === "ALL" || r.status === state.filter) && (!q || r.name.toLowerCase().includes(q)));
}
const whenOf = (r, field) => r?.latest?.[field] ? fmtDateTime(r.latest[field]) : "—";
function rowHTML(r) {
  const openable = r.status === "SUBMITTED";
  const action = r.status === "SUBMITTED" ? `<button class="qz-act" type="button" data-act="open" data-guid="${esc(r.latest.guid)}">Read answers</button>` : r.status === "DRAFT" ? `<button class="qz-act" type="button" data-act="copy" data-url="${esc(r.latest.url || "")}">Copy link</button>` : `<a class="qz-act" href="#/clients">Go to client</a>`;
  return `<tr class="qz-row${openable ? " qz-row--open" : ""}"${openable ? ` data-open-guid="${esc(r.latest.guid)}"` : ""}>
    <td><span class="qz-client">${esc(r.name)}</span>${r.earlier ? `<span class="qz-earlier">${r.earlier} earlier</span>` : ""}</td>
    <td><span class="qz-badge" data-s="${esc(r.status)}">${esc(STATUS_LABEL[r.status] || r.status)}</span></td>
    <td class="qz-when">${esc(whenOf(r, "created_tz"))}</td>
    <td class="qz-when">${esc(whenOf(r, "submitted_tz"))}</td>
    <td class="qz-actcell">${action}</td>
  </tr>`;
}
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="questionnaires">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Questionnaires</h1>
          <p class="page-description">Kickoff questionnaire status for every client, and the answers once they come back.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">fact_check</span> By client</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="qz-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>
    </div>`;
}
async function init() {
  await load();
}
async function load() {
  const body = document.getElementById("qz-body");
  if (!body) return;
  try {
    const [cres, rres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/acctGroup`),
      fetch(`${apiBase()}/m5t/v5/m5mQuestionnaireResponse`)
    ]);
    const cdata = await cres.json().catch(() => ({}));
    const rdata = await rres.json().catch(() => ({}));
    if (!cres.ok || !rres.ok) throw new Error("load failed");
    state.clients = (cdata.data || []).filter((g) => g.class === MANAGED_CHANNEL && !["DELETED", "ARCHIVED"].includes(g.status)).sort((a, b) => String(a.caption || "").localeCompare(String(b.caption || "")));
    state.responses = rdata.data || [];
  } catch {
    body.innerHTML = emptyState("error", "Could not load questionnaires. Please try again.");
    return;
  }
  renderBody();
}
function capQzRows() {
  const t = document.getElementById("qz-tbody");
  if (t) capList(t, { rowSelector: "tr.qz-row", noun: "clients", controlHost: t.closest(".qz-tablewrap") || t.parentElement });
}
function renderBody() {
  const body = document.getElementById("qz-body");
  if (!body) return;
  if (!state.clients.length) {
    body.innerHTML = emptyState("groups", "No clients yet. Add a client first, then send them a kickoff questionnaire.");
    return;
  }
  const all = rows();
  const counts = { ALL: all.length };
  STATUSES.slice(1).forEach(([k]) => {
    counts[k] = all.filter((r) => r.status === k).length;
  });
  const visible = visibleRows();
  body.innerHTML = `
    <div class="qz-bar">
      <div class="qz-filter">
        ${STATUSES.map(([k, label]) => `<button data-filter="${k}" class="${state.filter === k ? "active" : ""}">${esc(label)}${counts[k] ? `<span class="qz-pillnum">${counts[k]}</span>` : ""}</button>`).join("")}
      </div>
      <span class="qz-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="qz-search" id="qz-search" type="search" placeholder="Search clients" value="${esc(state.search)}" aria-label="Search clients" />
      </span>
      <span class="qz-count">${visible.length} of ${all.length}</span>
    </div>
    <div class="qz-tablewrap">
      <table class="qz-table">
        <thead><tr><th>Client</th><th>Status</th><th>Sent</th><th>Submitted</th><th></th></tr></thead>
        <tbody id="qz-tbody">${visible.length ? visible.map(rowHTML).join("") : `<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">${state.search.trim() ? "No clients match your search." : `No clients with status “${esc(STATUS_LABEL[state.filter] || state.filter)}”.`}</div></td></tr>`}</tbody>
      </table>
    </div>`;
  capQzRows();
  body.querySelector(".qz-filter")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    renderBody();
  });
  body.querySelector("#qz-search")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderTableOnly();
  });
  body.querySelector("#qz-tbody")?.addEventListener("click", onRowClick);
}
function renderTableOnly() {
  const tbody = document.getElementById("qz-tbody");
  if (!tbody) return;
  const visible = visibleRows();
  tbody.innerHTML = visible.length ? visible.map(rowHTML).join("") : `<tr><td colspan="5"><div class="qz-when" style="padding:14px 4px">No clients match your search.</div></td></tr>`;
  capQzRows();
  const count = document.querySelector(".qz-count");
  if (count) count.textContent = `${visible.length} of ${rows().length}`;
}
function onRowClick(e) {
  const copyBtn = e.target.closest('[data-act="copy"]');
  if (copyBtn) {
    e.stopPropagation();
    const url = copyBtn.dataset.url;
    if (!url) {
      toast("No link on this questionnaire yet.", "warning");
      return;
    }
    navigator.clipboard?.writeText(url).then(
      () => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy link";
        }, 1500);
      },
      () => toast("Could not copy the link.", "error")
    );
    return;
  }
  const openBtn = e.target.closest('[data-act="open"]');
  const row = e.target.closest("[data-open-guid]");
  const guid = openBtn?.dataset.guid || row?.dataset.openGuid;
  if (guid) openDrawer(guid);
}
async function openDrawer(guid) {
  state.openGuid = guid;
  const scrim = document.createElement("div");
  scrim.className = "qz-drawer-scrim";
  const drawer = document.createElement("aside");
  drawer.className = "qz-drawer";
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-label", "Questionnaire answers");
  drawer.innerHTML = `
    <div class="qz-drawer__head">
      <div><div class="qz-drawer__title" id="qz-dtitle">Questionnaire</div><div class="qz-drawer__sub" id="qz-dsub"></div></div>
      <button class="qz-drawer__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="qz-drawer__body" id="qz-dbody">${emptyState("hourglass_empty", "Loading answers…")}</div>`;
  document.body.append(scrim, drawer);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    drawer.classList.add("open");
  });
  const close = () => {
    state.openGuid = null;
    scrim.classList.remove("open");
    drawer.classList.remove("open");
    setTimeout(() => {
      scrim.remove();
      drawer.remove();
    }, 220);
    document.removeEventListener("keydown", onKey);
  };
  function onKey(ev) {
    if (ev.key === "Escape") {
      ev.preventDefault();
      close();
    }
  }
  document.addEventListener("keydown", onKey);
  scrim.addEventListener("click", close);
  drawer.querySelector(".qz-drawer__close").addEventListener("click", close);
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(guid)}`);
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) throw new Error(json.error || "load failed");
    const data = json.data || {};
    const clientName = state.clients.find((c) => c.guid === data.owner_guid)?.caption || "Client";
    drawer.querySelector("#qz-dtitle").textContent = clientName;
    const dsub = data.submitted_tz ? `Submitted ${fmtDateTime(data.submitted_tz)}` : "Not yet submitted";
    drawer.querySelector("#qz-dsub").textContent = data.locked_tz ? `${dsub} · Finalized` : dsub;
    drawer.querySelector("#qz-dbody").innerHTML = answersMetaHtml(data) + answersHtml(data, { emptyLabel: "Not answered" });
  } catch {
    drawer.querySelector("#qz-dbody").innerHTML = emptyState("error", "Could not load these answers. Please try again.");
  }
}
const questionnairesRoute = { render, init };
export {
  questionnairesRoute as default,
  init,
  render
};
//# sourceMappingURL=questionnaires-route-DgIbjO2k.js.map
