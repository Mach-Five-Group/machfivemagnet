import { P as PubSub, b as AppBroadcast, M as MicrocopyManager, A as AuthController } from "./index.js";
import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
import { v as validatePassword$1, f as formatPasswordErrors } from "./passwordValidator-CLQPipXE.js";
import { v as validateEmail, s as shakeAndToast } from "./formHelpers-CBV2tQ_I.js";
const LEGAL_VERSION = "2026-07-15";
function render() {
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML()}
        <h1 data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>Create your account</h1>
        <p data-meta-copywrite-i118n='{"token": "please_enter_your_details_to_get_started", "attribute": "textContent"}'>Start turning conversations into conversions, free</p>

        <div class="auth-content">
          <form id="signupForm" class="auth-form" novalidate>
            <div class="form-group">
              <label for="first" data-meta-copywrite-i118n='{"token": "first_name", "attribute": "textContent"}'>FIRST NAME</label>
              <input
                type="text"
                id="first"
                name="first"
                placeholder="Enter your first name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="given-name"
              />
            </div>

            <div class="form-group">
              <label for="last" data-meta-copywrite-i118n='{"token": "last_name", "attribute": "textContent"}'>LAST NAME</label>
              <input
                type="text"
                id="last"
                name="last"
                placeholder="Enter your last name"
                data-meta-copywrite-i118n='{"token": "enter_your_name", "attribute": "placeholder"}'
                autocomplete="family-name"
              />
            </div>

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
              <label for="company" data-meta-copywrite-i118n='{"token": "company", "attribute": "textContent"}'>COMPANY (OPTIONAL)</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                data-meta-copywrite-i118n='{"token": "enter_company_name", "attribute": "placeholder"}'
                autocomplete="organization"
              />
            </div>

            <div class="form-group">
              <label for="phone" data-meta-copywrite-i118n='{"token": "phone", "attribute": "textContent"}'>PHONE (OPTIONAL)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                data-meta-copywrite-i118n='{"token": "enter_phone_number", "attribute": "placeholder"}'
                autocomplete="tel"
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
                  autocomplete="new-password"
                />
                <button type="button" id="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirmPassword" data-meta-copywrite-i118n='{"token": "confirm_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  data-meta-copywrite-i118n='{"token": "reenter_password", "attribute": "placeholder"}'
                  autocomplete="new-password"
                />
                <button type="button" id="toggleConfirmPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconConfirm" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-consent">
              <input type="checkbox" id="acceptTerms" name="acceptTerms" />
              <label for="acceptTerms">
                I agree to the
                <a href="https://machfivemagnet.com/terms/" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                and
                <a href="https://machfivemagnet.com/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </label>
            </div>

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "create_account", "attribute": "textContent"}'>CREATE ACCOUNT</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "already_have_an_account", "attribute": "textContent"}'>ALREADY HAVE AN ACCOUNT?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">Get started free</span>
          <h2 class="auth-hero-title">
            Build engaging lead capture flows in minutes.
          </h2>
          <p class="auth-hero-description">
            Design conversational magnets with a visual editor, deploy them as a chat bubble,
            pop-up, slide panel, or embed, and watch the leads roll in.
          </p>
        </div>
      </div>
    </div>
  `;
}
function init() {
  console.log("[SignupRoute] Initialized");
  const form = document.getElementById("signupForm");
  const submitBtn = form.querySelector('button[type="submit"]');
  setupPasswordToggle("togglePassword", "password", "eyeIcon");
  setupPasswordToggle("toggleConfirmPassword", "confirmPassword", "eyeIconConfirm");
  const signinLink = document.querySelector('.auth-switch a[href="#/signin"]');
  signinLink?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("[SignupRoute] Sign in link clicked - navigating to signin");
    PubSub.publish(AppBroadcast.ROUTE_NAV, { route: "signin" });
  });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const first = document.getElementById("first").value.trim();
    const last = document.getElementById("last").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstInput = document.getElementById("first");
    const lastInput = document.getElementById("last");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    if (!validateField(first, firstInput, MicrocopyManager.get("validation_first_name_required"))) {
      return;
    }
    if (!validateField(last, lastInput, MicrocopyManager.get("validation_last_name_required"))) {
      return;
    }
    if (!validateEmail(email, emailInput)) {
      return;
    }
    if (!validatePassword(password, passwordInput)) {
      return;
    }
    if (password !== confirmPassword) {
      shakeAndToast(confirmPasswordInput, MicrocopyManager.get("validation_password_mismatch"));
      return;
    }
    const acceptTerms = document.getElementById("acceptTerms");
    if (!acceptTerms.checked) {
      shakeAndToast(acceptTerms, "Please accept the Terms of Service and Privacy Policy to continue.");
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = MicrocopyManager.get("loading_creating_account");
    await handleSignup(first, last, email, company, phone, password);
  });
}
function setupPasswordToggle(buttonId, inputId, iconId) {
  const toggleBtn = document.getElementById(buttonId);
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(iconId);
  if (!toggleBtn || !passwordInput || !eyeIcon) return;
  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    if (isPassword) {
      eyeIcon.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `;
    } else {
      eyeIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `;
    }
  });
}
function validateField(value, inputElement, errorMessage) {
  if (!value) {
    shakeAndToast(inputElement, errorMessage);
    return false;
  }
  return true;
}
function validatePassword(password, inputElement) {
  if (!password) {
    shakeAndToast(inputElement, MicrocopyManager.get("validation_password_required"));
    return false;
  }
  const errors = validatePassword$1(password);
  if (errors.length > 0) {
    shakeAndToast(inputElement, formatPasswordErrors(errors));
    return false;
  }
  return true;
}
async function handleSignup(first, last, email, company, phone, password) {
  const submitBtn = document.querySelector('button[type="submit"]');
  try {
    const accountData = {
      email,
      password,
      first,
      last
    };
    if (company) accountData.company = company;
    if (phone) accountData.phone = phone;
    accountData.terms_accepted = true;
    accountData.legal_version = LEGAL_VERSION;
    const response = await AuthController.doSignup(accountData);
    if (response.ok) {
      PubSub.publish(AppBroadcast.AUTH_SIGNUP_SUCCESS, {
        email
      });
      if (typeof mvvLegit !== "undefined") {
        mvvLegit.doUNVERF();
      }
    } else {
      const errorMessage = response.error || response.message || MicrocopyManager.get("error_signup_failed");
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(errorMessage, "danger");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = (MicrocopyManager.get("create_account") || "Create account").toUpperCase();
      PubSub.publish(AppBroadcast.AUTH_SIGNUP_FAIL, {
        message: errorMessage
      });
    }
  } catch (error) {
    console.error("[SignupRoute] Sign up error:", error);
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(error.message || MicrocopyManager.get("error_network"), "danger");
    }
    submitBtn.disabled = false;
    submitBtn.textContent = (MicrocopyManager.get("create_account") || "Create account").toUpperCase();
    PubSub.publish(AppBroadcast.AUTH_SIGNUP_FAIL, {
      message: error.message
    });
  }
}
export {
  init,
  render
};
//# sourceMappingURL=signup-route-CuokJOa7.js.map
