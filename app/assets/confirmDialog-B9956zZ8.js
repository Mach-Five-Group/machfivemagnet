function openModal({ label = "", content = "", size = "", onClose = null } = {}) {
  const previouslyFocused = document.activeElement;
  const scrim = document.createElement("div");
  scrim.className = "m5t-modal-scrim";
  scrim.innerHTML = `
    <div class="m5t-modal${size === "wide" ? " m5t-modal--wide" : ""}" role="dialog" aria-modal="true" aria-label="${escAttr(label)}" tabindex="-1">
      <div class="m5t-modal__head">
        <h2 class="m5t-modal__title"></h2>
        <button type="button" class="m5t-modal__close" aria-label="Close">&times;</button>
      </div>
      <div class="m5t-modal__body"></div>
    </div>`;
  scrim.querySelector(".m5t-modal__title").textContent = label;
  const dialog = scrim.querySelector(".m5t-modal");
  const body = scrim.querySelector(".m5t-modal__body");
  if (content instanceof Element) body.appendChild(content);
  else body.innerHTML = String(content);
  let closed = false;
  const close = (result) => {
    if (closed) return;
    closed = true;
    document.removeEventListener("keydown", onKey, true);
    scrim.classList.remove("open");
    const finish = () => {
      scrim.remove();
      try {
        previouslyFocused?.focus?.();
      } catch {
      }
      if (onClose) onClose(result);
    };
    if (document.documentElement.classList.contains("ff-no-animations") || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) finish();
    else setTimeout(finish, 180);
  };
  const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const isVisible = (el) => {
    for (let n = el; n && n !== scrim; n = n.parentElement) {
      if (n.hidden || n.style?.display === "none" || n.style?.visibility === "hidden") return false;
    }
    return true;
  };
  const onKey = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      close(void 0);
      return;
    }
    if (e.key !== "Tab" || closed) return;
    const focusables = [...dialog.querySelectorAll(FOCUSABLE)].filter(isVisible);
    if (!focusables.length) {
      e.preventDefault();
      dialog.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (!dialog.contains(active)) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
      return;
    }
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };
  scrim.addEventListener("click", (e) => {
    if (e.target === scrim) close(void 0);
  });
  scrim.querySelector(".m5t-modal__close").addEventListener("click", () => close(void 0));
  document.addEventListener("keydown", onKey, true);
  document.body.appendChild(scrim);
  if (!dialog.contains(document.activeElement)) dialog.focus();
  requestAnimationFrame(() => scrim.classList.add("open"));
  return { el: scrim, close };
}
function escAttr(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
function confirmDialog({
  title = "Are you sure?",
  message = "",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  danger = false
} = {}) {
  return new Promise((resolve) => {
    let decided = false;
    const decide = (v) => {
      if (!decided) {
        decided = true;
        resolve(v);
      }
    };
    const content = document.createElement("div");
    content.innerHTML = `
      ${message ? `<p style="margin:0 0 4px">${esc(message)}</p>` : ""}
      <div class="m5t-modal__foot" style="margin:16px -20px -18px; padding-left:20px; padding-right:20px">
        <button type="button" class="m5t-modal__btn" data-x="cancel">${esc(cancelLabel)}</button>
        <button type="button" class="m5t-modal__btn ${danger ? "m5t-modal__btn--danger" : "m5t-modal__btn--primary"}" data-x="confirm">${esc(confirmLabel)}</button>
      </div>`;
    const { close } = openModal({
      label: title,
      content,
      onClose: () => decide(false)
      // Escape / scrim / close button = safe answer
    });
    content.querySelector('[data-x="cancel"]').addEventListener("click", () => {
      decide(false);
      close();
    });
    content.querySelector('[data-x="confirm"]').addEventListener("click", () => {
      decide(true);
      close();
    });
    requestAnimationFrame(() => content.querySelector('[data-x="cancel"]')?.focus());
  });
}
export {
  confirmDialog as c
};
//# sourceMappingURL=confirmDialog-B9956zZ8.js.map
