import { A as AuthController } from "./index.js";
import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
function render() {
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML("#/home")}
        <h1 data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>Sign out</h1>
        <p data-meta-copywrite-i118n='{"token": "are_you_sure_sign_out", "attribute": "textContent"}'>Are you sure you want to sign out?</p>

        <div class="auth-content">
          <button id="confirm-signout-btn" class="btn" data-meta-copywrite-i118n='{"token": "sign_out", "attribute": "textContent"}'>SIGN OUT</button>

          <p class="auth-switch">
            <a id="cancel-signout-btn" class="link-brand--uc__underline" href="#/home" data-meta-copywrite-i118n='{"token": "cancel", "attribute": "textContent"}'>CANCEL</a>
          </p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">See you soon</span>
          <h2 class="auth-hero-title">
            Taking a break? We'll keep everything safe.
          </h2>
          <p class="auth-hero-description">
            Sign back in anytime to keep building magnets, reviewing conversations, and converting leads.
          </p>
        </div>
      </div>
    </div>
  `;
}
function init() {
  console.log("[SignoutRoute] Initialized");
  const confirmBtn = document.getElementById("confirm-signout-btn");
  confirmBtn?.addEventListener("click", async () => {
    confirmBtn.disabled = true;
    confirmBtn.textContent = "SIGNING OUT...";
    console.log("[SignoutRoute] User confirmed signout");
    await AuthController.doSignout();
  });
}
export {
  init,
  render
};
//# sourceMappingURL=signout-route-m-aIohBB.js.map
