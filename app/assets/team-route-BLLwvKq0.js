import { A as AuthController, j as MEMBER_ROLES, k as canManageMemberRole, P as PubSub, b as AppBroadcast } from "./index.js";
const MANAGED_CHANNEL = "managed_client";
let stylesInjected = false;
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const initials = (name) => String(name || "?").trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase() || "?";
function teamOrg() {
  const active = AuthController.getActiveOrg();
  let org = active && active.channel !== MANAGED_CHANNEL ? active : null;
  if (!org) {
    const m = AuthController.getMemberships().find((x) => x.channel !== MANAGED_CHANNEL);
    if (m) org = { guid: m.orgGuid, channel: m.channel, memberRole: m.memberRole };
  }
  if (!org) return null;
  const name = AuthController.getMemberships().find((m) => m.orgGuid === org.guid)?.name;
  return { ...org, name };
}
function assignableRoles(callerRole) {
  return Object.values(MEMBER_ROLES).filter((r) => canManageMemberRole(callerRole, r.value)).sort((a, b) => b.rank - a.rank);
}
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-team-styles";
  style.textContent = `
    .page-shell .team-count { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-list { display: flex; flex-direction: column; }
    .page-shell .team-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); }
    .page-shell .team-row:last-child { border-bottom: 0; }
    .page-shell .team-avatar { flex: 0 0 auto; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; font-size: 0.8rem; color: #fff; background: var(--color-primary-600, #0072BA); }
    .page-shell .team-main { flex: 1 1 auto; min-width: 0; }
    .page-shell .team-name { font-weight: 600; font-size: 0.92rem; }
    .page-shell .team-email { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .team-role { flex: 0 0 auto; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .team-role[data-role="owner"] { background: var(--color-accent-strong-soft, #FBF1D2); color: var(--color-accent-strong, #915E00); }
    .page-shell .team-role[data-role="admin"] { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent-hover, #00558D); }

    .team-pending { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 10px 12px; margin-bottom: 18px; background: var(--color-surface, #F4F7FB); }
    .team-pending__label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 8px; }
    .team-pending__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .team-pending__email { flex: 1 1 auto; min-width: 0; font-size: 0.84rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* Modal (shared visual language with the clients invite modal) */
    .team-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.45); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .team-modal-scrim.open { opacity: 1; }
    .team-modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001; width: min(440px, 92vw); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3); opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease; font-family: var(--font-body, 'Inter', system-ui, sans-serif); }
    .team-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .team-modal__head { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .team-modal__title { font-family: var(--font-display, inherit); font-size: 1.1rem; font-weight: 600; }
    .team-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .team-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    .team-modal__body { padding: 22px; }
    .team-modal__sub { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    .team-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin: 12px 0 6px; }
    .team-modal__input, .team-modal__select { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .team-modal__input:focus, .team-modal__select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .team-modal__row { display: flex; gap: 10px; }
    .team-modal__row > div { flex: 1; }
    .team-modal__error { color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 12px 0 0; min-height: 1em; }
    .team-modal__actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; }
    .team-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); display: inline-flex; align-items: center; gap: 6px; }
    .team-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .team-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .team-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; }
    .team-modal__btn--primary:hover { background: var(--color-primary-700, #00558D); }
    .team-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }
    .team-modal__result { text-align: center; }
    .team-modal__linkrow { display: flex; gap: 8px; margin: 10px 0 4px; }
    .team-modal__linkrow .team-modal__input { font-size: 0.8rem; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function emptyState(icon, msg) {
  return `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
}
function memberRowHTML(m, org, canManage) {
  const role = m.member_role || "member";
  const isSelf = m.entity_guid && m.entity_guid === AuthController.getEntity?.()?.guid;
  const removable = canManage && !isSelf && assignableRoles(org.memberRole).some((r) => r.value === role);
  return `
    <div class="team-row">
      <span class="team-avatar">${esc(initials(m.name || m.email))}</span>
      <span class="team-main">
        <div class="team-name">${esc(m.name || m.email)}${m.verified ? "" : ' · <span style="color:var(--color-text-subtle,#6C7C9A);font-weight:400;">pending verification</span>'}</div>
        <div class="team-email" title="${esc(m.email)}">${esc(m.email)}</div>
      </span>
      <span class="team-role" data-role="${esc(role)}">${esc(MEMBER_ROLES[role]?.label || role)}</span>
      ${removable ? `<button class="team-modal__btn team-modal__btn--ghost team-remove" type="button" data-id="${esc(m.id)}" data-name="${esc(m.name || m.email)}">Remove</button>` : ""}
    </div>`;
}
async function onRevokeInvite(btn, org) {
  const { uid, email } = btn.dataset;
  if (!window.confirm(
    `Revoke the invitation for ${email}?

The invitation link stops working immediately, including any copy already sent. You can invite this address again afterwards.`
  )) return;
  btn.disabled = true;
  try {
    const base = AuthController.getConfig?.().BASE_URL || "";
    const res = await fetch(
      `${base}/m5t/v5/acctGroup/${encodeURIComponent(org.guid)}/invites/${encodeURIComponent(uid)}`,
      { method: "DELETE" }
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.message || data.error || `HTTP ${res.status}`);
    toast(`Invitation for ${email} revoked`, "success");
  } catch (err) {
    btn.disabled = false;
    toast(err.message || "Could not revoke that invitation.", "error");
    return;
  }
  try {
    await loadTeam(org);
  } catch {
  }
}
async function onRemoveMember(btn, org) {
  const { id, name } = btn.dataset;
  if (!window.confirm(
    `Remove ${name} from the team?

They lose access to this workspace immediately. Their account itself is not deleted, and you can invite them again later.`
  )) return;
  btn.disabled = true;
  try {
    const base = AuthController.getConfig?.().BASE_URL || "";
    const res = await fetch(`${base}/m5t/v5/acctGroupMember/${encodeURIComponent(id)}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.message || data.error || `HTTP ${res.status}`);
    toast(`${name} removed from the team`, "success");
  } catch (err) {
    btn.disabled = false;
    toast(err.message || "Could not remove that member.", "error");
    return;
  }
  try {
    await loadTeam(org);
  } catch {
  }
}
function render() {
  ensureStyles();
  return `
    <div class="page-shell" data-section="team">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Team</h1>
          <p class="page-description">The people who can access your workspace.</p>
        </div>
        <button class="btn btn-primary" id="team-invite-btn" type="button">
          <span class="material-symbols-outlined" aria-hidden="true">person_add</span>
          Invite teammate
        </button>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Members</h2>
          <span class="team-count" id="team-count"></span>
        </div>
        <div class="card-body" id="team-body">
          ${emptyState("hourglass_empty", "Loading team…")}
        </div>
      </div>
    </div>`;
}
async function init() {
  const org = teamOrg();
  const btn = document.getElementById("team-invite-btn");
  if (!org) {
    if (btn) btn.style.display = "none";
    document.getElementById("team-body").innerHTML = emptyState("info", "Team management is available for agency and workspace accounts.");
    return;
  }
  btn?.addEventListener("click", () => openInviteModal(org));
  await loadTeam(org);
}
async function loadTeam(org) {
  const body = document.getElementById("team-body");
  const countEl = document.getElementById("team-count");
  if (!body) return;
  try {
    const base = AuthController.getConfig?.().BASE_URL || "";
    const [mres, ires] = await Promise.all([
      fetch(`${base}/m5t/v5/acctGroup/${encodeURIComponent(org.guid)}/members`),
      fetch(`${base}/m5t/v5/acctGroup/${encodeURIComponent(org.guid)}/invites`)
    ]);
    const [mdata, idata] = await Promise.all([
      mres.json().catch(() => ({})),
      ires.json().catch(() => ({}))
    ]);
    if (!mres.ok || !ires.ok) {
      throw new Error(`Failed to load team (members: ${mres.status}, invites: ${ires.status})`);
    }
    const members = mdata.members || [];
    const invites = idata.invites || [];
    const canManage = assignableRoles(org.memberRole).length > 0;
    const pendingHTML = invites.length ? `
      <div class="team-pending">
        <div class="team-pending__label">Pending invites</div>
        ${invites.map((iv) => `
          <div class="team-pending__row">
            <span class="team-pending__email" title="${esc(iv.email)}">${esc(iv.email)}${iv.expired ? " · expired" : ""}</span>
            <button class="team-modal__btn team-modal__btn--ghost team-copy" type="button" data-url="${esc(iv.inviteUrl)}">Copy link</button>
            ${canManage ? `<button class="team-modal__btn team-modal__btn--ghost team-revoke" type="button" data-uid="${esc(iv.uid)}" data-email="${esc(iv.email)}">Revoke</button>` : ""}
          </div>`).join("")}
      </div>` : "";
    body.innerHTML = pendingHTML + (members.length ? `<div class="team-list">${members.map((m) => memberRowHTML(m, org, canManage)).join("")}</div>` : emptyState("group", "No members yet."));
    if (countEl) countEl.textContent = `${members.length} member${members.length === 1 ? "" : "s"}`;
    body.querySelectorAll(".team-copy").forEach((b) => b.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.url);
        b.textContent = "Copied!";
        setTimeout(() => {
          b.textContent = "Copy link";
        }, 1500);
      } catch {
      }
    }));
    body.querySelectorAll(".team-revoke").forEach((b) => b.addEventListener("click", () => onRevokeInvite(b, org)));
    body.querySelectorAll(".team-remove").forEach((b) => b.addEventListener("click", () => onRemoveMember(b, org)));
  } catch (err) {
    console.warn("[team] load failed:", err);
    body.innerHTML = emptyState("error", "Couldn’t load the team. Please try again.");
  }
}
function openInviteModal(org) {
  const roles = assignableRoles(org.memberRole);
  if (!roles.length) {
    toast("You don’t have permission to invite teammates.", "error");
    return;
  }
  const scrim = document.createElement("div");
  scrim.className = "team-modal-scrim";
  const modal = document.createElement("div");
  modal.className = "team-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="team-modal__head">
      <span class="team-modal__title">Invite a teammate</span>
      <button class="team-modal__close" type="button" aria-label="Close">&times;</button>
    </div>
    <div class="team-modal__body" id="team-invite-body">
      <p class="team-modal__sub">They'll get a link to set a password and join <strong>${esc(org.name || "your workspace")}</strong>.</p>
      <label class="team-modal__label" for="tm-email">Email</label>
      <input class="team-modal__input" id="tm-email" type="email" placeholder="teammate@company.com" autocomplete="off" />
      <div class="team-modal__row">
        <div><label class="team-modal__label" for="tm-first">First name</label><input class="team-modal__input" id="tm-first" type="text" autocomplete="off" /></div>
        <div><label class="team-modal__label" for="tm-last">Last name</label><input class="team-modal__input" id="tm-last" type="text" autocomplete="off" /></div>
      </div>
      <label class="team-modal__label" for="tm-role">Role</label>
      <select class="team-modal__select" id="tm-role">
        ${roles.map((r) => `<option value="${r.value}"${r.value === "member" ? " selected" : ""}>${esc(r.label)}</option>`).join("")}
      </select>
      <p class="team-modal__error" id="tm-error"></p>
      <div class="team-modal__actions">
        <button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="cancel">Cancel</button>
        <button class="team-modal__btn team-modal__btn--primary" type="button" data-act="send"><span class="material-symbols-outlined" aria-hidden="true">send</span> Send invite</button>
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
  modal.querySelector(".team-modal__close")?.addEventListener("click", close);
  modal.querySelector('[data-act="cancel"]')?.addEventListener("click", close);
  modal.querySelector("#tm-email")?.focus();
  const errEl = modal.querySelector("#tm-error");
  const sendBtn = modal.querySelector('[data-act="send"]');
  sendBtn?.addEventListener("click", async () => {
    const email = (modal.querySelector("#tm-email").value || "").trim();
    const first = (modal.querySelector("#tm-first").value || "").trim();
    const last = (modal.querySelector("#tm-last").value || "").trim();
    const member_role = modal.querySelector("#tm-role").value;
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
      const res = await fetch(`${base}/m5t/v5/acctGroup/${encodeURIComponent(org.guid)}/invite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first, last, member_role })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        const msg = res.status === 409 ? "A user with that email already exists." : res.status === 403 ? data.message || "You are not authorized to invite this role." : data.message || data.error || `Failed (HTTP ${res.status})`;
        throw new Error(msg);
      }
      toast(`Invite created for ${email}`, "success");
      modal.querySelector("#team-invite-body").innerHTML = `
        <div class="team-modal__result">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:40px;color:var(--color-success,#009473);">mark_email_read</span>
          <p>${data.emailQueued ? `An invite email is on its way to <strong>${esc(email)}</strong>.` : `Invite created for <strong>${esc(email)}</strong>.`}</p>
          <p class="team-modal__sub">Or share this link directly:</p>
          <div class="team-modal__linkrow">
            <input class="team-modal__input" id="tm-link" type="text" readonly value="${esc(data.inviteUrl)}" />
            <button class="team-modal__btn team-modal__btn--primary" type="button" id="tm-copy">Copy</button>
          </div>
          <div class="team-modal__actions"><button class="team-modal__btn team-modal__btn--ghost" type="button" data-act="done">Done</button></div>
        </div>`;
      const linkEl = modal.querySelector("#tm-link");
      modal.querySelector("#tm-copy")?.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(linkEl.value);
          modal.querySelector("#tm-copy").textContent = "Copied!";
        } catch {
          linkEl.select();
        }
      });
      modal.querySelector('[data-act="done"]')?.addEventListener("click", () => {
        close();
        loadTeam(org);
      });
    } catch (err) {
      console.warn("[team] invite failed:", err);
      errEl.textContent = err.message || "Something went wrong. Please try again.";
      sendBtn.disabled = false;
      sendBtn.innerHTML = prev;
    }
  });
}
const teamRoute = { render, init };
export {
  teamRoute as default,
  init,
  loadTeam,
  render
};
//# sourceMappingURL=team-route-BLLwvKq0.js.map
