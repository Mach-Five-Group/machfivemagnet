import { s as setTheme, d as currentTheme, P as PubSub, b as AppBroadcast, I as I18nController, e as darkModeEnabled, F as FEATURE_FLAGS, A as AuthController } from "./index.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const PROFILE_URL = () => `${apiBase()}/m5t/v5/acctEntity/profile`;
const state = { profile: null };
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-settings-general-styles";
  s.textContent = `
    .page-shell[data-section="settings-general"] a.settings-link-card { padding: 18px 24px; }
    .page-shell[data-section="settings-general"] .settings-item__control .settings-select { width: auto; min-width: 190px; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
function availableLangs() {
  try {
    return I18nController.getAvailableLanguages() || [];
  } catch {
    return [];
  }
}
function currentLang() {
  const langs = availableLangs();
  const fallback = langs.includes(FEATURE_FLAGS.FF_SSE_I18N_LANG) ? FEATURE_FLAGS.FF_SSE_I18N_LANG : langs[0] || FEATURE_FLAGS.FF_SSE_I18N_LANG;
  try {
    const stored = localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_USER_LANG);
    return stored && langs.includes(stored) ? stored : fallback;
  } catch {
    return fallback;
  }
}
function langLabel(code) {
  try {
    const name = new Intl.DisplayNames([code], { type: "language" }).of(code);
    if (name && name !== code) return name.charAt(0).toUpperCase() + name.slice(1);
  } catch {
  }
  return code;
}
function appearanceCardHTML() {
  const showDark = darkModeEnabled();
  const langs = availableLangs();
  const showLang = langs.length > 1;
  if (!showDark && !showLang) return "";
  const lang = currentLang();
  return `
    <div class="dashboard-card" id="gen-appearance-card" style="margin-top:24px">
      <div class="card-body">
        <div class="settings-section__head">
          <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">palette</span></span>
          <div>
            <h2 class="settings-section__title">Appearance and language</h2>
            <p class="settings-section__desc">Theme and display language.</p>
          </div>
        </div>
        ${showDark ? `
        <div class="settings-item" id="gen-dark-item">
          <div class="settings-item__info">
            <div class="settings-item__title">Dark mode</div>
            <div class="settings-item__desc">Off by default. Applies on this device.</div>
          </div>
          <div class="settings-item__control">
            <label class="m5t-switch">
              <input type="checkbox" role="switch" id="gen-dark" aria-label="Dark mode" ${currentTheme() === "dark" ? "checked" : ""} />
              <span class="m5t-switch__track" aria-hidden="true"></span>
            </label>
          </div>
        </div>` : ""}
        ${showLang ? `
        <div class="settings-item" id="gen-lang-item">
          <div class="settings-item__info">
            <div class="settings-item__title">Language</div>
          </div>
          <div class="settings-item__control">
            <select class="settings-select" id="gen-lang" aria-label="Language">
              ${langs.map((c) => `<option value="${esc(c)}" ${c === lang ? "selected" : ""}>${esc(langLabel(c))}</option>`).join("")}
            </select>
          </div>
        </div>` : ""}
      </div>
    </div>`;
}
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="settings-general">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">General</h1>
          <p class="page-description">Your profile and preferences.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-body">
          <div class="settings-section__head">
            <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">person</span></span>
            <div>
              <h2 class="settings-section__title">Profile</h2>
              <p class="settings-section__desc">How you appear across Mach Five Magnet.</p>
            </div>
          </div>
          <div id="gen-profile-body">${emptyState("hourglass_empty", "Loading…")}</div>
        </div>
      </div>

      ${appearanceCardHTML()}

      <a class="dashboard-card settings-link-card" href="#/settings/security" style="margin-top:24px">
        <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">passkey</span></span>
        <div>
          <div class="settings-section__title">Sign-in and security</div>
          <p class="settings-section__desc">Password and passkeys.</p>
        </div>
        <span class="settings-link-card__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
      </a>
    </div>`;
}
async function init() {
  wireAppearance();
  await loadProfile();
}
function profileFormHTML(p) {
  return `
    <div class="settings-grid-2">
      <div class="settings-field">
        <label class="settings-label" for="gen-first">First name</label>
        <input class="settings-input" id="gen-first" type="text" autocomplete="given-name" value="${esc(p.first)}" />
        <p class="settings-error" id="gen-first-error" role="alert" hidden></p>
      </div>
      <div class="settings-field">
        <label class="settings-label" for="gen-last">Last name</label>
        <input class="settings-input" id="gen-last" type="text" autocomplete="family-name" value="${esc(p.last)}" />
        <p class="settings-error" id="gen-last-error" role="alert" hidden></p>
      </div>
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-company">Company</label>
      <input class="settings-input" id="gen-company" type="text" autocomplete="organization" value="${esc(p.company)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-phone">Phone</label>
      <input class="settings-input" id="gen-phone" type="tel" autocomplete="tel" value="${esc(p.phone)}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="gen-email">Sign-in email</label>
      <input class="settings-input" id="gen-email" type="email" value="${esc(p.email)}" readonly />
      <p class="settings-help">Your sign-in email. Contact support to change it.</p>
    </div>
    <div class="settings-save-row">
      <button class="btn btn-primary" id="gen-save" type="button">Save</button>
    </div>`;
}
async function loadProfile() {
  const body = document.getElementById("gen-profile-body");
  if (!body) return;
  try {
    const res = await fetch(PROFILE_URL());
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok || !data.data) throw new Error(data.error || "Failed to load");
    state.profile = data.data;
  } catch (err) {
    console.warn("[settings-general] profile load failed:", err);
    body.innerHTML = emptyState("error", "Could not load your profile. Please try again.");
    return;
  }
  body.innerHTML = profileFormHTML(state.profile);
  body.querySelector("#gen-save")?.addEventListener("click", saveProfile);
}
function fieldError(id, msg) {
  const el = document.getElementById(`${id}-error`);
  if (el) {
    el.textContent = msg || "";
    el.hidden = !msg;
  }
  const input = document.getElementById(id);
  if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
}
async function saveProfile() {
  const btn = document.getElementById("gen-save");
  const val = (id) => (document.getElementById(id)?.value ?? "").trim();
  const payload = { first: val("gen-first"), last: val("gen-last"), company: val("gen-company"), phone: val("gen-phone") };
  fieldError("gen-first", payload.first ? "" : "First name is required.");
  fieldError("gen-last", payload.last ? "" : "Last name is required.");
  if (!payload.first || !payload.last) return;
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(PROFILE_URL(), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "Could not save.");
    if (data.data) state.profile = data.data;
    toast("Profile updated.", "success");
  } catch (err) {
    console.warn("[settings-general] profile save failed:", err);
    toast(err.message || "Could not save.", "error");
  } finally {
    if (btn) btn.disabled = false;
  }
}
function wireAppearance() {
  const dark = document.getElementById("gen-dark");
  if (dark) {
    dark.addEventListener("change", () => {
      setTheme(dark.checked ? "dark" : "light");
      dark.checked = currentTheme() === "dark";
    });
    const token = PubSub.subscribe(AppBroadcast.UI_THEME_CHANGED, () => {
      if (!dark.isConnected) {
        PubSub.unsubscribe(token);
        return;
      }
      dark.checked = currentTheme() === "dark";
    });
  }
  const lang = document.getElementById("gen-lang");
  if (lang) {
    lang.addEventListener("change", () => {
      try {
        I18nController.setLanguage(lang.value);
      } catch (err) {
        console.warn("[settings-general] setLanguage failed:", err);
      }
    });
  }
}
const settingsGeneralRoute = { render, init };
export {
  settingsGeneralRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-general-route-D-SxL6Tx.js.map
