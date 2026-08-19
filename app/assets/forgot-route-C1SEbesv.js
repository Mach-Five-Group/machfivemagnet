import { P as PubSub, b as AppBroadcast, M as MicrocopyManager } from "./index.js";
import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
import { v as validateEmail } from "./formHelpers-CBV2tQ_I.js";
const API_BASE_URL = "https://machfivemagnet-saas.onrender.com";
class CoreRestAPI {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }
  /**
   * Generic fetch wrapper with error handling
   *
   * NOTE: Bearer token is automatically injected by mvvLegit's fetch overload
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...options.headers
    };
    try {
      const response = await fetch(url, {
        ...options,
        headers
      });
      if (response.status === 401 || response.status === 403) {
        PubSub.publish(AppBroadcast.AUTH_TOKEN_EXPIRED, {
          status: response.status,
          endpoint
        });
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Authentication failed");
      }
      const data = await response.json();
      return {
        ok: response.ok,
        status: response.status,
        data
      };
    } catch (error) {
      console.error("API Request Error:", error);
      PubSub.publish(AppBroadcast.APP_ERROR, {
        message: error.message,
        endpoint
      });
      throw error;
    }
  }
  /**
   * GET request
   */
  async get(endpoint) {
    return this.request(endpoint, {
      method: "GET"
    });
  }
  /**
   * POST request
   */
  async post(endpoint, body) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(body)
    });
  }
  /**
   * PUT request
   */
  async put(endpoint, body) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(body)
    });
  }
  /**
   * DELETE request
   */
  async delete(endpoint) {
    return this.request(endpoint, {
      method: "DELETE"
    });
  }
  // ============================================
  // Authentication API Methods
  // ============================================
  /**
   * Sign in
   */
  async signin(email, passwordHash) {
    return this.post("/api/acctEntity/signin", {
      email,
      hash: passwordHash
    });
  }
  /**
   * Sign up (create new account)
   */
  async signup(accountData) {
    return this.post("/api/acctEntity/signup", accountData);
  }
  /**
   * Sign out
   */
  async signout() {
    return this.post("/api/acctEntity/signout", {});
  }
  /**
   * Request password reset (forgot password)
   */
  async forgotPassword(email) {
    return this.get(`/m5t/v5/acctEntity/forgot?CODE=${encodeURIComponent(email)}`);
  }
  /**
   * Reset password hash
   */
  async resetHash(email, newPasswordHash) {
    return this.post("/api/acctEntity/resethash", {
      email,
      hash: newPasswordHash
    });
  }
  /**
   * Verify account email
   */
  async verifyAccount(code) {
    return this.get(`/api/acctEntity/verify?CODE=${code}`);
  }
  // ============================================
  // Account Management API Methods
  // ============================================
  /**
   * Get all accounts (requires auth)
   */
  async getAccounts() {
    return this.get("/api/acctEntity");
  }
  /**
   * Get account by ID (requires auth)
   */
  async getAccount(id) {
    return this.get(`/api/acctEntity/${id}`);
  }
  /**
   * Update account (requires auth)
   */
  async updateAccount(id, accountData) {
    return this.put(`/api/acctEntity/${id}`, accountData);
  }
  /**
   * Delete account (requires auth)
   */
  async deleteAccount(id) {
    return this.delete(`/api/acctEntity/${id}`);
  }
  // ============================================
  // Health Check
  // ============================================
  /**
   * Ping server (health check)
   */
  async ping() {
    return this.get("/ping");
  }
}
const CoreRestAPI$1 = new CoreRestAPI();
function render() {
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML("#/signin")}
        <h1 data-meta-copywrite-i118n='{"token": "forgot_password", "attribute": "textContent"}'>Forgot password</h1>
        <p data-meta-copywrite-i118n='{"token": "enter_email_for_reset", "attribute": "textContent"}'>Please enter your email to receive a password reset link</p>

        <div class="auth-content">
          <form id="forgot-form" class="auth-form" novalidate>
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

            <button type="submit" class="btn" data-meta-copywrite-i118n='{"token": "send_reset_link", "attribute": "textContent"}'>SEND RESET LINK</button>
          </form>

          <p class="auth-switch">
            <span data-meta-copywrite-i118n='{"token": "remember_password", "attribute": "textContent"}'>Remember your password?</span> &nbsp; <a class="link-brand--uc__underline" href="#/signin" data-meta-copywrite-i118n='{"token": "sign_in", "attribute": "textContent"}'>SIGN IN</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">Account recovery</span>
          <h2>Let's get you back in.</h2>
          <p>
            Enter your email address and we'll send you a secure link to reset your password.
          </p>
          <p>
            The reset link stays valid for 2 hours.
          </p>
        </div>
      </div>
    </div>

  `;
}
function init() {
  console.log("[ForgotRoute] Initialized");
  const form = document.getElementById("forgot-form");
  const emailInput = document.getElementById("email");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email, emailInput)) return;
    await handleForgotPassword(email);
  });
}
async function handleForgotPassword(email) {
  const submitBtn = document.querySelector(".btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "SENDING...";
  try {
    const response = await CoreRestAPI$1.forgotPassword(email);
    if (response.ok && response.data.ok) {
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(MicrocopyManager.get("success_reset_link_sent"), "success");
      }
      PubSub.publish(AppBroadcast.AUTH_FORGOT_SUCCESS, { email });
      setTimeout(() => {
        if (window.router) {
          window.router.navigate("/verf-link");
        }
      }, 2e3);
    } else {
      if (typeof neodigmToast !== "undefined") {
        neodigmToast.q(response.data.error || MicrocopyManager.get("error_signin_failed"), "danger");
      }
      submitBtn.disabled = false;
      submitBtn.textContent = (MicrocopyManager.get("send_reset_link") || "Send reset link").toUpperCase();
    }
  } catch (error) {
    console.error("[ForgotRoute] Forgot password error:", error);
    if (typeof neodigmToast !== "undefined") {
      neodigmToast.q(error.message || MicrocopyManager.get("error_network"), "danger");
    }
    submitBtn.disabled = false;
    submitBtn.textContent = (MicrocopyManager.get("send_reset_link") || "Send reset link").toUpperCase();
  }
}
export {
  init,
  render
};
//# sourceMappingURL=forgot-route-C1SEbesv.js.map
