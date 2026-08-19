import { A as AuthController, P as PubSub, b as AppBroadcast } from "./index.js";
import { c as confirmDialog } from "./confirmDialog-B9956zZ8.js";
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const orgGuid = () => AuthController.getActiveOrg()?.guid || AuthController.getMemberships()[0]?.orgGuid || null;
const canManage = () => AuthController.getCapabilities().includes("manage_magnets");
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
const alertHTML = (msg, kind = "") => `<div class="intg-alert ${kind}"><span class="material-symbols-outlined" aria-hidden="true">${kind === "error" ? "error" : "info"}</span><span>${msg}</span></div>`;
const busyLock = { busy: false };
let pendingReturn = null;
function setPendingReturn(v) {
  pendingReturn = v;
}
function takePendingReturn() {
  const v = pendingReturn;
  pendingReturn = null;
  return v;
}
const WALKTHROUGHS = {
  google_ads: {
    what: "See ad spend lined up next to the leads it generated, so you know which campaigns are actually working.",
    steps: [
      "Click Connect and sign in with a Google account that has access to your Ads accounts.",
      "Choose which ad accounts should feed reporting.",
      "Metrics refresh automatically once a day. Click Sync now any time for an immediate pull."
    ]
  },
  calendly: {
    what: "Let visitors book directly from a magnet conversation, and get notified the moment they do.",
    steps: [
      "Click Connect and authorize your Calendly account.",
      "Turn on Calendly booking for any magnet’s Book action, under Magnets.",
      "Confirmed and canceled bookings sync back to the lead automatically. Webhooks need a paid Calendly plan; a free plan still lets visitors book, just without the automatic lead sync."
    ]
  },
  callrail: {
    what: "Every tracked phone call becomes a lead automatically, complete with recording and source.",
    steps: [
      "In CallRail, go to Integrations, then Data access, then API keys, and create a key. Read-only works for calls; Allow Writes lets us set up call sync automatically.",
      "Paste the key here and pick the account and company this workspace tracks.",
      "Calls start landing in your Leads inbox within minutes."
    ]
  },
  google_analytics: {
    what: "See how visitors reach your site and behave once they get there. Sessions, pageviews, and engagement, right alongside the leads your magnets capture.",
    steps: [
      "Click Connect and sign in with a Google account that has access to your GA4 property.",
      "Choose which GA4 properties should feed reporting.",
      "Metrics refresh automatically once a day. Click Sync now any time for an immediate pull."
    ]
  }
};
const PROVIDERS = {
  google_ads: {
    slug: "google_ads",
    urlSlug: "google-ads",
    label: "Google Ads",
    logo: "integrations/google-ads.svg",
    connect: { fallbackError: "Could not start the Google connection." },
    disconnect: {
      confirm: "Daily metric refreshes stop until reconnected.",
      toast: "Google Ads disconnected."
    },
    card: {
      tint: "primary",
      icon: "ads_click",
      sub: "Spend and clicks beside your leads.",
      ids: { connect: "intg-g-connect", choose: "intg-g-accounts", sync: "intg-g-sync", disconnect: "intg-g-disconnect", panel: "intg-g-picker" },
      chooseLabel: "Choose accounts",
      idleDesc: "Connect a Google account with access to your ad accounts. Spend lines up against your magnet leads in Ad performance.",
      brokenDesc: "The connection stopped working. Reconnect to resume daily metric refreshes.",
      reachDesc: (n) => `This connection can reach <b>${n}</b> ad account${n === 1 ? "" : "s"}. Choose which ones feed reporting; metrics refresh daily in Ad performance.`,
      noneDesc: "Connected, but no ad accounts are reachable from this Google account. Reconnect with an account that has Google Ads access.",
      reachableCount: (acct) => acct?.customer_ids?.length || 0
    },
    picker: {
      path: "accounts",
      itemsField: "accounts",
      saveField: "customer_ids",
      dataAttr: "intg-acct",
      datasetKey: "intgAcct",
      ids: { cancel: "intg-picker-cancel", save: "intg-picker-save" },
      loading: "Loading your ad accounts…",
      loadError: "Could not load your ad accounts. Try again, or reconnect if this keeps happening.",
      heading: "Accounts that feed reporting",
      emptyMsg: "No ad accounts are reachable from this Google account.",
      namePrefix: "Account ",
      rowDisabled: (a) => !!(a.manager || a.error),
      rowBadge: (a) => a.manager ? "Manager" : a.error ? "Unavailable" : a.currency || "",
      savedToast: (n) => `${n} account${n === 1 ? "" : "s"} linked. First sync is running.`,
      saveError: "Could not save account selection."
    },
    sync: {
      itemsField: "accounts",
      failedToast: (n) => `Sync finished with ${n} account error${n === 1 ? "" : "s"}.`
    }
  },
  google_analytics: {
    slug: "google_analytics",
    urlSlug: "google-analytics",
    label: "Google Analytics",
    logo: "integrations/google-analytics.svg",
    connect: { fallbackError: "Could not start the Google Analytics connection." },
    disconnect: {
      confirm: "Daily metric refreshes stop until reconnected.",
      toast: "Google Analytics disconnected."
    },
    card: {
      tint: "success",
      icon: "monitoring",
      sub: "Traffic and engagement beside your leads.",
      ids: { connect: "intg-a-connect", choose: "intg-a-properties", sync: "intg-a-sync", disconnect: "intg-a-disconnect", panel: "intg-a-picker" },
      chooseLabel: "Choose properties",
      idleDesc: "Connect a Google account with access to your GA4 property. Traffic and engagement line up against your magnet leads.",
      brokenDesc: "The connection stopped working. Reconnect to resume daily metric refreshes.",
      reachDesc: (n) => `This connection can reach <b>${n}</b> GA4 propert${n === 1 ? "y" : "ies"}. Choose which ones feed reporting; metrics refresh daily.`,
      noneDesc: "Connected, but no GA4 properties are reachable from this Google account. Reconnect with an account that has Analytics access.",
      reachableCount: (acct) => acct?.properties?.length || 0
    },
    picker: {
      path: "properties",
      itemsField: "properties",
      saveField: "property_ids",
      dataAttr: "intg-prop",
      datasetKey: "intgProp",
      ids: { cancel: "intg-a-picker-cancel", save: "intg-a-picker-save" },
      loading: "Loading your GA4 properties…",
      loadError: "Could not load your GA4 properties. Try again, or reconnect if this keeps happening.",
      heading: "Properties that feed reporting",
      emptyMsg: "No GA4 properties are reachable from this Google account.",
      namePrefix: "Property ",
      rowDisabled: () => false,
      rowBadge: (p) => p.account || "",
      savedToast: (n) => `${n} propert${n === 1 ? "y" : "ies"} linked. First sync is running.`,
      saveError: "Could not save property selection."
    },
    sync: {
      itemsField: "properties",
      failedToast: (n) => `Sync finished with ${n} property error${n === 1 ? "" : "s"}.`
    }
  },
  calendly: {
    slug: "calendly",
    urlSlug: "calendly",
    label: "Calendly",
    logo: "integrations/calendly.svg",
    connect: { fallbackError: "Could not start the Calendly connection." },
    disconnect: {
      confirm: "Magnet booking falls back to the built-in scheduler and booking sync stops.",
      toast: "Calendly disconnected."
    },
    card: {
      tint: "accent",
      icon: "event",
      sub: "Bookings on your magnets.",
      ids: { connect: "intg-c-connect", disconnect: "intg-c-disconnect" },
      idleDesc: "Connect Calendly and your magnets book real meetings: the Book button opens your calendar in the conversation, and confirmed bookings land on the lead automatically.",
      brokenDesc: "The connection stopped working. Reconnect to resume booking sync."
    }
  },
  callrail: {
    slug: "callrail",
    urlSlug: "callrail",
    label: "CallRail",
    logo: "integrations/callrail.svg",
    // no public SVG exists yet - glyph fallback renders
    disconnect: {
      confirm: "Calls stop landing in your Leads inbox.",
      toast: "CallRail disconnected."
    },
    card: {
      tint: "info",
      icon: "call",
      sub: "Calls in your leads inbox.",
      ids: { connect: "intg-r-connect", sync: "intg-r-sync", disconnect: "intg-r-disconnect", setup: "intg-r-setup" },
      idleDesc: "Paste a CallRail API key and tracked phone calls land in your Leads inbox, with the caller, source, and recording on the lead.",
      brokenDesc: "The connection stopped working. Reconnect with a current CallRail API key."
    }
  }
};
const COMING_SOON = [
  { label: "HubSpot", logo: "integrations/hubspot.svg", icon: "hub", sub: "Leads into your CRM." },
  { label: "Zapier", logo: "integrations/zapier.svg", icon: "bolt", sub: "Anything into anything." }
];
const URL_TO_SLUG = Object.fromEntries(Object.values(PROVIDERS).map((p) => [p.urlSlug, p.slug]));
function logoHTML(p, { size = "" } = {}) {
  return `
    <span class="intg-mark intg-mark--${p.card.tint}${size ? ` intg-mark--${size}` : ""}">
      <img class="intg-logo" src="${esc(p.logo)}" alt="" loading="lazy"
           onerror="this.style.display='none';this.parentElement.querySelector('.intg-logo-fallback').style.display=''">
      <span class="material-symbols-outlined intg-logo-fallback" aria-hidden="true" style="display:none">${p.card.icon}</span>
    </span>`;
}
function connFor(providersMap, slug) {
  const org = orgGuid();
  const conns = providersMap?.[slug] || [];
  return conns.find((c) => c.owner_guid === org) || conns[0] || null;
}
function statusOf(p, conn, configured) {
  if (p.connect && !configured) return "unavailable";
  if (!conn) return "idle";
  return conn.connect_status === "ACTIVE" ? "connected" : "broken";
}
function statusPill(status, conn) {
  if (status === "unavailable") return `<span class="intg-state">Not available yet</span>`;
  if (status === "idle") return `<span class="intg-state">Not connected</span>`;
  if (status === "connected") return `<span class="intg-state on"><span class="material-symbols-outlined" aria-hidden="true">check</span>Connected</span>`;
  return `<span class="intg-state warn"><span class="material-symbols-outlined" aria-hidden="true">priority_high</span>${esc(conn?.connect_status === "NEEDS_REAUTH" ? "Reconnect needed" : "Connection error")}</span>`;
}
async function fetchIntegrations() {
  const res = await fetch(`${apiBase()}/m5t/v5/integrations`);
  if (res.status === 403) return { denied: true };
  const data = await res.json();
  if (!data.ok) throw new Error(data.error || "load failed");
  return { providers: data.data.providers, configured: data.data.configured };
}
async function connectProvider(p) {
  if (busyLock.busy) return;
  busyLock.busy = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/${p.slug}/connect`);
    const data = await res.json();
    if (!data.ok || !data.data?.url) throw new Error(data.error || "connect failed");
    window.location.href = data.data.url;
  } catch (e) {
    toast(e.message || p.connect.fallbackError, "error");
    busyLock.busy = false;
  }
}
async function syncProvider(p, { refresh } = {}) {
  if (busyLock.busy) return;
  busyLock.busy = true;
  const btn = document.getElementById(p.card.ids.sync);
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/${p.slug}/sync`, { method: "POST" });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "sync failed");
    const items = data.data?.connections?.[0]?.[p.sync.itemsField] || [];
    const failed = items.filter((it) => it.error).length;
    toast(failed ? p.sync.failedToast(failed) : "Metrics synced.", failed ? "warning" : "success");
  } catch (e) {
    toast("Sync failed.", "error");
  } finally {
    busyLock.busy = false;
    if (btn) btn.disabled = false;
    refresh?.();
  }
}
async function disconnectProvider(p, { refresh } = {}) {
  if (busyLock.busy) return;
  busyLock.busy = true;
  let ok = false;
  try {
    ok = await confirmDialog({
      title: `Disconnect ${p.label}?`,
      message: p.disconnect.confirm,
      confirmLabel: "Disconnect",
      danger: true
    });
  } finally {
    if (!ok) busyLock.busy = false;
  }
  if (!ok) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/${p.slug}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.error || "disconnect failed");
    toast(p.disconnect.toast, "success");
  } catch (e) {
    toast("Disconnect failed.", "error");
  } finally {
    busyLock.busy = false;
    refresh?.();
  }
}
async function openProviderPicker(p, { refresh } = {}) {
  const pk = p.picker;
  const panel = document.getElementById(p.card.ids.panel);
  if (!panel) return;
  panel.style.display = "";
  panel.innerHTML = alertHTML(pk.loading);
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/${p.slug}/${pk.path}`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "load failed");
    renderProviderPicker(p, data.data[pk.itemsField] || [], new Set(data.data.linked || []), { refresh });
  } catch (e) {
    panel.innerHTML = alertHTML(pk.loadError, "error");
  }
}
function renderProviderPicker(p, items, linked, { refresh } = {}) {
  const pk = p.picker;
  const panel = document.getElementById(p.card.ids.panel);
  if (!panel) return;
  const rows = items.map((it) => {
    const disabled = pk.rowDisabled(it);
    const badge = pk.rowBadge(it);
    const checked = linked.has(it.id) && !disabled;
    return `
      <label class="intg-acct${disabled ? " disabled" : ""}">
        <input type="checkbox" data-${pk.dataAttr}="${esc(it.id)}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}>
        <span style="min-width:0">
          <span class="intg-acct__name">${esc(it.name || pk.namePrefix + it.id)}</span>
          <div class="intg-acct__id">${esc(it.id)}</div>
        </span>
        ${badge ? `<span class="intg-acct__badge">${esc(badge)}</span>` : "<span></span>"}
      </label>`;
  }).join("");
  panel.innerHTML = `
    <div class="intg-picker">
      <div class="intg-picker__head">
        <span>${pk.heading}</span>
        <span style="font-weight:500">${items.filter((it) => !pk.rowDisabled(it)).length} selectable</span>
      </div>
      <div class="intg-picker__list">
        ${rows || `<div class="intg-picker__empty">${pk.emptyMsg}</div>`}
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="${pk.ids.cancel}">Cancel</button>
        <button type="button" class="intg-btn primary" id="${pk.ids.save}"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save</button>
      </div>
    </div>`;
  document.getElementById(pk.ids.cancel)?.addEventListener("click", () => {
    panel.style.display = "none";
  });
  document.getElementById(pk.ids.save)?.addEventListener("click", () => saveProviderPicker(p, { refresh }));
}
async function saveProviderPicker(p, { refresh } = {}) {
  const pk = p.picker;
  const panel = document.getElementById(p.card.ids.panel);
  const ids = [...panel?.querySelectorAll(`input[data-${pk.dataAttr}]:checked`) || []].map((el) => el.dataset[pk.datasetKey]);
  const btn = document.getElementById(pk.ids.save);
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/${p.slug}/${pk.path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [pk.saveField]: ids })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "save failed");
    toast(pk.savedToast(data.data.linked), "success");
    if (panel) panel.style.display = "none";
    refresh?.();
  } catch (e) {
    toast(pk.saveError, "error");
    if (btn) btn.disabled = false;
  }
}
function openCallrailSetup({ refresh, replaceKey = false } = {}) {
  const panel = document.getElementById(PROVIDERS.callrail.card.ids.setup);
  if (!panel) return;
  panel.style.display = "";
  panel.innerHTML = `
    <div class="intg-picker">
      <div class="intg-picker__head"><span>${replaceKey ? "Replace API key" : "Connect CallRail"}</span></div>
      <div class="intg-form">
        <div>
          <label for="intg-r-key">API key</label>
          <input class="intg-input" id="intg-r-key" type="password" autocomplete="off" spellcheck="false" placeholder="Paste your CallRail API v3 key">
          <p class="intg-hint">Create one in CallRail under Integrations, then Data access, then API keys. Read-only is fine for calls; Allow Writes lets us register call sync for you.</p>
        </div>
        <div id="intg-r-pickers" hidden>
          <label for="intg-r-account">Account</label>
          <select class="intg-select" id="intg-r-account"></select>
          <label for="intg-r-company" style="margin-top:8px;display:block">Company (your client)</label>
          <select class="intg-select" id="intg-r-company"></select>
        </div>
        <p class="intg-hint" id="intg-r-status" role="status"></p>
      </div>
      <div class="intg-picker__foot">
        <button type="button" class="intg-btn" id="intg-r-cancel">Cancel</button>
        <button type="button" class="intg-btn primary" id="intg-r-continue">Continue</button>
      </div>
    </div>`;
  document.getElementById("intg-r-cancel")?.addEventListener("click", () => {
    panel.style.display = "none";
  });
  document.getElementById("intg-r-continue")?.addEventListener("click", () => callrailContinue({ refresh }));
  document.getElementById("intg-r-key")?.focus();
}
const rStatus = (msg) => {
  const el = document.getElementById("intg-r-status");
  if (el) el.textContent = msg;
};
async function callrailContinue({ refresh } = {}) {
  const btn = document.getElementById("intg-r-continue");
  const key = document.getElementById("intg-r-key")?.value.trim() || "";
  const pickers = document.getElementById("intg-r-pickers");
  if (!key) {
    rStatus("Paste an API key first.");
    return;
  }
  if (pickers && !pickers.hidden) return callrailSave(key, { refresh });
  if (btn) btn.disabled = true;
  rStatus("Checking the key with CallRail…");
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: key })
    });
    const data = await res.json();
    if (!data.ok) {
      rStatus(data.error || "CallRail rejected that key.");
      return;
    }
    const accounts = data.data.accounts || [];
    const acctSel = document.getElementById("intg-r-account");
    if (acctSel) {
      acctSel.innerHTML = accounts.map((a) => `<option value="${esc(a.id)}">${esc(a.name)}</option>`).join("");
      acctSel.onchange = () => loadCallrailCompanies(key, acctSel.value);
    }
    if (pickers) pickers.hidden = false;
    if (btn) btn.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">save</span>Save`;
    rStatus("");
    await loadCallrailCompanies(key, accounts[0]?.id);
  } catch (e) {
    rStatus("Could not reach CallRail. Try again.");
  } finally {
    if (btn) btn.disabled = false;
  }
}
async function loadCallrailCompanies(key, accountId) {
  const sel = document.getElementById("intg-r-company");
  if (!sel || !accountId) return;
  sel.innerHTML = `<option value="">Loading companies…</option>`;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail/companies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: key, account_id: accountId })
    });
    const data = await res.json();
    const companies = data.ok ? data.data.companies || [] : [];
    sel.innerHTML = companies.length ? companies.map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("") : `<option value="">No active companies in this account</option>`;
  } catch {
    sel.innerHTML = `<option value="">Could not load companies</option>`;
  }
}
async function callrailSave(key, { refresh } = {}) {
  const btn = document.getElementById("intg-r-continue");
  const accountId = document.getElementById("intg-r-account")?.value || "";
  const companyId = document.getElementById("intg-r-company")?.value || "";
  if (!companyId) {
    rStatus("Pick the company this workspace tracks.");
    return;
  }
  if (btn) btn.disabled = true;
  rStatus("Connecting…");
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: key, account_id: accountId, company_id: companyId })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "connect failed");
    toast(data.data?.webhook_state === "active" ? "CallRail connected. Call sync is on." : "CallRail connected. Call sync setup needs attention; see below.", "success");
    refresh?.();
  } catch (e) {
    rStatus("Could not connect. Check the key and try again.");
    if (btn) btn.disabled = false;
  }
}
async function syncCallrail({ refresh } = {}) {
  if (busyLock.busy) return;
  busyLock.busy = true;
  const btn = document.getElementById(PROVIDERS.callrail.card.ids.sync);
  if (btn) btn.disabled = true;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail/sync?days=7`, { method: "POST" });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "sync failed");
    const c = data.data?.connections?.[0] || {};
    toast(c.error ? "Sync finished with errors." : `Sync done. ${c.processed || 0} new call${(c.processed || 0) === 1 ? "" : "s"} recorded.`, c.error ? "warning" : "success");
  } catch (e) {
    toast("Sync failed.", "error");
  } finally {
    busyLock.busy = false;
    if (btn) btn.disabled = false;
    refresh?.();
  }
}
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-intg-styles";
  s.textContent = `
    /* ── shared marks / pills / buttons / alerts ── */
    .page-shell .intg-mark { position: relative; width: 46px; height: 46px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); flex: 0 0 auto; }
    .page-shell .intg-mark .material-symbols-outlined { font-size: 24px; }
    .page-shell .intg-mark--primary { background: var(--color-accent-soft, #EEF4FF); color: var(--color-accent, #0072BA); }
    .page-shell .intg-mark--accent { background: var(--color-accent-strong-soft, #FBF1D2); color: var(--color-accent-strong, #915E00); }
    .page-shell .intg-mark--info { background: var(--color-info-soft, rgba(123,196,196,0.16)); color: var(--color-info-strong, #2F6363); }
    .page-shell .intg-mark--success { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .intg-mark--hero { width: 56px; height: 56px; border-radius: 14px; }
    .page-shell .intg-logo { width: 60%; height: 60%; object-fit: contain; display: block; }
    .page-shell .intg-state { display: inline-flex; align-items: center; gap: 5px; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); white-space: nowrap; }
    /* Pill text uses the *-text tokens: the base tone colors fail contrast for
       small bold text on their own -soft fills. */
    .page-shell .intg-state.on { background: var(--color-success-soft, #E3F4EF); color: var(--color-success-text, #006B54); }
    .page-shell .intg-state.warn { background: var(--color-warning-soft, #FEF3C7); color: var(--color-warning-text, #92400E); }
    .page-shell .intg-state .material-symbols-outlined { font-size: 13px; }
    .page-shell .intg-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 7px 13px; border-radius: 10px; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
    .page-shell .intg-btn:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .intg-btn[disabled] { opacity: 0.55; cursor: default; }
    .page-shell .intg-btn.primary { background: var(--color-primary-600, #0072BA); border-color: var(--color-primary-600, #0072BA); color: #fff; }
    .page-shell .intg-btn.primary:hover { background: var(--color-primary-700, #00558D); }
    .page-shell .intg-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .intg-btn .material-symbols-outlined { font-size: 16px; }
    .page-shell .intg-alert { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 10px 14px; border-radius: 10px; font-size: 0.82rem; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); max-width: 640px; }
    .page-shell .intg-alert.error { background: var(--color-danger-soft, #FDF1EE); border-color: var(--color-danger, #DD4124); color: var(--color-danger, #DD4124); }
    .page-shell .intg-alert .material-symbols-outlined { font-size: 17px; flex: 0 0 auto; }

    /* ── hub tiles ── */
    .page-shell .intg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
    /* Card chrome on .intg-tile (coming-soon tiles are <div>s, not anchors);
       interactive affordances stay qualified to a.intg-tile. */
    .page-shell .intg-tile { display: flex; flex-direction: column; gap: 12px; padding: 18px; text-decoration: none; color: inherit; background: var(--color-bg, #fff); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 12px); box-shadow: var(--shadow-sm, 0 1px 2px rgba(11,18,32,0.06)); }
    .page-shell a.intg-tile { transition: box-shadow .15s ease, border-color .15s ease, transform .15s ease; }
    .page-shell a.intg-tile:hover { border-color: var(--color-accent-muted, #7BB7FF); box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); transform: translateY(-2px); }
    .page-shell a.intg-tile:focus-visible { outline: none; box-shadow: var(--focus-ring, 0 0 0 3px rgba(0,114,186,0.30)); }
    .page-shell .intg-tile__head { display: flex; align-items: center; gap: 12px; }
    .page-shell .intg-tile__titles { min-width: 0; }
    .page-shell .intg-tile__name { font-weight: 700; font-size: 0.95rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-tile__sub { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 1px; }
    .page-shell .intg-tile__desc { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); line-height: 1.5; margin: 0; flex: 1 1 auto; }
    .page-shell .intg-tile__foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .page-shell .intg-tile__go { color: var(--color-text-subtle, #6C7C9A); transition: color .12s ease, transform .12s ease; }
    .page-shell a.intg-tile:hover .intg-tile__go { color: var(--color-accent, #0072BA); transform: translateX(2px); }
    /* Coming-soon: inert, with only the logo mark dimmed. No tile-level
       opacity (it dropped the text and pill below readable contrast). */
    .page-shell .intg-tile--soon { pointer-events: none; }
    .page-shell .intg-tile--soon .intg-mark { filter: grayscale(1); opacity: 0.55; }
    .page-shell .intg-tile--soon .intg-tile__name, .page-shell .intg-tile--soon .intg-tile__sub { color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-tile--soon .intg-state { background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-grid__soon-label { grid-column: 1 / -1; margin: 8px 0 -6px; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }

    /* ── detail page ── */
    .page-shell a.intg-back { display: inline-flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); text-decoration: none; margin-bottom: 14px; }
    .page-shell a.intg-back:hover { color: var(--color-accent, #0072BA); }
    .page-shell .intg-hero { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; }
    .page-shell .intg-hero__meta { min-width: 0; }
    .page-shell .intg-hero__name-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .page-shell .intg-hero__name { font-family: var(--font-display, inherit); font-weight: 700; font-size: 1.25rem; color: var(--color-text, #0B1220); }
    .page-shell .intg-hero__sub { font-size: 0.84rem; color: var(--color-text-muted, #4A5A78); margin-top: 3px; }
    .page-shell .intg-actions { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
    .page-shell .intg-desc { font-size: 0.86rem; color: var(--color-text-muted, #4A5A78); margin: 14px 0 0; max-width: 640px; line-height: 1.55; }
    .page-shell .intg-desc b { color: var(--color-text, #0B1220); }
    .page-shell .intg-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0; counter-reset: none; }
    .page-shell .intg-step { display: flex; gap: 12px; padding: 10px 0; }
    .page-shell .intg-step__num { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.74rem; font-weight: 700; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-step--done .intg-step__num { background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); }
    .page-shell .intg-step--done .intg-step__num .material-symbols-outlined { font-size: 15px; }
    .page-shell .intg-step--current .intg-step__num { background: var(--color-accent, #0072BA); color: #fff; }
    .page-shell .intg-step__text { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); line-height: 1.55; padding-top: 3px; }
    .page-shell .intg-step--current .intg-step__text { color: var(--color-text, #0B1220); }
    .page-shell .intg-kv { display: grid; grid-template-columns: 150px 1fr; gap: 8px 16px; font-size: 0.84rem; }
    .page-shell .intg-kv dt { color: var(--color-text-subtle, #6C7C9A); font-weight: 600; }
    .page-shell .intg-kv dd { margin: 0; color: var(--color-text, #0B1220); overflow-wrap: anywhere; }
    .page-shell .intg-ev { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 9px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.85rem; }
    .page-shell .intg-ev:last-child { border-bottom: 0; }
    .page-shell .intg-ev__name { font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .intg-ev__meta { color: var(--color-text-subtle, #6C7C9A); font-size: 0.76rem; }
    .page-shell .intg-ca-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); font-size: 0.85rem; cursor: pointer; }
    .page-shell .intg-ca-row:last-child { border-bottom: 0; }
    .page-shell .intg-ca-row input { accent-color: var(--color-accent, #0072BA); }
    .page-shell .intg-ca-name { font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .intg-ca-cat { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.03em; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }

    /* ── shared sub-panels (picker, CallRail form, walkthrough) ── */
    .page-shell .intg-picker { margin-top: 16px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 12px; overflow: hidden; max-width: 640px; }
    .page-shell .intg-picker__head { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 16px; background: var(--color-surface, #F4F7FB); border-bottom: 1px solid var(--color-border, #D4DCE8); font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); letter-spacing: 0.02em; }
    .page-shell .intg-picker__list { max-height: 300px; overflow-y: auto; }
    .page-shell .intg-acct { display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: center; padding: 10px 16px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); cursor: pointer; }
    .page-shell .intg-acct:last-child { border-bottom: 0; }
    .page-shell .intg-acct:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .intg-acct.disabled { opacity: 0.55; cursor: default; }
    .page-shell .intg-acct input { width: 15px; height: 15px; accent-color: var(--color-primary-600, #0072BA); }
    .page-shell .intg-acct__name { font-size: 0.86rem; font-weight: 600; color: var(--color-text, #0B1220); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .intg-acct__id { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); font-family: ui-monospace, monospace; margin-top: 1px; }
    .page-shell .intg-acct__badge { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-subtle, #6C7C9A); white-space: nowrap; }
    .page-shell .intg-picker__foot { display: flex; justify-content: flex-end; gap: 8px; padding: 10px 16px; background: var(--color-surface, #F4F7FB); border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .intg-picker__empty { padding: 18px 16px; font-size: 0.84rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .intg-form { display: flex; flex-direction: column; gap: 10px; padding: 14px 16px; }
    .page-shell .intg-form label { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.03em; color: var(--color-text-muted, #4A5A78); }
    .page-shell .intg-input, .page-shell .intg-select { font: inherit; font-size: 0.84rem; padding: 8px 10px; border-radius: 10px; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); width: 100%; box-sizing: border-box; }
    .page-shell .intg-input:focus, .page-shell .intg-select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); }
    .page-shell .intg-hint { font-size: 0.75rem; color: var(--color-text-subtle, #6C7C9A); margin: 0; }
    .page-shell .intg-walkthrough { margin-top: 14px; max-width: 640px; }
    .page-shell .intg-walkthrough summary { cursor: pointer; list-style: none; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); display: inline-flex; align-items: center; gap: 5px; }
    .page-shell .intg-walkthrough summary::-webkit-details-marker { display: none; }
    .page-shell .intg-walkthrough summary::before { content: 'expand_more'; font-family: 'Material Symbols Outlined'; font-size: 18px; transition: transform .15s ease; }
    .page-shell .intg-walkthrough[open] summary::before { transform: rotate(180deg); }
    .page-shell .intg-walkthrough summary:hover { color: var(--color-accent-hover, #00558D); }
    .page-shell .intg-walkthrough__body { margin-top: 10px; padding: 14px 16px; border-radius: 10px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .intg-walkthrough__body p { margin: 0 0 10px; font-size: 0.84rem; color: var(--color-text, #0B1220); line-height: 1.55; }
    .page-shell .intg-walkthrough__body ol { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
    .page-shell .intg-walkthrough__body li { font-size: 0.82rem; color: var(--color-text-muted, #4A5A78); line-height: 1.5; }
    .page-shell .intg-card { margin-bottom: 20px; }

    @media (max-width: 720px) {
      .page-shell .intg-hero { grid-template-columns: auto 1fr; }
      .page-shell .intg-actions { grid-column: 1 / -1; justify-content: flex-start; }
      .page-shell .intg-kv { grid-template-columns: 1fr; gap: 2px 0; }
      .page-shell .intg-kv dd { margin-bottom: 8px; }
    }

    html.ff-no-animations .page-shell a.intg-tile,
    html.ff-no-animations .page-shell .intg-tile__go,
    html.ff-no-animations .page-shell .intg-walkthrough summary::before { transition: none; }
    @media (prefers-reduced-motion: reduce) {
      .page-shell a.intg-tile, .page-shell .intg-tile__go,
      .page-shell .intg-walkthrough summary::before { transition: none; transform: none; }
    }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
export {
  COMING_SOON as C,
  PROVIDERS as P,
  URL_TO_SLUG as U,
  WALKTHROUGHS as W,
  apiBase as a,
  emptyState as b,
  connFor as c,
  statusOf as d,
  ensureStyles as e,
  fetchIntegrations as f,
  esc as g,
  statusPill as h,
  takePendingReturn as i,
  connectProvider as j,
  syncCallrail as k,
  logoHTML as l,
  canManage as m,
  openProviderPicker as n,
  openCallrailSetup as o,
  syncProvider as p,
  disconnectProvider as q,
  alertHTML as r,
  setPendingReturn as s,
  toast as t
};
//# sourceMappingURL=integrations-shared-DIkAqJCS.js.map
