import { F as FEATURE_FLAGS, P as PubSub, b as AppBroadcast } from "./index.js";
import { a as magnetLockupUrl, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
function render() {
  return `
    <div class="auth-container splash">
      <div class="auth-left">
        <div class="splash-content">
          <h1 class="splash-mark"><img src="${magnetLockupUrl}" alt="Mach Five Magnet" height="88" /></h1>
          <p class="tagline">Turn conversations into conversions.</p>

          <div class="splash-loader" id="splash-loader">
            <div class="spinner"></div>
            <p class="loading-text">Loading…</p>
          </div>

          <div class="splash-actions" id="splash-actions" style="display: none;">
            <button class="btn" data-route="signin">
              Sign In
            </button>
            <button class="btn-ghost" data-route="signup">
              Create Account
            </button>
          </div>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-right-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">Conversational lead capture</span>
          <h2 class="auth-hero-title">Build conversations, not forms.</h2>
          <p class="auth-hero-description">
            Design no-code magnets that qualify and capture every lead, then watch them convert,
            all from one platform.
          </p>
        </div>
      </div>
    </div>

    <style>
      /* Splash reuses the shared .auth-* brand layout; these scope the
         centered landing content and loader. */
      .splash .auth-left {
        place-content: center;
        justify-items: center;
        text-align: center;
      }

      .splash-content {
        display: grid;
        justify-items: center;
        gap: 1rem;
        max-width: 460px;
        width: 100%;
      }

      .splash-mark { margin-bottom: 0.25rem; }

      .splash-content h1 {
        font-family: var(--font-display);
        font-size: clamp(2.25rem, 5vw, 3rem);
        font-weight: 600;
        letter-spacing: -0.02em;
        color: var(--color-text);
      }
      .splash-content h1 b { color: var(--color-accent); font-weight: 700; }

      .splash .tagline {
        font-size: 1.15rem;
        color: var(--color-text-muted);
        margin-bottom: 1.5rem;
      }

      .splash-loader {
        display: grid;
        justify-items: center;
        gap: 1rem;
      }

      .spinner {
        width: 44px;
        height: 44px;
        border: 4px solid var(--color-surface-2);
        border-top-color: var(--color-accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }

      .loading-text {
        font-size: 0.95rem;
        color: var(--color-text-subtle);
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }

      .splash-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        margin-top: 1rem;
      }

      /* Secondary (ghost) button — pairs with the shared .btn primary */
      .btn-ghost {
        padding: 0.95rem 1.25rem;
        background: transparent;
        color: var(--color-accent);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        font-family: var(--font-body);
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        transition: background 0.18s ease, border-color 0.18s ease, transform 0.15s ease;
      }
      .btn-ghost:hover {
        background: var(--color-surface);
        border-color: var(--color-accent);
        transform: translateY(-1px);
      }
    </style>
  `;
}
function init() {
  console.log("[SplashRoute] Initialized - checking authentication state in 3.6 seconds...");
  setTimeout(() => {
    const mvvToken = localStorage.getItem(FEATURE_FLAGS.FF_SSE_LS_TOKEN);
    const mvvTs = localStorage.getItem("mvv_ts");
    console.log("[SplashRoute] localStorage check:", {
      hasMvvToken: !!mvvToken,
      hasMvvTs: !!mvvTs
    });
    const loader = document.getElementById("splash-loader");
    const actions = document.getElementById("splash-actions");
    if (mvvToken) {
      console.log("[SplashRoute] Auth token found → HOME");
      PubSub.publish(AppBroadcast.ROUTE_NAV, { route: "home" });
    } else if (mvvTs) {
      console.log("[SplashRoute] Previous session detected (mvv_ts exists) → SIGN IN");
      PubSub.publish(AppBroadcast.ROUTE_NAV, { route: "signin" });
    } else {
      console.log("[SplashRoute] New user (no session history) → Showing buttons");
      if (loader) loader.style.display = "none";
      if (actions) actions.style.display = "flex";
      const buttons = document.querySelectorAll("[data-route]");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const route = btn.getAttribute("data-route");
          console.log(`[SplashRoute] Button clicked - navigating to: ${route}`);
          PubSub.publish(AppBroadcast.ROUTE_NAV, { route });
        });
      });
    }
  }, 4e3);
}
export {
  init,
  render
};
//# sourceMappingURL=splash-route-C87dv6xo.js.map
