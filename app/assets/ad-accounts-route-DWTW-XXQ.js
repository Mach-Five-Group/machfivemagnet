import { i as inPortfolio, a as initPicker, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
import { c as capList } from "./index.js";
import { a as apiBase, e as ensureStyles$1, b as emptyState, f as fetchIntegrations, c as connFor, d as statusOf, P as PROVIDERS, m as canManage, g as esc, l as logoHTML, h as statusPill } from "./integrations-shared-DIkAqJCS.js";
import "./confirmDialog-B9956zZ8.js";
const PROVIDER_LABELS = { google_ads: "Google Ads", google_lsa: "Local Services Ads" };
const fmtCid = (id) => {
  const d = String(id || "").replace(/\D/g, "");
  return d.length === 10 ? `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}` : String(id || "");
};
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-adacct-styles";
  s.textContent = `
    .page-shell .adacct-conn { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
    .page-shell .adacct-conn__titles { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .page-shell .adacct-conn__name { font-weight: 700; color: var(--color-text, #0B1220); display: flex; align-items: center; gap: 10px; }
    .page-shell .adacct-conn__sub { font-size: 0.8rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-conn__spacer { flex: 1; }
    .page-shell .adacct-manage { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; font-weight: 600; color: var(--color-accent, #0072BA); text-decoration: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); padding: 7px 13px; border-radius: 10px; white-space: nowrap; }
    .page-shell .adacct-manage:hover { background: var(--color-accent-soft, #EEF4FF); }
    .page-shell .adacct-manage:focus-visible { outline: none; box-shadow: var(--focus-ring, 0 0 0 3px rgba(0,114,186,0.30)); }
    .page-shell .adacct-wrap { overflow-x: auto; }
    .page-shell .adacct-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    .page-shell .adacct-table th { text-align: left; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); padding: 8px 12px; border-bottom: 1px solid var(--color-border, #D4DCE8); white-space: nowrap; }
    .page-shell .adacct-table td { padding: 9px 12px; border-bottom: 1px solid var(--color-surface-2, #EAF0F7); vertical-align: middle; white-space: nowrap; }
    .page-shell .adacct-cid { font-variant-numeric: tabular-nums; }
    .page-shell .adacct-note { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: 10px 2px 0; }
    .page-shell .adacct-note a { color: var(--color-accent, #0072BA); }
    .page-shell .adacct-chips { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 10px; font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-chip { font-size: 0.72rem; font-weight: 600; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-sub { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 12px; }
    .page-shell .adacct-form { display: flex; align-items: flex-end; gap: 14px; flex-wrap: wrap; }
    .page-shell .adacct-field { display: flex; flex-direction: column; gap: 4px; font-size: 0.76rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .page-shell .adacct-field select, .page-shell .adacct-field input[type="text"], .page-shell .adacct-field input[type="number"] { font: inherit; font-weight: 400; padding: 7px 10px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .page-shell .adacct-checks { display: flex; align-items: center; gap: 12px; padding: 8px 0; }
    .page-shell .adacct-checks label { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8rem; color: var(--color-text, #0B1220); cursor: pointer; }
    .page-shell .adacct-checks input { accent-color: var(--color-accent, #0072BA); }
    .page-shell .adacct-divider { border-top: 1px solid var(--color-surface-2, #EAF0F7); margin: 18px 0; }
    .page-shell .adacct-result { font-size: 0.85rem; color: var(--color-text, #0B1220); margin-top: 10px; }
  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
function render() {
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "ad-accounts",
      title: "Ad Accounts",
      description: "Pick a client to see their connected ad accounts."
    });
  }
  ensureStyles();
  ensureStyles$1();
  return `
    <div class="page-shell" data-section="ad-accounts">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Ad Accounts</h1>
          <p class="page-description">The accounts behind your ad reporting.</p>
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">link</span> Platform connection</h2>
        </div>
        <div class="card-body" id="adacct-conn">
          ${emptyState("hourglass_empty", "Loading…")}
        </div>
      </div>

      <div class="dashboard-card">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">ads_click</span> Accounts feeding reporting</h2>
          <span class="live-indicator" id="adacct-count"></span>
        </div>
        <div class="card-body" id="adacct-list">
          ${emptyState("hourglass_empty", "Loading…")}
        </div>
      </div>

      <div class="dashboard-card" id="adacct-offline" style="display:none">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">upload_file</span> Offline conversions</h2>
        </div>
        <div class="card-body">
          <p class="adacct-sub">Magnet leads with a Google click id, packaged as an import-ready CSV. Upload it in Google Ads under Goals, then Conversions, then Uploads.</p>
          <div class="adacct-form">
            <label class="adacct-field">Window
              <select id="adacct-oc-days"><option value="30">30 days</option><option value="60">60 days</option><option value="90" selected>90 days</option></select>
            </label>
            <label class="adacct-field">Conversion name
              <input type="text" id="adacct-oc-name" value="M5M magnet lead" maxlength="100">
            </label>
            <label class="adacct-field">Value per conversion
              <input type="number" id="adacct-oc-value" placeholder="Optional" min="0" step="0.01" style="width:110px">
            </label>
            <button type="button" class="adacct-manage" id="adacct-oc-dl"><span class="material-symbols-outlined" aria-hidden="true">download</span>Download CSV</button>
            <label class="adacct-field" id="adacct-oc-target-wrap" style="display:none">Upload into
              <select id="adacct-oc-target"></select>
            </label>
            <button type="button" class="adacct-manage" id="adacct-oc-up" style="display:none"><span class="material-symbols-outlined" aria-hidden="true">cloud_upload</span>Upload to Google Ads</button>
          </div>
          <div class="adacct-checks" id="adacct-oc-statuses">
            <label><input type="checkbox" value="QUALIFIED" checked> Qualified</label>
            <label><input type="checkbox" value="CONVERTED" checked> Converted</label>
            <label><input type="checkbox" value="WORKING"> Working</label>
            <label><input type="checkbox" value="NEW"> New</label>
          </div>
          <div id="adacct-oc-result" class="adacct-result"></div>
          <div class="adacct-divider"></div>
          <p class="adacct-sub">Bookings that complete outside your magnets: upload the booking export (a CSV with an email or phone column, plus a date). Rows that match a magnet lead with a click id come back import-ready.</p>
          <input type="file" id="adacct-mc-file" accept=".csv,text/csv">
          <div id="adacct-mc-result" class="adacct-result"></div>
        </div>
      </div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    const fmtN = (n) => Number(n || 0).toLocaleString();
    return initPicker(apiBase(), [
      { h: "Spend", td: (r) => r.ad ? `$${fmtN(r.ad.spend)}` : "—" },
      { h: "Leads", td: (r) => fmtN(r.leads.window ?? r.leads.total) },
      { h: "CPL", td: (r) => r.ad?.cost_per_lead != null ? `$${fmtN(r.ad.cost_per_lead)}` : "—" }
    ], { emptyMsg: "No client orgs yet. Connect a client ad account to see it here." });
  }
  await load();
}
async function load() {
  const [intg, acctJson, conv] = await Promise.all([
    fetchIntegrations().catch(() => null),
    fetch(`${apiBase()}/m5t/v5/coreAdAccount`).then((r) => r.json()).catch(() => null),
    fetch(`${apiBase()}/m5t/v5/coreAdMetrics/conversions`).then((r) => r.json()).catch(() => null)
  ]);
  renderConnection(intg, conv);
  renderAccounts(acctJson);
  wireOffline(acctJson);
}
function renderConnection(intg, conv) {
  const host = document.getElementById("adacct-conn");
  if (!host) return;
  const p = PROVIDERS.google_ads;
  if (!intg || intg.denied) {
    host.innerHTML = emptyState("link_off", "Connection status is not available for your role.");
    return;
  }
  const conn = connFor(intg.providers, "google_ads");
  const status = statusOf(p, conn, !!intg.configured?.google_ads);
  const acct = conn?.external_account || {};
  const n = p.card.reachableCount(acct);
  let sub;
  if (status === "connected") sub = n ? `${n} reachable account${n === 1 ? "" : "s"}.` : "Connected.";
  else if (status === "broken") sub = p.card.brokenDesc;
  else if (status === "unavailable") sub = "Google Ads is being set up for this platform.";
  else sub = canManage() ? "Not connected yet. Connect from Settings to pull spend and clicks." : "Not connected yet.";
  const manage = canManage() && status !== "unavailable" ? `<a class="adacct-manage" href="#/settings/integrations/${p.urlSlug}"><span class="material-symbols-outlined" aria-hidden="true">${status === "idle" ? "link" : "settings"}</span>${status === "idle" ? "Connect" : "Manage"}</a>` : "";
  let counted = "";
  if (conv?.ok && conv.has_selection) {
    const named = (conv.actions || []).map((a) => a.name || a.id);
    const extra = (conv.selected_ids || []).length - named.length;
    counted = `
      <div class="adacct-chips">Counted in reporting:
        ${named.map((n2) => `<span class="adacct-chip">${esc(n2)}</span>`).join("")}
        ${extra > 0 ? `<span class="adacct-chip">${extra} more</span>` : ""}
      </div>`;
  }
  host.innerHTML = `
    <div class="adacct-conn">
      ${logoHTML(p)}
      <div class="adacct-conn__titles">
        <span class="adacct-conn__name">${esc(p.label)} ${statusPill(status, conn)}</span>
        <span class="adacct-conn__sub">${esc(sub)}</span>
      </div>
      <span class="adacct-conn__spacer"></span>
      ${manage}
    </div>
    ${counted}`;
}
function renderAccounts(json) {
  const host = document.getElementById("adacct-list");
  const count = document.getElementById("adacct-count");
  if (!host) return;
  if (!json || json.ok === false) {
    host.innerHTML = emptyState("error", "Could not load ad accounts. Please try again.");
    return;
  }
  const rows = (json.data || []).filter((a) => a.status !== "DELETED");
  const canConnect = !!json.canConnect;
  if (count) count.textContent = rows.length ? `${rows.length} account${rows.length === 1 ? "" : "s"}` : "";
  if (!rows.length) {
    host.innerHTML = emptyState("link_off", canConnect ? "No ad accounts associated yet." : "No ad accounts yet. Your agency connects these for you.") + (canConnect ? `<p class="adacct-note">Associate a client's Customer ID from the <a href="#/clients">Clients page</a>.</p>` : "");
    return;
  }
  host.innerHTML = `
    <div class="adacct-wrap">
      <table class="adacct-table">
        <thead><tr><th>Platform</th><th>Customer ID</th><th>Status</th></tr></thead>
        <tbody>${rows.map((a) => `
          <tr>
            <td>${esc(PROVIDER_LABELS[a.provider] || a.provider)}</td>
            <td class="adacct-cid">${esc(fmtCid(a.external_customer_id))}</td>
            <td><span class="m5t-badge" data-tone="${a.status === "ACTIVE" ? "success" : "warning"}">${esc(a.status === "ACTIVE" ? "Active" : a.status)}</span></td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    ${canConnect ? `<p class="adacct-note">Associations are managed per client from the <a href="#/clients">Clients page</a>.</p>` : ""}`;
  const tb = host.querySelector(".adacct-table tbody");
  if (tb) capList(tb, { rowSelector: "tr", noun: "accounts", controlHost: host.querySelector(".adacct-wrap") || host });
}
let uploadTargets = [];
let lastMatch = null;
function wireOffline(acctJson) {
  const card = document.getElementById("adacct-offline");
  if (!card) return;
  if (!acctJson?.canConnect) {
    card.style.display = "none";
    return;
  }
  card.style.display = "";
  document.getElementById("adacct-oc-dl")?.addEventListener("click", downloadExport);
  document.getElementById("adacct-oc-up")?.addEventListener("click", uploadExport);
  document.getElementById("adacct-mc-file")?.addEventListener("change", handleMatchFile);
  loadUploadTargets();
}
async function loadUploadTargets() {
  uploadTargets = [];
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/google_ads/conversion_actions`);
    const data = await res.json();
    if (!data.ok) return;
    const actions = data.data.actions || [];
    uploadTargets = actions.filter((a) => a.type === "UPLOAD_CLICKS" && (a.account_ids || []).length);
    if (!uploadTargets.length) {
      if (actions.length) {
        const out = document.getElementById("adacct-oc-result");
        if (out) out.textContent = "Direct upload needs an import type conversion action in Google Ads. The CSV works either way.";
      }
      return;
    }
    const select = document.getElementById("adacct-oc-target");
    if (select) {
      select.innerHTML = uploadTargets.map((a) => `<option value="${esc(a.id)}">${esc(a.name || a.id)}</option>`).join("");
    }
    document.getElementById("adacct-oc-target-wrap")?.style.setProperty("display", "");
    document.getElementById("adacct-oc-up")?.style.setProperty("display", "");
  } catch {
  }
}
function currentTarget() {
  const id = document.getElementById("adacct-oc-target")?.value;
  return uploadTargets.find((a) => a.id === id) || uploadTargets[0] || null;
}
async function postUpload(rows, out) {
  const target = currentTarget();
  if (!target) {
    if (out) out.textContent = "Pick an upload target first.";
    return;
  }
  const value = document.getElementById("adacct-oc-value")?.value;
  const val = value !== "" && value != null && Number.isFinite(Number(value)) ? Number(value) : null;
  if (out) out.textContent = `Uploading ${rows.length} conversion${rows.length === 1 ? "" : "s"}…`;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/google_ads/upload_conversions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_id: target.account_ids[0],
        conversion_action_id: target.id,
        rows: rows.map((r) => val != null ? { ...r, value: val } : r)
      })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "upload failed");
    const parts = [`${data.data.uploaded} uploaded to Google Ads.`];
    if (data.data.failed) parts.push(`${data.data.failed} rejected${data.data.errors?.[0] ? `: ${data.data.errors[0]}` : "."}`);
    if (out) out.textContent = parts.join(" ");
  } catch (e) {
    if (out) out.textContent = e.message === "upload failed" ? "Upload failed. Please try again." : `Upload failed: ${e.message}`;
  }
}
async function uploadExport() {
  const out = document.getElementById("adacct-oc-result");
  const days = Number(document.getElementById("adacct-oc-days")?.value) || 90;
  const statuses = [...document.querySelectorAll("#adacct-oc-statuses input:checked")].map((c) => c.value);
  if (!statuses.length) {
    if (out) out.textContent = "Pick at least one status.";
    return;
  }
  const ymd = (d) => d.toISOString().slice(0, 10);
  const to = ymd(/* @__PURE__ */ new Date());
  const from = ymd(new Date(Date.now() - (days - 1) * 864e5));
  const q = new URLSearchParams({ from, to, statuses: statuses.join(","), format: "json" });
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${q}`);
    const data = await res.json();
    if (!data.ok) throw new Error();
    if (!data.rows.length) {
      if (out) out.textContent = "No leads with a click id in that window.";
      return;
    }
    await postUpload(data.rows, out);
  } catch {
    if (out) out.textContent = "Upload failed. Please try again.";
  }
}
async function downloadExport() {
  const out = document.getElementById("adacct-oc-result");
  const days = Number(document.getElementById("adacct-oc-days")?.value) || 90;
  const statuses = [...document.querySelectorAll("#adacct-oc-statuses input:checked")].map((c) => c.value);
  if (!statuses.length) {
    if (out) out.textContent = "Pick at least one status.";
    return;
  }
  const name = document.getElementById("adacct-oc-name")?.value?.trim() || "M5M magnet lead";
  const value = document.getElementById("adacct-oc-value")?.value;
  const ymd = (d) => d.toISOString().slice(0, 10);
  const to = ymd(/* @__PURE__ */ new Date());
  const from = ymd(new Date(Date.now() - (days - 1) * 864e5));
  const q = new URLSearchParams({ from, to, statuses: statuses.join(","), name });
  if (value !== "" && value != null && Number.isFinite(Number(value))) q.set("value", value);
  if (out) out.textContent = "Building the export…";
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/coreAdMetrics/offline-conversions.csv?${q}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const csv = await res.text();
    const rowCount = Math.max(0, csv.trim().split("\n").length - 1);
    saveCsv(csv, `google-ads-conversions-${from}-to-${to}.csv`);
    if (out) out.textContent = rowCount ? `${rowCount} conversion${rowCount === 1 ? "" : "s"} in the file.` : "No leads with a click id in that window. The file has headers only.";
  } catch {
    if (out) out.textContent = "Export failed. Please try again.";
  }
}
async function handleMatchFile(e) {
  const out = document.getElementById("adacct-mc-result");
  const file = e.target.files?.[0];
  if (!file) return;
  const text = await file.text();
  const rows = parseBookingCsv(text);
  if (!rows.length) {
    if (out) out.textContent = "No usable rows found. The CSV needs an email or phone column.";
    return;
  }
  if (out) out.textContent = `Matching ${rows.length} row${rows.length === 1 ? "" : "s"}…`;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/coreAdMetrics/offline-conversions/match`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows })
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "match failed");
    const parts = [`${data.matched_count} of ${rows.length} rows matched a magnet lead with a click id.`];
    if (data.unmatched_count) parts.push(`${data.unmatched_count} had no matching lead.`);
    if (data.no_click_count) parts.push(`${data.no_click_count} matched a lead without a click id.`);
    if (!data.matched_count) {
      if (out) out.textContent = parts.join(" ");
      return;
    }
    const name = document.getElementById("adacct-oc-name")?.value?.trim() || "M5M magnet lead";
    const value = document.getElementById("adacct-oc-value")?.value;
    const val = value !== "" && value != null && Number.isFinite(Number(value)) ? Number(value) : "";
    const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [
      "Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency",
      ...data.matched.map((m) => [cell(m.gclid), cell(name), cell(m.time), val, ""].join(","))
    ].join("\r\n") + "\r\n";
    lastMatch = data.matched.map((m) => ({ gclid: m.gclid, time: m.time }));
    if (out) {
      out.innerHTML = "";
      const span = document.createElement("span");
      span.textContent = parts.join(" ") + " ";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "adacct-manage";
      btn.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">download</span>Download matched CSV';
      btn.addEventListener("click", () => saveCsv(csv, `google-ads-conversions-matched-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`));
      out.append(span, btn);
      if (uploadTargets.length) {
        const up = document.createElement("button");
        up.type = "button";
        up.className = "adacct-manage";
        up.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">cloud_upload</span>Upload to Google Ads';
        up.addEventListener("click", () => postUpload(lastMatch, out));
        out.append(" ", up);
      }
    }
  } catch {
    if (out) out.textContent = "Matching failed. Please try again.";
  } finally {
    e.target.value = "";
  }
}
function parseBookingCsv(text) {
  const lines = [];
  let row = [], cell = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') inQ = false;
      else cell += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      if (row.some((c) => c.trim() !== "")) lines.push(row);
      row = [];
    } else cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim() !== "")) lines.push(row);
  if (lines.length < 2) return [];
  const headers = lines[0].map((h) => h.trim().toLowerCase());
  const emailIdx = headers.findIndex((h) => /e-?mail/.test(h));
  const phoneIdx = headers.findIndex((h) => /phone|mobile|tel/.test(h));
  const dateIdx = headers.findIndex((h) => /date|time|booked|appointment|start/.test(h));
  if (emailIdx < 0 && phoneIdx < 0) return [];
  return lines.slice(1).map((cells) => ({
    email: emailIdx >= 0 ? (cells[emailIdx] || "").trim() : "",
    phone: phoneIdx >= 0 ? (cells[phoneIdx] || "").trim() : "",
    at: dateIdx >= 0 ? (cells[dateIdx] || "").trim() : ""
  })).filter((r) => r.email || r.phone).slice(0, 5e3);
}
function saveCsv(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4e3);
}
const adAccountsRoute = { render, init };
export {
  adAccountsRoute as default,
  init,
  parseBookingCsv,
  render
};
//# sourceMappingURL=ad-accounts-route-DWTW-XXQ.js.map
