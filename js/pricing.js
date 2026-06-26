(function () {
  var buttons = Array.from(document.querySelectorAll(".js-billing-btn"));
  var priceEls = Array.from(document.querySelectorAll(".js-price"));
  var annualSubtexts = Array.from(document.querySelectorAll(".js-annual-subtext"));

  if (!buttons.length) return;

  function setBilling(mode) {
    buttons.forEach(function (btn) {
      var isActive = btn.dataset.billing === mode;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");

      btn.classList.toggle("bg-bg", isActive);
      btn.classList.toggle("shadow-sm", isActive);
      btn.classList.toggle("text-text", isActive);

      btn.classList.toggle("text-muted", !isActive);
      btn.classList.toggle("hover:text-text", !isActive);
    });

    priceEls.forEach(function (el) {
      var monthly = el.dataset.monthly;
      var annual = el.dataset.annual;
      var val = mode === "annual" ? annual : monthly;
      if (val) el.textContent = "$" + val;
    });

    annualSubtexts.forEach(function (el) {
      el.classList.toggle("hidden", mode !== "annual");
    });
  }

  setBilling("monthly");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setBilling(btn.dataset.billing);
    });
  });
})();
