import { a as apiBase, e as ensureStyles, b as emptyState, t as toast, s as setPendingReturn, P as PROVIDERS, f as fetchIntegrations, c as connFor, C as COMING_SOON, d as statusOf, l as logoHTML, g as esc, h as statusPill } from "./integrations-shared-DIkAqJCS.js";
import { i as inPortfolio, a as initPicker, e as ensurePortfolioStyles, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
import "./index.js";
import "./confirmDialog-B9956zZ8.js";
function render() {
  ensureStyles();
  ensurePortfolioStyles();
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "settings-integrations",
      title: "Integrations",
      description: "Pick a client to manage their connections."
    });
  }
  return `
    <div class="page-shell" data-section="settings-integrations">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Integrations</h1>
          <p class="page-description">Connected accounts for this workspace.</p>
        </div>
      </div>
      <div id="intg-body">
        <div class="dashboard-card intg-card"><div class="card-body">${emptyState("hourglass_empty", "Loading…")}</div></div>
      </div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    const fmtN = (n) => Number(n || 0).toLocaleString();
    return initPicker(apiBase(), [
      { h: "Magnets", td: (r) => `${fmtN(r.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${fmtN(r.magnets.total)}</span>` },
      { h: "Leads · wk", td: (r) => fmtN(r.leads.this_week) }
    ], { emptyMsg: "No client orgs yet. Create one under Clients first." });
  }
  if (consumeReturnParams()) return;
  await load();
}
const PROVIDER_LABEL = Object.fromEntries(
  Object.values(PROVIDERS).filter((p) => p.connect).map((p) => [p.slug, p.label])
);
function consumeReturnParams() {
  try {
    const sp = new URLSearchParams(window.location.search);
    const connected = sp.get("connected");
    const errorProvider = sp.get("error") ? sp.get("provider") || "google_ads" : null;
    let target = null;
    if (connected && Object.hasOwn(PROVIDER_LABEL, connected)) {
      toast(`${PROVIDER_LABEL[connected]} connected.`, "success");
      setPendingReturn({ slug: connected, connected: true });
      target = Object.hasOwn(PROVIDERS, connected) ? PROVIDERS[connected] : null;
    } else if (errorProvider) {
      const label = Object.hasOwn(PROVIDER_LABEL, errorProvider) ? PROVIDER_LABEL[errorProvider] : errorProvider;
      toast(`${label} connection failed (${sp.get("error")}).`, "error");
      target = Object.hasOwn(PROVIDERS, errorProvider) ? PROVIDERS[errorProvider] : null;
    } else {
      return false;
    }
    window.history.replaceState(null, "", window.location.pathname + window.location.hash);
    if (target) {
      window.router?.navigate(`/settings/integrations/${target.urlSlug}`);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
async function load() {
  const body = document.getElementById("intg-body");
  try {
    const { denied, providers, configured } = await fetchIntegrations();
    if (denied) {
      if (body) body.innerHTML = `<div class="dashboard-card intg-card"><div class="card-body">${emptyState("lock", "Integrations are managed by workspace admins.")}</div></div>`;
      return;
    }
    if (body) body.innerHTML = gridHTML(providers, configured);
  } catch (e) {
    if (body) body.innerHTML = `<div class="dashboard-card intg-card"><div class="card-body">${emptyState("error", "Could not load integrations.")}</div></div>`;
  }
}
function tileHTML(p, conn, configured) {
  const status = statusOf(p, conn, configured);
  return `
    <a class="intg-tile" href="#/settings/integrations/${p.urlSlug}" data-provider="${p.slug}">
      <div class="intg-tile__head">
        ${logoHTML(p)}
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${esc(p.label)}</div>
          <div class="intg-tile__sub">${esc(p.card.sub)}</div>
        </div>
      </div>
      <p class="intg-tile__desc">${esc(tileDesc(p, conn, status))}</p>
      <div class="intg-tile__foot">
        ${statusPill(status, conn)}
        <span class="intg-tile__go material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </div>
    </a>`;
}
function tileDesc(p, conn, status) {
  if (status === "connected") {
    const acct = conn?.external_account || {};
    if (p.slug === "calendly") return acct.name ? `Connected as ${acct.name}.` : "Connected.";
    if (p.slug === "callrail") {
      const scope = [acct.account_name, acct.company_name].filter(Boolean).join(" · ");
      return scope ? `Connected to ${scope}.` : "Connected.";
    }
    const n = p.card.reachableCount(acct);
    return n ? `${n} ${p.slug === "google_analytics" ? n === 1 ? "property" : "properties" : n === 1 ? "account" : "accounts"} feeding reporting.` : "Connected.";
  }
  if (status === "broken") return "The connection stopped working. Open to reconnect.";
  return p.card.idleDesc.split(". ")[0] + ".";
}
function comingSoonTile(c) {
  return `
    <div class="intg-tile intg-tile--soon" aria-disabled="true">
      <div class="intg-tile__head">
        <span class="intg-mark">
          <img class="intg-logo" src="${esc(c.logo)}" alt="" loading="lazy"
               onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
          <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${c.icon}</span>
        </span>
        <div class="intg-tile__titles">
          <div class="intg-tile__name">${esc(c.label)}</div>
          <div class="intg-tile__sub">${esc(c.sub)}</div>
        </div>
      </div>
      <div class="intg-tile__foot"><span class="intg-state">Coming soon</span></div>
    </div>`;
}
function gridHTML(providers, configured) {
  const tiles = Object.values(PROVIDERS).map((p) => tileHTML(p, connFor(providers, p.slug), !!configured?.[p.slug])).join("");
  const soon = COMING_SOON.length ? `<div class="intg-grid__soon-label">Coming soon</div>${COMING_SOON.map(comingSoonTile).join("")}` : "";
  return `<div class="intg-grid">${tiles}${soon}</div>`;
}
const settingsIntegrationsRoute = { render, init };
export {
  settingsIntegrationsRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-integrations-route-C69G8Txe.js.map
