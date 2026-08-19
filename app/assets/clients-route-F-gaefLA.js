import { A as AuthController, c as capList, P as PubSub, b as AppBroadcast } from "./index.js";
import { i as isValidEmail } from "./index-Divrdfja.js";
import { e as ensureQuestionnaireAnswerStyles, a as answersMetaHtml, b as answersHtml, g as editFieldHtml, c as collectAnswers } from "./questionnaireAnswers-BUs4-Lnv.js";
const RESELLER_CHANNEL = "reseller_org";
const MANAGED_CHANNEL = "managed_client";
let stylesInjected = false;
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
function toast(message, type = "info") {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
}
function resellerOrg() {
  const active = AuthController.getActiveOrg();
  if (active && active.channel === RESELLER_CHANNEL) return { guid: active.guid, name: active.name };
  const m = AuthController.getMemberships().find((x) => x.channel === RESELLER_CHANNEL);
  return m ? { guid: m.orgGuid, name: m.name } : null;
}
function fmtDate(created) {
  const tz = created?.created_tz;
  if (!tz) return "";
  const d = new Date(tz);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-clients-styles";
  style.textContent = `
    .page-shell .clients-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-list { display: flex; flex-direction: column; }
    .page-shell .client-row {
      display: flex; gap: 12px; align-items: center; padding: 12px 4px;
      border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap;
    }
    .page-shell .client-row:last-child { border-bottom: 0; }
    .page-shell .client-row__avatar {
      flex: 0 0 auto; width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center;
      font-weight: 700; font-size: 0.82rem; color: #fff; background: var(--color-primary-600, #0072BA);
    }
    .page-shell .client-row__main { min-width: 0; flex: 1 1 auto; }
    .page-shell .client-row__name { font-weight: 600; font-size: 0.92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .client-row__meta { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .client-row__status {
      flex: 0 0 auto; display: inline-block; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
      padding: 2px 8px; border-radius: 999px;
      background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473);
    }
    .page-shell .client-row__status[data-status="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .client-row__status[data-status="DISABLED"] { background: var(--color-danger-soft, #FBE3DE); color: var(--color-danger, #DD4124); }
    .page-shell .client-row__btns { flex: 0 0 auto; display: flex; gap: 8px; flex-wrap: wrap; }

    /* Add-client modal */
    .client-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.45); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .client-modal-scrim.open { opacity: 1; }
    .client-modal {
      position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001;
      width: min(440px, 92vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3);
      opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease;
      font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .client-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .client-modal__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .client-modal__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 600; }
    .client-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .client-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    .client-modal__body { padding: 22px; }
    .client-modal__sub { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    .client-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; }
    .client-modal__input {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .client-modal__input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .client-modal__error { color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 12px 0 0; min-height: 1em; }
    .client-modal__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
    .client-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); }
    .client-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .client-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .client-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; display: inline-flex; align-items: center; gap: 6px; }
    .client-modal__btn--primary:hover { background: var(--color-primary-700, #00558D); }
    .client-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }

    /* Per-row action buttons + the invite result view */
    .page-shell .client-card__invite {
      appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent;
      cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; color: var(--color-accent, #0072BA);
      padding: 5px 10px; border-radius: var(--radius-md, 8px); display: inline-flex; align-items: center; gap: 5px;
    }
    .page-shell .client-card__invite:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .client-card__invite .material-symbols-outlined { font-size: 16px; }
    .client-modal__row { display: flex; gap: 10px; margin-top: 12px; }
    .client-modal__row > div { flex: 1; }
    .client-modal__result { text-align: center; }
    .client-modal__result > p { font-size: 0.9rem; margin: 10px 0; }
    .client-modal__hint { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .client-modal__linkrow { display: flex; gap: 8px; margin: 8px 0 4px; }
    .client-modal__linkrow .client-modal__input { font-size: 0.8rem; }
    .invite-pending { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 12px; margin-bottom: 18px; background: var(--color-surface, #F4F7FB); }
    .invite-pending__label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .invite-pending__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .invite-pending__email { flex: 1 1 auto; min-width: 0; font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .invite-pending__email.expired { color: var(--color-text-subtle, #6C7C9A); }
    .invite-pending__copy { flex: 0 0 auto; font-size: 0.78rem; padding: 5px 10px; }
    .client-card__btns { display: flex; gap: 8px; flex-wrap: wrap; }

    /* Questionnaire modal */
    /* .qm-* answer styles now live in core/questionnaireAnswers.js, shared with
       the /questionnaires review page; injected via ensureQuestionnaireAnswerStyles(). */
  `;
  document.head.appendChild(style);
  ensureQuestionnaireAnswerStyles();
  stylesInjected = true;
}
const initials = (name) => String(name || "?").trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase() || "?";
function emptyState(icon, msg) {
  return `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
}
function clientRowHTML(org) {
  const name = org.caption || org.guid;
  const status = org.status || "ENABLED";
  return `
    <div class="client-row">
      <span class="client-row__avatar">${esc(initials(name))}</span>
      <span class="client-row__main">
        <div class="client-row__name" title="${esc(name)}">${esc(name)}</div>
        <div class="client-row__meta">Added ${esc(fmtDate(org.created)) || "—"}</div>
      </span>
      <span class="client-row__status" data-status="${esc(status)}">${esc(status)}</span>
      <div class="client-row__btns">
        <button class="client-card__invite" type="button" data-action="invite" data-client-guid="${esc(org.guid)}" data-client-name="${esc(name)}">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span> Invite user
        </button>
        <button class="client-card__invite" type="button" data-action="questionnaire" data-client-guid="${esc(org.guid)}" data-client-name="${esc(name)}">
          <span class="material-symbols-outlined" aria-hidden="true">checklist</span> Questionnaire
        </button>
        ${AuthController.getCapabilities().includes("connect_ad_accounts") ? `
        <button class="client-card__invite" type="button" data-action="adaccounts" data-client-guid="${esc(org.guid)}" data-client-name="${esc(name)}">
          <span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Ad accounts
        </button>` : ""}
      </div>
    </div>`;
}
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="clients">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Clients</h1>
          <p class="page-description">The client accounts your agency manages.</p>
        </div>
        <button class="btn btn-primary" id="clients-add-btn" type="button">
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          Add Client
        </button>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Managed Clients</h2>
          <span class="clients-count" id="clients-count"></span>
        </div>
        <div class="card-body" id="clients-body">
          ${emptyState("hourglass_empty", "Loading clients…")}
        </div>
      </div>
    </div>`;
}
async function init() {
  const reseller = resellerOrg();
  document.getElementById("clients-add-btn")?.addEventListener("click", () => openAddModal(reseller));
  await loadClients(reseller);
}
async function loadClients(reseller) {
  const body = document.getElementById("clients-body");
  const countEl = document.getElementById("clients-count");
  if (!body) return;
  if (!reseller?.guid) {
    body.innerHTML = emptyState("info", "Client provisioning is available to reseller / agency accounts.");
    if (countEl) countEl.textContent = "";
    return;
  }
  try {
    const base = AuthController.getConfig?.().BASE_URL || "";
    const res = await fetch(`${base}/m5t/v5/acctGroup`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const all = Array.isArray(json?.data) ? json.data : [];
    const clients = all.filter((o) => o.class === MANAGED_CHANNEL && (!o.parent || o.parent === reseller.guid));
    if (!clients.length) {
      body.innerHTML = emptyState("group_off", "No clients yet. Add your first client to start managing magnets on their behalf.");
      if (countEl) countEl.textContent = "";
      return;
    }
    body.innerHTML = `<div class="client-list">${clients.map(clientRowHTML).join("")}</div>`;
    capList(body.querySelector(".client-list"), { rowSelector: ".client-row", noun: "clients" });
    if (countEl) countEl.textContent = `${clients.length} client${clients.length === 1 ? "" : "s"}`;
    body.querySelectorAll(".client-card__invite").forEach((b) => {
      b.addEventListener("click", () => {
        if (b.dataset.action === "adaccounts") openAdAccountsModal(b.dataset.clientGuid, b.dataset.clientName);
        else if (b.dataset.action === "questionnaire") openQuestionnaireModal(b.dataset.clientGuid, b.dataset.clientName);
        else openInviteModal(b.dataset.clientGuid, b.dataset.clientName);
      });
    });
  } catch (err) {
    console.warn("[clients] load failed:", err);
    body.innerHTML = emptyState("error", "Couldn’t load clients. Please try again.");
    if (countEl) countEl.textContent = "";
  }
}
function openAddModal(reseller) {
  if (!reseller?.guid) {
    toast("Only reseller / agency accounts can add clients.", "error");
    return;
  }
  const scrim = document.createElement("div");
  scrim.className = "client-modal-scrim";
  const modal = document.createElement("div");
  modal.className = "client-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="client-modal__head">
      <span class="client-modal__title">Add a client</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Creates a managed client under <strong>${esc(reseller.name || "your agency")}</strong>. You'll manage their magnets and leads on their behalf.</p>
      <label class="client-modal__label" for="client-name-input">Client / company name</label>
      <input class="client-modal__input" id="client-name-input" type="text" placeholder="e.g. Bright Dental" autocomplete="off" maxlength="120" />
      <p class="client-modal__error" id="client-modal-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="create">
          <span class="material-symbols-outlined" aria-hidden="true">add</span> Add client
        </button>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    modal.classList.add("open");
  });
  const input = modal.querySelector("#client-name-input");
  const errEl = modal.querySelector("#client-modal-error");
  const createBtn = modal.querySelector('[data-act="create"]');
  input?.focus();
  const close = () => {
    scrim.classList.remove("open");
    modal.classList.remove("open");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => {
      scrim.remove();
      modal.remove();
    }, 200);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  scrim.addEventListener("click", close);
  modal.querySelector(".client-modal__close")?.addEventListener("click", close);
  modal.querySelector('[data-act="cancel"]')?.addEventListener("click", close);
  const submit = async () => {
    const caption = (input?.value || "").trim();
    errEl.textContent = "";
    if (!caption) {
      errEl.textContent = "Please enter a client name.";
      input?.focus();
      return;
    }
    createBtn.disabled = true;
    const prevHTML = createBtn.innerHTML;
    createBtn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Adding…';
    try {
      const base = AuthController.getConfig?.().BASE_URL || "";
      const res = await fetch(`${base}/m5t/v5/acctGroup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ class: MANAGED_CHANNEL, caption, parent: reseller.guid })
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        const msg = res.status === 403 ? "You are not authorized to add a client here." : json?.message || json?.error || `Failed (HTTP ${res.status})`;
        throw new Error(msg);
      }
      toast(`Added client “${caption}”`, "success");
      close();
      await loadClients(reseller);
    } catch (err) {
      console.warn("[clients] create failed:", err);
      errEl.textContent = err.message || "Something went wrong. Please try again.";
      createBtn.disabled = false;
      createBtn.innerHTML = prevHTML;
    }
  };
  createBtn?.addEventListener("click", submit);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submit();
  });
}
const adDigits = (v) => String(v || "").replace(/[^0-9]/g, "");
async function openAdAccountsModal(clientGuid, clientName) {
  const base = AuthController.getConfig?.().BASE_URL || "";
  const byProvider = {};
  try {
    const res = await fetch(`${base}/m5t/v5/coreAdAccount?owner_guid=${encodeURIComponent(clientGuid)}`);
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`Failed to load ad accounts (${res.status})`);
    (json?.data || []).forEach((a) => {
      byProvider[a.provider] = a;
    });
  } catch (err) {
    console.warn("[clients] ad-accounts prefill failed:", err);
  }
  const gAds = byProvider.google_ads;
  const lsa = byProvider.google_lsa;
  const scrim = document.createElement("div");
  scrim.className = "client-modal-scrim";
  const modal = document.createElement("div");
  modal.className = "client-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="client-modal__head">
      <span class="client-modal__title">Ad accounts: ${esc(clientName)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body">
      <p class="client-modal__sub">Connect this client's advertising accounts so they can see ad performance next to their magnet leads. Enter account IDs only, no passwords.</p>
      <label class="client-modal__label" for="aa-gads">Google Ads Customer ID</label>
      <input class="client-modal__input" id="aa-gads" type="text" inputmode="numeric" placeholder="123-456-7890" autocomplete="off" value="${esc(gAds?.external_customer_id || "")}" />
      <p class="client-modal__hint">Found top-right in the client's Google Ads account. Dashes optional.</p>
      <label class="client-modal__label" for="aa-lsa" style="margin-top:14px">Local Services (LSA) Account ID</label>
      <input class="client-modal__input" id="aa-lsa" type="text" inputmode="numeric" placeholder="Optional" autocomplete="off" value="${esc(lsa?.external_customer_id || "")}" />
      <p class="client-modal__hint">Leave a field blank to disconnect that account.</p>
      <p class="client-modal__error" id="aa-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save">
          <span class="material-symbols-outlined" aria-hidden="true">save</span> Save
        </button>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    modal.classList.add("open");
  });
  const errEl = modal.querySelector("#aa-error");
  const saveBtn = modal.querySelector('[data-act="save"]');
  const close = () => {
    scrim.classList.remove("open");
    modal.classList.remove("open");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => {
      scrim.remove();
      modal.remove();
    }, 200);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  scrim.addEventListener("click", close);
  modal.querySelector(".client-modal__close")?.addEventListener("click", close);
  modal.querySelector('[data-act="cancel"]')?.addEventListener("click", close);
  const reconcile = (provider, value, existing) => {
    const url = `${base}/m5t/v5/coreAdAccount`;
    if (value && !existing) {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner_guid: clientGuid, provider, external_customer_id: value })
      });
    }
    if (value && existing && value !== existing.external_customer_id) {
      return fetch(`${url}/${encodeURIComponent(existing.guid)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ external_customer_id: value })
      });
    }
    if (!value && existing) {
      return fetch(`${url}/${encodeURIComponent(existing.guid)}`, { method: "DELETE" });
    }
    return null;
  };
  const submit = async () => {
    errEl.textContent = "";
    const gVal = adDigits(modal.querySelector("#aa-gads").value);
    const lVal = adDigits(modal.querySelector("#aa-lsa").value);
    const ops = [reconcile("google_ads", gVal, gAds), reconcile("google_lsa", lVal, lsa)].filter(Boolean);
    if (!ops.length) {
      close();
      return;
    }
    saveBtn.disabled = true;
    const prev = saveBtn.innerHTML;
    saveBtn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…';
    try {
      const results = await Promise.all(ops);
      for (const r of results) {
        if (!r.ok) {
          const j = await r.json().catch(() => ({}));
          throw new Error(r.status === 403 ? "You are not authorized to connect accounts for this client." : j?.error || j?.message || `Failed (HTTP ${r.status})`);
        }
      }
      toast("Ad accounts updated", "success");
      close();
    } catch (err) {
      errEl.textContent = err.message || "Something went wrong. Please try again.";
      saveBtn.disabled = false;
      saveBtn.innerHTML = prev;
    }
  };
  saveBtn?.addEventListener("click", submit);
}
function openInviteModal(clientGuid, clientName) {
  if (!clientGuid) return;
  const scrim = document.createElement("div");
  scrim.className = "client-modal-scrim";
  const modal = document.createElement("div");
  modal.className = "client-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="client-modal__head">
      <span class="client-modal__title">Invite a user</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="invite-body">
      <div id="invite-pending"></div>
      <p class="client-modal__sub">Invite someone at <strong>${esc(clientName || "this client")}</strong> to a read-only login for their account.</p>
      <label class="client-modal__label" for="inv-email">Email</label>
      <input class="client-modal__input" id="inv-email" type="email" placeholder="person@client.com" autocomplete="off" />
      <div class="client-modal__row">
        <div><label class="client-modal__label" for="inv-first">First name</label><input class="client-modal__input" id="inv-first" type="text" autocomplete="off" /></div>
        <div><label class="client-modal__label" for="inv-last">Last name</label><input class="client-modal__input" id="inv-last" type="text" autocomplete="off" /></div>
      </div>
      <p class="client-modal__error" id="inv-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    modal.classList.add("open");
  });
  const close = () => {
    scrim.classList.remove("open");
    modal.classList.remove("open");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => {
      scrim.remove();
      modal.remove();
    }, 200);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  scrim.addEventListener("click", close);
  modal.querySelector(".client-modal__close")?.addEventListener("click", close);
  modal.querySelector('[data-act="cancel"]')?.addEventListener("click", close);
  const emailEl = modal.querySelector("#inv-email");
  const errEl = modal.querySelector("#inv-error");
  const sendBtn = modal.querySelector('[data-act="send"]');
  emailEl?.focus();
  const wireCopy = (btn) => btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.url);
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy link";
      }, 1500);
    } catch {
    }
  });
  (async function loadPending() {
    const box = modal.querySelector("#invite-pending");
    if (!box) return;
    try {
      const base = AuthController.getConfig?.().BASE_URL || "";
      const res = await fetch(`${base}/m5t/v5/acctGroup/${encodeURIComponent(clientGuid)}/invites`);
      const data = await res.json().catch(() => ({}));
      const invites = res.ok && data.ok && Array.isArray(data.invites) ? data.invites : [];
      if (!invites.length) {
        box.innerHTML = "";
        return;
      }
      box.innerHTML = `
        <div class="invite-pending">
          <div class="invite-pending__label">Pending invites</div>
          ${invites.map((iv) => `
            <div class="invite-pending__row">
              <span class="invite-pending__email${iv.expired ? " expired" : ""}" title="${esc(iv.email)}">${esc(iv.email)}${iv.expired ? " · expired" : ""}</span>
              <button class="client-modal__btn client-modal__btn--ghost invite-pending__copy" type="button" data-url="${esc(iv.inviteUrl)}">Copy link</button>
            </div>`).join("")}
        </div>`;
      box.querySelectorAll(".invite-pending__copy").forEach(wireCopy);
    } catch {
      box.innerHTML = "";
    }
  })();
  sendBtn?.addEventListener("click", async () => {
    const email = (modal.querySelector("#inv-email").value || "").trim();
    const first = (modal.querySelector("#inv-first").value || "").trim();
    const last = (modal.querySelector("#inv-last").value || "").trim();
    errEl.textContent = "";
    if (!email || !first || !last) {
      errEl.textContent = "Email, first, and last name are required.";
      return;
    }
    sendBtn.disabled = true;
    const prev = sendBtn.innerHTML;
    sendBtn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';
    try {
      const base = AuthController.getConfig?.().BASE_URL || "";
      const res = await fetch(`${base}/m5t/v5/acctGroup/${encodeURIComponent(clientGuid)}/invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Explicit 'viewer' — this button creates a READ-ONLY login for the client (the
        // dialog says exactly that). Don't lean on the API's managed_client default, which
        // is 'owner' and only read-only because the capability matrix happens to make
        // managed_client owners read-only; state the intent outright so a future matrix
        // change can't silently turn these into write-capable logins.
        body: JSON.stringify({ email, first, last, member_role: "viewer" })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        const msg = res.status === 409 ? "A user with that email already exists." : res.status === 403 ? "You are not authorized to invite for this client." : data.message || data.error || `Failed (HTTP ${res.status})`;
        throw new Error(msg);
      }
      toast(`Invite created for ${email}`, "success");
      modal.querySelector("#invite-body").innerHTML = `
        <div class="client-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${data.emailQueued ? `An invite email is on its way to <strong>${esc(email)}</strong>.` : `Invite created for <strong>${esc(email)}</strong>.`}</p>
          <p class="client-modal__hint">Or share this link directly. It lets them set a password and sign in:</p>
          <div class="client-modal__linkrow">
            <input class="client-modal__input" id="inv-link" type="text" readonly value="${esc(data.inviteUrl)}" />
            <button class="client-modal__btn client-modal__btn--primary" type="button" id="inv-copy">Copy</button>
          </div>
          <div class="client-modal__actions"><button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;
      const linkEl = modal.querySelector("#inv-link");
      modal.querySelector("#inv-copy")?.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(linkEl.value);
          modal.querySelector("#inv-copy").textContent = "Copied!";
        } catch {
          linkEl.select();
        }
      });
      modal.querySelector('[data-act="done"]')?.addEventListener("click", close);
    } catch (err) {
      console.warn("[clients] invite failed:", err);
      errEl.textContent = err.message || "Something went wrong. Please try again.";
      sendBtn.disabled = false;
      sendBtn.innerHTML = prev;
    }
  });
}
function fmtDateTime(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleString(void 0, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
async function openQuestionnaireModal(clientGuid, clientName) {
  if (!clientGuid) return;
  const base = AuthController.getConfig?.().BASE_URL || "";
  const scrim = document.createElement("div");
  scrim.className = "client-modal-scrim";
  const modal = document.createElement("div");
  modal.className = "client-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="client-modal__head">
      <span class="client-modal__title">Kickoff Questionnaire: ${esc(clientName)}</span>
      <button class="client-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="client-modal__body" id="qm-body">${emptyState("hourglass_empty", "Loading…")}</div>`;
  document.body.appendChild(scrim);
  document.body.appendChild(modal);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    modal.classList.add("open");
  });
  const close = () => {
    scrim.classList.remove("open");
    modal.classList.remove("open");
    document.removeEventListener("keydown", onKey);
    setTimeout(() => {
      scrim.remove();
      modal.remove();
    }, 200);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", onKey);
  scrim.addEventListener("click", close);
  modal.querySelector(".client-modal__close")?.addEventListener("click", close);
  const bodyEl = modal.querySelector("#qm-body");
  function renderSendView() {
    bodyEl.innerHTML = `
      <p class="client-modal__sub">Send a Kickoff Questionnaire to <strong>${esc(clientName)}</strong>. They fill it out directly in their browser, no account needed. The link expires in 7 days.</p>
      <label class="client-modal__label" for="qm-email">Send to</label>
      <input class="client-modal__input" id="qm-email" type="email" placeholder="person@client.com" autocomplete="off" />
      <p class="client-modal__hint">We'll email the link here. You'll also get a copyable link afterwards as a backup.</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send questionnaire</button>
      </div>`;
    bodyEl.querySelector('[data-act="cancel"]')?.addEventListener("click", close);
    const sendBtn = bodyEl.querySelector('[data-act="send"]');
    const errEl = bodyEl.querySelector("#qm-error");
    const emailEl = bodyEl.querySelector("#qm-email");
    emailEl?.focus();
    sendBtn?.addEventListener("click", async () => {
      const recipient = (emailEl?.value || "").trim();
      errEl.textContent = "";
      if (!recipient) {
        errEl.textContent = "Enter the email address to send this to.";
        emailEl?.focus();
        return;
      }
      if (!isValidEmail(recipient)) {
        errEl.textContent = "That does not look like a valid email address.";
        emailEl?.focus();
        return;
      }
      sendBtn.disabled = true;
      const prev = sendBtn.innerHTML;
      sendBtn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Sending…';
      try {
        const res = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ owner_guid: clientGuid, recipient_email: recipient })
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.ok) throw new Error(json.error || json.message || `Failed (HTTP ${res.status})`);
        toast(json.data.emailQueued ? `Questionnaire sent to ${recipient}` : "Link created — email could not be queued", json.data.emailQueued ? "success" : "info");
        renderDraftView({
          url: json.data.url,
          token_expiry: json.data.expires,
          recipient_email: json.data.recipient_email,
          emailQueued: json.data.emailQueued,
          guid: json.data.guid
        });
      } catch (err) {
        errEl.textContent = err.message || "Something went wrong. Please try again.";
        sendBtn.disabled = false;
        sendBtn.innerHTML = prev;
      }
    });
  }
  function renderDraftView(response) {
    const chipVerb = response.recipient_email ? "Sent" : "Link created";
    const sentLine = response.emailQueued === false ? "<strong>The email could not be queued.</strong> Share the link below directly instead:" : response.recipient_email ? `Emailed to <strong>${esc(response.recipient_email)}</strong>. The link is also below — handy if it bounces, or to share via text or chat:` : "Share this link with your client — email, text, chat:";
    bodyEl.innerHTML = `
      <div class="qm-status" data-status="DRAFT"><span class="material-symbols-outlined" aria-hidden="true">hourglass_top</span> ${chipVerb} — awaiting response${response.token_expiry ? `, link expires ${esc(fmtDateTime(response.token_expiry))}` : ""}</div>
      <p class="client-modal__hint">${sentLine}</p>
      <div class="client-modal__linkrow">
        <input class="client-modal__input" id="qm-link" type="text" readonly value="${esc(response.url || "")}" />
        <button class="client-modal__btn client-modal__btn--primary" type="button" id="qm-copy">Copy</button>
      </div>
      <p class="client-modal__error" id="qm-cancel-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-q">Cancel questionnaire</button>
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Done</button>
      </div>`;
    const linkEl = bodyEl.querySelector("#qm-link");
    bodyEl.querySelector("#qm-copy")?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(linkEl.value);
        bodyEl.querySelector("#qm-copy").textContent = "Copied!";
      } catch {
        linkEl.select();
      }
    });
    bodyEl.querySelector('[data-act="done"]')?.addEventListener("click", close);
    const cancelBtn = bodyEl.querySelector('[data-act="cancel-q"]');
    cancelBtn?.addEventListener("click", async () => {
      if (!window.confirm("Cancel this questionnaire? The link will stop working immediately. This cannot be undone — you would need to send a new one.")) return;
      cancelBtn.disabled = true;
      const prev = cancelBtn.innerHTML;
      cancelBtn.innerHTML = "Cancelling…";
      try {
        const res = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(response.guid)}/cancel`, { method: "POST" });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.ok) throw new Error(json.error || json.message || `Failed (HTTP ${res.status})`);
        toast("Questionnaire cancelled", "success");
        renderCancelledView({ ...response, status: "CANCELLED", cancelled_tz: (/* @__PURE__ */ new Date()).toISOString() });
      } catch (err) {
        bodyEl.querySelector("#qm-cancel-error").textContent = err.message || "Something went wrong. Please try again.";
        cancelBtn.disabled = false;
        cancelBtn.innerHTML = prev;
      }
    });
  }
  function renderCancelledView(response) {
    bodyEl.innerHTML = `
      <div class="qm-status" data-status="CANCELLED"><span class="material-symbols-outlined" aria-hidden="true">block</span> Cancelled${response.cancelled_tz ? ` ${esc(fmtDateTime(response.cancelled_tz))}` : ""}${response.cancelled_by_email ? ` by ${esc(response.cancelled_by_email)}` : ""}</div>
      <p class="client-modal__sub">This link was revoked and no longer works.${response.recipient_email ? ` It had been emailed to <strong>${esc(response.recipient_email)}</strong>.` : ""}</p>
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        <button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
        <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="resend"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send a new one</button>
      </div>`;
    bodyEl.querySelector('[data-act="done"]')?.addEventListener("click", close);
    bodyEl.querySelector('[data-act="resend"]')?.addEventListener("click", () => renderSendView());
  }
  function renderSubmittedView(data, editing = false) {
    const edit = data.editability || {
      editable: data.status === "SUBMITTED" && !data.locked_tz,
      reason: data.locked_tz ? "finalized" : null,
      deadline: null
    };
    const canEdit = !!edit.editable;
    const lockChip = !canEdit && data.status === "SUBMITTED" ? edit.reason === "finalized" ? `<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock</span> Finalized${data.locked_tz ? ` ${esc(fmtDateTime(data.locked_tz))}` : ""}${data.locked_by_email ? ` by ${esc(data.locked_by_email)}` : ""} — no further edits.</div>` : `<div class="qm-status" data-status="LOCKED"><span class="material-symbols-outlined" aria-hidden="true">lock_clock</span> Editing closed${edit.deadline ? ` ${esc(fmtDateTime(edit.deadline))}` : ""} — a response locks 14 days after it is submitted.</div>` : "";
    const editableHint = canEdit && edit.deadline ? `<p class="client-modal__sub qm-editable-hint">You can edit these answers until ${esc(fmtDateTime(edit.deadline))}.</p>` : "";
    bodyEl.innerHTML = `
      <div class="qm-status" data-status="SUBMITTED"><span class="material-symbols-outlined" aria-hidden="true">task_alt</span> Submitted ${data.submitted_tz ? esc(fmtDateTime(data.submitted_tz)) : ""}</div>
      ${lockChip}
      ${answersMetaHtml(data)}
      <form id="qm-form">
        ${answersHtml(data, editing ? { renderAnswer: editFieldHtml } : {})}
      </form>
      ${editing ? "" : editableHint}
      <p class="client-modal__error" id="qm-error"></p>
      <div class="client-modal__actions">
        ${editing ? `<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="cancel-edit">Cancel</button>
             <button class="client-modal__btn client-modal__btn--primary" type="button" data-act="save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save changes</button>` : `<button class="client-modal__btn client-modal__btn--ghost" type="button" data-act="done">Close</button>
             ${canEdit ? `<button class="client-modal__btn client-modal__btn--primary" type="button" data-act="edit"><span class="material-symbols-outlined" aria-hidden="true">edit</span> Edit answers</button>` : ""}`}
      </div>`;
    bodyEl.querySelector('[data-act="done"]')?.addEventListener("click", close);
    bodyEl.querySelector('[data-act="cancel-edit"]')?.addEventListener("click", () => renderSubmittedView(data, false));
    bodyEl.querySelector('[data-act="edit"]')?.addEventListener("click", () => renderSubmittedView(data, true));
    const saveBtn = bodyEl.querySelector('[data-act="save"]');
    saveBtn?.addEventListener("click", async () => {
      const newAnswers = collectAnswers(bodyEl);
      saveBtn.disabled = true;
      const prev = saveBtn.innerHTML;
      saveBtn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">progress_activity</span> Saving…';
      let res;
      try {
        res = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(data.guid)}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: newAnswers })
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.ok) throw new Error(json.error || json.message || `Failed (HTTP ${res.status})`);
        toast("Answers updated", "success");
        const freshRes = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(data.guid)}`);
        const freshJson = await freshRes.json().catch(() => ({}));
        renderSubmittedView(freshJson.ok ? freshJson.data : { ...data, answers: newAnswers }, false);
      } catch (err) {
        if (res && res.status === 423) {
          toast(err.message || "This questionnaire is now locked.", "info");
          const freshRes = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(data.guid)}`);
          const freshJson = await freshRes.json().catch(() => ({}));
          renderSubmittedView(freshJson.ok ? freshJson.data : data, false);
          return;
        }
        bodyEl.querySelector("#qm-error").textContent = err.message || "Something went wrong. Please try again.";
        saveBtn.disabled = false;
        saveBtn.innerHTML = prev;
      }
    });
  }
  try {
    const res = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse?owner_guid=${encodeURIComponent(clientGuid)}`);
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) throw new Error(json.error || `HTTP ${res.status}`);
    const latest = (json.data || [])[0] || null;
    if (!latest) {
      renderSendView();
      return;
    }
    if (latest.status === "DRAFT") {
      renderDraftView(latest);
      return;
    }
    if (latest.status === "CANCELLED") {
      renderCancelledView(latest);
      return;
    }
    const fullRes = await fetch(`${base}/m5t/v5/m5mQuestionnaireResponse/${encodeURIComponent(latest.guid)}`);
    const fullJson = await fullRes.json().catch(() => ({}));
    if (!fullRes.ok || !fullJson.ok) throw new Error(fullJson.error || `HTTP ${fullRes.status}`);
    renderSubmittedView(fullJson.data);
  } catch (err) {
    console.warn("[clients] questionnaire load failed:", err);
    bodyEl.innerHTML = `<p class="client-modal__error">Could not load questionnaire status. ${esc(err.message || "")}</p>`;
  }
}
const clientsRoute = { render, init };
export {
  clientsRoute as default,
  init,
  openInviteModal,
  render
};
//# sourceMappingURL=clients-route-F-gaefLA.js.map
