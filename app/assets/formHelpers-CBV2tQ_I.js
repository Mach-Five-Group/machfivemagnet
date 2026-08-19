import { M as MicrocopyManager } from "./index.js";
function shakeAndToast(element, message) {
  if (typeof neodigmToast !== "undefined") {
    neodigmToast.q(message, "danger");
  }
  if (typeof neodigmUtils !== "undefined") {
    neodigmUtils.shake(`#${element.id}`);
  } else {
    element.classList.add("shake");
    setTimeout(() => element.classList.remove("shake"), 300);
  }
  element.focus();
}
const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email, inputElement) {
  if (!email) {
    shakeAndToast(inputElement, MicrocopyManager.get("validation_email_required"));
    return false;
  }
  if (!EMAIL_RX.test(email)) {
    shakeAndToast(inputElement, MicrocopyManager.get("validation_email_invalid"));
    return false;
  }
  return true;
}
export {
  shakeAndToast as s,
  validateEmail as v
};
//# sourceMappingURL=formHelpers-CBV2tQ_I.js.map
