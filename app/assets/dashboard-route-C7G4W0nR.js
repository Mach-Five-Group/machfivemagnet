import { A as AuthController, c as capList } from "./index.js";
import { e as ensurePortfolioStyles, i as inPortfolio, c as clientsTableHTML, w as wireClientRows } from "./portfolio-view-D5t4pXOZ.js";
import { s as setHandoff, H as HANDOFF } from "./routeHandoff-CzcXjRAH.js";
import { s as statCard } from "./statCard-1WYYWdna.js";
const emptyState = (icon, msg) => `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmtNum = (n) => Number(n || 0).toLocaleString();
const leadName = (l) => [l.first_name, l.last_name].filter(Boolean).join(" ").trim() || l.email || "(no name)";
const leadInitials = (l) => (leadName(l).split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("") || "?").toUpperCase();
function leadWhen(l) {
  const tz = l.created?.created_tz;
  if (!tz) return "";
  try {
    return new Date(tz).toLocaleDateString([], { month: "short", day: "numeric" });
  } catch {
    return "";
  }
}
function relTime(iso) {
  try {
    const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1e3);
    if (s < 60) return "just now";
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
    return `${Math.floor(s / 86400)}d ago`;
  } catch {
    return "";
  }
}
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const s = document.createElement("style");
  s.id = "m5t-dash-recent-styles";
  s.textContent = `
    .page-shell .recent-lead { display:flex; align-items:center; gap:10px; padding:10px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); text-decoration:none; color:inherit; }
    .page-shell .recent-lead:last-child { border-bottom:0; }
    .page-shell .recent-lead:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .recent-lead__ava { flex:0 0 auto; width:34px; height:34px; border-radius:50%; display:grid; place-items:center; font-weight:700; font-size:0.74rem; color:#fff; background:var(--color-primary-600,#0072BA); }
    .page-shell .recent-lead__main { flex:1 1 auto; min-width:0; display:flex; flex-direction:column; }
    .page-shell .recent-lead__name { font-weight:600; font-size:0.9rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .recent-lead__sub { font-size:0.78rem; color:var(--color-text-subtle,#6C7C9A); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    /* Colors come from ui-kit .m5t-badge[data-s] (dark-mode aware); this rule is layout only. */
    .page-shell .recent-lead__badge { flex:0 0 auto; }
    .page-shell .recent-lead__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }

    .page-shell .dash-chart { width:100%; height:auto; display:block; }
    .page-shell text.dash-ax { font-size:11px; fill:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-legend { display:flex; gap:16px; margin:0 0 8px; font-size:0.8rem; font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-legend i { display:inline-block; width:11px; height:11px; border-radius:3px; margin-right:5px; vertical-align:middle; }
    .page-shell .dash-chart-wrap { position:relative; }
    .page-shell .dash-hit { cursor:pointer; fill:transparent; transition:fill .12s ease; }
    /* A day with no leads has nowhere to drill to, so it must not offer to. */
    .page-shell .dash-hit[data-leads="0"] { cursor:default; }
    .page-shell .dash-chart-tip__go { margin-top:5px; padding-top:5px; border-top:1px solid rgba(255,255,255,0.18); font-weight:700; color:var(--chart-tip-link,#7BB7FF); }
    [data-theme="dark"] .page-shell .dash-chart-tip { border:1px solid var(--color-border-strong,#3D6A8F); }

    /* Hover emphasis. The bars sit at 0.85 opacity at rest so the active one can go
       to full without changing colour — a brightness shift reads as "this one" more
       cleanly than a hue change, and keeps the legend swatch honest. */
    .page-shell .dash-bar { fill:var(--chart-1,#0072BA); opacity:0.85; transition:opacity .12s ease; }
    .page-shell .dash-bar--on { opacity:1; }
    .page-shell .dash-dot { fill:var(--chart-2,#009473); transition:r .12s ease, stroke-width .12s ease; }
    .page-shell .dash-line { stroke:var(--chart-2,#009473); }
    .page-shell line.dash-grid { stroke:var(--chart-grid,#EAF0F7); }
    .page-shell .dash-sw--1 { background:var(--chart-1,#0072BA); }
    .page-shell .dash-sw--2 { background:var(--chart-2,#009473); }
    /* White ring lifts the active dot off the trend line it sits on. */
    .page-shell .dash-dot--on { r:5.2; stroke:var(--color-bg,#fff); stroke-width:2; }
    .page-shell .dash-hit--on { fill:color-mix(in srgb, var(--chart-1,#0072BA) 6%, transparent); }
    .page-shell .dash-crosshair { stroke:var(--color-text-subtle,#6C7C9A); stroke-width:1; stroke-dasharray:3 3; opacity:0; transition:opacity .12s ease; }
    .page-shell .dash-crosshair--on { opacity:0.55; }
    html.ff-no-animations .page-shell .dash-bar,
    html.ff-no-animations .page-shell .dash-dot,
    html.ff-no-animations .page-shell .dash-hit,
    html.ff-no-animations .page-shell .dash-crosshair { transition:none; }
    @media (prefers-reduced-motion: reduce) {
      .page-shell .dash-bar, .page-shell .dash-dot,
      .page-shell .dash-hit, .page-shell .dash-crosshair { transition:none; }
    }
    .page-shell .dash-chart-tip { position:absolute; transform:translate(-50%,-100%) translateY(-8px); pointer-events:none; z-index:5; background:var(--chart-tip-bg,#0B1220); color:var(--chart-tip-text,#F2F7FB); padding:8px 10px; border-radius:8px; font-size:0.78rem; line-height:1.5; white-space:nowrap; box-shadow:var(--shadow-md,0 8px 24px rgba(11,18,32,0.18)); }
    .page-shell .dash-chart-tip[hidden] { display:none; }
    .page-shell .dash-chart-tip__date { font-weight:700; margin-bottom:3px; }
    .page-shell .dash-chart-tip__row { display:flex; align-items:center; gap:6px; }
    .page-shell .dash-chart-tip__row i { display:inline-block; width:8px; height:8px; border-radius:2px; flex:0 0 auto; }

    .page-shell .dash-funnel { display:flex; flex-direction:column; gap:12px; padding:6px 2px; }
    .page-shell .dash-funnel__row { display:flex; flex-direction:column; gap:4px; }
    .page-shell .dash-funnel__meta { display:flex; justify-content:space-between; font-size:0.8rem; }
    .page-shell .dash-funnel__label { font-weight:600; color:var(--color-text-muted,#4A5A78); }
    .page-shell .dash-funnel__val { font-weight:700; color:var(--color-text,#0B1220); }
    .page-shell .dash-funnel__track { height:12px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); overflow:hidden; }
    .page-shell .dash-funnel__bar { height:100%; border-radius:999px; background:var(--chart-1,#0072BA); transition:width .4s ease; }
    .page-shell .dash-funnel__bar--mid { background:var(--color-info,#0D9488); }
    .page-shell .dash-funnel__bar--end { background:var(--color-success,#009473); }
    .page-shell .dash-funnel__pct { font-size:0.72rem; color:var(--color-text-subtle,#6C7C9A); }

    .page-shell .dash-list { display:flex; flex-direction:column; }
    .page-shell .dash-list__row { display:flex; align-items:center; gap:10px; padding:9px 4px; border-bottom:1px solid var(--color-surface-2,#EAF0F7); font-size:0.86rem; }
    .page-shell .dash-list__row:last-child { border-bottom:0; }
    .page-shell .dash-list__ico { flex:0 0 auto; width:28px; height:28px; border-radius:8px; display:grid; place-items:center; background:var(--color-accent-soft,rgba(0,114,186,0.1)); color:var(--color-accent,#0072BA); }
    .page-shell .dash-list__ico .material-symbols-outlined { font-size:17px; }
    .page-shell .dash-list__main { flex:1 1 auto; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .page-shell .dash-list__num { flex:0 0 auto; font-weight:700; }
    .page-shell .dash-list__time { flex:0 0 auto; font-size:0.74rem; color:var(--color-text-subtle,#6C7C9A); }
    .page-shell .dash-list__mode { flex:0 0 auto; font-size:0.66rem; font-weight:700; letter-spacing:0.03em; padding:2px 7px; border-radius:999px; background:var(--color-surface-2,#EAF0F7); color:var(--color-text-muted,#4A5A78); }
    /* Drill-through rows: same row shape, but they announce themselves as links. */
    .page-shell .dash-list__row--link { text-decoration:none; color:inherit; border-radius:8px; transition:background .14s ease; }
    .page-shell .dash-list__row--link:hover { background:var(--color-surface,#F7FAFD); }
    .page-shell .dash-list__row--link:hover .dash-list__main { color:var(--color-primary-600,#0072BA); }
    .page-shell .dash-list__go { flex:0 0 auto; font-size:18px; color:var(--color-text-subtle,#6C7C9A); opacity:0; transition:opacity .14s ease; }
    .page-shell .dash-list__row--link:hover .dash-list__go, .page-shell .dash-list__row--link:focus-visible .dash-list__go { opacity:1; }
    /* Touch has no hover — keep the affordance visible there. */
    @media (hover: none) { .page-shell .dash-list__go { opacity:1; } }
    html.ff-no-animations .page-shell .dash-list__row--link, html.ff-no-animations .page-shell .dash-list__go { transition:none; }
    @media (prefers-reduced-motion: reduce) { .page-shell .dash-list__row--link, .page-shell .dash-list__go { transition:none; } }

    /* card-header is a two-child space-between; this keeps the Live pill and the
       view-all link together on the right instead of pushing the title off-centre. */
    .page-shell .card-header__aside { display:inline-flex; align-items:center; gap:14px; }

  `;
  document.head.appendChild(s);
  stylesInjected = true;
}
function recentLeadHTML(l) {
  return `<a class="recent-lead" href="#/leads">
    <span class="recent-lead__ava">${esc(leadInitials(l))}</span>
    <span class="recent-lead__main">
      <span class="recent-lead__name">${esc(leadName(l))}</span>
      <span class="recent-lead__sub">${esc(l.email || l.phone || "")}</span>
    </span>
    <span class="m5t-badge recent-lead__badge" data-s="${esc(l.status)}">${esc(l.status)}</span>
    <span class="recent-lead__time">${esc(leadWhen(l))}</span>
  </a>`;
}
const chartCard = (icon, title, bodyId, { wide = false, full = false, controls = false } = {}) => `
  <div class="dashboard-card${wide ? " chart-card-wide" : ""}${full ? " chart-card-full" : ""}">
    <div class="card-header">
      <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span> ${title}</h2>
      ${controls ? `<div class="chart-controls" id="dash-periods">
        <button class="chart-period-btn" type="button" data-days="7">7 Days</button>
        <button class="chart-period-btn active" type="button" data-days="30">30 Days</button>
      </div>` : ""}
    </div>
    <div class="card-body" id="${bodyId}">${emptyState("hourglass_empty", "Loading…")}</div>
  </div>`;
let periodDays = 30;
function render() {
  ensureStyles();
  ensurePortfolioStyles();
  const portfolio = inPortfolio();
  return `
    <div class="page-shell" data-section="home">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">${portfolio ? "Portfolio" : "Dashboard"}</h1>
          ${portfolio ? "" : '<p class="page-description">Your magnets, conversations, and lead performance at a glance.</p>'}
        </div>
      </div>

      ${portfolio ? `
      <div class="dashboard-card dashboard-card--lead">
        <div class="card-header">
          <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">groups</span> Clients</h2>
          <a class="view-all-link" href="#/clients">Manage clients →</a>
        </div>
        <div class="card-body" id="dash-portfolio">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>` : ""}

      <div class="stats-grid">
        ${statCard({ icon: "widgets", label: "Active Magnets", valueId: "stat-active-magnets", subId: "stat-active-magnets-sub", sub: "Loading…", href: "#/magnets" })}
        ${statCard({ icon: "ads_click", label: "Magnet Opens", valueId: "stat-opens", subId: "stat-opens-sub", sub: "Loading…", href: "#/analytics" })}
        ${statCard({ icon: "person_add", label: "Leads Captured", valueId: "stat-leads", subId: "stat-leads-sub", sub: "Loading…", href: "#/leads", trendId: "stat-leads-trend" })}
        ${statCard({ icon: "check_circle", label: "Completion Rate", valueId: "stat-completion", subId: "stat-completion-sub", sub: "Loading…", href: "#/analytics" })}
      </div>

      <div class="charts-section">
        ${chartCard("show_chart", "Opens & Leads", "dash-trend", { wide: true, controls: true })}
        <div class="charts-grid">
          ${chartCard("filter_alt", "Completion Funnel", "dash-funnel")}
          ${chartCard("source", "Top Campaigns", "dash-campaigns")}
          ${chartCard("touch_app", "CTA Usage", "dash-routes", { full: true })}
        </div>
      </div>

      <div class="content-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Recent Interactions</h2>
            <span class="card-header__aside">
              <span class="live-indicator"><span class="pulse-dot"></span> Live</span>
              <a class="view-all-link" href="#/conversations">View all →</a>
            </span>
          </div>
          <div class="card-body" id="dash-interactions">
            ${emptyState("sensors", "Loading…")}
          </div>
        </div>
        <div class="dashboard-card">
          <div class="card-header">
            <h2 class="card-title"><span class="material-symbols-outlined" aria-hidden="true">group</span> Recent Leads</h2>
            <a class="view-all-link" href="#/leads">View all →</a>
          </div>
          <div class="card-body" id="recent-leads-body">
            ${emptyState("hourglass_empty", "Loading leads…")}
          </div>
        </div>
      </div>
    </div>`;
}
async function init() {
  const base = AuthController.getConfig?.().BASE_URL || "";
  document.getElementById("dash-periods")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-days]");
    if (!btn) return;
    periodDays = Number(btn.dataset.days) || 30;
    document.querySelectorAll("#dash-periods .chart-period-btn").forEach((b) => b.classList.toggle("active", Number(b.dataset.days) === periodDays));
    loadStats(base);
  });
  document.getElementById("dash-campaigns")?.addEventListener("click", (e) => {
    const row = e.target.closest("[data-campaign]");
    if (!row) return;
    setHandoff(HANDOFF.LEADS_SEARCH, row.dataset.campaign);
  });
  await Promise.all([loadStats(base), loadRecentLeads(base)]);
}
const setText = (id, v) => {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
};
const setHTML = (id, v) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = v;
};
const ymd = (d) => d.toISOString().slice(0, 10);
const canHover = () => typeof window.matchMedia === "function" ? window.matchMedia("(hover: hover)").matches : true;
async function loadStats(base) {
  const now = /* @__PURE__ */ new Date();
  const from = ymd(new Date(now.getTime() - (periodDays - 1) * 864e5));
  const to = ymd(now);
  const portfolio = inPortfolio();
  let s;
  try {
    const groupBy = portfolio ? "&group_by=owner" : "";
    const res = await fetch(`${base}/m5t/v5/dashboard/stats?from=${from}&to=${to}${groupBy}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    s = await res.json();
    if (!s.ok) throw new Error("stats not ok");
  } catch (err) {
    console.warn("[dashboard] stats fetch failed:", err);
    ["stat-active-magnets", "stat-opens", "stat-leads", "stat-completion"].forEach((id) => setText(id, "—"));
    ["stat-active-magnets-sub", "stat-opens-sub", "stat-leads-sub", "stat-completion-sub"].forEach((id) => setText(id, "Unavailable"));
    const staleTrend = document.getElementById("stat-leads-trend");
    if (staleTrend) {
      staleTrend.className = "stat-trend";
      staleTrend.innerHTML = "";
    }
    ["dash-trend", "dash-funnel", "dash-campaigns", "dash-routes", "dash-interactions", "dash-portfolio"].forEach((id) => setHTML(id, emptyState("error", "Could not load. Please refresh.")));
    return;
  }
  if (portfolio) renderPortfolio(s.by_owner || []);
  setText("stat-active-magnets", fmtNum(s.magnets.active));
  setText("stat-active-magnets-sub", s.magnets.total > s.magnets.active ? `${fmtNum(s.magnets.total - s.magnets.active)} paused` : s.magnets.active ? "All running" : "No magnets yet");
  const f = s.funnel || {};
  setText("stat-opens", f.opens ? fmtNum(f.opens) : "—");
  setText("stat-opens-sub", f.opens ? f.engagement_rate != null ? `${f.engagement_rate}% engage` : `${fmtNum(f.engaged)} engaged` : "No opens in this range yet");
  const L = s.leads || {};
  setText("stat-leads", fmtNum(L.total));
  const delta = (L.this_week || 0) - (L.prev_week || 0);
  setText("stat-leads-sub", L.total ? `${fmtNum(L.this_week)} this week` : "No leads yet");
  const trendEl = document.getElementById("stat-leads-trend");
  if (trendEl) {
    if ((L.prev_week || 0) > 0) {
      const dir = delta > 0 ? "positive" : delta < 0 ? "negative" : "neutral";
      const ico = delta > 0 ? "trending_up" : delta < 0 ? "trending_down" : "trending_flat";
      trendEl.className = `stat-trend ${dir}`;
      trendEl.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">${ico}</span>${delta > 0 ? "+" : ""}${fmtNum(delta)}`;
    } else {
      trendEl.className = "stat-trend";
      trendEl.innerHTML = "";
    }
  }
  setText("stat-completion", f.completion_rate != null ? `${f.completion_rate}%` : "—");
  setText("stat-completion-sub", f.opens ? `${fmtNum(f.completions)} completed of ${fmtNum(f.opens)} opens` : "Appears once magnets get opened");
  const days = s.by_day || [];
  const anyTrend = days.some((d) => d.opens || d.leads);
  setHTML("dash-trend", anyTrend ? svgTrendChart(days) : emptyState("show_chart", "No activity in this range yet. Opens and leads chart here as visitors engage your magnets."));
  if (anyTrend) wireTrendTooltip(days);
  setHTML("dash-funnel", f.opens ? funnelHTML(f) : emptyState("filter_alt", "The funnel fills in once your magnets record opens."));
  const camps = s.top_campaigns || [];
  setHTML("dash-campaigns", camps.length ? `<div class="dash-list">${camps.map((c) => `
        <a class="dash-list__row dash-list__row--link" href="#/leads" data-campaign="${esc(c.campaign)}" title="Show the leads from ${esc(c.campaign)}">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">campaign</span></span>
          <span class="dash-list__main">${esc(c.campaign)}</span>
          <span class="dash-list__num">${fmtNum(c.leads)}</span>
          <span class="dash-list__go material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </a>`).join("")}</div>` : emptyState("source", "No tagged campaigns yet. Leads arriving with ?utm_campaign=… rank here."));
  {
    const el = document.getElementById("dash-campaigns");
    const list = el?.querySelector(".dash-list");
    if (list) capList(list, { rowSelector: ".dash-list__row", noun: "campaigns" });
  }
  const ROUTE_META = { book: ["event", "Book"], chat: ["chat", "Chat"], call: ["phone_in_talk", "Call"], email: ["mail", "Email"], support: ["support_agent", "Support"] };
  const routes = Object.entries(f.routes || {}).sort((a, b) => b[1] - a[1]);
  const maxClicks = routes.length ? routes[0][1] : 0;
  setHTML("dash-routes", routes.length ? `<div class="dash-funnel">${routes.map(([k, n]) => {
    const [icon, label] = ROUTE_META[k] || ["touch_app", k];
    return `<div class="dash-funnel__row">
          <div class="dash-funnel__meta"><span class="dash-funnel__label"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px">${icon}</span> ${esc(label)}</span><span class="dash-funnel__val">${fmtNum(n)}</span></div>
          <div class="dash-funnel__track"><div class="dash-funnel__bar" style="width:${maxClicks ? Math.max(4, Math.round(n / maxClicks * 100)) : 0}%"></div></div>
        </div>`;
  }).join("")}</div>` : emptyState("touch_app", "CTA taps (Book, Chat, Call, Support) rank here once visitors use the action bar."));
  const EVENT_META = {
    open: ["visibility", "Magnet opened"],
    engage: ["touch_app", "Visitor engaged"],
    route: ["alt_route", "Picked a channel"],
    complete: ["check_circle", "Completed: lead captured"]
  };
  const events = s.recent_events || [];
  setHTML("dash-interactions", events.length ? `<div class="dash-list">${events.map((ev) => {
    const [icon, label] = EVENT_META[ev.event] || ["sensors", ev.event];
    const detail = ev.event === "route" && ev.detail ? ` · ${esc(ev.detail)}` : "";
    return `<div class="dash-list__row">
          <span class="dash-list__ico"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span></span>
          <span class="dash-list__main">${label}${detail}</span>
          ${ev.display_mode ? `<span class="dash-list__mode">${esc(ev.display_mode)}</span>` : ""}
          <span class="dash-list__time">${esc(relTime(ev.at))}</span>
        </div>`;
  }).join("")}</div>` : emptyState("sensors", "No interactions yet. They'll stream in as visitors engage your magnets."));
  {
    const el = document.getElementById("dash-interactions");
    const list = el?.querySelector(".dash-list");
    if (list) capList(list, { rowSelector: ".dash-list__row", noun: "interactions" });
  }
}
function renderPortfolio(rows) {
  const el = document.getElementById("dash-portfolio");
  if (!el) return;
  if (!rows.length) {
    el.innerHTML = emptyState("groups", "No client orgs yet. Create one under Clients to see its numbers here.");
    return;
  }
  const anyAds = rows.some((r) => r.ad);
  const deltaHTML = (r) => {
    const d = (r.leads.this_week || 0) - (r.leads.prev_week || 0);
    if (!r.leads.this_week && !r.leads.prev_week) return "";
    const cls = d >= 0 ? "dc-delta-up" : "dc-delta-down";
    return ` <span class="${cls}">(${d >= 0 ? "+" : ""}${fmtNum(d)})</span>`;
  };
  const columns = [
    { h: "Magnets", td: (r) => `${fmtNum(r.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${fmtNum(r.magnets.total)}</span>` },
    { h: "Leads · wk", td: (r) => `${fmtNum(r.leads.this_week)}${deltaHTML(r)}` },
    { h: "Leads · total", td: (r) => fmtNum(r.leads.total) },
    { h: "Opens", td: (r) => fmtNum(r.opens) },
    { h: "Compl.", td: (r) => r.completion_rate != null ? `${r.completion_rate}%` : "—" },
    // A/B activity: computed server-side per org, previously never rendered.
    ...rows.some((r) => r.ab_tests?.running || r.ab_tests?.completed) ? [
      { h: "A/B", td: (r) => r.ab_tests?.running ? `${fmtNum(r.ab_tests.running)} <span class="dc-sub">running</span>` : r.ab_tests?.completed ? `${fmtNum(r.ab_tests.completed)} <span class="dc-sub">done</span>` : "—" }
    ] : [],
    ...rows.some((r) => r.booked) ? [
      { h: "Booked", td: (r) => r.booked ? fmtNum(r.booked) : "—" }
    ] : [],
    ...rows.some((r) => r.called) ? [
      { h: "Called", td: (r) => r.called ? fmtNum(r.called) : "—" }
    ] : [],
    ...anyAds ? [
      { h: "Spend", td: (r) => r.ad ? `$${fmtNum(r.ad.spend)}` : "—" },
      { h: "CPL", td: (r) => r.ad?.cost_per_lead != null ? `$${fmtNum(r.ad.cost_per_lead)}` : "—" }
    ] : []
  ];
  el.innerHTML = clientsTableHTML(rows, columns);
  wireClientRows(el);
}
function funnelHTML(f) {
  const stages = [
    ["Opened", f.opens, ""],
    ["Engaged", f.engaged, " dash-funnel__bar--mid"],
    ["Completed", f.completions, " dash-funnel__bar--end"],
    // Booked/Called appear only once bookings or tracked calls exist — no dead
    // stages for orgs that never connect those integrations.
    ...f.booked ? [["Booked", f.booked, " dash-funnel__bar--end"]] : [],
    ...f.called ? [["Called", f.called, " dash-funnel__bar--end"]] : []
  ];
  const max = Math.max(1, f.opens || 0);
  const pct = (n) => Math.min(100, Math.round((n || 0) / max * 100));
  return `<div class="dash-funnel">${stages.map(([label, n, cls]) => `
    <div class="dash-funnel__row">
      <div class="dash-funnel__meta">
        <span class="dash-funnel__label">${label}</span>
        <span class="dash-funnel__val">${fmtNum(n)} <span class="dash-funnel__pct">${pct(n)}%</span></span>
      </div>
      <div class="dash-funnel__track"><div class="dash-funnel__bar${cls}" style="width:${Math.max(2, pct(n))}%"></div></div>
    </div>`).join("")}</div>`;
}
async function loadRecentLeads(base) {
  const listEl = document.getElementById("recent-leads-body");
  if (!listEl) return;
  try {
    const res = await fetch(`${base}/m5t/v5/m5mLead?limit=5`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const leads = (Array.isArray(json?.data) ? json.data : []).filter((l) => !["DELETED", "ARCHIVED"].includes(l.status));
    listEl.innerHTML = leads.length ? leads.slice(0, 5).map(recentLeadHTML).join("") : emptyState("contacts", "No leads captured yet. Publish a magnet to start collecting.");
  } catch (err) {
    console.warn("[dashboard] Leads fetch failed:", err);
    listEl.innerHTML = emptyState("error", "Could not load recent leads.");
  }
}
function niceMax(v) {
  if (v <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}
const fmtAxis = (v) => {
  v = Math.round(v);
  return v >= 1e3 ? (v / 1e3).toFixed(v % 1e3 === 0 ? 0 : 1) + "k" : String(v);
};
function svgTrendChart(rows) {
  const W = 840, H = 300, mr = 46, ml = 46, mt = 18, mb = 34;
  const x0 = ml, x1 = W - mr, y0 = mt, y1 = H - mb;
  const plotH = y1 - y0, plotW = x1 - x0;
  const n = rows.length || 1;
  const maxOpens = niceMax(Math.max(1, ...rows.map((r) => r.opens || 0)));
  const maxLeads = niceMax(Math.max(1, ...rows.map((r) => r.leads || 0)));
  const band = plotW / n;
  const bw = Math.min(22, band * 0.55);
  const cx = (i) => x0 + band * (i + 0.5);
  const openY = (v) => y1 - v / maxOpens * plotH;
  const leadY = (v) => y1 - v / maxLeads * plotH;
  const grid = [0, 0.5, 1].map((t) => {
    const y = y1 - t * plotH;
    return `<line x1="${x0}" y1="${y.toFixed(1)}" x2="${x1}" y2="${y.toFixed(1)}" class="dash-grid"/><text x="${x0 - 8}" y="${(y + 3.5).toFixed(1)}" text-anchor="end" class="dash-ax">${fmtAxis(maxOpens * t)}</text><text x="${x1 + 8}" y="${(y + 3.5).toFixed(1)}" text-anchor="start" class="dash-ax">${fmtAxis(maxLeads * t)}</text>`;
  }).join("");
  const bars = rows.map((r, i) => {
    const y = openY(r.opens || 0);
    return `<rect class="dash-bar" data-i="${i}" x="${(cx(i) - bw / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(0, y1 - y).toFixed(1)}" rx="3"/>`;
  }).join("");
  const pts = rows.map((r, i) => `${cx(i).toFixed(1)},${leadY(r.leads || 0).toFixed(1)}`).join(" ");
  const line = n > 1 ? `<polyline class="dash-line" points="${pts}" fill="none" stroke-width="2.5"/>` : "";
  const dots = rows.map((r, i) => `<circle class="dash-dot" data-i="${i}" cx="${cx(i).toFixed(1)}" cy="${leadY(r.leads || 0).toFixed(1)}" r="3.2"/>`).join("");
  const crosshair = `<line class="dash-crosshair" x1="0" y1="${y0}" x2="0" y2="${y1}" pointer-events="none"/>`;
  const step = Math.max(1, Math.ceil(n / 6));
  const xlabels = rows.map((r, i) => i % step === 0 || i === n - 1 ? `<text x="${cx(i).toFixed(1)}" y="${H - 12}" text-anchor="middle" class="dash-ax">${r.date.slice(5)}</text>` : "").join("");
  const hits = rows.map(
    (r, i) => `<rect class="dash-hit" data-i="${i}" data-day="${esc(r.date)}" data-leads="${Number(r.leads || 0)}" x="${(x0 + band * i).toFixed(1)}" y="${y0}" width="${band.toFixed(1)}" height="${plotH.toFixed(1)}" fill="transparent"/>`
  ).join("");
  return `
    <div class="dash-legend">
      <span><i class="dash-sw dash-sw--1"></i>Magnet Opens</span>
      <span><i class="dash-sw dash-sw--2"></i>Leads</span>
    </div>
    <div class="dash-chart-wrap">
      <svg class="dash-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Magnet opens versus leads over time">
        ${grid}${crosshair}${bars}${line}${dots}${xlabels}${hits}
      </svg>
      <div class="dash-chart-tip" role="status" hidden></div>
    </div>`;
}
function wireTrendTooltip(days) {
  const wrap = document.querySelector("#dash-trend .dash-chart-wrap");
  const tip = document.querySelector("#dash-trend .dash-chart-tip");
  if (!wrap || !tip) return;
  const dateLabel = (iso) => {
    try {
      return (/* @__PURE__ */ new Date(`${iso}T00:00:00`)).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return iso;
    }
  };
  const crosshair = wrap.querySelector(".dash-crosshair");
  const clearMarks = () => {
    wrap.querySelectorAll(".dash-bar--on, .dash-dot--on, .dash-hit--on").forEach((el) => el.classList.remove("dash-bar--on", "dash-dot--on", "dash-hit--on"));
    if (crosshair) crosshair.classList.remove("dash-crosshair--on");
  };
  const markActive = (i, hitEl) => {
    clearMarks();
    wrap.querySelector(`.dash-bar[data-i="${i}"]`)?.classList.add("dash-bar--on");
    wrap.querySelector(`.dash-dot[data-i="${i}"]`)?.classList.add("dash-dot--on");
    hitEl.classList.add("dash-hit--on");
    if (crosshair) {
      const bx = Number(hitEl.getAttribute("x")) + Number(hitEl.getAttribute("width")) / 2;
      crosshair.setAttribute("x1", bx);
      crosshair.setAttribute("x2", bx);
      crosshair.classList.add("dash-crosshair--on");
    }
  };
  const show = (i, hitEl) => {
    const d = days[i];
    if (!d) return;
    tip.innerHTML = `
      <div class="dash-chart-tip__date">${dateLabel(d.date)}</div>
      <div class="dash-chart-tip__row"><i class="dash-sw dash-sw--1"></i>${fmtNum(d.opens || 0)} opens</div>
      <div class="dash-chart-tip__row"><i class="dash-sw dash-sw--2"></i>${fmtNum(d.leads || 0)} leads</div>
      ${Number(d.leads || 0) > 0 ? '<div class="dash-chart-tip__go">Click to see them →</div>' : ""}`;
    const hitRect = hitEl.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    tip.style.left = `${hitRect.left - wrapRect.left + hitRect.width / 2}px`;
    tip.style.top = `${hitRect.top - wrapRect.top}px`;
    tip.hidden = false;
    markActive(i, hitEl);
  };
  const hide = () => {
    tip.hidden = true;
    clearMarks();
  };
  wrap.querySelectorAll(".dash-hit").forEach((el) => {
    const i = Number(el.dataset.i);
    el.addEventListener("mouseenter", () => show(i, el));
    el.addEventListener("mousemove", () => show(i, el));
    el.addEventListener("mouseleave", hide);
    el.addEventListener("click", () => {
      const wasActive = el.classList.contains("dash-hit--on");
      show(i, el);
      const leads = Number(el.dataset.leads || 0);
      if (!leads) return;
      if (!canHover() && !wasActive) return;
      setHandoff(HANDOFF.LEADS_DAY, el.dataset.day);
      window.location.hash = "#/leads";
    });
  });
}
const dashboardRoute = { render, init };
export {
  dashboardRoute as default,
  init,
  render,
  statCard,
  svgTrendChart,
  wireTrendTooltip
};
//# sourceMappingURL=dashboard-route-C7G4W0nR.js.map
