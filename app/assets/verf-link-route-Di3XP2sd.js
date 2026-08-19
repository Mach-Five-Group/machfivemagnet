import { b as magnetBrandHTML, c as coBrandHTML } from "./coBrand-DbiPODuF.js";
function render() {
  return `
    <div class="auth-container">
      <div class="auth-left">
        ${magnetBrandHTML()}
        <h1>Check your email</h1>
        <p>A verification link is on its way to the email address you provided.</p>

        <div class="auth-content">
          <!-- Countdown Timer -->
          <div class="countdown-wrapper">
            <div id="countdown-timer" class="countdown-timer">
              <div id="countdown-display" class="countdown-display">
                02:00:00
              </div>
              <div class="countdown-label">
                TIME REMAINING
              </div>
            </div>
          </div>

          <p class="text-center">
            Please click on that link to continue.
          </p>

          <p class="text-center">
            The link will expire in 2 hours.
          </p>

          <p class="text-center">
            Remember to check your spam folder.
          </p>

          <style>
            .countdown-wrapper {
              text-align: center;
              padding: 8px 0 4px;
            }

            .countdown-timer {
              display: inline-block;
              background: var(--color-surface);
              border: 1px solid var(--color-border);
              border-radius: var(--radius-md);
              padding: 20px 40px;
              box-shadow: var(--shadow-sm);
            }

            .countdown-display {
              font-family: 'Roboto Mono', 'Courier New', monospace;
              font-size: 44px;
              font-weight: 700;
              color: var(--color-accent);
              letter-spacing: 4px;
            }

            .countdown-label {
              font-size: 12px;
              color: var(--color-text-subtle);
              text-transform: uppercase;
              letter-spacing: 2px;
              margin-top: 8px;
            }

            .text-center {
              text-align: center;
              color: var(--color-text-muted);
            }
          </style>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-hero-content">
          ${coBrandHTML()}
          <span class="auth-hero-eyebrow">One last step</span>
          <h2>You're almost ready to launch.</h2>
          <p>
            Verify your email to unlock your Mach Five Magnet account and start building your first magnet.
          </p>
          <p>
            Check your inbox for the link we just sent you.
          </p>
        </div>
      </div>
    </div>
  `;
}
function init() {
  console.log("[VerfLinkRoute] Initialized");
  const TOTAL_SECONDS = 7200;
  const startTime = Date.now();
  const countdownDisplay = document.getElementById("countdown-display");
  function updateCountdown() {
    const elapsedMs = Date.now() - startTime;
    const elapsedSeconds = Math.floor(elapsedMs / 1e3);
    const remainingSeconds = Math.max(0, TOTAL_SECONDS - elapsedSeconds);
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor(remainingSeconds % 3600 / 60);
    const seconds = remainingSeconds % 60;
    const formatted = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    if (countdownDisplay) {
      countdownDisplay.textContent = formatted;
      if (remainingSeconds < 600) {
        countdownDisplay.style.color = "#ef4444";
        countdownDisplay.style.textShadow = `
          0 0 10px rgba(239, 68, 68, 0.9),
          0 0 20px rgba(239, 68, 68, 0.7),
          0 0 30px rgba(239, 68, 68, 0.5)
        `;
      }
      if (remainingSeconds === 0) {
        countdownDisplay.style.color = "#7f1d1d";
        countdownDisplay.style.textShadow = "none";
      }
    }
    if (remainingSeconds === 0) {
      clearInterval(timerInterval);
      console.log("[VerfLinkRoute] Countdown expired");
      if (window.neodigmWired4Sound) {
        window.neodigmWired4Sound.sound(14);
      }
      setTimeout(() => {
        if (window.router) {
          window.router.navigate("/splash");
        }
      }, 600);
    }
  }
  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1e3);
  window.addEventListener("beforeunload", () => {
    clearInterval(timerInterval);
  });
}
export {
  init,
  render
};
//# sourceMappingURL=verf-link-route-Di3XP2sd.js.map
