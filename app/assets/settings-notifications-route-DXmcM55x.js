import { A as AuthController, c as capList, P as PubSub, b as AppBroadcast } from "./index.js";
import { i as isValidEmail } from "./index-Divrdfja.js";
import { i as inPortfolio, a as initPicker, e as ensurePortfolioStyles, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const EMAIL_RX = (v) => isValidEmail(v);
const MAX_RECIPIENTS = 5;
const state = { magnets: [], canManage: false, webhook: null, webhookAllowed: true };
const orgGuid = () => AuthController.getActiveOrg()?.guid || AuthController.getMemberships()[0]?.orgGuid || null;
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-notif-styles";
  s.textContent = `
    .page-shell .ntf-row { display: flex; gap: 16px; align-items: flex-start; padding: 16px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); flex-wrap: wrap; }
    .page-shell .ntf-row:last-child { border-bottom: 0; }
    .page-shell .ntf-magnet { flex: 0 0 220px; min-width: 0; }
    .page-shell .ntf-name { font-weight: 600; font-size: 0.92rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-meta { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .ntf-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; margin-top: 8px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .ntf-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .ntf-state .material-symbols-outlined { font-size: 14px; }
    .page-shell .ntf-config { flex: 1 1 320px; min-width: 0; }
    .page-shell .ntf-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
    .page-shell .ntf-chip { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 600; padding: 5px 6px 5px 12px; border-radius: 999px; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }
    .page-shell .ntf-chip button { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1rem; line-height: 1; color: inherit; padding: 0 5px; border-radius: 50%; }
    .page-shell .ntf-chip button:hover { background: rgba(0,85,141,0.12); }
    .page-shell .ntf-none { font-size: 0.82rem; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .page-shell .ntf-addrow { display: flex; gap: 8px; flex-wrap: wrap; }
    .page-shell .ntf-input { font: inherit; font-size: 0.84rem; padding: 7px 12px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 240px; }
    .page-shell .ntf-input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.12)); }
    .page-shell .ntf-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .ntf-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .ntf-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .ntf-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .ntf-actions { flex: 0 0 auto; display: flex; gap: 8px; align-items: center; padding-top: 2px; }

    .page-shell .ntf-wh { display: flex; flex-direction: column; gap: 10px; max-width: 640px; }
    .page-shell .ntf-wh .ntf-input { width: 100%; box-sizing: border-box; }
    .page-shell .ntf-wh__row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
    .page-shell .ntf-wh__status { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .ntf-wh__status .ok { color: var(--color-success, #009473); font-weight: 600; }
    .page-shell .ntf-wh__status .bad { color: var(--color-danger, #DD4124); font-weight: 600; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function render() {
  ensureStyles();
  ensurePortfolioStyles();
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "settings-notifications",
      title: "Notifications",
      description: "Pick a client to manage their lead alerts."
    });
  }
  return `
    <div class="page-shell" data-section="settings-notifications">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Notifications</h1>
          <p class="page-description">Where your captured leads go.</p>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span></span>
            <div>
              <h2 class="settings-section__title">Lead alerts</h2>
              <p class="settings-section__desc">Email sent the moment a magnet captures a lead. Up to ${MAX_RECIPIENTS} recipients per magnet.</p>
            </div>
          </div>
          <div id="ntf-body">${emptyState("hourglass_empty", "Loading…")}</div>
        </div>
      </div>
      <div class="dashboard-card" id="ntf-wh-card" style="margin-top:24px; display:none">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">webhook</span></span>
            <div>
              <h2 class="settings-section__title">Lead delivery webhook</h2>
              <p class="settings-section__desc">Every captured lead is sent to this URL as JSON. Works with Zapier catch hooks and any CRM endpoint.</p>
            </div>
          </div>
          <div id="ntf-wh-body"></div>
        </div>
      </div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    const fmtN = (n) => Number(n || 0).toLocaleString();
    return initPicker(apiBase(), [
      { h: "Magnets", td: (r) => `${fmtN(r.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${fmtN(r.magnets.total)}</span>` },
      { h: "Leads · wk", td: (r) => fmtN(r.leads.this_week) }
    ], { emptyMsg: "No client orgs yet. Create one under Clients first." });
  }
  await Promise.all([load(), loadWebhook()]);
}
async function loadWebhook() {
  const org = orgGuid();
  if (!org) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(org)}/webhook`);
    if (res.status === 403) {
      state.webhookAllowed = false;
      return;
    }
    const data = await res.json().catch(() => ({}));
    if (!data.ok) return;
    state.webhook = data.webhook;
    renderWebhook();
  } catch {
  }
}
function relTz(tz) {
  try {
    const s = Math.max(0, (Date.now() - new Date(tz).getTime()) / 1e3);
    if (s < 60) return "just now";
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  } catch {
    return "";
  }
}
function renderWebhook() {
  const card = document.getElementById("ntf-wh-card");
  const body = document.getElementById("ntf-wh-body");
  if (!card || !body) return;
  card.style.display = "";
  const wh = state.webhook;
  const last = wh?.last_delivery;
  body.innerHTML = `
    <div class="ntf-wh">
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-url">Webhook URL</label>
        <input class="ntf-input" id="ntf-wh-url" type="url" placeholder="https://hooks.zapier.com/hooks/catch/…" value="${esc(wh?.uri || "")}" />
      </div>
      <div class="settings-field" style="margin-bottom:0">
        <label class="settings-label" for="ntf-wh-secret">Signing secret</label>
        <input class="ntf-input" id="ntf-wh-secret" type="text" autocomplete="off" placeholder="${wh?.has_secret ? "Signing secret saved. Type to replace." : "Optional"}" />
        <p class="settings-help">Sent as an HMAC signature header so your endpoint can verify deliveries.</p>
      </div>
      <div class="ntf-wh__row">
        <button class="ntf-btn" type="button" id="ntf-wh-save"><span class="material-symbols-outlined" aria-hidden="true">save</span> Save</button>
        <button class="ntf-btn" type="button" id="ntf-wh-test" ${wh?.uri ? "" : "disabled"}><span class="material-symbols-outlined" aria-hidden="true">send</span> Send test</button>
        <span class="ntf-wh__status">${last ? last.ok ? `Last delivery: <span class="ok">delivered</span> ${esc(relTz(last.tz))}` : `Last delivery: <span class="bad">failed</span> ${esc(relTz(last.tz))} (${esc(last.error || "")})` : ""}</span>
      </div>
    </div>`;
  body.querySelector("#ntf-wh-save")?.addEventListener("click", async () => {
    const uri = body.querySelector("#ntf-wh-url")?.value.trim() || "";
    const secretRaw = body.querySelector("#ntf-wh-secret")?.value ?? "";
    const payload = { uri };
    if (secretRaw.trim() !== "") payload.secret = secretRaw.trim();
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(orgGuid())}/webhook`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `Failed (HTTP ${res.status})`);
      state.webhook = data.webhook;
      toast(uri ? "Webhook saved" : "Webhook removed", "success");
      renderWebhook();
    } catch (err) {
      toast(err.message || "Could not save", "danger");
    }
  });
  body.querySelector("#ntf-wh-test")?.addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(orgGuid())}/webhook-test`, { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) toast("Test delivery sent", "success");
      else toast(data.error || "Could not deliver the test", "danger");
    } catch {
      toast("Could not deliver the test", "danger");
    } finally {
      btn.disabled = false;
    }
    try {
      await loadWebhook();
    } catch (e2) {
      console.warn("[notifications] loadWebhook refresh failed:", e2);
    }
  });
}
async function load() {
  const body = document.getElementById("ntf-body");
  if (!body) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets`);
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.message || "Failed to load");
    state.magnets = (data.magnets || []).filter((m) => m.status !== "ARCHIVED");
    state.canManage = !!data.canManage;
  } catch (err) {
    console.warn("[notifications] load failed:", err);
    body.innerHTML = emptyState("error", "Could not load your magnets. Please try again.");
    return;
  }
  renderBody();
}
function rowHTML(m) {
  const emails = Array.isArray(m.notify_emails) ? m.notify_emails : [];
  const on = emails.length > 0;
  return `
    <div class="ntf-row" data-guid="${esc(m.guid)}">
      <div class="ntf-magnet">
        <div class="ntf-name" title="${esc(m.name)}">${esc(m.name)}</div>
        <div class="ntf-meta">${esc((m.domains || []).join(", ") || m.status)}</div>
        <span class="ntf-state${on ? " on" : ""}">
          <span class="material-symbols-outlined" aria-hidden="true">${on ? "notifications_active" : "notifications_off"}</span>
          ${on ? `Alerts on · ${emails.length}` : "Alerts off"}
        </span>
      </div>
      <div class="ntf-config">
        ${emails.length ? `<div class="ntf-chips">${emails.map((e) => `
              <span class="ntf-chip">${esc(e)}${state.canManage ? `<button type="button" data-remove="${esc(e)}" aria-label="Remove ${esc(e)}">&times;</button>` : ""}</span>`).join("")}</div>` : `<div class="ntf-none">No alert emails.</div>`}
        ${state.canManage ? `
        <div class="ntf-addrow">
          <input class="ntf-input" type="email" placeholder="name@business.com" aria-label="Add alert email" ${emails.length >= MAX_RECIPIENTS ? "disabled" : ""} />
          <button class="ntf-btn" type="button" data-add ${emails.length >= MAX_RECIPIENTS ? "disabled" : ""}>
            <span class="material-symbols-outlined" aria-hidden="true">add</span> Add
          </button>
        </div>` : ""}
      </div>
      ${state.canManage ? `
      <div class="ntf-actions">
        <button class="ntf-btn" type="button" data-test ${emails.length ? "" : "disabled"} title="${emails.length ? "Send a sample alert to the emails above" : "Add an alert email first"}">
          <span class="material-symbols-outlined" aria-hidden="true">send</span> Send test
        </button>
      </div>` : ""}
    </div>`;
}
function renderBody() {
  const body = document.getElementById("ntf-body");
  if (!body) return;
  if (!state.magnets.length) {
    body.innerHTML = emptyState("widgets", "No magnets yet. Create one under Your Magnets first.");
    return;
  }
  body.innerHTML = state.magnets.map(rowHTML).join("");
  capList(body, { rowSelector: ".ntf-row", noun: "magnets" });
  body.querySelectorAll(".ntf-row").forEach((row) => {
    const guid = row.dataset.guid;
    const input = row.querySelector(".ntf-input");
    const add = () => {
      const v = (input?.value || "").trim().toLowerCase();
      if (!v) return;
      if (!EMAIL_RX(v)) {
        toast("That does not look like an email address", "danger");
        return;
      }
      const m = state.magnets.find((x) => x.guid === guid);
      const emails = [...m.notify_emails || []];
      if (emails.includes(v)) {
        toast("Already added", "info");
        return;
      }
      if (emails.length >= MAX_RECIPIENTS) {
        toast(`Up to ${MAX_RECIPIENTS} emails per magnet`, "info");
        return;
      }
      saveEmails(guid, [...emails, v]);
    };
    row.querySelector("[data-add]")?.addEventListener("click", add);
    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") add();
    });
    row.querySelectorAll("[data-remove]").forEach((btn) => btn.addEventListener("click", () => {
      const m = state.magnets.find((x) => x.guid === guid);
      saveEmails(guid, (m.notify_emails || []).filter((e) => e !== btn.dataset.remove));
    }));
    row.querySelector("[data-test]")?.addEventListener("click", () => sendTest(guid, row.querySelector("[data-test]")));
  });
}
async function saveEmails(guid, emails) {
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(guid)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notify_emails: emails })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || data.message || `Failed (HTTP ${res.status})`);
    const m = state.magnets.find((x) => x.guid === guid);
    if (m) m.notify_emails = emails;
    toast("Alert emails updated", "success");
  } catch (err) {
    console.warn("[notifications] save failed:", err);
    toast(err.message || "Could not save", "danger");
    return;
  }
  try {
    renderBody();
  } catch (e) {
    console.error("[notifications] renderBody after save failed:", e);
  }
}
async function sendTest(guid, btn) {
  if (btn) {
    btn.disabled = true;
  }
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(guid)}/notify-test`, { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) toast("Test alert sent", "success");
    else toast(data.error || "Could not send the test", "danger");
  } catch {
    toast("Could not send the test", "danger");
  } finally {
    if (btn) btn.disabled = false;
  }
}
const settingsNotificationsRoute = { render, init };
export {
  settingsNotificationsRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-notifications-route-DXmcM55x.js.map
