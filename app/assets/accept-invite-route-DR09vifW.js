import { A as AuthController } from "./index.js";
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-accept-invite-styles";
  style.textContent = `
    .accept-invite-page {
      min-height: 100vh; display: grid; place-items: center; padding: 32px 20px;
      background: var(--color-surface, #F4F7FB); color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .accept-invite-card {
      width: min(420px, 100%); background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 32px 28px;
    }
    .accept-invite-card h1 { font-family: var(--font-display, inherit); font-size: 1.4rem; font-weight: 600; margin: 0 0 6px; }
    .accept-invite-card .sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 22px; }
    .accept-invite-field { margin-bottom: 16px; }
    .accept-invite-field label { display: block; font-size: 0.8rem; font-weight: 600; margin-bottom: 6px; }
    .accept-invite-field input {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .accept-invite-field input:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .accept-invite-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.95rem; font-weight: 600;
      padding: 12px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 6px;
    }
    .accept-invite-btn:hover { background: var(--color-primary-700, #00558D); }
    .accept-invite-btn[disabled] { opacity: 0.6; cursor: default; }
    .accept-invite-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .accept-invite-msg.error { color: var(--color-danger, #DD4124); }
    .accept-invite-msg.ok { color: var(--color-success, #009473); }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function parseParams() {
  const search = new URLSearchParams(window.location.search || "");
  let uid = search.get("uid") || "";
  let token = search.get("token") || "";
  if (!uid || !token) {
    const hash = window.location.hash || "";
    const hq = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : "";
    const hp = new URLSearchParams(hq);
    uid = uid || hp.get("uid") || "";
    token = token || hp.get("token") || "";
    if (!uid || !token) {
      const parts = hash.replace(/^#\/?/, "").split("?")[0].split("/").filter(Boolean);
      uid = uid || parts[1] || "";
      token = token || parts[2] || "";
    }
  }
  try {
    return { uid: decodeURIComponent(uid), token: decodeURIComponent(token) };
  } catch {
    return { uid, token };
  }
}
function render() {
  ensureStyles();
  return `
    <div class="accept-invite-page">
      <div class="accept-invite-card">
        <h1>Accept your invitation</h1>
        <p class="sub">Tell us your name and set a password to access your Mach Five Magnet account.</p>
        <form id="accept-invite-form" autocomplete="off">
          <div class="accept-invite-field">
            <label for="ai-first">First name</label>
            <input type="text" id="ai-first" autocomplete="given-name" maxlength="80" placeholder="Your first name" />
          </div>
          <div class="accept-invite-field">
            <label for="ai-last">Last name</label>
            <input type="text" id="ai-last" autocomplete="family-name" maxlength="80" placeholder="Your last name" />
          </div>
          <div class="accept-invite-field">
            <label for="ai-pass">Password</label>
            <input type="password" id="ai-pass" autocomplete="new-password" minlength="8" placeholder="At least 8 characters" />
          </div>
          <div class="accept-invite-field">
            <label for="ai-confirm">Confirm password</label>
            <input type="password" id="ai-confirm" autocomplete="new-password" placeholder="Re-enter password" />
          </div>
          <button class="accept-invite-btn" type="submit" id="ai-submit">Set password & sign in</button>
          <p class="accept-invite-msg" id="ai-msg" role="status"></p>
        </form>
      </div>
    </div>`;
}
function init() {
  const { uid, token } = parseParams();
  const form = document.getElementById("accept-invite-form");
  const firstEl = document.getElementById("ai-first");
  const lastEl = document.getElementById("ai-last");
  const passEl = document.getElementById("ai-pass");
  const confirmEl = document.getElementById("ai-confirm");
  const btn = document.getElementById("ai-submit");
  const msg = document.getElementById("ai-msg");
  if (!form) return;
  const setMsg = (text, kind = "error") => {
    msg.textContent = text;
    msg.className = `accept-invite-msg ${kind}`;
  };
  if (!uid || !token) {
    setMsg("This invitation link is invalid or incomplete. Please use the link from your email.");
    btn.disabled = true;
    return;
  }
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const first = (firstEl.value || "").trim();
    const last = (lastEl.value || "").trim();
    const pass = passEl.value || "";
    const confirm = confirmEl.value || "";
    if (!first || !last) {
      setMsg("Please enter your first and last name.");
      return;
    }
    if (pass.length < 8) {
      setMsg("Password must be at least 8 characters.");
      return;
    }
    if (pass !== confirm) {
      setMsg("Passwords do not match.");
      return;
    }
    btn.disabled = true;
    setMsg("Setting up your account…", "ok");
    try {
      const base = AuthController.getConfig?.().BASE_URL || "";
      const res = await fetch(`${base}/m5t/v5/acctEntity/acceptInvite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, token, password: pass, first, last })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        const m = res.status === 410 ? "This invitation has expired. Ask for a new one." : res.status === 409 ? "This invitation has already been used. Try signing in." : data.error || `Could not accept the invitation (HTTP ${res.status}).`;
        setMsg(m);
        btn.disabled = false;
        return;
      }
      try {
        window.history.replaceState({}, "", window.location.pathname + window.location.hash);
      } catch {
      }
      setMsg("Welcome! Signing you in…", "ok");
      const signin = await AuthController.doSignin(data.entity.email, pass);
      if (!signin?.ok) {
        setMsg("Your account is ready. Please sign in.", "ok");
        setTimeout(() => {
          window.location.hash = "#/signin";
        }, 1200);
      }
    } catch (err) {
      console.error("[accept-invite] error:", err);
      setMsg("Something went wrong. Please try again.");
      btn.disabled = false;
    }
  });
}
const acceptInviteRoute = { render, init };
export {
  acceptInviteRoute as default,
  init,
  render
};
//# sourceMappingURL=accept-invite-route-DR09vifW.js.map
