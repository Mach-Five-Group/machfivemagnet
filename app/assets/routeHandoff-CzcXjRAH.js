const HANDOFF = Object.freeze({
  /** Template id chosen on /templates, claimed by /magnets to start that flow. */
  MAGNET_TEMPLATE: "magnet_template",
  /** Search text set from a dashboard drill-through, claimed by /leads. */
  LEADS_SEARCH: "leads_search",
  /**
   * A single YYYY-MM-DD day, set by clicking a column on the dashboard's trend
   * chart, claimed by /leads. UTC, matching how the chart's own buckets are keyed —
   * see the day filter in leads-route.
   */
  LEADS_DAY: "leads_day"
});
const pending = /* @__PURE__ */ new Map();
function setHandoff(key, value) {
  pending.set(key, value);
}
function takeHandoff(key) {
  if (!pending.has(key)) return null;
  const value = pending.get(key);
  pending.delete(key);
  return value;
}
function peekHandoff(key) {
  if (!pending.has(key)) return null;
  return pending.get(key);
}
export {
  HANDOFF as H,
  peekHandoff as p,
  setHandoff as s,
  takeHandoff as t
};
//# sourceMappingURL=routeHandoff-CzcXjRAH.js.map
