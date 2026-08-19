import { P as PubSub, b as AppBroadcast, A as AuthController, c as capList } from "./index.js";
import { e as ensureQuestionnaireAnswerStyles, f as fmtDateTime, a as answersMetaHtml, d as answerDisplay, c as collectAnswers, g as editFieldHtml } from "./questionnaireAnswers-BUs4-Lnv.js";
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
  ["DRAFT", "In progress"],
  ["SENT", "Awaiting approval"],
  ["SUBMITTED", "Returned"],
  ["CANCELLED", "Cancelled"]
];
const STATUS_LABEL = Object.fromEntries(STATUSES);
const state = { rows: [], clients: [], templates: [], filter: "ALL", search: "" };
let stylesInjected = false;
function ensureStyles() {
  ensureQuestionnaireAnswerStyles();
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-deliverables-styles";
  style.textContent = `
    .page-shell .dz-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 14px; }
    .page-shell .dz-filter { display: inline-flex; gap: 4px; background: var(--color-surface, #F4F7FB); border-radius: 999px; padding: 3px; flex-wrap: wrap; }
    .page-shell .dz-filter button { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 13px; border-radius: 999px; color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-filter button.active { background: var(--color-bg, #fff); color: var(--color-accent-hover, #00558D); box-shadow: 0 1px 2px rgba(11,18,32,0.12); }
    .page-shell .dz-pillnum { font-weight: 500; opacity: 0.65; margin-left: 3px; }
    .page-shell .dz-searchwrap { position: relative; margin-left: auto; }
    .page-shell .dz-searchwrap .material-symbols-outlined { position: absolute; left: 9px; top: 50%; transform: translateY(-50%); font-size: 17px; color: var(--color-text-subtle, #6C7C9A); pointer-events: none; }
    .page-shell .dz-search { font: inherit; font-size: 0.84rem; padding: 7px 12px 7px 32px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 220px; }
    .page-shell .dz-search:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .dz-count { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .dz-new { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: #fff; background: var(--color-primary-600, #0072BA); padding: 8px 14px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .dz-new:hover { background: var(--color-primary-700, #00558D); }
    .page-shell .dz-new .material-symbols-outlined { font-size: 1.05rem; }

    .page-shell .dz-tablewrap { overflow-x: auto; }
    .page-shell .dz-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 760px; }
    .page-shell .dz-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .dz-table td { padding: 11px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; }
    .page-shell .dz-table tr:last-child td { border-bottom: 0; }
    .page-shell .dz-row--open { cursor: pointer; }
    .page-shell .dz-row--open:hover td { background: var(--color-surface, #F7FAFD); }
    .page-shell .dz-client { font-weight: 600; }
    .page-shell .dz-kind { color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-rev { font-size: 0.68rem; font-weight: 700; color: var(--color-text-subtle, #6C7C9A); margin-left: 6px; white-space: nowrap; }
    .page-shell .dz-when { color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .dz-badge { display: inline-block; white-space: nowrap; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .dz-badge[data-s="SUBMITTED"] { background: #DCFCE7; color: #047857; }
    .page-shell .dz-badge[data-s="SENT"] { background: #FEF3C7; color: #92400E; }
    .page-shell .dz-badge[data-s="DRAFT"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }
    .page-shell .dz-badge[data-s="CANCELLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
    .page-shell .dz-act { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 5px 11px; border-radius: 8px; white-space: nowrap; }
    .page-shell .dz-act:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell td.dz-actcell { text-align: right; }

    /* Drawer — same shape as the Questionnaires/Conversations drawers, wider:
       the authoring form is a real document. */
    .dz-drawer-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.4); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .dz-drawer-scrim.open { opacity: 1; }
    .dz-drawer { position: fixed; top: 0; right: 0; height: 100%; width: min(680px, 96vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); box-shadow: -12px 0 40px rgba(11,18,32,0.25); z-index: 2001; transform: translateX(100%); transition: transform 0.22s ease; display: flex; flex-direction: column; }
    .dz-drawer.open { transform: translateX(0); }
    .dz-drawer__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .dz-drawer__title { font-size: 1.02rem; font-weight: 600; }
    .dz-drawer__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .dz-drawer__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; flex: 0 0 auto; }
    .dz-drawer__close:hover { background: var(--color-surface, #F4F7FB); }
    .dz-drawer__body { flex: 1 1 auto; overflow-y: auto; padding: 20px; }
    .dz-drawer__foot { flex: 0 0 auto; display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding: 14px 20px; border-top: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7FAFD); }
    html.ff-no-animations .dz-drawer, html.ff-no-animations .dz-drawer-scrim { transition: none; }
    @media (prefers-reduced-motion: reduce) { .dz-drawer, .dz-drawer-scrim { transition: none; } }

    .dz-drawer .dz-intro { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: -4px 0 12px; }
    .dz-drawer .dz-note { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 14px; }
    .dz-drawer .dz-field { margin-bottom: 14px; }
    .dz-drawer .dz-field > label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 5px; }
    .dz-drawer .dz-help { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 5px; }
    .dz-drawer select, .dz-drawer input[type="email"] {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.88rem; padding: 8px 10px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 8px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .dz-drawer .dz-btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; color: #fff; background: var(--color-primary-600, #0072BA); padding: 9px 16px; border-radius: 9px; }
    .dz-drawer .dz-btn:hover { background: var(--color-primary-700, #00558D); }
    .dz-drawer .dz-btn[disabled] { opacity: 0.6; cursor: default; }
    .dz-drawer .dz-btn--ghost { appearance: none; cursor: pointer; font: inherit; font-size: 0.84rem; font-weight: 600; padding: 9px 14px; border-radius: 9px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .dz-drawer .dz-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .dz-drawer .dz-btn--danger { color: var(--color-danger, #DD4124); border-color: var(--color-danger-soft, #FBE3DE); }
    .dz-drawer .dz-feedback { background: var(--color-warning-soft, #FDF6E3); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px 14px; margin: 0 0 16px; }
    .dz-drawer .dz-feedback__title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-warning-text, #92400E); margin: 0 0 8px; }
    .dz-drawer .dz-feedback .qm-qa { margin-bottom: 8px; }
    .dz-drawer .dz-linkrow { display: flex; gap: 8px; align-items: center; margin: 0 0 14px; }
    .dz-drawer .dz-linkrow input { flex: 1 1 auto; font: inherit; font-size: 0.78rem; padding: 8px 10px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .dz-drawer .dz-sendrow { display: flex; gap: 8px; align-items: center; flex: 1 1 auto; }
    .dz-drawer .dz-sendrow input { flex: 1 1 auto; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function visibleRows() {
  const q = state.search.trim().toLowerCase();
  return state.rows.filter((r) => (state.filter === "ALL" || r.status === state.filter) && (!q || String(r.owner_name || "").toLowerCase().includes(q)));
}
function actionHtml(r) {
  if (r.status === "DRAFT") return `<button class="dz-act" type="button" data-act="open" data-guid="${esc(r.guid)}">Edit</button>`;
  if (r.status === "SENT") return `<button class="dz-act" type="button" data-act="copy" data-url="${esc(r.url || "")}">Copy link</button>`;
  if (r.status === "SUBMITTED") return `<button class="dz-act" type="button" data-act="open" data-guid="${esc(r.guid)}">Read review</button>`;
  return '<span class="dz-when">—</span>';
}
function rowHTML(r) {
  const openable = r.status !== "CANCELLED";
  return `<tr class="dz-row${openable ? " dz-row--open" : ""}"${openable ? ` data-open-guid="${esc(r.guid)}"` : ""}>
    <td><span class="dz-client">${esc(r.owner_name || r.owner_guid)}</span></td>
    <td><span class="dz-kind">${esc(r.template_name || r.kind || "")}</span>${Number(r.revision) > 1 ? `<span class="dz-rev">Rev ${esc(r.revision)}</span>` : ""}</td>
    <td><span class="dz-badge" data-s="${esc(r.status)}">${esc(STATUS_LABEL[r.status] || r.status)}</span></td>
    <td class="dz-when">${r.sent_tz ? esc(fmtDateTime(r.sent_tz)) : "—"}</td>
    <td class="dz-when">${r.submitted_tz ? esc(fmtDateTime(r.submitted_tz)) : "—"}</td>
    <td class="dz-actcell">${actionHtml(r)}</td>
  </tr>`;
}
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="deliverables">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Deliverables</h1>
          <p class="page-description">Plans and sign-off status for every client.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">approval</span> All deliverables</h2>
          <button class="dz-new" type="button" id="dz-new"><span class="material-symbols-outlined" aria-hidden="true">add</span>New deliverable</button>
        </div>
        <div class="card-body" id="dz-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>
    </div>`;
}
async function init() {
  document.getElementById("dz-new")?.addEventListener("click", openNewDrawer);
  await load();
}
async function load() {
  const body = document.getElementById("dz-body");
  if (!body) return;
  try {
    const [dres, cres, tres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/m5mDeliverable`),
      fetch(`${apiBase()}/m5t/v5/acctGroup`),
      fetch(`${apiBase()}/m5t/v5/m5mDeliverable/templates`)
    ]);
    const ddata = await dres.json().catch(() => ({}));
    const cdata = await cres.json().catch(() => ({}));
    const tdata = await tres.json().catch(() => ({}));
    if (!dres.ok || !cres.ok || !tres.ok) throw new Error("load failed");
    state.rows = ddata.data || [];
    state.clients = (cdata.data || []).filter((g) => g.class === MANAGED_CHANNEL && !["DELETED", "ARCHIVED"].includes(g.status)).sort((a, b) => String(a.caption || "").localeCompare(String(b.caption || "")));
    state.templates = tdata.data || [];
  } catch {
    body.innerHTML = emptyState("error", "Could not load deliverables. Please try again.");
    return;
  }
  renderBody();
}
function capDzRows() {
  const t = document.getElementById("dz-tbody");
  if (t) capList(t, { rowSelector: "tr.dz-row", noun: "deliverables", controlHost: t.closest(".dz-tablewrap") || t.parentElement });
}
function renderBody() {
  const body = document.getElementById("dz-body");
  if (!body) return;
  if (!state.clients.length && !state.rows.length) {
    body.innerHTML = emptyState("groups", "No clients yet. Add a client first, then author their first deliverable.");
    return;
  }
  if (!state.rows.length) {
    body.innerHTML = emptyState("approval", "No deliverables yet. Author the first one with New deliverable.");
    return;
  }
  const counts = { ALL: state.rows.length };
  STATUSES.slice(1).forEach(([k]) => {
    counts[k] = state.rows.filter((r) => r.status === k).length;
  });
  const visible = visibleRows();
  body.innerHTML = `
    <div class="dz-bar">
      <div class="dz-filter">
        ${STATUSES.map(([k, label]) => `<button data-filter="${k}" class="${state.filter === k ? "active" : ""}">${esc(label)}${counts[k] ? `<span class="dz-pillnum">${counts[k]}</span>` : ""}</button>`).join("")}
      </div>
      <span class="dz-searchwrap">
        <span class="material-symbols-outlined" aria-hidden="true">search</span>
        <input class="dz-search" id="dz-search" type="search" placeholder="Search clients" value="${esc(state.search)}" aria-label="Search clients" />
      </span>
      <span class="dz-count">${visible.length} of ${state.rows.length}</span>
    </div>
    <div class="dz-tablewrap">
      <table class="dz-table">
        <thead><tr><th>Client</th><th>Deliverable</th><th>Status</th><th>Sent</th><th>Returned</th><th></th></tr></thead>
        <tbody id="dz-tbody">${visible.length ? visible.map(rowHTML).join("") : `<tr><td colspan="6"><div class="dz-when" style="padding:14px 4px">${state.search.trim() ? "No deliverables match your search." : `No deliverables with status “${esc(STATUS_LABEL[state.filter] || state.filter)}”.`}</div></td></tr>`}</tbody>
      </table>
    </div>`;
  capDzRows();
  body.querySelector(".dz-filter")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    state.filter = btn.dataset.filter;
    renderBody();
  });
  body.querySelector("#dz-search")?.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderTableOnly();
  });
  body.querySelector("#dz-tbody")?.addEventListener("click", onRowClick);
}
function renderTableOnly() {
  const tbody = document.getElementById("dz-tbody");
  if (!tbody) return;
  const visible = visibleRows();
  tbody.innerHTML = visible.length ? visible.map(rowHTML).join("") : `<tr><td colspan="6"><div class="dz-when" style="padding:14px 4px">No deliverables match your search.</div></td></tr>`;
  capDzRows();
  const count = document.querySelector(".dz-count");
  if (count) count.textContent = `${visible.length} of ${state.rows.length}`;
}
function onRowClick(e) {
  const copyBtn = e.target.closest('[data-act="copy"]');
  if (copyBtn) {
    e.stopPropagation();
    const url = copyBtn.dataset.url;
    if (!url) {
      toast("No link on this deliverable yet.", "warning");
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
function makeDrawer(label) {
  const scrim = document.createElement("div");
  scrim.className = "dz-drawer-scrim";
  const drawer = document.createElement("aside");
  drawer.className = "dz-drawer";
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-label", label);
  drawer.innerHTML = `
    <div class="dz-drawer__head">
      <div><div class="dz-drawer__title" id="dz-dtitle">${esc(label)}</div><div class="dz-drawer__sub" id="dz-dsub"></div></div>
      <button class="dz-drawer__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="dz-drawer__body" id="dz-dbody">${emptyState("hourglass_empty", "Loading…")}</div>
    <div class="dz-drawer__foot" id="dz-dfoot"></div>`;
  document.body.append(scrim, drawer);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    drawer.classList.add("open");
  });
  const close = () => {
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
  drawer.querySelector(".dz-drawer__close").addEventListener("click", close);
  return { drawer, close };
}
function openNewDrawer() {
  if (!state.clients.length) {
    toast("Add a client first.", "warning");
    return;
  }
  if (!state.templates.length) {
    toast("No deliverable templates are configured.", "error");
    return;
  }
  const { drawer, close } = makeDrawer("New deliverable");
  drawer.querySelector("#dz-dbody").innerHTML = `
    <div class="dz-field">
      <label for="dz-new-client">Client</label>
      <select id="dz-new-client">${state.clients.map((c) => `<option value="${esc(c.guid)}">${esc(c.caption || c.name || c.guid)}</option>`).join("")}</select>
    </div>
    <div class="dz-field">
      <label for="dz-new-kind">Deliverable</label>
      <select id="dz-new-kind">${state.templates.map((t) => `<option value="${esc(t.kind)}">${esc(t.name)}</option>`).join("")}</select>
    </div>
    <p class="dz-note">Creates a draft. Nothing is sent until you press Send to client.</p>`;
  const foot = drawer.querySelector("#dz-dfoot");
  foot.innerHTML = `<button class="dz-btn" type="button" id="dz-create">Start authoring</button>`;
  foot.querySelector("#dz-create").addEventListener("click", async () => {
    const ownerGuid = drawer.querySelector("#dz-new-client")?.value;
    const kind = drawer.querySelector("#dz-new-kind")?.value;
    const btn = foot.querySelector("#dz-create");
    btn.disabled = true;
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner_guid: ownerGuid, kind })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "create failed");
      close();
      await load();
      openDrawer(json.data.guid);
    } catch (err) {
      toast(err.message || "Could not create the deliverable.", "error");
      btn.disabled = false;
    }
  });
}
function authorFieldHtml(q, content) {
  return `
    <div class="qm-qa" data-question-id="${esc(q.id)}" data-question-type="${esc(q.type)}">
      <div class="qm-qa__q">${esc(q.label)}${q.help ? ` <span class="dz-help" style="display:inline;font-weight:400">(${esc(q.help)})</span>` : ""}</div>
      <div class="qm-qa__a">${editFieldHtml(q, content)}</div>
    </div>`;
}
function authorSectionsHtml(template, content) {
  return (template?.sections || []).map((s) => {
    const amQuestions = (s.questions || []).filter((q) => q.audience === "am");
    if (!amQuestions.length) return "";
    return `
      <div class="qm-section">
        <h3>${esc(s.title)}</h3>
        ${s.intro ? `<p class="dz-intro">${esc(s.intro)}</p>` : ""}
        ${amQuestions.map((q) => authorFieldHtml(q, content)).join("")}
      </div>`;
  }).join("");
}
function reviewSectionsHtml(template, content, answers) {
  return (template?.sections || []).map((s) => {
    const qs = (s.questions || []).filter((q) => {
      if (q.audience !== "am") return true;
      const v = content?.[q.id];
      return Array.isArray(v) ? v.length > 0 : !!(v && String(v).trim());
    });
    if (!qs.length) return "";
    return `
      <div class="qm-section">
        <h3>${esc(s.title)}</h3>
        ${qs.map((q) => `
          <div class="qm-qa">
            <div class="qm-qa__q">${esc(q.label)}</div>
            <div class="qm-qa__a">${q.audience === "am" ? answerDisplay(q, content) : answerDisplay(q, answers) || '<span class="qm-qa__a--empty">Left blank</span>'}</div>
          </div>`).join("")}
      </div>`;
  }).join("");
}
function lastRoundFeedbackHtml(template, rounds) {
  const last = Array.isArray(rounds) && rounds.length ? rounds[rounds.length - 1] : null;
  if (!last) return "";
  const items = (template?.sections || []).flatMap((s) => (s.questions || []).filter((q) => q.audience !== "am")).map((q) => ({ q, val: answerDisplay(q, last.answers || {}) })).filter(({ val }) => val);
  if (!items.length) return "";
  return `
    <div class="dz-feedback">
      <p class="dz-feedback__title">Round ${esc(last.round)} feedback${last.submitted_tz ? ` · returned ${esc(fmtDateTime(last.submitted_tz))}` : ""}</p>
      ${items.map(({ q, val }) => `
        <div class="qm-qa">
          <div class="qm-qa__q">${esc(q.label)}</div>
          <div class="qm-qa__a">${val}</div>
        </div>`).join("")}
    </div>`;
}
async function openDrawer(guid) {
  const { drawer, close } = makeDrawer("Deliverable");
  const body = drawer.querySelector("#dz-dbody");
  const foot = drawer.querySelector("#dz-dfoot");
  let data;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/${encodeURIComponent(guid)}`);
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) throw new Error(json.error || "load failed");
    data = json.data || {};
  } catch {
    body.innerHTML = emptyState("error", "Could not load this deliverable. Please try again.");
    return;
  }
  const clientName = state.rows.find((r) => r.guid === guid)?.owner_name || state.clients.find((c) => c.guid === data.owner_guid)?.caption || "Client";
  drawer.querySelector("#dz-dtitle").textContent = `${clientName} · ${data.template?.name || "Deliverable"}`;
  const authoring = data.status === "DRAFT" || data.status === "SENT";
  const rev = Number(data.revision) > 1 ? ` · Rev ${data.revision}` : "";
  const sub = data.status === "SUBMITTED" ? `Returned ${data.submitted_tz ? fmtDateTime(data.submitted_tz) : ""}${data.locked_tz ? " · Finalized" : ""}${rev}` : data.status === "SENT" ? `Sent ${data.sent_tz ? fmtDateTime(data.sent_tz) : ""} to ${data.recipient_email || ""} · awaiting approval${rev}` : `${STATUS_LABEL[data.status] || data.status}${rev}`;
  drawer.querySelector("#dz-dsub").textContent = sub;
  if (!authoring) {
    body.innerHTML = answersMetaHtml(data) + reviewSectionsHtml(data.template, data.content || {}, data.answers || {});
    if (data.status === "SUBMITTED" && !data.locked_tz) {
      foot.innerHTML = `<button class="dz-btn" type="button" id="dz-revise">Revise plan</button>
        <span class="dz-note" style="margin:0">Archives this review and reopens authoring. The client approves the revised plan on a fresh link.</span>`;
      foot.querySelector("#dz-revise").addEventListener("click", async (e) => {
        const btn = e.target;
        btn.disabled = true;
        try {
          const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/${encodeURIComponent(guid)}/revise`, { method: "POST" });
          const json = await res.json().catch(() => ({}));
          if (!res.ok || !json.ok) throw new Error(json.error || "revise failed");
          toast("Reopened for revision. The last review is pinned above the form.", "success");
          close();
          await load();
          openDrawer(guid);
        } catch (err) {
          toast(err.message || "Could not revise.", "error");
          btn.disabled = false;
        }
      });
    } else {
      foot.innerHTML = "";
    }
    return;
  }
  body.innerHTML = `
    ${lastRoundFeedbackHtml(data.template, data.rounds)}
    ${data.status === "SENT" && data.url ? `
      <div class="dz-linkrow">
        <input type="text" readonly value="${esc(data.url)}" aria-label="Review link" />
        <button class="dz-btn--ghost" type="button" id="dz-copylink">Copy link</button>
      </div>
      <p class="dz-note">The client already has this link. Saving updates the plan they see; if they had it open, they are asked to reload before approving. Re-sending issues a fresh link and kills this one.</p>` : ""}
    <div id="dz-author-form">${authorSectionsHtml(data.template, data.content || {})}</div>`;
  foot.innerHTML = `
    <button class="dz-btn--ghost" type="button" id="dz-save">Save draft</button>
    <span class="dz-sendrow">
      <input type="email" id="dz-email" placeholder="client@example.com" value="${esc(data.recipient_email || "")}" aria-label="Recipient email" />
      <button class="dz-btn" type="button" id="dz-send">${data.status === "SENT" ? "Re-send" : "Send to client"}</button>
    </span>
    <button class="dz-btn--ghost dz-btn--danger" type="button" id="dz-cancel">Cancel deliverable</button>`;
  body.querySelector("#dz-copylink")?.addEventListener("click", (e) => {
    const input = body.querySelector(".dz-linkrow input");
    navigator.clipboard?.writeText(input?.value || "").then(
      () => {
        e.target.textContent = "Copied!";
        setTimeout(() => {
          e.target.textContent = "Copy link";
        }, 1500);
      },
      () => toast("Could not copy the link.", "error")
    );
  });
  const saveContent = async () => {
    const content = collectAnswers(body.querySelector("#dz-author-form"));
    const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/${encodeURIComponent(guid)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) {
      if (res.status === 409) {
        toast(json.error || "This deliverable is no longer editable.", "warning");
        close();
        await load();
        return false;
      }
      throw new Error(json.error || "save failed");
    }
    return true;
  };
  foot.querySelector("#dz-save").addEventListener("click", async (e) => {
    const btn = e.target;
    btn.disabled = true;
    try {
      if (await saveContent()) toast("Draft saved.", "success");
    } catch (err) {
      toast(err.message || "Could not save.", "error");
    }
    btn.disabled = false;
  });
  foot.querySelector("#dz-send").addEventListener("click", async (e) => {
    const btn = e.target;
    const email = (foot.querySelector("#dz-email")?.value || "").trim();
    if (!email) {
      toast("Enter the recipient email first.", "warning");
      return;
    }
    btn.disabled = true;
    try {
      if (!await saveContent()) return;
      const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/${encodeURIComponent(guid)}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipient_email: email })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "send failed");
      toast(
        json.data?.emailQueued ? `Sent. ${email} will receive the review link.` : "Link created, but the email could not be queued. Copy the link and send it yourself.",
        json.data?.emailQueued ? "success" : "warning"
      );
      close();
      await load();
    } catch (err) {
      toast(err.message || "Could not send.", "error");
      btn.disabled = false;
    }
  });
  foot.querySelector("#dz-cancel").addEventListener("click", async (e) => {
    const btn = e.target;
    btn.disabled = true;
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/${encodeURIComponent(guid)}/cancel`, { method: "POST" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "cancel failed");
      toast("Deliverable cancelled. Its link no longer works.", "info");
      close();
      await load();
    } catch (err) {
      toast(err.message || "Could not cancel.", "error");
      btn.disabled = false;
    }
  });
}
const deliverablesRoute = { render, init };
export {
  deliverablesRoute as default,
  init,
  render
};
//# sourceMappingURL=deliverables-route-DhDaQCSG.js.map
