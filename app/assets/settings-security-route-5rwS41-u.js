import { _ as __vitePreload, A as AuthController, P as PubSub, b as AppBroadcast, c as capList } from "./index.js";
import { c as confirmDialog } from "./confirmDialog-B9956zZ8.js";
import { v as validatePassword } from "./passwordValidator-CLQPipXE.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const state = { passkeys: [], loaded: false };
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-security-styles";
  s.textContent = `
    .page-shell .pk-row { display: flex; gap: 16px; align-items: center; padding: 14px 4px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    .page-shell .pk-row:last-child { border-bottom: 0; }
    .page-shell .pk-icon { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); }
    .page-shell .pk-info { flex: 1 1 auto; min-width: 0; }
    .page-shell .pk-name { font-weight: 600; font-size: 0.92rem; }
    .page-shell .pk-meta { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 2px; }
    .page-shell .pk-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .pk-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .pk-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .pk-btn--danger { color: var(--color-danger, #DD4124); border-color: var(--color-danger, #DD4124); }
    .page-shell .pk-btn--danger:hover { background: var(--color-danger-soft, #FBEAE6); }
    .page-shell .pk-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .pk-unsupported { font-size: 0.84rem; color: var(--color-text-subtle, #6C7C9A); }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="settings-security">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Security</h1>
          <p class="page-description">How you sign in to Mach Five Magnet.</p>
        </div>
      </div>
      <div class="dashboard-card" style="margin-bottom:20px">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">password</span></span>
            <div>
              <h2 class="settings-section__title">Password</h2>
              <p class="settings-section__desc">Signing in as ${esc(signinEmail())}. You stay signed in on this device after a change.</p>
            </div>
          </div>
          <div class="settings-grid-2">
            <div class="settings-field">
              <label class="settings-label" for="pw-new">New password</label>
              <input class="settings-input" id="pw-new" type="password" autocomplete="new-password">
            </div>
            <div class="settings-field">
              <label class="settings-label" for="pw-confirm">Confirm new password</label>
              <input class="settings-input" id="pw-confirm" type="password" autocomplete="new-password">
            </div>
          </div>
          <p class="settings-error" id="pw-error" role="alert" hidden></p>
          <div class="settings-save-row">
            <button class="btn btn-primary" id="pw-save" type="button">Update password</button>
          </div>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">passkey</span> Passkeys</h2>
          <button class="btn btn-secondary" id="pk-add-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">add</span>
            Add a passkey
          </button>
        </div>
        <div class="card-body" id="pk-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>
    </div>`;
}
async function init() {
  document.getElementById("pw-save")?.addEventListener("click", changePassword);
  const addBtn = document.getElementById("pk-add-btn");
  if (addBtn) {
    if (window.PublicKeyCredential) {
      addBtn.style.display = "";
      addBtn.addEventListener("click", addPasskey);
    }
  }
  await load();
}
async function load() {
  const body = document.getElementById("pk-body");
  if (!body) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/webauthn`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "Failed to load");
    state.passkeys = data.passkeys || [];
    state.loaded = true;
  } catch (err) {
    console.warn("[settings-security] load failed:", err);
    body.innerHTML = emptyState("error", "Could not load your passkeys. Please try again.");
    return;
  }
  renderBody();
}
function relTz(tz) {
  if (!tz) return null;
  try {
    const s = Math.max(0, (Date.now() - new Date(tz).getTime()) / 1e3);
    if (s < 60) return "just now";
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  } catch {
    return null;
  }
}
function rowHTML(pk) {
  const lastUsed = relTz(pk.last_used_time);
  const createdTz = pk.created?.created_tz;
  const added = relTz(createdTz);
  const meta = [
    pk.device_type === "multiDevice" ? "Syncs across devices" : "This device only",
    lastUsed ? `Last used ${lastUsed}` : "Never used to sign in yet",
    added ? `Added ${added}` : null
  ].filter(Boolean).join(" · ");
  return `
    <div class="pk-row" data-guid="${esc(pk.guid)}">
      <span class="pk-icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
      <div class="pk-info">
        <div class="pk-name">${esc(pk.device_label || "Passkey")}</div>
        <div class="pk-meta">${esc(meta)}</div>
      </div>
      <button class="pk-btn pk-btn--danger" type="button" data-remove="${esc(pk.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">delete</span> Remove
      </button>
    </div>`;
}
function renderBody() {
  const body = document.getElementById("pk-body");
  if (!body) return;
  if (!window.PublicKeyCredential) {
    body.innerHTML = `<p class="pk-unsupported">This browser doesn't support passkeys. Your password sign-in still works as usual.</p>`;
    return;
  }
  if (!state.passkeys.length) {
    body.innerHTML = emptyState("passkey", "No passkeys yet. Add one for a faster, phishing-resistant sign-in.");
    return;
  }
  body.innerHTML = state.passkeys.map(rowHTML).join("");
  capList(body, { rowSelector: ".pk-row", noun: "passkeys" });
  body.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removePasskey(btn.dataset.remove, btn));
  });
}
function guessDeviceLabel() {
  try {
    const ua = navigator.userAgent || "";
    const platform = /iPhone/.test(ua) ? "iPhone" : /iPad/.test(ua) ? "iPad" : /Android/.test(ua) ? "Android" : /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : /Linux/.test(ua) ? "Linux" : "device";
    const browser = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : /Firefox\//.test(ua) ? "Firefox" : /Safari\//.test(ua) ? "Safari" : "";
    return browser ? `${browser} on ${platform}` : platform;
  } catch {
    return "Passkey";
  }
}
async function addPasskey() {
  const addBtn = document.getElementById("pk-add-btn");
  if (addBtn) addBtn.disabled = true;
  try {
    const { startRegistration } = await __vitePreload(async () => {
      const { startRegistration: startRegistration2 } = await import("./index-BitdqKye.js");
      return { startRegistration: startRegistration2 };
    }, true ? [] : void 0, import.meta.url);
    const optRes = await fetch(`${apiBase()}/m5t/v5/webauthn/register/options`, { method: "POST" });
    const optData = await optRes.json().catch(() => ({}));
    if (!optRes.ok || !optData.ok) throw new Error(optData.error || "Could not start passkey registration");
    let credential;
    try {
      credential = await startRegistration({ optionsJSON: optData.options });
    } catch (err) {
      if (err?.name === "NotAllowedError") return;
      throw err;
    }
    const verifyRes = await fetch(`${apiBase()}/m5t/v5/webauthn/register/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response: credential, deviceLabel: guessDeviceLabel() })
    });
    const data = await verifyRes.json().catch(() => ({}));
    if (!verifyRes.ok || !data.ok) throw new Error(data.error || "Could not register this passkey");
    toast("Passkey added", "success");
    await load();
  } catch (err) {
    console.warn("[settings-security] addPasskey failed:", err);
    toast(err.message || "Could not add a passkey", "danger");
  } finally {
    if (addBtn) addBtn.disabled = false;
  }
}
async function removePasskey(guid, btn) {
  const ok = await confirmDialog({
    title: "Remove this passkey?",
    message: "You can always add it back later.",
    confirmLabel: "Remove",
    danger: true
  });
  if (!ok) return;
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/webauthn/${encodeURIComponent(guid)}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "Could not remove this passkey");
    state.passkeys = state.passkeys.filter((p) => p.guid !== guid);
    toast("Passkey removed", "success");
    renderBody();
  } catch (err) {
    console.warn("[settings-security] removePasskey failed:", err);
    toast(err.message || "Could not remove this passkey", "danger");
    if (btn) btn.disabled = false;
  }
}
function signinEmail() {
  try {
    return AuthController.getScope()?.entity?.email || AuthController.getEntity?.()?.email || "your account";
  } catch {
    return "your account";
  }
}
const pwError = (msg) => {
  const el = document.getElementById("pw-error");
  if (!el) return;
  el.textContent = msg || "";
  el.hidden = !msg;
};
const listAnd = (items) => items.length <= 1 ? String(items[0] ?? "") : items.length === 2 ? `${items[0]} and ${items[1]}` : `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
async function changePassword() {
  const newEl = document.getElementById("pw-new");
  const confirmEl = document.getElementById("pw-confirm");
  const btn = document.getElementById("pw-save");
  const password = newEl?.value || "";
  const confirmVal = confirmEl?.value || "";
  const errors = validatePassword(password);
  if (errors.length) {
    pwError(`Password needs: ${listAnd(errors)}.`);
    return;
  }
  if (password !== confirmVal) {
    pwError("Passwords do not match.");
    return;
  }
  pwError("");
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/acctEntity/resetHash`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "Could not update your password");
    toast("Password updated", "success");
    if (newEl) newEl.value = "";
    if (confirmEl) confirmEl.value = "";
  } catch (err) {
    pwError(err.message || "Could not update your password.");
  } finally {
    if (btn) btn.disabled = false;
  }
}
const settingsSecurityRoute = { render, init };
export {
  settingsSecurityRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-security-route-5rwS41-u.js.map
