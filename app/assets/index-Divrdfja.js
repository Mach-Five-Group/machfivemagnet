function isValidEmail(email) {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
}
export {
  isValidEmail as i
};
//# sourceMappingURL=index-Divrdfja.js.map
