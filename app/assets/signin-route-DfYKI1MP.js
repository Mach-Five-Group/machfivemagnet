import { A as AuthController, P as PubSub, b as AppBroadcast, M as MicrocopyManager } from "./index.js";
import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
import { v as validateEmail, s as shakeAndToast } from "./formHelpers-CBV2tQ_I.js";
function render() {
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML()}
        <h1 data-meta-copywrite-i118n='{"token": "welcome_back", "attribute": "textContent"}'>Welcome back</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details", "attribute": "textContent"}'>Sign in to your Mach Five Magnet account</p>

        <div class="auth-content">
          <form id="loginForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                data-meta-copywrite-i118n='{"token": "enter_your_email", "attribute": "placeholder"}'
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <label for="password" data-meta-copywrite-i118n='{"token": "password", "attribute": "textContent"}'>PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  data-meta-copywrite-i118n='{"token": "enter_your_password", "attribute": "placeholder"}'
                  autocomplete="current-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-consent">
              <input type="checkbox" id="rememberEmail" name="rememberEmail" />
              <label for="rememberEmail" data-meta-copywrite-i118n='{"token": "remember_email", "attribute": "textContent"}'>Remember my email</label>
            </div>

            <div class="form-footer">
              <a href="#/forgot" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>FORGOT PASSWORD</a>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</button>
          </form>

          <div class="auth-divider" id="passkeyDivider" style="display:none">OR</div>
          <button type="button" class="btn-outline" id="passkeySigninBtn" style="display:none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="8" cy="8" r="5"></circle>
              <path d="M11.5 11.5 21 21M17 15l3 3M14 18l2 2"></path>
            </svg>
            Sign in with a passkey
          </button>
          <p class="auth-hint" id="passkeyHint" style="display:none">Works best in Chrome, Edge, or Safari. On Firefox or Linux, you may need a physical security key.</p>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "dont_have_an_account", "attribute": "textContent"}'>START YOUR FREE ACCOUNT</span> &nbsp;  <a class="link-brand--uc__underline" href="#/signup" data-meta-copywrite-i118n='{"token": "sign_up", "attribute": "textContent"}'>SIGN UP</a>
          </p>

          <p class="auth-legal">
            <a href="https://machfivemagnet.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="https://machfivemagnet.com/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${coBrandHTML()}
          <h2 class="auth-hero-title">
            Turn conversations into conversions.
          </h2>
          <p class="auth-hero-description">
            Replace static forms with conversational magnets that qualify, score, and capture
            every lead in real time. No code required.
          </p>
        </div>
      </div>
    </div>
  `;
}
function init() {
  console.log("[SigninRoute] Initialized");
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const rememberInput = document.getElementById("rememberEmail");
  const rememberedEmail = localStorage.getItem(AuthController.CONFIG.LS_KEYS.REMEMBERED_EMAIL);
  if (rememberedEmail && emailInput && rememberInput) {
    emailInput.value = rememberedEmail;
    rememberInput.checked = true;
    passwordInput?.focus();
  }
  togglePasswordBtn?.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  });
  const passkeyBtn = document.getElementById("passkeySigninBtn");
  const passkeyDivider = document.getElementById("passkeyDivider");
  const passkeyHint = document.getElementById("passkeyHint");
  if (window.PublicKeyCredential && passkeyBtn && passkeyDivider) {
    passkeyBtn.style.display = "";
    passkeyDivider.style.display = "";
    if (passkeyHint) passkeyBtn.title = passkeyHint.textContent;
    passkeyBtn.addEventListener("click", () => handlePasskeySignin());
  }
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    if (!validateEmail(email, emailInput)) return;
    if (!validatePassword(password, passwordInput)) return;
    if (rememberInput?.checked) {
      localStorage.setItem(AuthController.CONFIG.LS_KEYS.REMEMBERED_EMAIL, email);
    } else {
      localStorage.removeItem(AuthController.CONFIG.LS_KEYS.REMEMBERED_EMAIL);
    }
    await handleSignin(email, password);
  });
  document.getElementById("link--uc__underline")?.addEventListener("click", (e) => {
    e.preventDefault();
    PubSub.publish(AppBroadcast.AUTH_FORGOT);
  });
  const signupLink = document.querySelector('.auth-switch a[href="#/signup"]');
  signupLink?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("[SigninRoute] Sign up link clicked - navigating to signup");
    PubSub.publish(AppBroadcast.ROUTE_NAV, { route: "signup" });
  });
}
function validatePassword(password, inputElement) {
  if (!password) {
    shakeAndToast(inputElement, MicrocopyManager.get("validation_password_required"));
    return false;
  }
  if (password.length < 10) {
    shakeAndToast(inputElement, MicrocopyManager.get("validation_password_min_length"));
    return false;
  }
  return true;
}
async function handleSignin(email, password) {
  const submitBtn = document.querySelector(".btn");
  submitBtn.disabled = true;
  submitBtn.textContent = MicrocopyManager.get("loading_signing_in");
  try {
    const result = await AuthController.doSignin(email, password);
    if (result.ok) {
      console.log("[SigninRoute] Signin successful");
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(MicrocopyManager.get("success_welcome_back"), "success");
      }
      PubSub.publish(AppBroadcast.AUTH_SIGNIN_SUCCESS, {
        entity: AuthController.getEntity()
      });
    } else if (result.resetRequired) {
      console.log("[SigninRoute] Password reset required");
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(MicrocopyManager.get("error_password_reset_required"), "warning");
      }
    } else {
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(result.error || MicrocopyManager.get("error_signin_failed"), "danger");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = (MicrocopyManager.get("sign_in") || "Sign in").toUpperCase();
    }
  } catch (error) {
    console.error("[SigninRoute] Sign in error:", error);
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(error.message || MicrocopyManager.get("error_network"), "danger");
    }
    submitBtn.disabled = false;
    submitBtn.textContent = (MicrocopyManager.get("sign_in") || "Sign in").toUpperCase();
    PubSub.publish(AppBroadcast.AUTH_SIGNIN_FAIL, {
      message: error.message
    });
  }
}
async function handlePasskeySignin() {
  const passkeyBtn = document.getElementById("passkeySigninBtn");
  passkeyBtn.disabled = true;
  try {
    const result = await AuthController.doPasskeySignin();
    if (result.ok) {
      console.log("[SigninRoute] Passkey signin successful");
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(MicrocopyManager.get("success_welcome_back"), "success");
      }
      PubSub.publish(AppBroadcast.AUTH_SIGNIN_SUCCESS, { entity: AuthController.getEntity() });
    } else {
      document.getElementById("passkeyHint")?.style.removeProperty("display");
    }
    if (!result.ok && !result.canceled) {
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(result.error || MicrocopyManager.get("error_signin_failed"), "danger");
      }
    }
  } catch (error) {
    console.error("[SigninRoute] Passkey signin error:", error);
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(error.message || MicrocopyManager.get("error_network"), "danger");
    }
  } finally {
    passkeyBtn.disabled = false;
  }
}
export {
  init,
  render
};
//# sourceMappingURL=signin-route-DfYKI1MP.js.map
