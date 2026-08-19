import { M as MicrocopyManager, A as AuthController, P as PubSub, b as AppBroadcast } from "./index.js";
import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
import { v as validatePassword, f as formatPasswordErrors } from "./passwordValidator-CLQPipXE.js";
import { s as shakeAndToast } from "./formHelpers-CBV2tQ_I.js";
function render() {
  const user = AuthController.getEntity();
  const email = user?.email || "";
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML("#/home")}
        <h1 data-meta-copywrite-i118n='{"token": "reset_password", "attribute": "textContent"}'>Reset password</h1>
        <p data-meta-copywrite-i118n='{"token": "update_your_password", "attribute": "textContent"}'>Update your account password</p>

        <div class="auth-content">
          <form id="resethash-form" class="auth-form" novalidate>
            <div class="form-group">
              <label for="email" data-meta-copywrite-i118n='{"token": "email", "attribute": "textContent"}'>EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value="${email}"
                readonly
                style="opacity: 0.6; cursor: not-allowed;"
              />
            </div>

            <div class="form-group">
              <label for="new-password" data-meta-copywrite-i118n='{"token": "new_password", "attribute": "textContent"}'>NEW PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  placeholder="Enter new password"
                  data-meta-copywrite-i118n='{"token": "enter_new_password", "attribute": "placeholder"}'
                  required
                  autocomplete="new-password"
                />
                <button type="button" id="toggleNewPassword" class="toggle-password" aria-label="Toggle password visibility">
                  <svg id="eyeIconNew" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-group">
              <label for="confirm-password" data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "textContent"}'>CONFIRM PASSWORD</label>
              <div class="password-input-wrapper">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  data-meta-copywrite-i118n='{"token": "confirm_new_password", "attribute": "placeholder"}'
                  required
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

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "update_password", "attribute": "textContent"}'>UPDATE PASSWORD</button>
          </form>

          <p class="auth-switch">
            <a href="#/home" class="link-brand--uc__underline" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">Account security</span>
          <h2 class="auth-hero-title">
            Keep your account secure with a strong password.
          </h2>
          <p class="auth-hero-description">
            Choose a unique password that you don't use anywhere else. You'll be signed out after updating and will need to sign in again with your new password.
          </p>
        </div>
      </div>
    </div>
  `;
}
function init() {
  console.log("[ResethashRoute] Initialized");
  const form = document.getElementById("resethash-form");
  const submitBtn = form.querySelector('button[type="submit"]');
  setupPasswordToggle("toggleNewPassword", "new-password", "eyeIconNew");
  setupPasswordToggle("toggleConfirmPassword", "confirm-password", "eyeIconConfirm");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    const newPasswordInput = document.getElementById("new-password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    if (!newPassword) {
      shakeAndToast(newPasswordInput, MicrocopyManager.get("validation_new_password_required"));
      return;
    }
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      shakeAndToast(newPasswordInput, formatPasswordErrors(passwordErrors));
      return;
    }
    if (!confirmPassword) {
      shakeAndToast(confirmPasswordInput, MicrocopyManager.get("validation_new_password_required"));
      return;
    }
    if (newPassword !== confirmPassword) {
      shakeAndToast(confirmPasswordInput, MicrocopyManager.get("validation_password_mismatch"));
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = MicrocopyManager.get("loading_resetting_password");
    try {
      const result = await AuthController.doResetHash(email, newPassword);
      if (result.ok) {
        if (typeof neodigmToast !== "undefined") {
          neodigmToast.q(MicrocopyManager.get("success_password_reset"), "success");
        }
        PubSub.publish(AppBroadcast.AUTH_RESETHASH_SUCCESS, { email });
      } else {
        shakeAndToast(newPasswordInput, result.error || MicrocopyManager.get("error_signin_failed"));
        submitBtn.disabled = false;
        submitBtn.textContent = (MicrocopyManager.get("update_password") || "Update password").toUpperCase();
      }
    } catch (error) {
      console.error("[ResethashRoute] Reset password error:", error);
      shakeAndToast(newPasswordInput, error.message || MicrocopyManager.get("error_network"));
      submitBtn.disabled = false;
      submitBtn.textContent = (MicrocopyManager.get("update_password") || "Update password").toUpperCase();
    }
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
export {
  init,
  render
};
//# sourceMappingURL=resethash-route-2ALgG8np.js.map
