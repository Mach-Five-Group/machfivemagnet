import { A as AuthController, P as PubSub, b as AppBroadcast } from "./index.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const initials = (name) => String(name || "?").trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase() || "?";
const MANAGED_CHANNEL = "managed_client";
const CHANNEL_LABEL = {
  reseller_org: "Your organization",
  managed_client: "Client workspace",
  saas_org: "Organization"
};
const MAX_AVATARS = 6;
const state = { org: null };
const orgGuid = () => AuthController.getActiveOrg()?.guid || AuthController.getMemberships()[0]?.orgGuid || null;
const orgChannel = () => AuthController.getActiveOrg()?.channel || AuthController.getMemberships()[0]?.channel || null;
const canManage = () => AuthController.getCapabilities().includes("manage_team");
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-workspace-styles";
  s.textContent = `
    .page-shell .ws-title-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .page-shell textarea.settings-input { resize: vertical; line-height: 1.5; }
    .page-shell .settings-save-row .settings-help { margin-right: auto; text-align: left; }
    .page-shell .ws-avatars { display: flex; align-items: center; margin-bottom: 10px; }
    .page-shell .ws-avatar {
      flex: 0 0 auto; width: 34px; height: 34px; border-radius: 50%;
      display: grid; place-items: center; font-size: 0.74rem; font-weight: 700;
      color: #fff; background: var(--color-primary-600, #0072BA);
      border: 2px solid var(--color-bg, #fff); margin-left: -8px;
    }
    .page-shell .ws-avatar:first-child { margin-left: 0; }
    .page-shell .ws-avatar--more { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .ws-counts { font-size: 0.84rem; color: var(--color-text-muted, #4A5A78); margin: 0; }
    .page-shell .ws-team-actions { margin-top: 14px; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
const sectionHead = (icon, title, desc) => `
  <div class="settings-section__head">
    <span class="settings-section__icon"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span></span>
    <div>
      <h2 class="settings-section__title">${title}</h2>
      <p class="settings-section__desc">${desc}</p>
    </div>
  </div>`;
function render() {
  ensureStyles();
  const chip = CHANNEL_LABEL[orgChannel()];
  return `
    <div class="page-shell" data-section="settings-workspace">
      <div class="page-header">
        <div class="page-header-text">
          <div class="ws-title-row">
            <h1 class="page-title">Workspace</h1>
            ${chip ? `<span class="m5t-chip">${esc(chip)}</span>` : ""}
          </div>
          <p class="page-description">Your organization's identity and team.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-body">
          ${sectionHead("apartment", "Organization", "Name and details.")}
          <div id="ws-org-body">${emptyState("hourglass_empty", "Loading…")}</div>
        </div>
      </div>

      <div class="dashboard-card" id="ws-team-card" style="margin-top:24px; display:none">
        <div class="card-body">
          ${sectionHead("group", "Team", "Who has access.")}
          <div id="ws-team-body"></div>
        </div>
      </div>
    </div>`;
}
async function init() {
  state.org = null;
  await loadOrg();
  await loadTeam();
}
async function loadOrg() {
  const body = document.getElementById("ws-org-body");
  if (!body) return;
  const guid = orgGuid();
  if (!guid) {
    body.innerHTML = emptyState("apartment", "No workspace on this account yet.");
    return;
  }
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/acctGroup`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || `Failed (HTTP ${res.status})`);
    state.org = (data.data || []).find((row) => row.guid === guid) || null;
    if (!state.org) throw new Error("Org row not in scope");
  } catch (err) {
    console.warn("[settings-workspace] load failed:", err);
    body.innerHTML = emptyState("error", "Could not load your workspace. Please try again.");
    return;
  }
  renderOrg();
}
function factsHTML() {
  const label = CHANNEL_LABEL[orgChannel()] || "";
  const tz = state.org?.created?.created_tz;
  let created = "";
  if (tz) {
    const d = new Date(tz);
    if (!Number.isNaN(d.getTime())) created = `Created ${d.toLocaleDateString()}`;
  }
  const parts = [label, created].filter(Boolean);
  return parts.length ? `<p class="settings-help">${esc(parts.join(" · "))}</p>` : "";
}
function renderOrg() {
  const body = document.getElementById("ws-org-body");
  if (!body) return;
  const org = state.org || {};
  if (!canManage()) {
    const note = orgChannel() === MANAGED_CHANNEL ? `<div class="settings-note"><span class="material-symbols-outlined" aria-hidden="true">info</span> This workspace is managed for you.</div>` : "";
    body.innerHTML = `
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Organization name</div>
          <div class="settings-item__desc">${esc(org.caption || "Not set")}</div>
        </div>
      </div>
      <div class="settings-item">
        <div class="settings-item__info">
          <div class="settings-item__title">Description</div>
          <div class="settings-item__desc">${esc(org.description || "Not set")}</div>
        </div>
      </div>
      ${note}
      <div style="margin-top:12px">${factsHTML()}</div>`;
    return;
  }
  body.innerHTML = `
    <div class="settings-field">
      <label class="settings-label" for="ws-name">Organization name</label>
      <input class="settings-input" id="ws-name" type="text" required value="${esc(org.caption || "")}" />
    </div>
    <div class="settings-field">
      <label class="settings-label" for="ws-desc">Description</label>
      <textarea class="settings-input" id="ws-desc" rows="2">${esc(org.description || "")}</textarea>
    </div>
    <p class="settings-error" id="ws-org-error"></p>
    <div class="settings-save-row">
      ${factsHTML()}
      <button class="btn btn-primary" type="button" id="ws-save">Save</button>
    </div>`;
  document.getElementById("ws-save")?.addEventListener("click", saveOrg);
}
async function saveOrg() {
  const btn = document.getElementById("ws-save");
  const errEl = document.getElementById("ws-org-error");
  const caption = (document.getElementById("ws-name")?.value || "").trim();
  const description = (document.getElementById("ws-desc")?.value || "").trim();
  if (errEl) errEl.textContent = "";
  if (!caption) {
    if (errEl) errEl.textContent = "Organization name is required.";
    return;
  }
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(state.org.id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caption, description })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.message || data.error || `Failed (HTTP ${res.status})`);
    state.org = { ...state.org, caption, description };
    toast("Workspace updated.", "success");
  } catch (err) {
    console.warn("[settings-workspace] save failed:", err);
    toast(err.message || "Could not save", "danger");
    if (btn) btn.disabled = false;
    return;
  }
  if (btn) btn.disabled = false;
  try {
    await AuthController.fetchScope?.();
  } catch (e) {
    console.warn("[settings-workspace] fetchScope after save failed:", e);
  }
}
function removeTeamCard() {
  document.getElementById("ws-team-card")?.remove();
}
async function loadTeam() {
  const card = document.getElementById("ws-team-card");
  if (!card) return;
  const guid = orgGuid();
  if (!guid || !canManage()) {
    removeTeamCard();
    return;
  }
  let members = [];
  let invites = [];
  try {
    const [mres, ires] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(guid)}/members`),
      fetch(`${apiBase()}/m5t/v5/acctGroup/${encodeURIComponent(guid)}/invites`)
    ]);
    if (mres.status === 403 || ires.status === 403) {
      removeTeamCard();
      return;
    }
    const [mdata, idata] = await Promise.all([
      mres.json().catch(() => ({})),
      ires.json().catch(() => ({}))
    ]);
    if (!mres.ok || !ires.ok) throw new Error(`members: ${mres.status}, invites: ${ires.status}`);
    members = mdata.members || [];
    invites = idata.invites || [];
  } catch (err) {
    console.warn("[settings-workspace] team load failed:", err);
    card.style.display = "";
    const body = document.getElementById("ws-team-body");
    if (body) body.innerHTML = emptyState("error", "Could not load your team. Please try again.");
    return;
  }
  renderTeam(members, invites);
}
function avatarsHTML(members) {
  if (!members.length) return "";
  const shown = members.slice(0, MAX_AVATARS);
  const overflow = members.length - shown.length;
  return `
    <div class="ws-avatars">
      ${shown.map((m) => `<span class="ws-avatar" title="${esc(m.name || m.email)}">${esc(initials(m.name || m.email))}</span>`).join("")}
      ${overflow > 0 ? `<span class="ws-avatar ws-avatar--more">+${overflow}</span>` : ""}
    </div>`;
}
function countsText(members, invites) {
  const m = `${members.length} member${members.length === 1 ? "" : "s"}`;
  if (!invites.length) return m;
  return `${m} · ${invites.length} pending invite${invites.length === 1 ? "" : "s"}`;
}
function renderTeam(members, invites) {
  const card = document.getElementById("ws-team-card");
  const body = document.getElementById("ws-team-body");
  if (!card || !body) return;
  card.style.display = "";
  const showManage = orgChannel() !== MANAGED_CHANNEL;
  body.innerHTML = `
    ${avatarsHTML(members)}
    <p class="ws-counts">${esc(countsText(members, invites))}</p>
    ${showManage ? `<div class="ws-team-actions"><a class="btn btn-secondary" href="#/team">Manage team</a></div>` : ""}`;
}
const settingsWorkspaceRoute = { render, init };
export {
  settingsWorkspaceRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-workspace-route-Cdl3FsZV.js.map
