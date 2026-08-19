import { U as URL_TO_SLUG, e as ensureStyles, P as PROVIDERS, b as emptyState, f as fetchIntegrations, c as connFor, d as statusOf, i as takePendingReturn, j as connectProvider, o as openCallrailSetup, k as syncCallrail, m as canManage, n as openProviderPicker, p as syncProvider, q as disconnectProvider, l as logoHTML, g as esc, h as statusPill, W as WALKTHROUGHS, r as alertHTML, a as apiBase, t as toast } from "./integrations-shared-DIkAqJCS.js";
import { i as inPortfolio, e as ensurePortfolioStyles } from "./portfolio-view-D5t4pXOZ.js";
import { c as capList } from "./index.js";
import "./confirmDialog-B9956zZ8.js";
const state = { provider: null, conn: null, configured: false, status: "idle" };
function render({ provider } = {}) {
  ensureStyles();
  ensurePortfolioStyles();
  const slug = URL_TO_SLUG[provider];
  if (!slug || inPortfolio()) return '<div class="page-shell"></div>';
  const p = PROVIDERS[slug];
  state.provider = p;
  return `
    <div class="page-shell" data-section="settings-integrations">
      <a class="intg-back" href="#/settings/integrations"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:16px">arrow_back</span>All integrations</a>
      <div id="intg-detail">
        <div class="dashboard-card intg-card"><div class="card-body">${emptyState("hourglass_empty", "Loading…")}</div></div>
      </div>
    </div>`;
}
async function init({ provider } = {}) {
  const slug = URL_TO_SLUG[provider];
  if (!slug || inPortfolio()) {
    window.router?.navigate("/settings/integrations", { historyAPIMethod: "replaceState" });
    return;
  }
  await load();
  const pending = takePendingReturn();
  if (pending?.connected && pending.slug === slug && state.provider?.picker && canManage()) {
    openProviderPicker(state.provider, { refresh: load });
  }
}
async function load() {
  const body = document.getElementById("intg-detail");
  if (!body || !state.provider) return;
  try {
    const { denied, providers, configured } = await fetchIntegrations();
    if (denied) {
      body.innerHTML = `<div class="dashboard-card intg-card"><div class="card-body">${emptyState("lock", "Integrations are managed by workspace admins.")}</div></div>`;
      return;
    }
    state.conn = connFor(providers, state.provider.slug);
    state.configured = !!configured?.[state.provider.slug];
    state.status = statusOf(state.provider, state.conn, state.configured);
    body.innerHTML = detailHTML();
    wire();
  } catch (e) {
    body.innerHTML = `<div class="dashboard-card intg-card"><div class="card-body">${emptyState("error", "Could not load this integration.")}</div></div>`;
  }
}
function detailHTML() {
  const p = state.provider;
  return [
    heroCard(p),
    stepsCard(p),
    toolsCard(p),
    healthCard(p),
    dangerCard(p)
  ].filter(Boolean).join("");
}
function identityLine(p) {
  const acct = state.conn?.external_account || {};
  if (state.status !== "connected") return p.card.sub;
  if (p.slug === "calendly") {
    const who = [acct.name, acct.email && `(${acct.email})`].filter(Boolean).join(" ");
    return who ? `Connected as ${who}.` : "Connected.";
  }
  if (p.slug === "callrail") {
    const scope = [acct.account_name, acct.company_name].filter(Boolean).join(" · ");
    return scope ? `Connected to ${scope}.` : "Connected.";
  }
  const n = p.card.reachableCount(acct);
  return n ? `${n} reachable ${p.slug === "google_analytics" ? n === 1 ? "property" : "properties" : n === 1 ? "account" : "accounts"}.` : "Connected.";
}
function heroCard(p) {
  let actions = "";
  if (canManage()) {
    if (p.connect && (state.status === "idle" || state.status === "broken") && state.configured) {
      actions = `<button type="button" class="intg-btn primary" id="${p.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${state.status === "broken" ? "Reconnect" : "Connect"}</button>`;
    }
    if (p.slug === "callrail" && state.status !== "connected") {
      actions = `<button type="button" class="intg-btn primary" id="${p.card.ids.connect}"><span class="material-symbols-outlined" aria-hidden="true">link</span>${state.status === "broken" ? "Reconnect" : "Connect"}</button>`;
    }
  }
  let desc;
  if (state.status === "unavailable") desc = `${p.label} is being set up for this platform.`;
  else if (state.status === "broken") desc = p.card.brokenDesc;
  else if (state.status === "idle") desc = canManage() ? p.card.idleDesc : p.card.sub;
  else desc = identityLine(p);
  return `
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="intg-hero">
          ${logoHTML(p, { size: "hero" })}
          <div class="intg-hero__meta">
            <div class="intg-hero__name-row">
              <span class="intg-hero__name">${esc(p.label)}</span>
              ${statusPill(state.status, state.conn)}
            </div>
            <div class="intg-hero__sub">${esc(p.card.sub)}</div>
          </div>
          <div class="intg-actions">${actions}</div>
        </div>
        <p class="intg-desc">${esc(desc)}</p>
        ${p.slug === "callrail" && state.status !== "connected" ? `<div id="${p.card.ids.setup}" style="display:none"></div>` : ""}
      </div>
    </div>`;
}
function stepsCard(p) {
  const w = WALKTHROUGHS[p.slug];
  if (!w) return "";
  if (state.status === "connected" || state.status === "unavailable" || !canManage()) {
    return `
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <p class="intg-desc" style="margin-top:0">${esc(w.what)}</p>
          <details class="intg-walkthrough">
            <summary>Setup guide</summary>
            <div class="intg-walkthrough__body">
              <ol>${w.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
            </div>
          </details>
        </div>
      </div>`;
  }
  const currentIdx = 0;
  return `
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">checklist</span> Set up ${esc(p.label)}</div>
        <p class="intg-desc" style="margin:0 0 10px">${esc(w.what)}</p>
        <ol class="intg-steps">
          ${w.steps.map((s, i) => `
            <li class="intg-step${i === currentIdx ? " intg-step--current" : ""}">
              <span class="intg-step__num">${i + 1}</span>
              <span class="intg-step__text">${esc(s)}</span>
            </li>`).join("")}
        </ol>
      </div>
    </div>`;
}
function toolsCard(p) {
  if (state.status !== "connected") return "";
  const manage = canManage();
  if (p.picker) {
    const n = p.card.reachableCount(state.conn?.external_account);
    return `
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">tune</span> Reporting</div>
          <p class="intg-desc" style="margin:0">${n ? p.card.reachDesc(n) : p.card.noneDesc}</p>
          ${manage ? `
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${p.card.ids.choose}"><span class="material-symbols-outlined" aria-hidden="true">checklist</span>${p.card.chooseLabel}</button>
            <button type="button" class="intg-btn" id="${p.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
          </div>` : ""}
          <div id="${p.card.ids.panel}" style="display:none"></div>
        </div>
      </div>
      ${p.slug === "google_ads" && manage ? `
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">flag</span> Conversions in reporting</div>
          <p class="intg-desc" style="margin:0 0 6px">Choose which Google Ads conversion actions count on Ad Performance, beside magnet leads. Counts stay Google's own numbers.</p>
          <div id="intg-g-convactions">${alertHTML("Loading conversion actions…")}</div>
        </div>
      </div>` : ""}`;
  }
  if (p.slug === "calendly") {
    if (!manage) return "";
    return `
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">event_available</span> Booking</div>
          <p class="intg-desc" style="margin:0 0 6px">Turn on Calendly booking per magnet under Magnets, in the Book call-to-action. These event types are available:</p>
          <div id="intg-c-events">${alertHTML("Loading event types…")}</div>
        </div>
      </div>`;
  }
  if (p.slug === "callrail") {
    if (!manage) return "";
    return `
      <div class="dashboard-card intg-card">
        <div class="card-body">
          <div class="card-title" style="margin-bottom:10px"><span class="material-symbols-outlined" aria-hidden="true">call</span> Call tracking</div>
          <p class="intg-desc" style="margin:0 0 6px">Tracked calls land in your Leads inbox with the caller, source, and recording. These tracking numbers are active:</p>
          <div id="intg-r-trackers">${alertHTML("Loading tracking numbers…")}</div>
          <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
            <button type="button" class="intg-btn" id="${p.card.ids.sync}"><span class="material-symbols-outlined" aria-hidden="true">sync</span>Sync now</button>
            <button type="button" class="intg-btn" id="intg-r-replace"><span class="material-symbols-outlined" aria-hidden="true">key</span>Replace API key</button>
          </div>
          <div id="${p.card.ids.setup}" style="display:none"></div>
        </div>
      </div>`;
  }
  return "";
}
function fmtDay(tz) {
  if (!tz) return "";
  try {
    return new Date(tz).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return String(tz).slice(0, 10);
  }
}
function healthCard(p) {
  if (!state.conn) return "";
  const wh = state.conn.webhook || {};
  const rows = [];
  rows.push(["Status", state.status === "connected" ? "Active" : state.conn.connect_status === "NEEDS_REAUTH" ? "Needs reconnecting" : "Error"]);
  if (p.slug === "calendly") {
    rows.push(["Booking sync", wh.state === "active" ? "On" : "Off (paid Calendly plan required)"]);
    if (wh.last_received_tz) rows.push(["Last booking received", fmtDay(wh.last_received_tz)]);
  }
  if (p.slug === "callrail") {
    rows.push(["Call sync", wh.state === "active" ? "On" : "Needs attention"]);
    if (wh.cookie_capture) rows.push(["Session capture", wh.cookie_capture === "active" ? "On" : "Needs attention"]);
    if (wh.last_received_tz) rows.push(["Last call received", fmtDay(wh.last_received_tz)]);
  }
  if (state.conn.created?.created_tz) rows.push(["Connected on", fmtDay(state.conn.created.created_tz)]);
  const warn = p.slug === "calendly" && state.status === "connected" && wh.state !== "active" ? alertHTML("Booking sync is off: webhooks need a paid Calendly plan. Visitors can still book in the magnet; bookings just will not appear on the lead automatically. Reconnect after upgrading to turn it on.", "error") : p.slug === "callrail" && state.status === "connected" && wh.state !== "active" ? alertHTML("Automatic call sync could not be set up in CallRail. Calls still arrive via the daily sweep and Sync now. Reconnect to retry the setup.", "error") : "";
  return `
    <div class="dashboard-card intg-card">
      <div class="card-body">
        <div class="card-title" style="margin-bottom:12px"><span class="material-symbols-outlined" aria-hidden="true">monitor_heart</span> Health</div>
        <dl class="intg-kv">
          ${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
        </dl>
        ${warn}
      </div>
    </div>`;
}
function dangerCard(p) {
  if (state.status !== "connected" && state.status !== "broken") return "";
  if (!canManage()) return "";
  return `
    <div class="dashboard-card intg-card settings-danger">
      <div class="card-body">
        <div class="settings-danger__action">
          <div>
            <div class="settings-item__title">Disconnect ${esc(p.label)}</div>
            <div class="settings-item__desc">${esc(p.disconnect.confirm)}</div>
          </div>
          <button type="button" class="settings-danger__btn" id="${p.card.ids.disconnect}">Disconnect</button>
        </div>
      </div>
    </div>`;
}
function wire() {
  const p = state.provider;
  if (!p) return;
  const refresh = load;
  if (p.connect) document.getElementById(p.card.ids.connect)?.addEventListener("click", () => connectProvider(p));
  if (p.slug === "callrail") {
    document.getElementById(p.card.ids.connect)?.addEventListener("click", () => openCallrailSetup({ refresh }));
    document.getElementById("intg-r-replace")?.addEventListener("click", () => openCallrailSetup({ refresh, replaceKey: true }));
    document.getElementById(p.card.ids.sync)?.addEventListener("click", () => syncCallrail({ refresh }));
    if (state.status === "connected" && canManage()) loadTrackers();
  }
  if (p.picker) {
    document.getElementById(p.card.ids.choose)?.addEventListener("click", () => openProviderPicker(p, { refresh }));
    document.getElementById(p.card.ids.sync)?.addEventListener("click", () => syncProvider(p, { refresh }));
  }
  if (p.slug === "google_ads" && state.status === "connected" && canManage()) loadConversionActions();
  if (p.slug === "calendly" && state.status === "connected" && canManage()) loadEventTypes();
  document.getElementById(p.card.ids.disconnect)?.addEventListener("click", () => disconnectProvider(p, { refresh }));
}
async function loadConversionActions() {
  const el = document.getElementById("intg-g-convactions");
  if (!el) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/google_ads/conversion_actions`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "load failed");
    const actions = data.data.actions || [];
    const selected = new Set(data.data.selected || []);
    if (!actions.length) {
      el.innerHTML = alertHTML("No enabled conversion actions in the linked accounts.");
      return;
    }
    el.innerHTML = `
      <div class="intg-ca-list">
        ${actions.map((a) => `
          <label class="intg-ca-row">
            <input type="checkbox" value="${esc(a.id)}" ${selected.has(a.id) ? "checked" : ""}>
            <span class="intg-ca-name">${esc(a.name || a.id)}</span>
            ${a.category ? `<span class="intg-ca-cat">${esc(String(a.category).toLowerCase().replace(/_/g, " "))}</span>` : ""}
          </label>`).join("")}
      </div>
      <div class="intg-actions" style="justify-content:flex-start;margin-top:12px">
        <button type="button" class="intg-btn primary" id="intg-g-ca-save"><span class="material-symbols-outlined" aria-hidden="true">save</span>Save selection</button>
      </div>`;
    capList(el.querySelector(".intg-ca-list"), { rowSelector: ".intg-ca-row", noun: "actions" });
    document.getElementById("intg-g-ca-save")?.addEventListener("click", async () => {
      const btn = document.getElementById("intg-g-ca-save");
      const ids = [...el.querySelectorAll('input[type="checkbox"]:checked')].map((c) => c.value);
      btn.disabled = true;
      try {
        const saveRes = await fetch(`${apiBase()}/m5t/v5/integrations/google_ads/conversion_actions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ conversion_action_ids: ids })
        });
        const saved = await saveRes.json();
        if (!saved.ok) throw new Error(saved.error || "save failed");
        toast(ids.length ? `Counting ${ids.length} conversion action${ids.length === 1 ? "" : "s"} in reporting.` : "Conversion counting turned off.", "success");
      } catch (e) {
        toast(e.message || "Could not save the selection.", "error");
      } finally {
        btn.disabled = false;
      }
    });
  } catch {
    el.innerHTML = alertHTML("Could not load conversion actions. If this keeps happening, reconnect.", "error");
  }
}
async function loadEventTypes() {
  const el = document.getElementById("intg-c-events");
  if (!el) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/calendly/event_types`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "load failed");
    const events = data.data.event_types || [];
    const link = data.data.scheduling_url ? `<div class="intg-ev"><span class="intg-ev__name">Full scheduling page</span><span class="intg-ev__meta">${esc(data.data.scheduling_url)}</span></div>` : "";
    el.innerHTML = events.length || link ? `${link}${events.map((ev) => `
          <div class="intg-ev">
            <span class="intg-ev__name">${esc(ev.name)}</span>
            <span class="intg-ev__meta">${ev.duration ? `${esc(String(ev.duration))} min` : ""}</span>
          </div>`).join("")}` : alertHTML("No active event types on this Calendly account.");
    capList(el, { rowSelector: ".intg-ev", noun: "event types" });
  } catch (e) {
    el.innerHTML = alertHTML("Could not load event types. If this keeps happening, reconnect.", "error");
  }
}
async function loadTrackers() {
  const el = document.getElementById("intg-r-trackers");
  if (!el) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail/trackers`);
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "load failed");
    const trackers = data.data.trackers || [];
    el.innerHTML = trackers.length ? trackers.map((t) => `
          <div class="intg-ev">
            <span class="intg-ev__name">${esc(t.name)}</span>
            <span class="intg-ev__meta">${esc(t.number)}${t.type === "session" ? " · number pool" : ""}</span>
          </div>`).join("") : alertHTML("No active tracking numbers in this company yet. Create one in CallRail and it appears here.");
    capList(el, { rowSelector: ".intg-ev", noun: "numbers" });
  } catch (e) {
    el.innerHTML = alertHTML("Could not load tracking numbers.", "error");
  }
}
const settingsIntegrationDetailRoute = { render, init };
export {
  settingsIntegrationDetailRoute as default,
  init,
  render
};
//# sourceMappingURL=settings-integration-detail-route-C7V76Wrg.js.map
