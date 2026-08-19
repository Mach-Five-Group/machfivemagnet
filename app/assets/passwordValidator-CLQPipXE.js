function validatePassword(password) {
  const errors = [];
  if (password.length < 12) {
    errors.push("at least 12 characters");
  }
  if (password.length > 1024) {
    errors.push("at most 1024 characters");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("1 lowercase");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("1 uppercase");
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("1 special character");
  }
  if (/[^\x00-\x7F]/.test(password)) {
    errors.push("ASCII characters only");
  }
  return errors;
}
function formatPasswordErrors(errors) {
  if (errors.length === 0) {
    return "";
  }
  if (errors.includes("ASCII characters only")) {
    return "Password cannot contain emoji|or special unicode characters";
  }
  const lengthError = errors.find((e) => /^at (?:least|most) \d+ characters$/.test(e));
  if (lengthError) {
    return `Password must have ${lengthError.replace(/ (\d+ characters)$/, "|$1")}`;
  }
  return "Password must have: Uppercase,|Lowercase, and Special Character";
}
export {
  formatPasswordErrors as f,
  validatePassword as v
};
//# sourceMappingURL=passwordValidator-CLQPipXE.js.map
