const lockupWhite = "" + new URL("mfm-lockup-white.png", import.meta.url).href;
const lockupBlack = "" + new URL("mfm-lockup-black.png", import.meta.url).href;
const lockupColor = "" + new URL("mfm-lockup-color.png", import.meta.url).href;
const magnetLockup = "" + new URL("m5mag-lockup.png", import.meta.url).href;
const MFM_URL = "https://www.machfivemarketing.com";
const magnetLockupUrl = magnetLockup;
const mfmLockupColorUrl = lockupColor;
function magnetBrandHTML(href = "#/splash") {
  return `
        <a class="auth-brand" href="${href}" aria-label="Mach Five Magnet">
          <img src="${magnetLockup}" alt="Mach Five Magnet" height="42" />
        </a>`;
}
function coBrandHTML(variant = "panel") {
  const light = variant === "light";
  return `
    <a class="auth-cobrand${light ? " auth-cobrand--light" : ""}" href="${MFM_URL}"
       target="_blank" rel="noopener" aria-label="From Mach Five Marketing">
      <span class="auth-cobrand__label">From</span>
      <img class="auth-cobrand__logo" src="${light ? lockupBlack : lockupWhite}"
           alt="Mach Five Marketing" height="26" loading="lazy" />
    </a>`;
}
export {
  magnetLockupUrl as a,
  magnetBrandHTML as b,
  coBrandHTML as c,
  mfmLockupColorUrl as m
};
//# sourceMappingURL=coBrand-DbiPODuF.js.map
