import { S as STEP_TYPES, A as AuthController, L as LEAD_CAPTURE_FIELDS, P as PubSub, b as AppBroadcast, c as capList } from "./index.js";
import { p as peekPendingTemplate, t as takePendingTemplate, o as openPreviewModal, a as openTemplateGallery, m as mountPreviewPane, b as magnetToPackage } from "./magnet-templates-D_rF6WkH.js";
import { i as inPortfolio, a as initPicker, p as pickerPageHTML } from "./portfolio-view-D5t4pXOZ.js";
import "./routeHandoff-CzcXjRAH.js";
const ESC$1 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc$1 = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC$1[c]);
const apiBase$1 = () => AuthController.getConfig?.().BASE_URL || "";
const TYPE_ICON_COLOR = {
  single_select: { icon: "quiz", color: "#0072BA", darkColor: "#38BDF8" },
  multi_select: { icon: "checklist", color: "#0E6BA8", darkColor: "#22D3EE" },
  scheduler: { icon: "event", color: "#915E8B", darkColor: "#E879F9" },
  text: { icon: "short_text", color: "#5B54C6", darkColor: "#A78BFA" },
  email: { icon: "mail", color: "#0E8F86", darkColor: "#2DD4BF" },
  phone: { icon: "call", color: "#2E8B57", darkColor: "#4ADE80" },
  message: { icon: "chat", color: "#B4791F", darkColor: "#FBBF24" }
};
const TYPE_META = {};
STEP_TYPES.forEach((t) => {
  TYPE_META[t.value] = { label: t.label, ...TYPE_ICON_COLOR[t.value] || { icon: "quiz", color: "#0072BA", darkColor: "#38BDF8" } };
});
const TYPE_ORDER = STEP_TYPES.map((t) => t.value);
const ROUTE_LABEL = { chat: "Chat / default", book: "Book (scheduler)", support: "Support (intake)" };
const meta = (t) => {
  const m = TYPE_META[t] || TYPE_META.single_select;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  return isDark ? { ...m, color: m.darkColor } : m;
};
const needsOptions = (v) => v === "single_select" || v === "multi_select";
const needsField = (v) => v !== "message";
const needsSchedule = (v) => v === "scheduler";
const canBeTerminal = (v) => v === "message";
const defaultFieldFor = (v) => v === "email" ? "email" : v === "phone" ? "phone" : "";
const defaultSchedule = () => ({ meeting_label: "", start: "09:00", end: "17:00", mins: 30, days: 14 });
const SCHEDULE_KEYS = ["meeting_label", "start", "end", "mins", "days"];
const TERMINAL_KEYS = ["terminal", "cta"];
function configWithout(cfg, dropKeys) {
  const out = {};
  Object.keys(cfg && typeof cfg === "object" ? cfg : {}).forEach((k) => {
    if (!dropKeys.includes(k)) out[k] = cfg[k];
  });
  return Object.keys(out).length ? out : null;
}
function configWithoutSchedule(cfg) {
  return configWithout(cfg, SCHEDULE_KEYS);
}
const OPTION_ICONS = [
  ["", "No icon"],
  ["event", "Calendar"],
  ["schedule", "Clock"],
  ["mail", "Email"],
  ["sms", "Text"],
  ["phone", "Phone"],
  ["chat", "Chat"],
  ["description", "Document"],
  ["help", "Question"],
  ["place", "Location"],
  ["person", "Person"],
  ["bolt", "Quick"],
  ["check_circle", "Check"],
  ["star", "Star"],
  ["home", "Home"],
  ["build", "Service"]
];
function hexToRgba(hex, a) {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(hex || "").trim());
  if (!m) return `rgba(0,114,186,${a})`;
  return `rgba(${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(m[3], 16)},${a})`;
}
let stylesInjected$1 = false;
function ensureStyles$1() {
  if (stylesInjected$1) return;
  const style = document.createElement("style");
  style.id = "m5t-flow-styles";
  style.textContent = `
    .mag-modal.mag-flow { width: min(680px, 94vw); }
    .flow-routes { display: flex; align-items: center; gap: 10px; margin: 4px 0 14px; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB); }
    .flow-routes__lbl { font-size: 0.78rem; font-weight: 700; color: var(--color-text-muted, #4A5A78); }
    .flow-routes select { flex: 1 1 auto; }
    .flow-canvas { padding: 2px 0; }
    .flow-start { display: flex; align-items: center; gap: 7px; justify-content: center; font-size: 0.74rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .flow-start .material-symbols-outlined { font-size: 17px; }
    .flow-conn { display: flex; flex-direction: column; align-items: center; }
    .flow-conn__line { width: 2px; height: 12px; background: var(--color-border, #D4DCE8); }
    .flow-conn .material-symbols-outlined { font-size: 16px; color: var(--color-text-subtle, #6C7C9A); margin-top: -5px; }

    .flow-node { position: relative; border: 1px solid var(--color-border, #D4DCE8); border-left: 3px solid var(--nc, #0072BA); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); box-shadow: 0 1px 2px rgba(11,18,32,0.04); transition: box-shadow .12s, border-color .12s, opacity .12s; }
    .flow-node[draggable="true"] { cursor: grab; }
    .flow-node[draggable="true"]:hover { box-shadow: 0 3px 12px rgba(11,18,32,0.09); }
    .flow-node.dragging { opacity: 0.4; }
    .flow-node--open { box-shadow: 0 8px 26px rgba(11,18,32,0.14); }
    .flow-node.drop-before::before, .flow-node.drop-after::after { content: ""; position: absolute; left: 8px; right: 8px; height: 3px; border-radius: 3px; background: var(--color-primary-600, #0072BA); }
    .flow-node.drop-before::before { top: -8px; }
    .flow-node.drop-after::after { bottom: -8px; }
    .flow-node__hd { display: flex; align-items: center; gap: 8px; padding: 9px 11px; }
    .flow-node__grip { flex: 0 0 auto; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__grip .material-symbols-outlined { font-size: 18px; }
    .flow-node__ico { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; background: var(--nct, rgba(0,114,186,0.14)); color: var(--nc, #0072BA); }
    .flow-node__ico .material-symbols-outlined { font-size: 17px; }
    .flow-node__type { font-weight: 700; font-size: 0.82rem; color: var(--nc, #0072BA); }
    .flow-node__n { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__tools { margin-left: auto; display: flex; gap: 3px; }
    .flow-node__tools button { appearance: none; border: 1px solid transparent; background: transparent; cursor: pointer; width: 28px; height: 28px; border-radius: 7px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .flow-node__tools button:hover:not(:disabled) { background: var(--color-surface, #F4F7FB); color: var(--color-text, #0B1220); }
    .flow-node__tools button:disabled { opacity: 0.35; cursor: default; }
    .flow-node__tools button .material-symbols-outlined { font-size: 17px; }
    .flow-node__preview { padding: 0 12px 12px 46px; cursor: pointer; }
    .flow-node__prompt { font-size: 0.86rem; color: var(--color-text, #0B1220); overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
    .flow-node__prompt.is-empty { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .flow-node__meta { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin-top: 5px; }
    .flow-node__meta b { color: var(--color-text-muted, #4A5A78); font-weight: 700; }
    .flow-node__chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 7px; }
    .flow-node__chip { font-size: 0.72rem; font-weight: 600; padding: 3px 9px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .flow-node__body { padding: 4px 14px 14px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .flow-node__body .mag-modal__label:first-child { margin-top: 8px; }
    .flow-sub { font-weight: 400; font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    /* "optional" flips to "required" once either half of the CTA pair is filled. */
    .flow-sub--req { color: var(--color-danger, #DD4124); font-weight: 600; }
    .flow-cta-warn { margin: 6px 0 0; font-size: 0.76rem; font-weight: 600; color: var(--color-danger, #DD4124); }
    .flow-cta-warn[hidden] { display: none; }
    .flow-f-invalid { border-color: var(--color-danger, #DD4124) !important; }
    .flow-f-invalid:focus { outline-color: var(--color-danger, #DD4124); }
    /* The save error sits ABOVE the canvas, not after the palette where it used to —
       a validation nobody scrolls to is a validation nobody sees. */
    #flow-error:not(:empty) { margin: 0 0 12px; padding: 9px 12px; border-radius: var(--radius-md, 10px); background: var(--color-danger-soft, #FDECEA); border: 1px solid var(--color-danger, #DD4124); font-weight: 600; }
    .flow-opts { display: flex; flex-direction: column; gap: 6px; }
    .flow-opt { display: flex; gap: 6px; align-items: center; }
    .flow-opt .flow-o-label { flex: 1 1 auto; min-width: 0; }
    .flow-opt .flow-o-icon { flex: 0 0 auto; width: 118px; }
    .flow-opt__del { appearance: none; border: 0; background: transparent; cursor: pointer; color: var(--color-text-subtle, #6C7C9A); width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; flex: 0 0 auto; }
    .flow-opt__del:hover:not(:disabled) { color: var(--color-danger, #DD4124); background: var(--color-surface-2, #EAF0F7); }
    .flow-opt__del:disabled { opacity: 0.35; cursor: default; }
    .mag-flow__addopt { appearance: none; border: 1px dashed var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.86rem; font-weight: 600; color: var(--color-accent, #0072BA); padding: 9px 14px; border-radius: var(--radius-md, 10px); display: inline-flex; align-items: center; gap: 6px; margin-top: 6px; }
    .mag-flow__addopt:hover { background: var(--color-accent-soft, rgba(0,114,186,0.08)); }
    .mag-flow__addopt .material-symbols-outlined { font-size: 18px; }

    .flow-palette { margin-top: 16px; border-top: 1px dashed var(--color-border, #D4DCE8); padding-top: 14px; }
    .flow-palette__t { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 8px; }
    .flow-palette__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(128px, 1fr)); gap: 8px; }
    .flow-palette__chip { display: flex; align-items: center; gap: 7px; padding: 9px 11px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); cursor: pointer; font: inherit; font-size: 0.82rem; font-weight: 600; color: var(--color-text, #0B1220); text-align: left; }
    .flow-palette__chip:hover { border-color: var(--pc, #0072BA); background: var(--color-surface, #F4F7FB); }
    .flow-palette__chip .material-symbols-outlined { font-size: 18px; color: var(--pc, #0072BA); }
  `;
  document.head.appendChild(style);
  stylesInjected$1 = true;
}
let stepsModel = [];
let openUid = null;
let uidSeq = 0;
let dragUid = null;
let dropInfo = null;
let currentRoute = "chat";
let flowRouteModels = {};
let flowRouteKeys = [];
let flowMagnet = null;
let flowOnDirty = null;
let flowLoadedModifiedTz = "";
const uid = () => "f" + ++uidSeq;
function blankStep(type = "single_select") {
  return {
    _uid: uid(),
    id: "",
    // assigned at save (stable numbering; preserves goto targets)
    step_type: type,
    step_prompts: [""],
    step_options: needsOptions(type) ? [{ label: "", goto: "", icon: "" }, { label: "", goto: "", icon: "" }] : [],
    step_columns: defaultFieldFor(type) ? [defaultFieldFor(type)] : [],
    step_description: "",
    step_config: needsSchedule(type) ? defaultSchedule() : null
  };
}
function modelFromSteps(src) {
  return (Array.isArray(src) ? src : []).map((s) => ({
    _uid: uid(),
    id: s.id != null ? String(s.id) : "",
    step_type: TYPE_META[s.step_type] ? s.step_type : "single_select",
    step_prompts: Array.isArray(s.step_prompts) ? s.step_prompts.map(String) : [],
    step_options: (Array.isArray(s.step_options) ? s.step_options : []).map((o) => ({
      label: o && o.label != null ? String(o.label) : "",
      goto: o && o.goto != null ? String(o.goto) : "",
      icon: o && o.icon != null ? String(o.icon) : ""
    })),
    step_columns: Array.isArray(s.step_columns) ? s.step_columns.map(String) : [],
    step_description: s.step_description != null ? String(s.step_description) : "",
    // Scheduler steps get the defaults merged underneath whatever was authored; every
    // other type keeps its bag verbatim. (Merging defaultSchedule() in unconditionally
    // stamped five dead scheduler keys onto e.g. a message step's { terminal, cta }.)
    step_config: needsSchedule(s.step_type) ? { ...defaultSchedule(), ...s.step_config && typeof s.step_config === "object" ? s.step_config : {} } : s.step_config && typeof s.step_config === "object" ? { ...s.step_config } : null
  }));
}
function captureTailModel() {
  return [
    { _uid: uid(), id: "", step_type: "text", step_prompts: ["Great, and your name?"], step_options: [], step_columns: ["first_name"], step_description: "", step_config: null },
    { _uid: uid(), id: "", step_type: "email", step_prompts: ["The best email to reach you?"], step_options: [], step_columns: ["email"], step_description: "", step_config: null }
  ];
}
function seedRouteModel(route, magnet) {
  if (route === "book") {
    return [{ _uid: uid(), id: "", step_type: "scheduler", step_prompts: ["When works best for you?"], step_options: [], step_columns: [], step_description: "", step_config: defaultSchedule() }, ...captureTailModel()];
  }
  if (route === "support") {
    const supp = (magnet.actions || []).find((a) => a && a.type === "support");
    const cfgOpts = supp && supp.config && Array.isArray(supp.config.options) ? supp.config.options : [];
    const options = cfgOpts.length ? cfgOpts.map((o) => ({ label: o && o.label || String(o), goto: "", icon: o && o.icon || "" })) : ["Sales enquiry", "Support", "Billing", "Something else"].map((l) => ({ label: l, goto: "", icon: "" }));
    return [{ _uid: uid(), id: "", step_type: "multi_select", step_prompts: ["How can we help you today?"], step_options: options, step_columns: [], step_description: "Select all that apply", step_config: null }, ...captureTailModel()];
  }
  return [blankStep("single_select")];
}
function loadRouteModel(route, magnet) {
  const authored = route === "chat" ? magnet.steps : magnet.routes && magnet.routes[route];
  const model = modelFromSteps(authored);
  if (model.length) return model;
  return route === "chat" ? [blankStep("single_select")] : seedRouteModel(route, magnet);
}
function reconcileStep(step) {
  if (needsOptions(step.step_type)) {
    if (!step.step_options.length) step.step_options = [{ label: "", goto: "", icon: "" }, { label: "", goto: "", icon: "" }];
  } else {
    step.step_options = [];
  }
  if (needsField(step.step_type)) {
    if (!step.step_columns.length && defaultFieldFor(step.step_type)) step.step_columns = [defaultFieldFor(step.step_type)];
  } else {
    step.step_columns = [];
  }
  step.step_config = needsSchedule(step.step_type) ? { ...defaultSchedule(), ...step.step_config || {} } : configWithoutSchedule(step.step_config);
}
function optionRowHTML(opt, only) {
  return `<div class="flow-opt">
    <input class="mag-modal__input flow-o-label" type="text" value="${esc$1(opt.label)}" placeholder="Option label">
    <select class="mag-modal__select flow-o-icon" title="Icon">${OPTION_ICONS.map(([v, l]) => `<option value="${esc$1(v)}"${v === opt.icon ? " selected" : ""}>${esc$1(l)}</option>`).join("")}</select>
    <button class="flow-opt__del" type="button" data-x="delopt" title="Remove choice"${only ? " disabled" : ""}><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
  </div>`;
}
function editorBodyHTML(step) {
  const typeOpts = TYPE_ORDER.map((t) => `<option value="${t}"${t === step.step_type ? " selected" : ""}>${esc$1(meta(t).label)}</option>`).join("");
  const only = step.step_options.length <= 1;
  return `<div class="flow-node__body">
    <label class="mag-modal__label">Step type</label>
    <select class="mag-modal__select flow-f-type">${typeOpts}</select>

    <label class="mag-modal__label">${step.step_type === "message" ? "Message" : "Question"} <span class="flow-sub">one bubble per line</span></label>
    <textarea class="mag-modal__input flow-f-prompts" rows="2" placeholder="${step.step_type === "message" ? "Thanks! One moment…" : "What can we help you with?"}">${esc$1(step.step_prompts.join("\n"))}</textarea>

    ${canBeTerminal(step.step_type) ? `
    <div class="mag-tog-row" style="margin-top:10px">
      <input type="checkbox" class="flow-f-terminal" id="flow-f-terminal-${step._uid}"${step.step_config?.terminal ? " checked" : ""}>
      <label for="flow-f-terminal-${step._uid}">End the conversation here</label>
    </div>
    ${step.step_config?.terminal ? `
    <label class="mag-modal__label">Link label <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-label" type="text" value="${esc$1(step.step_config?.cta?.label || "")}" placeholder="e.g. Visit our site">
    <label class="mag-modal__label">Link URL <span class="flow-sub flow-cta-req">optional</span></label>
    <input class="mag-modal__input flow-f-cta-url" type="url" value="${esc$1(step.step_config?.cta?.url || "")}" placeholder="https://example.com">
    <p class="flow-cta-warn" hidden>Both are needed to show the button — fill in the other one, or clear this one.</p>
    <p class="mag-modal__hint">Fill in both to show a button after this message, or leave both blank to just end the conversation. Opens in a new tab.</p>` : ""}` : ""}

    ${needsField(step.step_type) ? `
    <label class="mag-modal__label">Saves to</label>
    <select class="mag-modal__select flow-f-field">
      <option value=""${step.step_columns[0] ? "" : " selected"} disabled>Choose a lead field…</option>
      ${LEAD_CAPTURE_FIELDS.map((f) => `<option value="${esc$1(f.value)}"${f.value === step.step_columns[0] ? " selected" : ""}>${esc$1(f.label)}</option>`).join("")}
    </select>
    <p class="mag-modal__hint">The lead record field this answer fills in — these are the only fields a magnet can actually save to.</p>` : ""}

    ${needsOptions(step.step_type) ? `
    <label class="mag-modal__label">Choices${step.step_type === "multi_select" ? ' <span class="flow-sub">visitor can pick several</span>' : ""}</label>
    <div class="flow-opts">${step.step_options.map((o) => optionRowHTML(o, only)).join("")}</div>
    <button class="mag-flow__addopt" type="button" data-x="addopt"><span class="material-symbols-outlined" aria-hidden="true">add</span> Add choice</button>` : ""}

    ${needsSchedule(step.step_type) ? `
    <label class="mag-modal__label">Meeting label <span class="flow-sub">optional</span></label>
    <input class="mag-modal__input flow-f-mtlabel" type="text" value="${esc$1(step.step_config?.meeting_label || "")}" placeholder="e.g. 15 minute call">
    <div class="mag-modal__row" style="margin-top:8px">
      <div><label class="mag-modal__label">From</label><input class="mag-modal__input flow-f-start" type="time" value="${esc$1(step.step_config?.start || "09:00")}"></div>
      <div><label class="mag-modal__label">To</label><input class="mag-modal__input flow-f-end" type="time" value="${esc$1(step.step_config?.end || "17:00")}"></div>
      <div style="flex:0 0 auto"><label class="mag-modal__label">Slot</label>
        <select class="mag-modal__select flow-f-mins">${[15, 30, 45, 60].map((n) => `<option value="${n}"${(step.step_config?.mins || 30) === n ? " selected" : ""}>${n} min</option>`).join("")}</select></div>
    </div>
    <p class="mag-modal__hint">Visitors pick a day + time within these hours; the choice saves to the field above.</p>` : ""}
  </div>`;
}
function previewHTML(step) {
  const firstPrompt = step.step_prompts.find((p) => String(p).trim() !== "") || "";
  const promptText = firstPrompt ? `<div class="flow-node__prompt">“${esc$1(firstPrompt)}”</div>` : `<div class="flow-node__prompt is-empty">${step.step_type === "message" ? "No message yet" : "No question yet"}</div>`;
  let extra = "";
  if (needsOptions(step.step_type)) {
    const labels = step.step_options.map((o) => String(o.label).trim()).filter(Boolean);
    if (labels.length) {
      const shown = labels.slice(0, 4).map((l) => `<span class="flow-node__chip">${esc$1(l)}</span>`).join("");
      const more = labels.length > 4 ? `<span class="flow-node__chip">+${labels.length - 4}</span>` : "";
      extra = `<div class="flow-node__chips">${shown}${more}</div>`;
    }
  } else if (needsField(step.step_type) && step.step_columns[0]) {
    const fieldLabel = LEAD_CAPTURE_FIELDS.find((f) => f.value === step.step_columns[0])?.label || step.step_columns[0];
    extra = `<div class="flow-node__meta">Saves to <b>${esc$1(fieldLabel)}</b></div>`;
  } else if (canBeTerminal(step.step_type) && step.step_config?.terminal) {
    const label = String(step.step_config?.cta?.label || "").trim();
    extra = `<div class="flow-node__meta">Ends the conversation${label ? ` — link: <b>${esc$1(label)}</b>` : ""}</div>`;
  }
  return `<div class="flow-node__preview">${promptText}${extra}</div>`;
}
function nodeHTML(step, i, total) {
  const m = meta(step.step_type);
  const open = step._uid === openUid;
  const style = `--nc:${m.color};--nct:${hexToRgba(m.color, 0.14)}`;
  return `<div class="flow-node${open ? " flow-node--open" : ""}" data-uid="${step._uid}" style="${style}"${open ? "" : ' draggable="true"'}>
    <div class="flow-node__hd">
      <span class="flow-node__grip" title="${open ? "" : "Drag to reorder"}"><span class="material-symbols-outlined" aria-hidden="true">${open ? "expand_less" : "drag_indicator"}</span></span>
      <span class="flow-node__ico"><span class="material-symbols-outlined" aria-hidden="true">${m.icon}</span></span>
      <span class="flow-node__type">${esc$1(m.label)}</span>
      <span class="flow-node__n">Step ${i + 1}</span>
      <span class="flow-node__tools">
        <button type="button" data-x="up" title="Move up"${i === 0 ? " disabled" : ""}><span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button>
        <button type="button" data-x="down" title="Move down"${i === total - 1 ? " disabled" : ""}><span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span></button>
        <button type="button" data-x="del" title="Delete step"${total === 1 ? " disabled" : ""}><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </span>
    </div>
    ${open ? editorBodyHTML(step) : previewHTML(step)}
  </div>`;
}
const CONNECTOR = `<div class="flow-conn"><span class="flow-conn__line"></span><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div>`;
function renderNodes() {
  const canvas = document.getElementById("flow-nodes");
  if (!canvas) return;
  const total = stepsModel.length;
  const parts = ['<div class="flow-start"><span class="material-symbols-outlined" aria-hidden="true">bolt</span> Conversation starts</div>', CONNECTOR];
  stepsModel.forEach((s, i) => {
    parts.push(nodeHTML(s, i, total));
    if (i < total - 1) parts.push(CONNECTOR);
  });
  canvas.innerHTML = parts.join("");
}
function readModel() {
  const el = document.querySelector(".flow-node--open");
  if (!el) return;
  const step = stepsModel.find((s) => s._uid === el.dataset.uid);
  if (!step) return;
  const typeEl = el.querySelector(".flow-f-type");
  if (typeEl) step.step_type = typeEl.value;
  const promptsEl = el.querySelector(".flow-f-prompts");
  if (promptsEl) step.step_prompts = promptsEl.value.split("\n");
  const fieldEl = el.querySelector(".flow-f-field");
  step.step_columns = fieldEl && fieldEl.value.trim() ? [fieldEl.value.trim()] : [];
  if (needsOptions(step.step_type)) {
    const prev = step.step_options;
    const newOpts = [];
    el.querySelectorAll(".flow-opt").forEach((oEl, k) => {
      newOpts.push({
        label: oEl.querySelector(".flow-o-label")?.value ?? "",
        icon: oEl.querySelector(".flow-o-icon")?.value ?? "",
        goto: prev[k] && prev[k].goto || ""
        // preserve any existing branch by position
      });
    });
    step.step_options = newOpts;
  } else {
    step.step_options = [];
  }
  if (needsSchedule(step.step_type)) {
    const mt = el.querySelector(".flow-f-mtlabel");
    const st = el.querySelector(".flow-f-start");
    const en = el.querySelector(".flow-f-end");
    const mn = el.querySelector(".flow-f-mins");
    step.step_config = {
      ...step.step_config || defaultSchedule(),
      ...mt ? { meeting_label: mt.value.trim() } : {},
      ...st && st.value ? { start: st.value } : {},
      ...en && en.value ? { end: en.value } : {},
      ...mn ? { mins: parseInt(mn.value, 10) || 30 } : {}
    };
  } else if (canBeTerminal(step.step_type)) {
    const termEl = el.querySelector(".flow-f-terminal");
    if (termEl) {
      const labelEl = el.querySelector(".flow-f-cta-label");
      const urlEl = el.querySelector(".flow-f-cta-url");
      const rest = configWithout(step.step_config, TERMINAL_KEYS) || {};
      step.step_config = termEl.checked ? { ...rest, terminal: true, cta: { label: labelEl ? labelEl.value : "", url: urlEl ? urlEl.value : "" } } : configWithout(step.step_config, TERMINAL_KEYS);
    }
  } else {
    step.step_config = configWithoutSchedule(step.step_config);
  }
}
function clearDrop() {
  document.querySelectorAll(".flow-node.drop-before, .flow-node.drop-after").forEach((n) => n.classList.remove("drop-before", "drop-after"));
}
function cleanupDrag() {
  clearDrop();
  document.querySelectorAll(".flow-node.dragging").forEach((n) => n.classList.remove("dragging"));
  dragUid = null;
  dropInfo = null;
}
function validate(model = stepsModel) {
  if (!model.length) return { message: "Add at least one step.", uid: null, field: null };
  for (let i = 0; i < model.length; i++) {
    const s = model[i];
    const n = i + 1;
    const at = (message, field = null) => ({ message, uid: s._uid, field });
    if (!s.step_prompts.some((p) => String(p).trim() !== "")) return at(`Step ${n}: add what the magnet should say.`, "prompts");
    if (needsOptions(s.step_type) && !s.step_options.some((o) => String(o.label).trim() !== "")) return at(`Step ${n}: add at least one choice.`, "options");
    if (needsField(s.step_type) && !s.step_columns.length) return at(`Step ${n}: choose which field this answer saves to.`, "field");
    if (canBeTerminal(s.step_type) && s.step_config?.terminal) {
      const label = String(s.step_config.cta?.label || "").trim();
      const url = String(s.step_config.cta?.url || "").trim();
      if (Boolean(label) !== Boolean(url)) {
        return at(`Step ${n}: fill in both the link label and URL, or leave both blank.`, "cta");
      }
    }
  }
  return null;
}
function syncCtaPairHint(nodeEl) {
  if (!nodeEl) return;
  const labelEl = nodeEl.querySelector(".flow-f-cta-label");
  const urlEl = nodeEl.querySelector(".flow-f-cta-url");
  if (!labelEl || !urlEl) return;
  const hasLabel = labelEl.value.trim() !== "";
  const hasUrl = urlEl.value.trim() !== "";
  const engaged = hasLabel || hasUrl;
  const halfDone = hasLabel !== hasUrl;
  nodeEl.querySelectorAll(".flow-cta-req").forEach((el) => {
    el.textContent = engaged ? "required" : "optional";
    el.classList.toggle("flow-sub--req", engaged);
  });
  labelEl.classList.toggle("flow-f-invalid", halfDone && !hasLabel);
  urlEl.classList.toggle("flow-f-invalid", halfDone && !hasUrl);
  const warn = nodeEl.querySelector(".flow-cta-warn");
  if (warn) warn.hidden = !halfDone;
}
function toPayload(model = stepsModel) {
  let max = 0;
  model.forEach((s) => {
    const n = parseInt(s.id, 10);
    if (!isNaN(n) && n > max) max = n;
  });
  return model.map((s) => {
    const id = s.id && String(s.id).trim() ? String(s.id) : String(++max);
    const options = needsOptions(s.step_type) ? s.step_options.map((o) => {
      const out2 = { label: String(o.label).trim(), goto: String(o.goto || "") };
      if (o.icon) out2.icon = String(o.icon);
      return out2;
    }).filter((o) => o.label !== "") : [];
    const out = {
      id,
      step_type: s.step_type,
      step_prompts: s.step_prompts.map((p) => String(p)).filter((p) => p.trim() !== ""),
      step_options: options,
      step_columns: s.step_columns.slice(),
      step_description: s.step_description || ""
    };
    if (needsSchedule(s.step_type)) {
      if (s.step_config) out.step_config = { ...defaultSchedule(), ...s.step_config };
    } else if (s.step_config && Object.keys(s.step_config).length) {
      const cfg = { ...s.step_config };
      if (canBeTerminal(s.step_type) && cfg.terminal) {
        const label = String(cfg.cta?.label ?? "").trim();
        const url = String(cfg.cta?.url ?? "").trim();
        if (label && url) cfg.cta = { label, url };
        else delete cfg.cta;
      }
      out.step_config = cfg;
    }
    return out;
  });
}
function mountFlowTab(panelEl, magnet, onDirty) {
  ensureStyles$1();
  flowMagnet = magnet;
  flowOnDirty = typeof onDirty === "function" ? onDirty : null;
  flowLoadedModifiedTz = magnet?.modified_tz || "";
  flowRouteKeys = ["chat", ...["book", "support"].filter((r) => (magnet.actions || []).some((a) => a && a.type === r))];
  flowRouteModels = { chat: loadRouteModel("chat", magnet) };
  currentRoute = "chat";
  stepsModel = flowRouteModels.chat;
  openUid = stepsModel.length === 1 ? stepsModel[0]._uid : null;
  dragUid = null;
  dropInfo = null;
  panelEl.innerHTML = `
    <p class="mag-modal__hint" style="margin-top:0">Each card is one thing your magnet asks. Drag a card to reorder, click to edit, add steps from the palette below.</p>
    ${flowRouteKeys.length > 1 ? `<div class="flow-routes"><span class="flow-routes__lbl">Editing flow</span><select class="mag-modal__select" id="flow-route">${flowRouteKeys.map((r) => `<option value="${r}">${esc$1(ROUTE_LABEL[r] || r)}</option>`).join("")}</select></div>` : ""}
    <p class="mag-modal__error" id="flow-error"></p>
    <div class="flow-canvas" id="flow-nodes"></div>
    <div class="flow-palette">
      <p class="flow-palette__t">Add a step</p>
      <div class="flow-palette__grid" id="flow-palette">
        ${TYPE_ORDER.map((t) => {
    const m = meta(t);
    return `<button class="flow-palette__chip" type="button" data-type="${t}" style="--pc:${m.color}"><span class="material-symbols-outlined" aria-hidden="true">${m.icon}</span>${esc$1(m.label)}</button>`;
  }).join("")}
      </div>
    </div>`;
  renderNodes();
  wireFlowEditor(panelEl);
}
function markFlowDirty() {
  if (flowOnDirty) flowOnDirty();
}
function clearFlowErr() {
  const el = document.getElementById("flow-error");
  if (el) el.textContent = "";
}
function wireFlowEditor(root) {
  const canvas = root.querySelector("#flow-nodes");
  const routeSel = root.querySelector("#flow-route");
  routeSel?.addEventListener("change", () => {
    readModel();
    currentRoute = routeSel.value;
    if (!flowRouteModels[currentRoute]) flowRouteModels[currentRoute] = loadRouteModel(currentRoute, flowMagnet);
    stepsModel = flowRouteModels[currentRoute];
    openUid = stepsModel.length === 1 ? stepsModel[0]._uid : null;
    clearFlowErr();
    renderNodes();
  });
  const openStep = (targetUid) => {
    clearFlowErr();
    const wasOpen = openUid;
    readModel();
    openUid = openUid === targetUid ? null : targetUid;
    if (wasOpen) markFlowDirty();
    renderNodes();
  };
  canvas.addEventListener("click", (e) => {
    const toolBtn = e.target.closest("button[data-x]");
    const nodeEl = e.target.closest(".flow-node");
    if (!nodeEl) return;
    const i = stepsModel.findIndex((s) => s._uid === nodeEl.dataset.uid);
    if (i < 0) return;
    if (toolBtn) {
      const x = toolBtn.dataset.x;
      clearFlowErr();
      readModel();
      if (x === "up" && i > 0) {
        [stepsModel[i - 1], stepsModel[i]] = [stepsModel[i], stepsModel[i - 1]];
        markFlowDirty();
        renderNodes();
      } else if (x === "down" && i < stepsModel.length - 1) {
        [stepsModel[i + 1], stepsModel[i]] = [stepsModel[i], stepsModel[i + 1]];
        markFlowDirty();
        renderNodes();
      } else if (x === "del" && stepsModel.length > 1) {
        if (openUid === nodeEl.dataset.uid) openUid = null;
        stepsModel.splice(i, 1);
        markFlowDirty();
        renderNodes();
      } else if (x === "addopt") {
        stepsModel[i].step_options.push({ label: "", goto: "", icon: "" });
        markFlowDirty();
        renderNodes();
      } else if (x === "delopt") {
        const optEl = toolBtn.closest(".flow-opt");
        const k = Array.from(optEl.parentNode.children).indexOf(optEl);
        if (stepsModel[i].step_options.length > 1 && k >= 0) {
          stepsModel[i].step_options.splice(k, 1);
          markFlowDirty();
          renderNodes();
        }
      }
      return;
    }
    if (e.target.closest(".flow-node__body")) return;
    if (e.target.closest(".flow-node__hd") || e.target.closest(".flow-node__preview")) openStep(nodeEl.dataset.uid);
  });
  canvas.addEventListener("input", (e) => {
    if (!e.target.classList?.contains("flow-f-cta-label") && !e.target.classList?.contains("flow-f-cta-url")) return;
    clearFlowErr();
    syncCtaPairHint(e.target.closest(".flow-node"));
  });
  canvas.addEventListener("change", (e) => {
    e.stopPropagation();
    const isType = e.target.classList.contains("flow-f-type");
    const isTerminal = e.target.classList.contains("flow-f-terminal");
    if (!isType && !isTerminal) return;
    clearFlowErr();
    readModel();
    if (isType) {
      const step = stepsModel.find((s) => s._uid === e.target.closest(".flow-node")?.dataset.uid);
      if (step) reconcileStep(step);
    }
    markFlowDirty();
    renderNodes();
  });
  canvas.addEventListener("dragstart", (e) => {
    const node = e.target.closest(".flow-node");
    if (!node || node.getAttribute("draggable") !== "true") return;
    dragUid = node.dataset.uid;
    e.dataTransfer.effectAllowed = "move";
    try {
      e.dataTransfer.setData("text/plain", dragUid);
    } catch {
    }
    requestAnimationFrame(() => node.classList.add("dragging"));
  });
  canvas.addEventListener("dragover", (e) => {
    if (!dragUid) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const node = e.target.closest(".flow-node");
    clearDrop();
    if (!node || node.dataset.uid === dragUid) {
      dropInfo = null;
      return;
    }
    const r = node.getBoundingClientRect();
    const after = e.clientY > r.top + r.height / 2;
    node.classList.add(after ? "drop-after" : "drop-before");
    dropInfo = { uid: node.dataset.uid, after };
  });
  canvas.addEventListener("drop", (e) => {
    if (!dragUid || !dropInfo) {
      cleanupDrag();
      return;
    }
    e.preventDefault();
    clearFlowErr();
    readModel();
    const from = stepsModel.findIndex((s) => s._uid === dragUid);
    if (from < 0) {
      cleanupDrag();
      return;
    }
    const [moved] = stepsModel.splice(from, 1);
    const to = stepsModel.findIndex((s) => s._uid === dropInfo.uid);
    if (to < 0) {
      stepsModel.splice(from, 0, moved);
      cleanupDrag();
      return;
    }
    stepsModel.splice(dropInfo.after ? to + 1 : to, 0, moved);
    markFlowDirty();
    cleanupDrag();
    renderNodes();
  });
  canvas.addEventListener("dragend", cleanupDrag);
  root.querySelector("#flow-palette").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-type]");
    if (!chip) return;
    clearFlowErr();
    readModel();
    const step = blankStep(chip.dataset.type);
    stepsModel.push(step);
    openUid = step._uid;
    markFlowDirty();
    renderNodes();
    canvas.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
function validateFlows() {
  readModel();
  for (const r of Object.keys(flowRouteModels)) {
    const problem = validate(flowRouteModels[r]);
    if (problem) {
      return {
        route: r,
        message: (flowRouteKeys.length > 1 ? `${ROUTE_LABEL[r] || r}: ` : "") + problem.message,
        uid: problem.uid,
        field: problem.field
      };
    }
  }
  return null;
}
function showFlowRoute(route, message, opts = {}) {
  const { uid: uid2 = null, field = null } = opts;
  if (flowRouteModels[route]) {
    readModel();
    currentRoute = route;
    stepsModel = flowRouteModels[route];
    openUid = uid2 && stepsModel.some((s) => s._uid === uid2) ? uid2 : null;
    const sel = document.getElementById("flow-route");
    if (sel) sel.value = route;
    renderNodes();
  }
  const el = document.getElementById("flow-error");
  if (el) el.textContent = message || "";
  if (!uid2) return;
  const node = document.querySelector(`.flow-node[data-uid="${uid2}"]`);
  if (!node) return;
  node.scrollIntoView?.({ behavior: "smooth", block: "center" });
  if (field === "cta") {
    syncCtaPairHint(node);
    const labelEl = node.querySelector(".flow-f-cta-label");
    const urlEl = node.querySelector(".flow-f-cta-url");
    const target = labelEl && labelEl.value.trim() === "" ? labelEl : urlEl;
    target?.focus?.();
  }
}
async function warnIfEditedElsewhere(magnetGuid) {
  if (!flowLoadedModifiedTz) return;
  try {
    const res = await fetch(`${apiBase$1()}/m5t/v5/magnets`);
    const data = await res.json().catch(() => ({}));
    const current = (data.magnets || []).find((m) => m.guid === magnetGuid);
    if (!current || !current.modified_tz || current.modified_tz === flowLoadedModifiedTz) return;
    const proceed = confirm(
      "This magnet was edited elsewhere since you opened it — saving now may overwrite those changes. Save anyway?"
    );
    if (!proceed) throw new Error("Save cancelled — this magnet was edited elsewhere.");
    flowLoadedModifiedTz = current.modified_tz;
  } catch (err) {
    if (err.message && err.message.indexOf("Save cancelled") === 0) throw err;
    console.warn("[magnet-flow] save-conflict check failed, proceeding without it:", err);
  }
}
async function saveFlows(magnetGuid) {
  await warnIfEditedElsewhere(magnetGuid);
  readModel();
  for (const r of Object.keys(flowRouteModels)) {
    const body = r === "chat" ? { steps: toPayload(flowRouteModels[r]) } : { route: r, steps: toPayload(flowRouteModels[r]) };
    const res = await fetch(`${apiBase$1()}/m5t/v5/magnets/${encodeURIComponent(magnetGuid)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.message || "Flow save failed");
  }
}
function currentChatSteps() {
  readModel();
  return toPayload(flowRouteModels.chat || []);
}
let stylesInjected = false;
const state = { magnets: [], owners: [], canProvision: false, canManage: false, primaryOrgGuid: null, stats: {}, install: {}, connections: {}, pairing: {}, pairTimer: null };
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const toast = (message, type = "info") => {
  try {
    PubSub.publish(AppBroadcast.UI_TOAST, { message, type });
  } catch {
  }
};
const apiBase = () => AuthController.getConfig?.().BASE_URL || "";
const embedFor = (guid) => `<script src="${apiBase()}/m5t/v5/coreSnippet?appguid=${guid}" async><\/script>`;
const cspNoteHTML = () => `<details class="mag-csp-note">
  <summary><span class="material-symbols-outlined" aria-hidden="true">shield</span>Strict Content-Security-Policy on your site? Read this</summary>
  <div class="mag-csp-note__body">
    <p>A strict CSP can silently block the widget — it just never appears, no visible error. Allowlist <code>${esc(apiBase())}</code> under all three directives. Copy-paste ready for your CSP header/meta tag:</p>
    <pre class="mag-csp-note__snippet"><code>script-src 'self' ${esc(apiBase())};
connect-src 'self' ${esc(apiBase())};
img-src 'self' ${esc(apiBase())};</code></pre>
    <ul>
      <li><code>script-src</code> — lets the install script run at all</li>
      <li><code>connect-src</code> — lets it send captures and events</li>
      <li><code>img-src</code> — lets an uploaded logo render</li>
    </ul>
    <p>Merge these into your existing policy rather than replacing it — most sites already have other origins allowlisted (analytics, fonts, etc.) that this snippet doesn't know about.</p>
    <p>Using a nonce-based CSP? Add your page's own nonce to the script tag: <code>&lt;script nonce="your-nonce" src="..."&gt;</code></p>
  </div>
</details>`;
const installGuideHTML = (guid) => {
  const snippet = esc(embedFor(guid));
  return `<details class="mag-guide">
  <summary><span class="material-symbols-outlined" aria-hidden="true">help</span>Where do I paste this? Step-by-step for your site</summary>
  <div class="mag-guide__body">

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">code</span>A plain HTML site</h4>
      <ol>
        <li>Open the page you want the magnet on — or your shared footer/template file, if you have one, so it appears on every page.</li>
        <li>Paste the snippet just before the closing <code>&lt;/body&gt;</code> tag.</li>
        <li>Save, upload the file to your host, and reload your site.</li>
      </ol>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">wordpress</span>WordPress</h4>
      <ol>
        <li>In WP Admin, install a header/footer snippet plugin — <em>WPCode</em> and <em>Insert Headers and Footers</em> are the common ones.</li>
        <li>Open its settings and find the <strong>Footer</strong> (or "Body — end") box.</li>
        <li>Paste the snippet there, save, and reload your site.</li>
      </ol>
      <p class="mag-guide__note">Prefer a plugin over Appearance &rarr; Theme File Editor: a snippet pasted into a theme file is wiped by the next theme update, and a snippet plugin survives it.</p>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">web</span>Squarespace or Wix</h4>
      <ol>
        <li><strong>Squarespace:</strong> Settings &rarr; Advanced &rarr; <strong>Code Injection</strong>, paste into the <strong>Footer</strong> box, then Save. Code Injection needs a Business plan or higher.</li>
        <li><strong>Wix:</strong> Settings &rarr; <strong>Custom Code</strong> (under Advanced) &rarr; <em>+ Add Custom Code</em>. Paste, choose <strong>Body — end</strong>, apply to <strong>All pages</strong>, then Apply.</li>
        <li>Publish the site — on both platforms, custom code only runs on the published site, not in the editor preview.</li>
      </ol>
    </div>

    <div class="mag-guide__plat">
      <h4><span class="material-symbols-outlined" aria-hidden="true">deployed_code</span>Next.js, React or another framework</h4>
      <p class="mag-guide__note">Load it through your framework's script component rather than hand-writing the tag into JSX — React will not execute a raw <code>&lt;script&gt;</code> in markup. In Next.js, add this to your root layout:</p>
      <pre class="mag-guide__snippet"><code>import Script from 'next/script';

&lt;Script
  src="${esc(apiBase())}/m5t/v5/coreSnippet?appguid=${esc(guid)}"
  strategy="afterInteractive"
/&gt;</code></pre>
      <p class="mag-guide__note">If your app sets a Content-Security-Policy (a Next.js middleware with a nonce is the usual source), it will block the widget silently — see the CSP note below before you go hunting.</p>
    </div>

    <p class="mag-guide__note">Wherever it goes, the snippet is the same one shown above:</p>
    <pre class="mag-guide__snippet"><code>${snippet}</code></pre>
  </div>
</details>`;
};
const MODE_LABEL = { chat: "Chat bubble", right_slide: "Slide-in panel", modal: "Modal", inline: "Inline" };
const MODE_ICON = { chat: "chat", right_slide: "vertical_split", modal: "web_asset", inline: "view_agenda" };
const DISPLAY_OPTS = [
  { value: "inline", icon: "view_agenda", label: "Inline" },
  { value: "chat", icon: "chat", label: "Chat" },
  { value: "right_slide", icon: "vertical_split", label: "Slide" },
  { value: "modal", icon: "web_asset", label: "Modal" }
];
const MOBILE_BREAKPOINT_PX = 480;
function triggerSelection(magnet) {
  if (!magnet) return "on_load";
  if (perDeviceTrigger(magnet)) return "__per_device";
  return magnet.trigger || "none";
}
function perDeviceSide(magnet, side) {
  const t = perDeviceTrigger(magnet);
  if (t) return t[side] || "none";
  const single = magnet && typeof magnet.trigger === "string" ? magnet.trigger : "on_load";
  return side === "mobile" ? "none" : single;
}
function syncPerDeviceVisibility(scrim) {
  const sel = scrim.querySelector("#mag-f-trigger");
  const pair = scrim.querySelector("#mag-f-perdev");
  if (!sel || !pair) return;
  const isInline = scrim.querySelector('input[name="mag-display"]:checked')?.value === "inline";
  const opt = sel.querySelector('option[value="__per_device"]');
  if (opt) opt.hidden = isInline;
  if (isInline && sel.value === "__per_device") sel.value = "none";
  pair.hidden = isInline || sel.value !== "__per_device";
}
function collectTrigger(scrim) {
  const sel = scrim.querySelector("#mag-f-trigger");
  const value = sel?.value || "on_load";
  if (value !== "__per_device") return value;
  const desktop = scrim.querySelector("#mag-f-trigger-desktop")?.value;
  const mobile = scrim.querySelector("#mag-f-trigger-mobile")?.value;
  if (!desktop || !mobile) return void 0;
  return { desktop, mobile };
}
function perDeviceTrigger(magnet) {
  const t = magnet && magnet.trigger;
  return t && typeof t === "object" && !Array.isArray(t) ? t : null;
}
function perDeviceTriggerLabel(magnet) {
  const t = perDeviceTrigger(magnet);
  if (!t) return "";
  const label = (v) => (TRIGGER_OPTS.find((o) => o.value === (v || "none")) || {}).label || (v || "none");
  return `Per device — desktop: ${label(t.desktop)}; mobile: ${label(t.mobile)}`;
}
const THEME_OPTS = [
  // Auto = the VISITOR'S OS setting. Sync = the HOST SITE'S own theme toggle, which the
  // OS query cannot see; the SDK reads <html> for the common conventions and falls back
  // to Auto's behaviour on a site using none of them, so Sync is never worse than Auto.
  { value: "auto", icon: "brightness_auto", label: "Auto" },
  { value: "sync", icon: "sync", label: "Sync" },
  { value: "light", icon: "light_mode", label: "Light" },
  { value: "dark", icon: "dark_mode", label: "Dark" }
];
const TRIGGER_OPTS = [
  { value: "on_load", label: "Immediately on page load" },
  { value: "on_8_seconds", label: "After 8 seconds" },
  { value: "on_scroll_80_percent", label: "At 80% scroll depth" },
  { value: "on_exit_intent", label: "On exit intent (mouse leaves the page)" },
  { value: "none", label: "Manual only (visitor clicks the launcher)" }
];
const CTA_META = {
  book: { label: "Book", icon: "event", kind: "book" },
  chat: { label: "Chat", icon: "chat", kind: "flow" },
  call: { label: "Call", icon: "phone", kind: "value", placeholder: "Phone number" },
  email: { label: "Email", icon: "mail", kind: "value", placeholder: "Email address" },
  support: { label: "Support", icon: "support_agent", kind: "support" }
};
const CTA_ORDER = ["book", "chat", "call", "email", "support"];
let calEventTypes = null;
async function fetchCalendlyEventTypes() {
  if (calEventTypes) return calEventTypes;
  let result;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/calendly/event_types`);
    const data = await res.json().catch(() => ({}));
    if (res.status === 404) result = { ok: false, reason: "not_connected" };
    else if (!data.ok) result = { ok: false, reason: "error" };
    else result = { ok: true, list: data.data.event_types || [], scheduling_url: data.data.scheduling_url || "" };
  } catch {
    result = { ok: false, reason: "error" };
  }
  if (result.ok) calEventTypes = result;
  return result;
}
async function populateCalEventSelect(sel) {
  const savedUrl = sel.dataset.saved || "";
  const savedName = sel.dataset.savedName || "Saved Calendly event";
  sel.innerHTML = `<option value="${esc(savedUrl)}">${savedUrl ? esc(savedName) : "Loading event types"}</option>`;
  const et = await fetchCalendlyEventTypes();
  if (!et.ok) {
    delete sel.dataset.listed;
    sel.innerHTML = savedUrl ? `<option value="${esc(savedUrl)}" selected>${esc(savedName)}</option>` : `<option value="">${et.reason === "not_connected" ? "Connect Calendly under Settings, Integrations first" : "Could not load event types"}</option>`;
    return;
  }
  const opts = [];
  if (et.scheduling_url) opts.push({ url: et.scheduling_url, label: "Full scheduling page (visitor picks the event)" });
  et.list.forEach((e) => opts.push({ url: e.scheduling_url, label: e.duration ? `${e.name} (${e.duration} min)` : e.name }));
  if (savedUrl && !opts.some((o) => o.url === savedUrl)) opts.unshift({ url: savedUrl, label: savedName });
  sel.innerHTML = opts.length ? opts.map((o) => `<option value="${esc(o.url)}"${o.url === (savedUrl || opts[0].url) ? " selected" : ""}>${esc(o.label)}</option>`).join("") : `<option value="">No active event types</option>`;
}
let crTrackers = null;
async function fetchCallrailTrackers() {
  if (crTrackers) return crTrackers;
  let result;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/integrations/callrail/trackers`);
    const data = await res.json().catch(() => ({}));
    if (res.status === 404) result = { ok: false, reason: "not_connected" };
    else if (!data.ok) result = { ok: false, reason: "error" };
    else result = { ok: true, list: data.data.trackers || [] };
  } catch {
    result = { ok: false, reason: "error" };
  }
  if (result.ok) crTrackers = result;
  return result;
}
async function populateCrTrackerSelect(sel) {
  const savedNumber = sel.dataset.saved || "";
  const savedName = sel.dataset.savedName || "Saved tracking number";
  sel.innerHTML = `<option value="${esc(savedNumber)}">${savedNumber ? esc(savedName) : "Loading tracking numbers"}</option>`;
  const et = await fetchCallrailTrackers();
  if (!et.ok) {
    delete sel.dataset.listed;
    sel.innerHTML = savedNumber ? `<option value="${esc(savedNumber)}" selected>${esc(savedName)}</option>` : `<option value="">${et.reason === "not_connected" ? "Connect CallRail under Settings, Integrations first" : "Could not load tracking numbers"}</option>`;
    return;
  }
  const opts = et.list.map((t) => ({
    number: t.number,
    id: t.id,
    name: t.name,
    label: `${t.name} · ${t.number}${t.type === "session" ? " (number pool)" : ""}`
  }));
  if (savedNumber && !opts.some((o) => o.number === savedNumber)) {
    opts.unshift({ number: savedNumber, id: sel.dataset.savedId || "", name: savedName, label: savedName });
  }
  sel.innerHTML = opts.length ? opts.map((o) => `<option value="${esc(o.number)}" data-tracker-id="${esc(o.id)}" data-tracker-name="${esc(o.name)}"${o.number === (savedNumber || opts[0].number) ? " selected" : ""}>${esc(o.label)}</option>`).join("") : `<option value="">No active tracking numbers in this company</option>`;
}
function segHTML(name, current, opts) {
  return `<div class="mag-seg" role="radiogroup" aria-label="${esc(name)}">${opts.map((o) => `
    <label><input type="radio" name="${esc(name)}" value="${esc(o.value)}"${o.value === current ? " checked" : ""}>
      <span><span class="material-symbols-outlined" aria-hidden="true">${esc(o.icon)}</span>${esc(o.label)}</span></label>`).join("")}</div>`;
}
function ctaRowHTML(type, action) {
  const meta2 = CTA_META[type];
  const on = !!action;
  const dis = on ? "" : " disabled";
  let control = "";
  if (meta2.kind === "value" && type === "call") {
    const isCr = action?.config?.source === "callrail";
    const savedNumber = isCr ? action?.value || "" : "";
    const savedName = isCr ? action?.config?.tracker_name || "Saved tracking number" : "";
    control = `
      <select class="mag-modal__select mag-cta__callsrc"${dis}>
        <option value=""${isCr ? "" : " selected"}>Phone number</option>
        <option value="callrail"${isCr ? " selected" : ""}>CallRail</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="${esc(meta2.placeholder)}" value="${esc(isCr ? "" : action?.value || "")}"${dis}${isCr ? " hidden" : ""}>
      <select class="mag-modal__select mag-cta__crtracker" data-saved="${esc(savedNumber)}" data-saved-name="${esc(savedName)}" data-saved-id="${esc(isCr ? action?.config?.tracker_id || "" : "")}"${dis}${isCr ? "" : " hidden"}>
        ${savedNumber ? `<option value="${esc(savedNumber)}" selected>${esc(savedName)}</option>` : ""}
      </select>`;
  } else if (meta2.kind === "value") {
    control = `<input class="mag-modal__input mag-cta__val" type="text" placeholder="${esc(meta2.placeholder)}" value="${esc(action?.value || "")}"${dis}>`;
  } else if (meta2.kind === "book") {
    const bookVal = action?.config?.meeting_label || action?.value || "";
    const isCal = action?.config?.source === "calendly";
    const savedUrl = isCal ? action?.config?.calendly_url || "" : "";
    const savedName = isCal ? action?.config?.event_name || "Saved Calendly event" : "";
    control = `
      <select class="mag-modal__select mag-cta__booksrc"${dis}>
        <option value=""${isCal ? "" : " selected"}>Built-in scheduler</option>
        <option value="calendly"${isCal ? " selected" : ""}>Calendly</option>
      </select>
      <input class="mag-modal__input mag-cta__val" type="text" placeholder="Meeting label (e.g. 15 minute call), or paste a booking link" value="${esc(bookVal)}"${dis}${isCal ? " hidden" : ""}>
      <select class="mag-modal__select mag-cta__calevent" data-saved="${esc(savedUrl)}" data-saved-name="${esc(savedName)}"${dis}${isCal ? "" : " hidden"}>
        ${savedUrl ? `<option value="${esc(savedUrl)}" selected>${esc(savedName)}</option>` : ""}
      </select>`;
  } else {
    control = `<span class="mag-cta__note">${meta2.kind === "support" ? "Multi-select intake" : "Opens your conversation flow"}</span>`;
  }
  let sub = "";
  if (meta2.kind === "support") {
    const opts = (action?.config?.options || []).map((o) => o && o.label || o).filter(Boolean);
    sub = `<textarea class="mag-modal__input mag-cta__opts" rows="3" placeholder="Support options, one per line (e.g. Sales&#10;Support&#10;Billing)"${dis}>${esc(opts.join("\n"))}</textarea>`;
  }
  return `<div class="mag-cta" data-type="${type}" data-kind="${meta2.kind}">
    <div class="mag-cta__main">
      <label class="mag-cta__tog"><input type="checkbox" class="mag-cta__on"${on ? " checked" : ""}>
        <span class="material-symbols-outlined" aria-hidden="true">${meta2.icon}</span>${meta2.label}</label>
      ${control}
    </div>
    ${sub}
  </div>`;
}
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-magnets-styles";
  style.textContent = `
    .page-shell .mag-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
    .page-shell .mag-card { border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px); background: var(--color-bg, #fff); padding: 16px 18px; display: flex; flex-direction: column; gap: 12px; }
    .page-shell .mag-card__top { display: flex; align-items: flex-start; gap: 12px; }
    .page-shell .mag-swatch { flex: 0 0 auto; width: 40px; height: 40px; border-radius: 10px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08); }
    .page-shell .mag-card__hd { flex: 1 1 auto; min-width: 0; }
    .page-shell .mag-name { font-weight: 700; font-size: 0.98rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-owner { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-badge { flex: 0 0 auto; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 3px 8px; border-radius: 999px; }
    .page-shell .mag-badge[data-s="ENABLED"] { background: #DCFCE7; color: #047857; }
    .page-shell .mag-badge[data-s="DISABLED"], .page-shell .mag-badge[data-s="DRAFT"] { background: var(--color-surface-2, #EAF0F7); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-domains { font-size: 0.78rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-domains span { color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-mode { align-self: flex-start; display: inline-flex; align-items: center; gap: 5px; font-size: 0.72rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); background: var(--color-surface-2, #EAF0F7); padding: 3px 9px; border-radius: 999px; }
    .page-shell .mag-mode .material-symbols-outlined { font-size: 15px; }
    .page-shell .mag-stats { display: flex; align-items: center; gap: 12px; font-size: 0.76rem; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-stats span { display: inline-flex; align-items: center; gap: 4px; }
    .page-shell .mag-stats .material-symbols-outlined { font-size: 15px; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-stats b { font-weight: 700; color: var(--color-text, #0B1220); }
    .page-shell .mag-ab-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: #EDE9FE; color: #6D28D9; }
    .page-shell .mag-ab-chip .material-symbols-outlined { font-size: 13px; }
    .page-shell .mag-alert-chip { display: inline-flex; align-items: center; gap: 4px; font-size: 0.66rem; font-weight: 700; letter-spacing: 0.04em; padding: 2px 8px; border-radius: 999px; background: var(--color-success-soft, #E3F4EF); color: var(--color-success, #009473); text-decoration: none; }
    .page-shell .mag-alert-chip:hover { filter: brightness(0.95); }
    .page-shell .mag-alert-chip .material-symbols-outlined { font-size: 13px; }
    .page-shell .mag-inline-note { display: flex; gap: 6px; align-items: flex-start; font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); margin-top: -4px; }
    .page-shell .mag-inline-note .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; margin-top: 1px; }
    .page-shell .mag-inline-note code, .mag-modal__body code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    .page-shell .mag-embed { display: flex; gap: 6px; align-items: center; }
    .page-shell .mag-embed input { flex: 1 1 auto; min-width: 0; font: inherit; font-size: 0.72rem; font-family: ui-monospace, Menlo, monospace; padding: 7px 9px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; background: var(--color-surface, #F4F7FB); color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-guide { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-guide summary { display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; color: var(--color-primary-600, #0072BA); list-style: none; }
    .page-shell .mag-guide summary::-webkit-details-marker { display: none; }
    .page-shell .mag-guide summary .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; }
    .page-shell .mag-guide__body { margin: 6px 0 0 21px; padding: 8px 10px; border-left: 2px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-guide__plat + .mag-guide__plat { margin-top: 10px; padding-top: 9px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-guide__plat h4 { display: flex; align-items: center; gap: 6px; margin: 0 0 4px; font-size: 0.74rem; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-guide__plat h4 .material-symbols-outlined { font-size: 15px; color: var(--color-primary-600, #0072BA); }
    .page-shell .mag-guide__body ol { margin: 0; padding-left: 18px; }
    .page-shell .mag-guide__body li { margin-bottom: 3px; line-height: 1.45; }
    .page-shell .mag-guide__note { margin: 5px 0 0; line-height: 1.45; }
    .page-shell .mag-guide__snippet { margin: 5px 0 0; padding: 7px 9px; border-radius: 6px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); overflow-x: auto; }
    .page-shell .mag-guide__snippet code { font-family: ui-monospace, Menlo, monospace; font-size: 0.9em; white-space: pre; background: none; padding: 0; }
    .page-shell .mag-guide code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    .page-shell .mag-csp-note { font-size: 0.72rem; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-csp-note summary { display: flex; align-items: center; gap: 6px; cursor: pointer; font-weight: 600; color: var(--color-warning, #915E00); list-style: none; }
    .page-shell .mag-csp-note summary::-webkit-details-marker { display: none; }
    .page-shell .mag-csp-note summary .material-symbols-outlined { font-size: 15px; flex: 0 0 auto; }
    .page-shell .mag-csp-note__body { margin: 6px 0 0 21px; padding: 8px 10px; border-left: 2px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-csp-note__body p { margin: 0 0 6px; }
    .page-shell .mag-csp-note__body ul { margin: 0 0 6px; padding-left: 18px; }
    .page-shell .mag-csp-note__body li { margin-bottom: 2px; }
    .page-shell .mag-csp-note code { font-family: ui-monospace, Menlo, monospace; font-size: 0.82em; background: var(--color-surface, #F4F7FB); padding: 1px 5px; border-radius: 5px; }
    /* install status — tokens only, and a state attribute rather than three class
       names, so the three states cannot drift apart visually. */
    .page-shell .mag-install { margin: 8px 0 0; padding: 9px 11px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.78rem; }
    .page-shell .mag-install__hd { display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-install__hd .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-install[data-state="live"] .mag-install__hd { color: var(--color-success, #009473); }
    .page-shell .mag-install[data-state="seen"] .mag-install__hd { color: var(--color-warning-text, #92400E); }
    .page-shell .mag-install[data-state="quiet"] .mag-install__hd { color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-install__hint { margin: 5px 0 0; color: var(--color-text-subtle, #6C7C9A); line-height: 1.45; }
    .page-shell .mag-install__seen { margin-top: 7px; }
    .page-shell .mag-install__seenhd { color: var(--color-text-muted, #4A5A78); margin-bottom: 4px; }
    .page-shell .mag-install__row { display: flex; align-items: center; gap: 8px; padding: 3px 0; }
    .page-shell .mag-install__dom { flex: 1 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, Menlo, monospace; }
    .page-shell .mag-install__hits { flex: 0 0 auto; color: var(--color-text-subtle, #6C7C9A); }
    .page-shell .mag-install__dismissed { margin-top: 7px; }
    .page-shell .mag-install__dismissed > summary { cursor: pointer; color: var(--color-text-muted, #4A5A78); font-size: 0.76rem; }
    .page-shell .mag-install__dismissed > summary:hover { color: var(--color-text, #0B1220); }
    .page-shell .mag-install__dismissed .mag-install__dom { color: var(--color-text-subtle, #6C7C9A); }
    /* connected sites — same surface, border and type scale as the install block above,
       and the same data-state-over-class-names approach, so the two read as one section
       rather than two widgets that happen to sit together. Tokens only. */
    .page-shell .mag-conn { margin: 8px 0 0; padding: 9px 11px; border-radius: 8px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); font-size: 0.78rem; }
    .page-shell .mag-conn__hd { display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--color-text, #0B1220); }
    .page-shell .mag-conn__hd .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-conn__row { display: flex; align-items: center; gap: 8px; padding: 5px 0; }
    .page-shell .mag-conn__row + .mag-conn__row { border-top: 1px solid var(--color-border, #D4DCE8); }
    .page-shell .mag-conn__icon { font-size: 17px; flex: 0 0 auto; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-conn__row[data-state="live"] .mag-conn__icon { color: var(--color-success, #009473); }
    .page-shell .mag-conn__row[data-state="pending"] .mag-conn__icon { color: var(--color-warning-text, #92400E); }
    .page-shell .mag-conn__row[data-state="off"] { opacity: 0.62; }
    .page-shell .mag-conn__site { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
    .page-shell .mag-conn__host { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, Menlo, monospace; }
    .page-shell .mag-conn__sub { color: var(--color-text-subtle, #6C7C9A); font-size: 0.72rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .page-shell .mag-conn__status { flex: 0 0 auto; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-conn__past { margin-top: 4px; }
    .page-shell .mag-conn__past > summary { cursor: pointer; color: var(--color-text-muted, #4A5A78); font-size: 0.76rem; padding: 3px 0; }
    .page-shell .mag-conn__past > summary:hover { color: var(--color-text, #0B1220); }
    .page-shell .mag-conn__code { margin-top: 8px; padding: 9px 10px; border-radius: 8px; border: 1px dashed var(--color-border, #D4DCE8); background: var(--color-bg, #FFFFFF); }
    .page-shell .mag-conn__code[data-state="done"] .mag-conn__hd { color: var(--color-success, #009473); }
    /* The code has to survive a narrow card without a horizontal scrollbar — it is 48
       characters and someone has to read it off the screen to paste it. */
    .page-shell .mag-conn__codebox { display: flex; align-items: center; gap: 8px; margin-top: 6px; }
    .page-shell .mag-conn__codebox code { flex: 1 1 auto; min-width: 0; font-family: ui-monospace, Menlo, monospace; font-size: 0.82rem; letter-spacing: 0.02em; word-break: break-all; background: var(--color-surface, #F4F7FB); border-radius: 6px; padding: 6px 8px; }
    .page-shell .mag-conn__countdown { margin: 6px 0 0; color: var(--color-text-muted, #4A5A78); }
    .page-shell .mag-csp-note__snippet { margin: 0 0 8px; padding: 10px 12px; background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); border-radius: 8px; overflow-x: auto; }
    .page-shell .mag-csp-note__snippet code { display: block; background: transparent; padding: 0; white-space: pre; line-height: 1.6; }
    .page-shell .mag-actions { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 2px; }
    .page-shell .mag-btn { appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: transparent; cursor: pointer; font: inherit; font-size: 0.78rem; font-weight: 600; padding: 6px 11px; border-radius: 8px; display: inline-flex; align-items: center; gap: 5px; color: var(--color-text, #0B1220); }
    .page-shell .mag-btn:hover { background: var(--color-surface, #F4F7FB); }
    .page-shell .mag-btn.danger { color: var(--color-danger, #DD4124); }
    .page-shell .mag-btn .material-symbols-outlined { font-size: 17px; }
    .page-shell .mag-btn--primary { border-color: var(--color-accent, #0072BA); color: var(--color-accent, #0072BA); font-weight: 700; }
    .page-shell .mag-btn--primary:hover { background: var(--color-accent-soft, rgba(0,114,186,0.10)); }
    .page-shell .mag-actions--sub { margin-top: 6px; }
    .page-shell .mag-actions--sub .mag-btn { font-size: 0.74rem; color: var(--color-text-muted, #4A5A78); }
    .mag-funnel-modal .mag-modal__body { max-height: 70vh; overflow-y: auto; }
    .mag-funnel { display: flex; flex-direction: column; gap: 12px; }
    .mag-funnel__row { display: flex; flex-direction: column; gap: 4px; }
    .mag-funnel__meta { display: flex; justify-content: space-between; font-size: 0.8rem; }
    .mag-funnel__label { font-weight: 600; color: var(--color-text-muted, #4A5A78); }
    .mag-funnel__val { font-weight: 700; color: var(--color-text, #0B1220); }
    .mag-funnel__pct { font-size: 0.72rem; font-weight: 500; color: var(--color-text-subtle, #6C7C9A); }
    .mag-funnel__track { height: 12px; border-radius: 999px; background: var(--color-surface-2, #EAF0F7); overflow: hidden; }
    .mag-funnel__bar { height: 100%; border-radius: 999px; background: var(--color-primary-600, #0072BA); transition: width 0.4s ease; }
    .mag-funnel__bar--drop { background: #7BC4C4; }

    .mag-modal-scrim { position: fixed; inset: 0; background: rgba(11,18,32,0.5); z-index: 2000; opacity: 0; transition: opacity 0.18s ease; }
    .mag-modal-scrim.open { opacity: 1; }
    .mag-modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%, -48%); z-index: 2001; display: flex; flex-direction: column; width: min(1680px, 95vw); height: min(920px, 92vh); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); border-radius: var(--radius-lg, 16px); box-shadow: 0 20px 60px rgba(11,18,32,0.3); opacity: 0; transition: opacity 0.18s ease, transform 0.18s ease; overflow: hidden; }
    .mag-modal.open { opacity: 1; transform: translate(-50%, -50%); }
    .mag-modal__head { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .mag-modal__title { font-family: var(--font-display, inherit); font-size: 1.05rem; font-weight: 600; }
    .mag-modal__close { appearance: none; border: 0; background: transparent; cursor: pointer; font-size: 1.5rem; line-height: 1; color: var(--color-text-muted, #4A5A78); width: 32px; height: 32px; border-radius: 8px; }
    .mag-modal__close:hover { background: var(--color-surface, #F4F7FB); }
    /* two-pane: section nav (sub-menu) + one panel at a time, so no giant single scroll */
    .mag-modal__main { flex: 1 1 auto; display: flex; min-height: 0; }
    .mag-modal__nav { flex: 0 0 auto; width: 188px; padding: 14px 10px; border-right: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7F9FC); display: flex; flex-direction: column; gap: 3px; overflow-y: auto; }
    .mag-modal__navitem { appearance: none; border: 0; background: transparent; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; text-align: left; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 9px; color: var(--color-text-muted, #4A5A78); }
    .mag-modal__navitem .material-symbols-outlined { font-size: 19px; }
    .mag-modal__navitem:hover { background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .mag-modal__navitem.is-active { background: var(--color-primary-600, #0072BA); color: #fff; }
    .mag-modal__body { flex: 1 1 auto; overflow-y: auto; padding: 20px 24px; min-width: 0; }
    /* live preview column — wide screens only; narrow keeps the footer Preview button */
    .mag-modal__preview { flex: 0 0 clamp(420px, 34vw, 720px); border-left: 1px solid var(--color-border, #D4DCE8); background: var(--color-surface, #F7F9FC); padding: 18px; overflow: hidden; }
    @media (max-width: 1199px) { .mag-modal__preview { display: none; } }
    .mag-tab[hidden] { display: none; }
    .mag-tab > .mag-modal__sec:first-child { margin-top: 0; padding-top: 0; border-top: 0; }
    .mag-modal__label { display: block; font-size: 0.8rem; font-weight: 600; margin: 14px 0 6px; }
    .mag-modal__label:first-child { margin-top: 0; }
    .mag-modal__input, .mag-modal__select { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.95rem; padding: 10px 12px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220); }
    .mag-modal__input:focus, .mag-modal__select:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .mag-modal__row { display: flex; gap: 12px; align-items: flex-end; }
    .mag-modal__row > div { flex: 1; }
    .mag-modal__color { width: 46px; height: 44px; padding: 3px; border: 1px solid var(--color-border, #D4DCE8); border-radius: 10px; background: var(--color-bg, #fff); cursor: pointer; }
    .mag-modal__hint { font-size: 0.74rem; color: var(--color-text-subtle, #6C7C9A); margin: 5px 0 0; }
    .mag-modal__foot { flex: 0 0 auto; display: flex; align-items: center; gap: 14px; padding: 13px 20px; border-top: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); }
    .mag-modal__error { flex: 1 1 auto; color: var(--color-danger, #DD4124); font-size: 0.82rem; margin: 0; min-height: 1em; }
    .mag-modal__dirty { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; font-weight: 600; color: var(--color-warning, #915E00); }
    .mag-modal__dirty .material-symbols-outlined { font-size: 15px; }
    .mag-modal__foot-btns { flex: 0 0 auto; display: flex; gap: 10px; }
    .mag-modal__btn { appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.9rem; font-weight: 600; padding: 9px 16px; border-radius: var(--radius-md, 10px); }
    .mag-modal__btn--ghost { background: transparent; color: var(--color-text-muted, #4A5A78); }
    .mag-modal__btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .mag-modal__btn--primary { background: var(--color-primary-600, #0072BA); color: #fff; }
    .mag-modal__btn--primary[disabled] { opacity: 0.6; cursor: default; }
    @media (max-width: 640px) {
      .mag-modal { width: 96vw; height: 92vh; }
      .mag-modal__main { flex-direction: column; }
      .mag-modal__nav { width: auto; flex-direction: row; overflow-x: auto; border-right: 0; border-bottom: 1px solid var(--color-border, #D4DCE8); }
      .mag-modal__navitem { flex: 0 0 auto; }
    }

    /* configurator: sections + segmented controls + CTA rows */
    .mag-modal__sec { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--color-border, #D4DCE8); }
    .mag-modal__sec-t { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); margin: 0 0 10px; }
    .mag-seg { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 6px; }
    .mag-seg label { position: relative; cursor: pointer; margin: 0; }
    .mag-seg input { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
    .mag-seg span { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 9px 4px; border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); font-size: 0.76rem; font-weight: 600; color: var(--color-text-muted, #4A5A78); text-align: center; transition: border-color .12s, background .12s, color .12s; }
    .mag-seg span .material-symbols-outlined { font-size: 20px; }
    .mag-seg label:hover span { border-color: var(--color-primary-600, #0072BA); }
    .mag-seg input:checked + span { border-color: var(--color-accent, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.12)); color: var(--color-accent, #0072BA); }
    .mag-seg input:focus-visible + span { box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .mag-cta { display: flex; flex-direction: column; gap: 8px; padding: 7px 0; }
    .mag-cta__main { display: flex; align-items: center; gap: 10px; }
    .mag-cta__tog { flex: 0 0 auto; display: flex; align-items: center; gap: 7px; width: 84px; font-size: 0.86rem; font-weight: 600; cursor: pointer; margin: 0; }
    .mag-cta__tog .material-symbols-outlined { font-size: 18px; color: var(--color-text-subtle, #6C7C9A); }
    .mag-cta__val { flex: 1 1 auto; min-width: 0; }
    .mag-cta__booksrc, .mag-cta__callsrc { flex: 0 0 auto; width: auto; }
    .mag-cta__calevent, .mag-cta__crtracker { flex: 1 1 auto; min-width: 0; }
    .mag-cta__note { flex: 1 1 auto; font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .mag-cta__opts { width: 100%; box-sizing: border-box; font: inherit; font-size: 0.86rem; resize: vertical; }
    .mag-cta__val:disabled, .mag-cta__opts:disabled { opacity: 0.5; }
    .mag-tog-row { display: flex; align-items: center; gap: 10px; }
    .mag-tog-row label { font-size: 0.9rem; font-weight: 600; cursor: pointer; margin: 0; }
    .mag-surface-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(84px, 1fr)); gap: 10px; margin-top: 8px; }
    .mag-surface-grid[hidden] { display: none; }
    .mag-surface-grid label { display: block; }
    #mag-f-inline-size[hidden] { display: none; }
    .mag-logo-drop { display: flex; align-items: center; gap: 12px; border: 1.5px dashed var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 12px; cursor: pointer; transition: border-color .12s, background .12s; }
    .mag-logo-drop:hover, .mag-logo-drop.is-dragover { border-color: var(--color-primary-600, #0072BA); background: var(--color-accent-soft, rgba(0,114,186,0.06)); }
    .mag-logo-drop__preview { flex: 0 0 auto; width: 48px; height: 48px; border-radius: 50%; overflow: hidden; display: grid; place-items: center; background: var(--color-surface, #F4F7FB); color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__preview img { width: 100%; height: 100%; object-fit: cover; }
    .mag-logo-drop__body { flex: 1 1 auto; min-width: 0; }
    .mag-logo-drop__t { margin: 0; font-size: 0.86rem; }
    .mag-logo-drop__browse { appearance: none; border: none; background: none; padding: 0; font: inherit; font-weight: 700; color: var(--color-accent, #0072BA); cursor: pointer; text-decoration: underline; }
    .mag-logo-drop__remove { flex: 0 0 auto; appearance: none; border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); cursor: pointer; width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: var(--color-text-subtle, #6C7C9A); }
    .mag-logo-drop__remove:hover { color: var(--color-danger, #DD4124); border-color: var(--color-danger, #DD4124); }
    .mag-logo-drop__remove .material-symbols-outlined { font-size: 17px; }
    .mag-logo-drop__remove[hidden] { display: none; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
function emptyState(icon, msg) {
  return `<div class="m5t-empty"><span class="material-symbols-outlined" aria-hidden="true">${icon}</span><p>${msg}</p></div>`;
}
function magnetStatsHTML(guid) {
  const s = state.stats[guid];
  if (!s || !s.opens && !s.leads) {
    return `<div class="mag-stats"><span><span class="material-symbols-outlined" aria-hidden="true">monitoring</span>No activity yet (30d)</span></div>`;
  }
  const fmt = (n) => Number(n || 0).toLocaleString();
  return `<div class="mag-stats" title="Trailing 30 days">
    <span><span class="material-symbols-outlined" aria-hidden="true">visibility</span><b>${fmt(s.opens)}</b>&nbsp;opens</span>
    <span><span class="material-symbols-outlined" aria-hidden="true">person_add</span><b>${fmt(s.leads)}</b>&nbsp;leads</span>
    ${s.completion_rate != null ? `<span><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><b>${s.completion_rate}%</b></span>` : ""}
  </div>`;
}
function installBlockHTML(m) {
  const a = state.install[m.guid];
  if (!a) return "";
  const unknown = a.unrecognized || [];
  const live = (a.traffic?.opens || 0) > 0;
  const canEdit = m.can_manage === true;
  const seenList = unknown.length ? `
    <div class="mag-install__seen">
      <div class="mag-install__seenhd">Seen requesting this magnet, not on the allow-list:</div>
      ${unknown.map((u) => `
        <div class="mag-install__row">
          <span class="mag-install__dom" title="${esc(u.domain)}">${esc(u.domain)}</span>
          <span class="mag-install__hits">${Number(u.hits || 0).toLocaleString()}&times;</span>
          ${canEdit ? `<button class="mag-btn" data-action="allow-domain" data-guid="${esc(m.guid)}" data-domain="${esc(u.domain)}">Allow</button>
          <button class="mag-btn" data-action="dismiss-domain" data-guid="${esc(m.guid)}" data-domain="${esc(u.domain)}" title="Stop showing this domain">Dismiss</button>` : ""}
        </div>`).join("")}
      <p class="mag-install__hint">Domains must be approved before this magnet will load on them. Only approve a domain you recognise — approving the wrong one lets that site use your magnet. Dismiss hides a domain from this list for good; it does not approve it.</p>
    </div>` : "";
  const nr = Number(a.no_referer?.hits || 0);
  const noRefererNote = nr ? `
    <p class="mag-install__hint">
      ${nr.toLocaleString()} request${nr === 1 ? "" : "s"} in the last ${Number(a.window_days || 30)} days arrived with no
      referrer, so we couldn't tell which site they came from. They were served. This is
      usually a site sending <code>Referrer-Policy: no-referrer</code>.
    </p>` : "";
  const dismissed = a.dismissed || [];
  const dismissedList = dismissed.length ? `
    <details class="mag-install__dismissed">
      <summary>Dismissed (${dismissed.length})</summary>
      ${dismissed.map((d) => `
        <div class="mag-install__row">
          <span class="mag-install__dom" title="${esc(d)}">${esc(d)}</span>
          ${canEdit ? `<button class="mag-btn" data-action="restore-domain" data-guid="${esc(m.guid)}" data-domain="${esc(d)}">Restore</button>` : ""}
        </div>`).join("")}
      <p class="mag-install__hint">Dismissing also covers subdomains — hiding <code>vercel.app</code> hides every preview URL under it.</p>
    </details>` : "";
  if (live) {
    const when = a.traffic.last_open_at ? new Date(a.traffic.last_open_at).toLocaleString() : "";
    return `<div class="mag-install" data-state="live">
      <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Live${when ? ` — last visitor ${esc(when)}` : ""}</div>
      ${seenList}
      ${noRefererNote}
      ${dismissedList}
    </div>`;
  }
  if (unknown.length) {
    return `<div class="mag-install" data-state="seen">
      <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">travel_explore</span>
        Installed somewhere we don't recognise</div>
      ${seenList}
      ${noRefererNote}
      ${dismissedList}
    </div>`;
  }
  return `<div class="mag-install" data-state="quiet">
    <div class="mag-install__hd"><span class="material-symbols-outlined" aria-hidden="true">help</span>Not seen yet</div>
    <p class="mag-install__hint">No visitor has loaded this magnet in the last ${Number(a.window_days || 30)} days. Either the snippet isn't on the site yet, or it is and the site's Content-Security-Policy is blocking it — see the note above.</p>
    ${noRefererNote}
    ${dismissedList}
  </div>`;
}
async function loadInstallActivity() {
  await Promise.all(state.magnets.map(async (m) => {
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/install-activity`);
      const data = await res.json().catch(() => ({}));
      if (!data.ok) return;
      state.install[m.guid] = data;
      const host = document.querySelector(`.mag-card[data-guid="${CSS.escape(m.guid)}"] .mag-install-slot`);
      if (host) host.innerHTML = installBlockHTML(m);
    } catch (err) {
      console.warn("[magnets] install activity failed:", m.guid, err);
    }
  }));
}
const CONN_POLL_MS = 5e3;
const CONN_STATUS = {
  ACTIVE: { label: "Connected", icon: "check_circle", tone: "live" },
  PENDING: { label: "Waiting to connect", icon: "hourglass_empty", tone: "pending" },
  REVOKED: { label: "Disconnected", icon: "link_off", tone: "off" },
  // A PENDING code whose window has closed. Nothing sweeps these rows, so without a
  // state of their own they sat in the list claiming to be "Waiting to connect"
  // indefinitely — see connPast().
  EXPIRED: { label: "Expired", icon: "timer_off", tone: "off" }
};
function connIsPast(c) {
  if (!c) return false;
  if (c.status === "REVOKED") return true;
  return c.status === "PENDING" && c.codeLive === false;
}
function connRowHTML(m, c) {
  const expiredCode = c.status === "PENDING" && c.codeLive === false;
  const s = (expiredCode ? CONN_STATUS.EXPIRED : CONN_STATUS[c.status]) || { label: c.status, icon: "help", tone: "off" };
  const when = c.lastSeen ? new Date(c.lastSeen).toLocaleString() : "";
  const title = c.host ? esc(c.host) : expiredCode || c.status === "REVOKED" ? "Code was never used" : "Waiting for a site to use this code";
  const sub = [c.siteName ? esc(c.siteName) : "", when ? `last seen ${esc(when)}` : ""].filter(Boolean).join(" — ");
  return `
    <div class="mag-conn__row" data-conn="${esc(c.guid)}" data-state="${s.tone}">
      <span class="mag-conn__icon material-symbols-outlined" aria-hidden="true">${s.icon}</span>
      <span class="mag-conn__site">
        <span class="mag-conn__host">${title}</span>
        ${sub ? `<span class="mag-conn__sub">${sub}</span>` : ""}
      </span>
      <span class="mag-conn__status">${esc(s.label)}</span>
      ${m.can_manage !== true ? "" : connIsPast(c) ? `<button class="mag-btn" data-action="clear-connection" data-guid="${esc(m.guid)}" data-conn="${esc(c.guid)}"
                   data-label="${esc(c.host || "this unused code")}"
                   title="Remove this finished record from the list">
             Clear
           </button>` : `<button class="mag-btn" data-action="revoke-connection" data-guid="${esc(m.guid)}" data-conn="${esc(c.guid)}"
                   title="${c.status === "PENDING" ? "Cancel this pairing code" : "Disconnect this site and revoke its key"}">
             ${c.status === "PENDING" ? "Cancel" : "Disconnect"}
           </button>`}
    </div>`;
}
function connCodeHTML(m) {
  const panel = state.pairing[m.guid];
  if (!panel) return "";
  if (panel.error) {
    return `<div class="mag-conn__code" data-state="error">
      <p class="mag-install__hint">${esc(panel.error)}</p>
      <button class="mag-btn" data-action="pair-start" data-guid="${esc(m.guid)}">Try again</button>
    </div>`;
  }
  if (panel.connected) {
    return `<div class="mag-conn__code" data-state="done">
      <div class="mag-conn__hd"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
        Connected${panel.connectedHost ? ` — ${esc(panel.connectedHost)}` : ""}</div>
      <p class="mag-install__hint">The site is paired and its domain has been added to this magnet.</p>
    </div>`;
  }
  const left = Math.max(0, Math.ceil((panel.expiresAt - Date.now()) / 1e3));
  if (left <= 0) {
    return `<div class="mag-conn__code" data-state="expired">
      <p class="mag-install__hint">That code expired. Codes are shown once and can't be retrieved, so generate a new one.</p>
      <button class="mag-btn mag-btn--primary" data-action="pair-start" data-guid="${esc(m.guid)}">Generate a new code</button>
    </div>`;
  }
  const mins = String(Math.floor(left / 60));
  const secs = String(left % 60).padStart(2, "0");
  return `<div class="mag-conn__code" data-state="live">
    <div class="mag-conn__hd">Your pairing code</div>
    <div class="mag-conn__codebox">
      <code data-x="code">${esc(panel.code)}</code>
      <button class="mag-btn" data-action="copy-code" data-guid="${esc(m.guid)}" title="Copy pairing code">
        <span class="material-symbols-outlined" aria-hidden="true">content_copy</span>
      </button>
    </div>
    <p class="mag-conn__countdown">Expires in <strong data-x="countdown">${mins}:${secs}</strong>. Waiting for your site to connect&hellip;</p>
    <p class="mag-install__hint">This code is shown once and can't be shown again — if you lose it, generate another. It only works for this magnet.</p>
  </div>`;
}
function connectionsBlockHTML(m) {
  const data = state.connections[m.guid];
  if (!data) return "";
  if (data.failed) {
    return `<div class="mag-conn">
      <div class="mag-conn__hd">
        <span class="material-symbols-outlined" aria-hidden="true">lan</span>Connected sites
      </div>
      <p class="mag-install__hint">Couldn't load connected sites just now. Reload to try again — this doesn't affect the magnet itself.</p>
    </div>`;
  }
  const list = data.connections || [];
  const visible = list.filter((c) => c.status !== "PENDING" || m.can_manage === true);
  const activeCount = list.filter((c) => c.status === "ACTIVE").length;
  const panel = connCodeHTML(m);
  const live = visible.filter((c) => !connIsPast(c));
  const past = visible.filter((c) => connIsPast(c));
  const rows = live.length ? live.map((c) => connRowHTML(m, c)).join("") : `<p class="mag-install__hint">No sites connected yet. On WordPress, connecting a site pairs it without pasting the snippet by hand.</p>`;
  const pastBlock = past.length ? `
    <details class="mag-conn__past">
      <summary>${past.length} earlier ${past.length === 1 ? "code or disconnected site" : "codes and disconnected sites"}</summary>
      ${past.map((c) => connRowHTML(m, c)).join("")}
    </details>` : "";
  return `<div class="mag-conn">
    <div class="mag-conn__hd">
      <span class="material-symbols-outlined" aria-hidden="true">lan</span>
      Connected sites${activeCount ? ` (${activeCount})` : ""}
    </div>
    ${rows}
    ${pastBlock}
    ${panel}
    ${m.can_manage === true && !panel ? `
      <button class="mag-btn" data-action="pair-start" data-guid="${esc(m.guid)}">
        <span class="material-symbols-outlined" aria-hidden="true">add_link</span>Connect a WordPress site
      </button>` : ""}
  </div>`;
}
function repaintConnections(m) {
  const host = document.querySelector(`.mag-card[data-guid="${CSS.escape(m.guid)}"] .mag-conn-slot`);
  if (host) host.innerHTML = connectionsBlockHTML(m);
}
async function fetchConnections(m) {
  const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/connections`);
  const data = await res.json().catch(() => ({}));
  if (!data.ok) throw new Error(data.error || "Could not load connected sites");
  return data;
}
async function loadConnections() {
  await Promise.all(state.magnets.map(async (m) => {
    try {
      state.connections[m.guid] = await fetchConnections(m);
    } catch (err) {
      console.warn("[magnets] connections failed:", m.guid, err);
      state.connections[m.guid] = { failed: true };
    }
    repaintConnections(m);
  }));
}
function stopPairingTimer() {
  if (!state.pairTimer) return;
  clearInterval(state.pairTimer);
  state.pairTimer = null;
}
function __stopPairingTimerForTests() {
  stopPairingTimer();
}
function cardMounted(guid) {
  return !!document.querySelector(`.mag-card[data-guid="${CSS.escape(guid)}"] .mag-conn-slot`);
}
function ensurePairingTimer() {
  if (state.pairTimer) return;
  let sinceLastPoll = 0;
  state.pairTimer = setInterval(async () => {
    for (const guid of Object.keys(state.pairing)) {
      if (!cardMounted(guid)) delete state.pairing[guid];
    }
    const open = Object.keys(state.pairing);
    if (!open.length) {
      stopPairingTimer();
      return;
    }
    const alive = open.some((g) => {
      const p = state.pairing[g];
      return !p.connected && !p.error && p.expiresAt - Date.now() > 0;
    });
    if (!alive) {
      open.forEach((g) => {
        const m = state.magnets.find((x) => x.guid === g);
        if (m) repaintConnections(m);
      });
      stopPairingTimer();
      return;
    }
    sinceLastPoll += 1e3;
    const poll = sinceLastPoll >= CONN_POLL_MS;
    if (poll) sinceLastPoll = 0;
    for (const guid of open) {
      const m = state.magnets.find((x) => x.guid === guid);
      const panel = state.pairing[guid];
      if (!m || !panel) continue;
      const expired = panel.expiresAt - Date.now() <= 0;
      if (poll && !panel.connected && !panel.error && !expired) {
        try {
          const data = await fetchConnections(m);
          state.connections[guid] = data;
          const hit = (data.connections || []).find((c) => c.guid === panel.connectionGuid && c.status === "ACTIVE");
          if (hit) {
            state.pairing[guid] = { connected: true, connectionGuid: panel.connectionGuid, connectedHost: hit.host };
            toast(`${hit.host || "Your site"} connected`, "success");
          }
        } catch {
        }
      }
      repaintConnections(m);
    }
  }, 1e3);
}
async function startPairing(m) {
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/pairing-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      state.pairing[m.guid] = { error: data.message || data.error || "Could not generate a pairing code" };
      repaintConnections(m);
      return;
    }
    state.pairing[m.guid] = {
      code: data.pairingCode,
      connectionGuid: data.connectionGuid,
      expiresAt: new Date(data.expiresAt).getTime()
    };
    try {
      state.connections[m.guid] = await fetchConnections(m);
    } catch {
    }
    repaintConnections(m);
    ensurePairingTimer();
  } catch {
    state.pairing[m.guid] = { error: "Could not reach the server. Try again." };
    repaintConnections(m);
  }
}
async function copyPairingCode(m) {
  const code = state.pairing[m.guid]?.code;
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code);
    toast("Pairing code copied", "success");
  } catch {
    toast("Copy failed — select the code and copy it manually", "danger");
  }
}
async function clearConnection(m, connectionGuid, label) {
  if (!window.confirm(
    `Clear the record for ${label || "this connection"}?

It is removed from this list for good. This only tidies up the history — the site is already disconnected, so nothing about access changes.`
  )) return;
  try {
    const res = await fetch(
      `${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/connections/${encodeURIComponent(connectionGuid)}`,
      { method: "DELETE" }
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      toast(data.message || data.error || "Could not clear that record", "danger");
      return;
    }
    toast("Record cleared", "success");
    try {
      state.connections[m.guid] = await fetchConnections(m);
    } catch {
    }
    repaintConnections(m);
  } catch {
    toast("Could not reach the server", "danger");
  }
}
async function revokeConnection(m, connectionGuid) {
  const row = (state.connections[m.guid]?.connections || []).find((c) => c.guid === connectionGuid);
  const isPending = row?.status === "PENDING";
  const what = isPending ? "Cancel this pairing code?" : `Disconnect ${row?.host || "this site"}?`;
  const detail = isPending ? "The code stops working immediately." : "Its key stops working immediately and the plugin will show as disconnected. The domain stays on the allow-list — remove it separately if you want the magnet off that site.";
  if (!window.confirm(`${what}

${detail}`)) return;
  try {
    const res = await fetch(
      `${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/connections/${encodeURIComponent(connectionGuid)}/revoke`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" }
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      toast(data.message || data.error || "Could not disconnect", "danger");
      return;
    }
    if (state.pairing[m.guid]?.connectionGuid === connectionGuid) delete state.pairing[m.guid];
    toast(isPending ? "Pairing code cancelled" : "Site disconnected", "success");
    try {
      state.connections[m.guid] = await fetchConnections(m);
    } catch {
    }
    repaintConnections(m);
  } catch {
    toast("Could not reach the server", "danger");
  }
}
function magnetCardHTML(m) {
  const showOwner = state.owners.length > 1 || AuthController.getMemberships().length > 1;
  const domains = (m.domains || []).filter(Boolean);
  const canEdit = m.can_manage === true;
  return `
    <div class="mag-card" data-guid="${esc(m.guid)}">
      <div class="mag-card__top">
        <span class="mag-swatch" style="background:${esc(m.theme_color || "#0072BA")}"></span>
        <span class="mag-card__hd">
          <div class="mag-name" title="${esc(m.name)}">${esc(m.name)}</div>
          ${showOwner && m.owner_name ? `<div class="mag-owner">${esc(m.owner_name)}</div>` : ""}
        </span>
        <span class="mag-badge" data-s="${esc(m.status)}">${esc(m.status)}</span>
      </div>
      <span class="mag-mode"><span class="material-symbols-outlined" aria-hidden="true">${MODE_ICON[m.display_mode] || "chat"}</span>${esc(MODE_LABEL[m.display_mode] || "Chat bubble")}${m.ab?.enabled ? '&nbsp;&nbsp;<span class="mag-ab-chip"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B</span>' : ""}${(m.notify_emails || []).length ? `&nbsp;&nbsp;<a class="mag-alert-chip" href="#/settings/notifications" title="Lead alerts to ${(m.notify_emails || []).length} email${(m.notify_emails || []).length === 1 ? "" : "s"}. Manage in Settings."><span class="material-symbols-outlined" aria-hidden="true">notifications_active</span>${(m.notify_emails || []).length}</a>` : ""}</span>
      ${magnetStatsHTML(m.guid)}
      <div class="mag-domains">${domains.length ? domains.map((d) => esc(d)).join(", ") : "<span>No domains set. Add yours to go live.</span>"}</div>
      <div class="mag-install-slot">${installBlockHTML(m)}</div>
      <div class="mag-conn-slot">${connectionsBlockHTML(m)}</div>
      <div class="mag-embed">
        <input type="text" readonly value="${esc(embedFor(m.guid))}" aria-label="Embed snippet">
        <button class="mag-btn" data-action="copy" data-guid="${esc(m.guid)}" title="Copy embed snippet"><span class="material-symbols-outlined" aria-hidden="true">content_copy</span></button>
      </div>
      ${installGuideHTML(m.guid)}
      ${cspNoteHTML()}
      ${m.display_mode === "inline" ? `<div class="mag-inline-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><span>Inline mode: also place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> where you want it to appear.</span></div>` : ""}
      <div class="mag-actions">
        <button class="mag-btn" data-action="preview" data-guid="${esc(m.guid)}"><span class="material-symbols-outlined" aria-hidden="true">visibility</span>Preview</button>
        <button class="mag-btn" data-action="funnel" data-guid="${esc(m.guid)}" title="Which question loses the most visitors"><span class="material-symbols-outlined" aria-hidden="true">filter_alt</span>Funnel</button>
        ${canEdit ? `
        <button class="mag-btn mag-btn--primary" data-action="edit" data-guid="${esc(m.guid)}"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Edit</button>` : ""}
      </div>
      ${canEdit ? `
      <div class="mag-actions mag-actions--sub">
        <button class="mag-btn" data-action="flow" data-guid="${esc(m.guid)}" title="Edit the conversation flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
        ${m.status === "DRAFT" ? "" : `
        <button class="mag-btn" data-action="toggle" data-guid="${esc(m.guid)}">${m.status === "ENABLED" ? '<span class="material-symbols-outlined" aria-hidden="true">pause</span>Disable' : '<span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>Enable'}</button>`}
        <button class="mag-btn danger" data-action="delete" data-guid="${esc(m.guid)}"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
      </div>` : ""}
    </div>`;
}
function render() {
  if (inPortfolio()) {
    return pickerPageHTML({
      section: "magnets",
      title: "Your Magnets",
      description: "Pick a client to view and manage their magnets."
    });
  }
  ensureStyles();
  return `
    <div class="page-shell" data-section="magnets">
      <div class="page-header">
        <div class="page-header-text">
          <h1 class="page-title">Your Magnets</h1>
          <p class="page-description">Conversational lead-capture widgets you embed on your site.</p>
        </div>
        <div class="mag-header-actions" style="display:flex;gap:10px;">
          <button class="btn btn-secondary" id="mag-template-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">auto_awesome</span>
            Template
          </button>
          <button class="btn btn-primary" id="mag-new-btn" type="button" style="display:none">
            <span class="material-symbols-outlined" aria-hidden="true">add</span>
            New magnet
          </button>
        </div>
      </div>
      <div class="dashboard-card">
        <div class="card-body" id="mag-body">
          ${emptyState("hourglass_empty", "Loading magnets…")}
        </div>
      </div>
    </div>`;
}
async function init() {
  if (inPortfolio()) {
    const parked = peekPendingTemplate();
    if (parked) {
      const shell = document.querySelector(".page-shell .page-header-text .page-description");
      if (shell) shell.textContent = `Template picked: ${parked.name}. Choose the client to build it for.`;
    }
    const fmtN = (n) => Number(n || 0).toLocaleString();
    return initPicker(apiBase(), [
      { h: "Magnets", td: (r) => `${fmtN(r.magnets.active)}<span style="color:var(--color-text-subtle,#6C7C9A)">/${fmtN(r.magnets.total)}</span>` },
      { h: "Leads · wk", td: (r) => fmtN(r.leads.this_week) },
      { h: "Leads · total", td: (r) => fmtN(r.leads.total) }
    ], { emptyMsg: "No client orgs yet. Create one under Clients, then provision its magnets here." });
  }
  calEventTypes = null;
  crTrackers = null;
  document.getElementById("mag-new-btn")?.addEventListener("click", startNewMagnet);
  document.getElementById("mag-template-btn")?.addEventListener("click", startFromTemplate);
  const body = document.getElementById("mag-body");
  body?.addEventListener("click", onGridClick);
  await load();
  const pending = takePendingTemplate();
  if (pending && state.canProvision) useTemplate(pending);
}
function paintGrid(host) {
  if (!host) return;
  host.innerHTML = `<div class="mag-grid">${state.magnets.map(magnetCardHTML).join("")}</div>`;
  capList(host.querySelector(".mag-grid"), { rowSelector: ".mag-card", noun: "magnets" });
}
async function load() {
  const body = document.getElementById("mag-body");
  if (!body) return;
  try {
    const [res, sres] = await Promise.all([
      fetch(`${apiBase()}/m5t/v5/magnets`),
      fetch(`${apiBase()}/m5t/v5/magnets/stats`).catch(() => null)
    ]);
    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.message || "Failed to load");
    state.magnets = data.magnets || [];
    state.owners = data.owners || [];
    state.canProvision = !!data.canProvision;
    state.canManage = !!data.canManage;
    state.primaryOrgGuid = data.primaryOrgGuid || null;
    const sdata = sres ? await sres.json().catch(() => ({})) : {};
    state.stats = sdata?.stats || {};
  } catch (err) {
    body.innerHTML = emptyState("error", "Could not load your magnets. Please try again.");
    return;
  }
  const newBtn = document.getElementById("mag-new-btn");
  if (newBtn) newBtn.style.display = state.canProvision ? "" : "none";
  const tplBtn = document.getElementById("mag-template-btn");
  if (tplBtn) tplBtn.style.display = state.canProvision ? "" : "none";
  if (!state.magnets.length) {
    body.innerHTML = emptyState("widgets", state.canProvision ? "No magnets yet. Click “New magnet” to create your first." : "No magnets yet.");
    return;
  }
  paintGrid(body);
  loadInstallActivity();
  loadConnections();
}
async function provisionDraft(ownerGuid) {
  const headers = { "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() };
  const body = { status: "DRAFT" };
  if (ownerGuid) body.owner_guid = ownerGuid;
  const res = await fetch(`${apiBase()}/m5t/v5/magnets`, { method: "POST", headers, body: JSON.stringify(body) });
  let data = {};
  try {
    data = await res.json();
  } catch {
  }
  if (!res.ok || !data.ok) throw new Error(data.message || `Could not start a new magnet (${res.status})`);
  return data.magnet;
}
async function applyTemplate(guid, template) {
  const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(guid)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: template.name, ...template.appearance, steps: template.steps })
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
  }
  if (!res.ok || !data.ok) throw new Error(data.message || `Could not apply the ${template.name} template (${res.status})`);
}
async function provisionAndOpen(ownerGuid, template) {
  const newBtn = document.getElementById("mag-new-btn");
  const tplBtn = document.getElementById("mag-template-btn");
  if (newBtn) newBtn.disabled = true;
  if (tplBtn) tplBtn.disabled = true;
  let provisionedGuid = null;
  try {
    let magnet = await provisionDraft(ownerGuid);
    provisionedGuid = magnet.guid;
    if (template) {
      await applyTemplate(magnet.guid, template);
      await load();
      magnet = state.magnets.find((m) => m.guid === magnet.guid) || magnet;
    } else {
      state.magnets = [magnet, ...state.magnets];
      const body = document.getElementById("mag-body");
      paintGrid(body);
    }
    openModal(magnet, void 0, { freshDraft: true });
  } catch (err) {
    if (provisionedGuid) {
      fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(provisionedGuid)}`, { method: "DELETE" }).catch(() => {
      });
    }
    toast(err.message || "Could not start a new magnet", "danger");
  } finally {
    if (newBtn) newBtn.disabled = false;
    if (tplBtn) tplBtn.disabled = false;
  }
}
function openOwnerPickerModal(template) {
  const scrim = document.createElement("div");
  scrim.className = "mag-modal-scrim";
  scrim.innerHTML = `
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="Choose client" style="max-width:420px">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${template ? `New magnet from “${esc(template.name)}”` : "New magnet"}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <label class="mag-modal__label" for="mag-owner-pick">Client / workspace</label>
        <select class="mag-modal__select" id="mag-owner-pick">
          ${state.owners.map((o) => `<option value="${esc(o.guid)}"${o.guid === state.primaryOrgGuid ? " selected" : ""}>${esc(o.name || o.guid)}</option>`).join("")}
        </select>
        <p class="mag-modal__hint">Which client is this magnet for? You can't change this later.</p>
      </div>
      <div class="mag-modal__foot">
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="continue">Continue</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    scrim.querySelector(".mag-modal").classList.add("open");
  });
  const doClose = () => {
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 180);
    document.removeEventListener("keydown", onKey);
  };
  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      doClose();
    }
  }
  document.addEventListener("keydown", onKey);
  scrim.querySelector(".mag-modal__close").addEventListener("click", doClose);
  scrim.querySelector('[data-x="cancel"]').addEventListener("click", doClose);
  scrim.querySelector('[data-x="continue"]').addEventListener("click", () => {
    const guid = scrim.querySelector("#mag-owner-pick").value;
    doClose();
    provisionAndOpen(guid, template);
  });
}
function soleProvisionableOwner() {
  return state.owners.length === 1 ? state.owners[0].guid : null;
}
function startNewMagnet() {
  if (state.owners.length > 1) {
    openOwnerPickerModal();
    return;
  }
  provisionAndOpen(soleProvisionableOwner());
}
function useTemplate(template) {
  if (state.owners.length > 1) {
    openOwnerPickerModal(template);
    return;
  }
  provisionAndOpen(soleProvisionableOwner(), template);
}
function startFromTemplate() {
  openTemplateGallery(useTemplate);
}
function onGridClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const guid = btn.dataset.guid;
  const m = state.magnets.find((x) => x.guid === guid);
  const action = btn.dataset.action;
  if (action === "copy") return copyEmbed(guid);
  if (!m) return;
  if (action === "preview") return openPreviewModal(() => magnetToPackage(m));
  if (action === "funnel") return openFunnelModal(m);
  if (action === "edit") return openModal(m);
  if (action === "flow") return openModal(m, "flow");
  if (action === "allow-domain") return allowDomain(m, btn.dataset.domain);
  if (action === "dismiss-domain") return dismissDomain(m, btn.dataset.domain);
  if (action === "restore-domain") return restoreDomain(m, btn.dataset.domain);
  if (action === "pair-start") return startPairing(m);
  if (action === "copy-code") return copyPairingCode(m);
  if (action === "revoke-connection") return revokeConnection(m, btn.dataset.conn);
  if (action === "clear-connection") return clearConnection(m, btn.dataset.conn, btn.dataset.label);
  if (action === "toggle") return toggleStatus(m);
  if (action === "delete") return removeMagnet(m);
}
async function copyEmbed(guid) {
  try {
    await navigator.clipboard.writeText(embedFor(guid));
    toast("Embed snippet copied", "success");
  } catch {
    toast("Copy failed", "danger");
  }
}
function stepFunnelHTML(data) {
  const total = Number(data?.total_steps) || 0;
  const byPos = {};
  (Array.isArray(data?.funnel) ? data.funnel : []).forEach((r) => {
    byPos[r.position] = Number(r.reached) || 0;
  });
  if (!total || !Object.keys(byPos).length) {
    return `<p class="mag-modal__hint" style="margin:0">No step activity yet in this window. As visitors answer questions, drop-off by step will appear here.</p>`;
  }
  const max = Math.max(1, byPos[1] || 0);
  const rows = [];
  for (let p = 1; p <= total; p++) {
    const n = byPos[p] || 0;
    const pct = Math.min(100, Math.round(n / max * 100));
    rows.push(`
      <div class="mag-funnel__row">
        <div class="mag-funnel__meta">
          <span class="mag-funnel__label">Step ${p} of ${total}</span>
          <span class="mag-funnel__val">${n.toLocaleString()} <span class="mag-funnel__pct">${pct}%</span></span>
        </div>
        <div class="mag-funnel__track"><div class="mag-funnel__bar${p === 1 ? "" : " mag-funnel__bar--drop"}" style="width:${pct}%"></div></div>
      </div>`);
  }
  return `<div class="mag-funnel">${rows.join("")}</div>`;
}
async function openFunnelModal(m) {
  const scrim = document.createElement("div");
  scrim.className = "mag-modal-scrim";
  scrim.innerHTML = `
    <div class="mag-modal mag-funnel-modal" role="dialog" aria-modal="true" aria-label="Step funnel for ${esc(m.name)}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">Step funnel — ${esc(m.name)}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__body" style="padding:20px">
        <p class="mag-modal__hint" style="margin-top:0">How many visitors reached each question, last 30 days. A big drop between two steps is where people bail.</p>
        <div id="mag-funnel-body">${emptyState("hourglass_empty", "Loading…")}</div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    scrim.querySelector(".mag-modal").classList.add("open");
  });
  const close = () => {
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 180);
    document.removeEventListener("keydown", onKey);
  };
  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  }
  document.addEventListener("keydown", onKey);
  scrim.querySelector(".mag-modal__close").addEventListener("click", close);
  scrim.addEventListener("click", (e) => {
    if (e.target === scrim) close();
  });
  const bodyEl = scrim.querySelector("#mag-funnel-body");
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/step-funnel`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.message || `Failed (${res.status})`);
    bodyEl.innerHTML = stepFunnelHTML(data);
  } catch (err) {
    bodyEl.innerHTML = `<p class="mag-modal__hint" style="margin:0">Could not load the funnel. Please try again.</p>`;
  }
}
async function allowDomain(m, domain) {
  const add = String(domain || "").trim().toLowerCase();
  if (!add) return;
  if (!window.confirm(`Allow ${add} to load this magnet?

Only do this for a site you recognise — anyone can put this magnet's embed code on a page.`)) return;
  const next = [.../* @__PURE__ */ new Set([...(m.domains || []).filter(Boolean), add])];
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domains: next })
    });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    toast(`${add} allowed`, "success");
  } catch {
    toast("Could not allow that domain", "danger");
    return;
  }
  try {
    await load();
  } catch (e) {
    console.warn("[magnets] refresh after allow-domain failed:", e);
  }
}
async function dismissDomain(m, domain) {
  const host = String(domain || "").trim().toLowerCase();
  if (!host) return;
  const parts = host.split(".");
  const parent = parts.length > 2 ? parts.slice(-2).join(".") : null;
  let target = host;
  if (parent && window.confirm(
    `Hide ${host} from this list?

OK — hide every domain under ${parent} too (covers preview/staging URLs that change every deploy).
Cancel — hide only ${host}.`
  )) target = parent;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/install-activity/dismiss`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain: target })
    });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    toast(`${target} hidden from this list`, "success");
  } catch {
    toast("Could not dismiss that domain", "danger");
    return;
  }
  await refreshInstallActivity(m);
}
async function restoreDomain(m, domain) {
  const host = String(domain || "").trim().toLowerCase();
  if (!host) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/install-activity/restore`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain: host })
    });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    toast(`${host} will show again`, "success");
  } catch {
    toast("Could not restore that domain", "danger");
    return;
  }
  await refreshInstallActivity(m);
}
async function refreshInstallActivity(m) {
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}/install-activity`);
    const data = await res.json().catch(() => ({}));
    if (!data.ok) return;
    state.install[m.guid] = data;
    const host = document.querySelector(`.mag-card[data-guid="${CSS.escape(m.guid)}"] .mag-install-slot`);
    if (host) host.innerHTML = installBlockHTML(m);
  } catch (err) {
    console.warn("[magnets] install refresh failed:", err);
  }
}
async function toggleStatus(m) {
  if (m.status === "DRAFT") {
    toast("Open Edit and Save to publish a draft magnet.", "info");
    return;
  }
  const next = m.status === "ENABLED" ? "DISABLED" : "ENABLED";
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next })
    });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    toast(next === "ENABLED" ? "Magnet enabled" : "Magnet disabled", "success");
  } catch {
    toast("Update failed", "danger");
    return;
  }
  try {
    await load();
  } catch (e) {
    console.warn("[magnets] refresh after status toggle failed:", e);
  }
}
async function removeMagnet(m) {
  if (!window.confirm(`Delete “${m.name}”? Visitors will no longer see this magnet.`)) return;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(m.guid)}`, { method: "DELETE" });
    if (!(await res.json().catch(() => ({}))).ok) throw new Error();
    toast("Magnet deleted", "success");
  } catch {
    toast("Delete failed", "danger");
    return;
  }
  try {
    await load();
  } catch (e) {
    console.warn("[magnets] refresh after delete failed:", e);
  }
}
function collectAppearance(scrim) {
  const actions = [];
  scrim.querySelectorAll(".mag-cta").forEach((row) => {
    if (!row.querySelector(".mag-cta__on").checked) return;
    const type = row.dataset.type;
    const kind = row.dataset.kind;
    const valEl = row.querySelector(".mag-cta__val");
    const value = valEl ? valEl.value.trim() : "";
    if (kind === "value") {
      if (type === "call" && row.querySelector(".mag-cta__callsrc")?.value === "callrail") {
        const sel = row.querySelector(".mag-cta__crtracker");
        const number = sel?.value || "";
        const opt = sel?.selectedOptions?.[0];
        if (number) {
          actions.push({ type, value: number, config: {
            source: "callrail",
            ...opt?.dataset?.trackerId ? { tracker_id: opt.dataset.trackerId } : {},
            ...opt?.dataset?.trackerName ? { tracker_name: opt.dataset.trackerName } : {}
          } });
        }
      } else if (value) actions.push({ type, value });
    } else if (kind === "book") {
      if (row.querySelector(".mag-cta__booksrc")?.value === "calendly") {
        const sel = row.querySelector(".mag-cta__calevent");
        const url = sel?.value || "";
        const name = (sel?.selectedOptions?.[0]?.textContent || "").trim();
        actions.push({ type, config: { source: "calendly", ...url ? { calendly_url: url } : {}, ...url && name ? { event_name: name } : {} } });
      } else {
        const a = { type };
        if (value) {
          if (/^https?:\/\//i.test(value)) a.value = value;
          else a.config = { meeting_label: value };
        }
        actions.push(a);
      }
    } else if (kind === "support") {
      const options = (row.querySelector(".mag-cta__opts")?.value || "").split("\n").map((s) => s.trim()).filter(Boolean).map((label) => ({ label }));
      const a = { type };
      if (options.length) a.config = { options };
      actions.push(a);
    } else {
      actions.push({ type });
    }
  });
  const payload = {
    display_mode: scrim.querySelector('input[name="mag-display"]:checked')?.value || "chat",
    trigger: collectTrigger(scrim),
    theme_mode: scrim.querySelector('input[name="mag-theme"]:checked')?.value || "auto",
    title: scrim.querySelector("#mag-f-title").value.trim(),
    theme_color: scrim.querySelector("#mag-f-color").value,
    subtitle: scrim.querySelector("#mag-f-subtitle").value,
    // '' legitimately hides the line
    launcher_label: scrim.querySelector("#mag-f-launcher").value.trim(),
    logo_url: scrim.querySelector("#mag-f-logo").value.trim(),
    logo_fit: scrim.querySelector("#mag-f-logo-fit")?.value === "contain" ? "contain" : "cover",
    summary: scrim.querySelector("#mag-f-summary").checked,
    summary_heading: scrim.querySelector("#mag-f-summary-heading").value.trim(),
    home: scrim.querySelector("#mag-f-home").checked,
    welcome: scrim.querySelector("#mag-f-welcome").value,
    // '' legitimately clears it
    ab: collectAB(scrim),
    actions,
    // Brand theming + inline sizing + post-submit + misc (all optional; empty clears server-side).
    font: scrim.querySelector("#mag-f-font").value.trim(),
    theme_vars: collectThemeVars(scrim),
    // {} when the toggle is off → cleared
    inline_width: scrim.querySelector("#mag-f-inline-w").value.trim(),
    inline_height: scrim.querySelector("#mag-f-inline-h").value.trim(),
    hide_launcher: scrim.querySelector("#mag-f-hide-launcher").checked,
    input_placeholder: scrim.querySelector("#mag-f-input-ph").value,
    summary_confirm_label: scrim.querySelector("#mag-f-summary-confirm").value.trim(),
    success_title: scrim.querySelector("#mag-f-success-title").value.trim(),
    success_text: scrim.querySelector("#mag-f-success-text").value,
    // '' legitimately clears it
    success_cta: collectSuccessCta(scrim)
    // {} clears server-side
  };
  if (payload.trigger === void 0) delete payload.trigger;
  return payload;
}
const LOGO_MAX_DIM = 512;
const LOGO_ACCEPT = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
const LOGO_MAX_SOURCE_BYTES = 8 * 1024 * 1024;
function fileToDownscaledDataUri(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read that file."));
    reader.onload = () => {
      img.onerror = () => reject(new Error("That file isn’t a readable image."));
      img.onload = () => {
        const scale = Math.min(1, LOGO_MAX_DIM / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
function wireLogoUpload(scrim, magnet) {
  const drop = scrim.querySelector("#mag-logo-drop");
  if (!drop) return;
  const fileInput = scrim.querySelector("#mag-f-logo-file");
  const browseBtn = scrim.querySelector("#mag-logo-browse");
  const removeBtn = scrim.querySelector("#mag-logo-remove");
  const preview = scrim.querySelector("#mag-logo-preview");
  const statusEl = scrim.querySelector("#mag-logo-status");
  const urlInput = scrim.querySelector("#mag-f-logo");
  const setStatus = (msg, isError) => {
    statusEl.textContent = msg;
    statusEl.style.color = isError ? "var(--color-danger, #DD4124)" : "";
  };
  const setPreview = (url) => {
    preview.innerHTML = url ? `<img src="${esc(url)}" alt="">` : `<span class="material-symbols-outlined" aria-hidden="true">image</span>`;
    removeBtn.hidden = !url;
  };
  const touchUrlField = (value) => {
    urlInput.value = value;
    urlInput.dispatchEvent(new Event("input", { bubbles: true }));
    urlInput.dispatchEvent(new Event("change", { bubbles: true }));
  };
  async function upload(file) {
    if (!LOGO_ACCEPT.has(file.type)) {
      setStatus("PNG, JPEG, GIF, or WEBP only.", true);
      return;
    }
    if (file.size > LOGO_MAX_SOURCE_BYTES) {
      setStatus("That file is too large (8MB max before resizing).", true);
      return;
    }
    setStatus("Uploading…", false);
    try {
      const dataUri = await fileToDownscaledDataUri(file);
      const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(magnet.guid)}/logo`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUri })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `Upload failed (${res.status})`);
      const url = `${apiBase()}/m5t/v5/magnet/${encodeURIComponent(magnet.guid)}/logo?v=${Date.now()}`;
      touchUrlField(url);
      setPreview(url);
      setStatus("Logo updated.", false);
    } catch (err) {
      setStatus(err.message || "Upload failed.", true);
    }
  }
  fileInput.addEventListener("change", () => {
    if (fileInput.files[0]) upload(fileInput.files[0]);
    fileInput.value = "";
  });
  drop.addEventListener("click", (e) => {
    if (e.target === removeBtn || removeBtn.contains(e.target)) return;
    if (e.target === browseBtn) return;
    fileInput.click();
  });
  browseBtn.addEventListener("click", () => fileInput.click());
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => {
    e.preventDefault();
    drop.classList.add("is-dragover");
  }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, (e) => {
    e.preventDefault();
    drop.classList.remove("is-dragover");
  }));
  drop.addEventListener("drop", (e) => {
    const f = e.dataTransfer?.files?.[0];
    if (f) upload(f);
  });
  removeBtn.addEventListener("click", async (e) => {
    e.stopPropagation();
    setStatus("Removing…", false);
    try {
      const res = await fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(magnet.guid)}/logo`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `Remove failed (${res.status})`);
      touchUrlField("");
      setPreview("");
      setStatus("Logo removed.", false);
    } catch (err) {
      setStatus(err.message || "Remove failed.", true);
    }
  });
}
function collectThemeVars(scrim) {
  if (!scrim.querySelector("#mag-f-surface-on")?.checked) return {};
  return {
    surface: scrim.querySelector("#mag-f-sv-surface").value,
    surface_2: scrim.querySelector("#mag-f-sv-surface2").value,
    border: scrim.querySelector("#mag-f-sv-border").value,
    text: scrim.querySelector("#mag-f-sv-text").value,
    text_sub: scrim.querySelector("#mag-f-sv-textsub").value
  };
}
function collectSuccessCta(scrim) {
  const label = scrim.querySelector("#mag-f-success-cta-label").value.trim();
  const url = scrim.querySelector("#mag-f-success-cta-url").value.trim();
  return label && url ? { label, url } : {};
}
function collectAB(scrim) {
  const b = {};
  const title = scrim.querySelector("#mag-f-ab-title")?.value.trim();
  const welcome = scrim.querySelector("#mag-f-ab-welcome")?.value.trim();
  const color = scrim.querySelector("#mag-f-ab-color")?.value || "";
  const aColor = scrim.querySelector("#mag-f-color")?.value || "";
  if (title) b.title = title;
  if (welcome) b.welcome = welcome;
  if (color && color.toLowerCase() !== aColor.toLowerCase()) b.theme_color = color;
  return {
    enabled: !!scrim.querySelector("#mag-f-ab")?.checked,
    split: Number(scrim.querySelector("#mag-f-ab-split")?.value) || 50,
    b
  };
}
const FONT_GROUPS = [
  { label: "Web fonts (loaded for you)", opts: [
    ["Inter, sans-serif", "Inter"],
    ["Poppins, sans-serif", "Poppins"],
    ["Montserrat, sans-serif", "Montserrat"],
    ["Roboto, sans-serif", "Roboto"],
    ['"Open Sans", sans-serif', "Open Sans"],
    ["Lato, sans-serif", "Lato"],
    ["Nunito, sans-serif", "Nunito"],
    ["Raleway, sans-serif", "Raleway"],
    ['"Work Sans", sans-serif', "Work Sans"],
    ["Oswald, sans-serif", "Oswald"],
    ["Merriweather, serif", "Merriweather (serif)"]
  ] },
  { label: "System / always available", opts: [
    ["system-ui, sans-serif", "System UI"],
    ["Georgia, serif", "Georgia (serif)"],
    ['"Times New Roman", Times, serif', "Times (serif)"],
    ["Arial, Helvetica, sans-serif", "Arial / Helvetica"],
    ["Verdana, Geneva, sans-serif", "Verdana"],
    ['"Courier New", monospace', "Courier (mono)"]
  ] }
];
function fontOptionsHTML(current) {
  const cur = String(current || "");
  const known = new Set(FONT_GROUPS.flatMap((g) => g.opts.map(([v]) => v)));
  const sel = (v) => v === cur ? " selected" : "";
  let html = `<option value=""${cur === "" ? " selected" : ""}>System default</option>`;
  if (cur && !known.has(cur)) html += `<option value="${esc(cur)}" selected>Current: ${esc(cur)}</option>`;
  for (const g of FONT_GROUPS) {
    html += `<optgroup label="${esc(g.label)}">` + g.opts.map(([v, l]) => `<option value="${esc(v)}"${sel(v)}>${esc(l)}</option>`).join("") + "</optgroup>";
  }
  return html;
}
function openModal(magnet, initialTab, opts = {}) {
  const { freshDraft = false } = opts;
  const editing = !!magnet;
  const createIdemKey = editing ? null : crypto.randomUUID();
  const showOwnerPicker = !editing && state.owners.length > 1;
  const dm = magnet?.display_mode || "chat";
  const tm = magnet?.theme_mode || "auto";
  const actionByType = {};
  (magnet?.actions || []).forEach((a) => {
    if (a && a.type) actionByType[a.type] = a;
  });
  const homeOn = editing ? !!magnet.home : true;
  const subtitleVal = editing ? magnet.subtitle != null ? magnet.subtitle : "" : "Typically replies in a few minutes";
  const tv = magnet?.theme_vars && typeof magnet.theme_vars === "object" ? magnet.theme_vars : {};
  const svOn = Object.keys(tv).length > 0;
  const sv = (k, d) => esc(/^#[0-9a-fA-F]{6}$/.test(tv[k] || "") ? tv[k] : d);
  const scrim = document.createElement("div");
  scrim.className = "mag-modal-scrim";
  scrim.innerHTML = `
    <div class="mag-modal" role="dialog" aria-modal="true" aria-label="${editing ? "Edit magnet" : "New magnet"}">
      <div class="mag-modal__head">
        <span class="mag-modal__title">${editing ? "Edit magnet" : "New magnet"}</span>
        <button class="mag-modal__close" type="button" aria-label="Close">&times;</button>
      </div>
      <div class="mag-modal__main">
        <nav class="mag-modal__nav" role="tablist" aria-label="Magnet settings">
          <button type="button" class="mag-modal__navitem is-active" data-tab="basics"><span class="material-symbols-outlined" aria-hidden="true">tune</span>Basics</button>
          <button type="button" class="mag-modal__navitem" data-tab="appearance"><span class="material-symbols-outlined" aria-hidden="true">palette</span>Appearance</button>
          <button type="button" class="mag-modal__navitem" data-tab="welcome"><span class="material-symbols-outlined" aria-hidden="true">forum</span>Welcome &amp; CTAs</button>
          <button type="button" class="mag-modal__navitem" data-tab="flow"><span class="material-symbols-outlined" aria-hidden="true">account_tree</span>Flow</button>
          <button type="button" class="mag-modal__navitem" data-tab="finish"><span class="material-symbols-outlined" aria-hidden="true">task_alt</span>Finish</button>
          <button type="button" class="mag-modal__navitem" data-tab="ab"><span class="material-symbols-outlined" aria-hidden="true">science</span>A/B test</button>
        </nav>
        <div class="mag-modal__body">
          <section class="mag-tab" data-tab="basics">
        <label class="mag-modal__label" for="mag-f-name">Name</label>
        <input class="mag-modal__input" id="mag-f-name" type="text" placeholder="e.g. Homepage quote magnet" value="${esc(magnet?.name || "")}">

        ${showOwnerPicker ? `
        <label class="mag-modal__label" for="mag-f-owner">Client / workspace</label>
        <select class="mag-modal__select" id="mag-f-owner">
          ${state.owners.map((o) => `<option value="${esc(o.guid)}"${o.guid === state.primaryOrgGuid ? " selected" : ""}>${esc(o.name || o.guid)}</option>`).join("")}
        </select>` : ""}

        <label class="mag-modal__label">Display mode</label>
        ${segHTML("mag-display", dm, DISPLAY_OPTS)}
        <p class="mag-modal__hint">Inline renders where you place <code>&lt;div data-m5m-inline&gt;&lt;/div&gt;</code> on your page. Chat, Slide &amp; Modal float over it, no markup needed.</p>

        <label class="mag-modal__label" for="mag-f-trigger">Auto-open</label>
        <select class="mag-modal__select" id="mag-f-trigger">
          ${TRIGGER_OPTS.map((o) => `<option value="${o.value}"${triggerSelection(magnet) === o.value ? " selected" : ""}>${esc(o.label)}</option>`).join("")}
          <option value="__per_device"${triggerSelection(magnet) === "__per_device" ? " selected" : ""}>Per device&hellip;</option>
        </select>
        <div class="mag-perdev" id="mag-f-perdev"${triggerSelection(magnet) === "__per_device" ? "" : " hidden"}>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-desktop">Desktop</label>
            <select class="mag-modal__select" id="mag-f-trigger-desktop">
              ${TRIGGER_OPTS.map((o) => `<option value="${o.value}"${perDeviceSide(magnet, "desktop") === o.value ? " selected" : ""}>${esc(o.label)}</option>`).join("")}
            </select>
          </div>
          <div class="mag-perdev__row">
            <label class="mag-modal__label" for="mag-f-trigger-mobile">Mobile</label>
            <select class="mag-modal__select" id="mag-f-trigger-mobile">
              ${TRIGGER_OPTS.map((o) => `<option value="${o.value}"${perDeviceSide(magnet, "mobile") === o.value ? " selected" : ""}>${esc(o.label)}</option>`).join("")}
            </select>
          </div>
          <p class="mag-modal__hint">Mobile means a viewport under ${MOBILE_BREAKPOINT_PX}px — the width at which the panel goes near-fullscreen, which is why an auto-open that suits desktop can be too much on a phone.</p>
        </div>
        <p class="mag-modal__hint">When the panel opens on its own: once per visit, and never after the visitor has already opened it. Doesn't apply to Inline, which is always visible.</p>

        <label class="mag-modal__label" for="mag-f-domains">Allowed domain(s)</label>
        <input class="mag-modal__input" id="mag-f-domains" type="text" placeholder="example.com, www.example.com" value="${esc((magnet?.domains || []).join(", "))}">
        <p class="mag-modal__hint">Comma-separated. The magnet only loads on these domains.</p>

        ${magnet ? `
        <label class="mag-modal__label">Lead alerts</label>
        <p class="mag-modal__hint" style="margin-top:0">
          <span class="material-symbols-outlined" aria-hidden="true" style="font-size:15px;vertical-align:-3px;color:${(magnet.notify_emails || []).length ? "var(--color-success, #009473)" : "var(--color-text-subtle, #6C7C9A)"}">${(magnet.notify_emails || []).length ? "notifications_active" : "notifications_off"}</span>
          ${(magnet.notify_emails || []).length ? `On for ${(magnet.notify_emails || []).length} email${(magnet.notify_emails || []).length === 1 ? "" : "s"}.` : "Off."}
          <a href="#/settings/notifications" data-close-modal>Manage in Settings</a>
        </p>` : ""}
          </section>

          <section class="mag-tab" data-tab="appearance" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Appearance</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-title">Header title</label>
              <input class="mag-modal__input" id="mag-f-title" type="text" placeholder="Chat with us" value="${esc(magnet?.title || "")}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-color">Color</label>
              <input class="mag-modal__color" id="mag-f-color" type="color" value="${esc(/^#[0-9a-fA-F]{6}$/.test(magnet?.theme_color || "") ? magnet.theme_color : "#0072BA")}">
            </div>
          </div>

          <label class="mag-modal__label" for="mag-f-subtitle">Subtitle</label>
          <input class="mag-modal__input" id="mag-f-subtitle" type="text" placeholder="Typically replies in a few minutes" value="${esc(subtitleVal)}">
          <p class="mag-modal__hint">Small line under the title. Leave blank to hide it.</p>

          <label class="mag-modal__label" for="mag-f-launcher">Launcher label</label>
          <input class="mag-modal__input" id="mag-f-launcher" type="text" placeholder="Defaults to the title" value="${esc(magnet?.launcher_label || "")}">
          <p class="mag-modal__hint">Text on the floating button (Chat / Slide / Modal only).</p>

          <label class="mag-modal__label">Theme</label>
          ${segHTML("mag-theme", tm, THEME_OPTS)}

          <label class="mag-modal__label">Logo</label>
          ${editing ? `
          <div class="mag-logo-drop" id="mag-logo-drop">
            <input type="file" id="mag-f-logo-file" accept="image/png,image/jpeg,image/gif,image/webp" hidden>
            <div class="mag-logo-drop__preview" id="mag-logo-preview">${magnet?.logo_url ? `<img src="${esc(magnet.logo_url)}" alt="">` : `<span class="material-symbols-outlined" aria-hidden="true">image</span>`}</div>
            <div class="mag-logo-drop__body">
              <p class="mag-logo-drop__t">Drag an image here, or <button type="button" class="mag-logo-drop__browse" id="mag-logo-browse">browse</button></p>
              <p class="mag-modal__hint" style="margin:2px 0 0">PNG, JPEG, GIF, or WEBP — resized automatically.</p>
            </div>
            <button type="button" class="mag-logo-drop__remove" id="mag-logo-remove"${magnet?.logo_url ? "" : " hidden"} title="Remove logo"><span class="material-symbols-outlined" aria-hidden="true">delete</span></button>
          </div>
          <p class="mag-modal__hint" id="mag-logo-status" role="status" style="min-height:1em"></p>
          ` : `<p class="mag-modal__hint" style="margin-top:0">Save this magnet first, then reopen it here to upload a logo.</p>`}

          <label class="mag-modal__label" for="mag-f-logo">Or paste a logo URL</label>
          <input class="mag-modal__input" id="mag-f-logo" type="text" placeholder="https://…/logo.png" value="${esc(magnet?.logo_url || "")}">
          <p class="mag-modal__hint">Shown in the header and on bot avatars. Falls back to a color mark.</p>

          <label class="mag-modal__label" for="mag-f-logo-fit">Logo fit</label>
          <select class="mag-modal__select" id="mag-f-logo-fit">
            <option value="cover"${(magnet?.logo_fit || "cover") === "cover" ? " selected" : ""}>Cover: fills the circle (crops a wide logo)</option>
            <option value="contain"${magnet?.logo_fit === "contain" ? " selected" : ""}>Contain: shows the whole logo</option>
          </select>
          <p class="mag-modal__hint">Use “Contain” for a wide wordmark so it isn’t cropped.</p>

          <label class="mag-modal__label" for="mag-f-font">Font family</label>
          <select class="mag-modal__select" id="mag-f-font">${fontOptionsHTML(magnet?.font || "")}</select>
          <p class="mag-modal__hint">Web fonts load automatically. System fonts always work. Leave on System default to match nothing in particular.</p>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-surface-on"${svOn ? " checked" : ""}>
            <label for="mag-f-surface-on">Custom surface colors (match a branded dark or light page)</label>
          </div>
          <div id="mag-f-surface" class="mag-surface-grid"${svOn ? "" : " hidden"}>
            <div><label class="mag-modal__label" for="mag-f-sv-surface">Background</label><input class="mag-modal__color" id="mag-f-sv-surface" type="color" value="${sv("surface", "#141414")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-surface2">Panel / raised</label><input class="mag-modal__color" id="mag-f-sv-surface2" type="color" value="${sv("surface_2", "#1e1e1e")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-border">Border</label><input class="mag-modal__color" id="mag-f-sv-border" type="color" value="${sv("border", "#2a2a2a")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-text">Text</label><input class="mag-modal__color" id="mag-f-sv-text" type="color" value="${sv("text", "#ffffff")}"></div>
            <div><label class="mag-modal__label" for="mag-f-sv-textsub">Muted text</label><input class="mag-modal__color" id="mag-f-sv-textsub" type="color" value="${sv("text_sub", "#a8a8a8")}"></div>
          </div>
          <p class="mag-modal__hint">Off = the built-in light/dark surfaces (set by Theme above). On = these exact colors, so the card sits on your brand instead of a generic panel.</p>

          <div id="mag-f-inline-size"${dm === "inline" ? "" : " hidden"}>
            <div class="mag-modal__row">
              <div>
                <label class="mag-modal__label" for="mag-f-inline-w">Inline width</label>
                <input class="mag-modal__input" id="mag-f-inline-w" type="text" placeholder="640px" value="${esc(magnet?.inline_width || "")}">
              </div>
              <div>
                <label class="mag-modal__label" for="mag-f-inline-h">Inline height</label>
                <input class="mag-modal__input" id="mag-f-inline-h" type="text" placeholder="min(520px, 80vh)" value="${esc(magnet?.inline_height || "")}">
              </div>
            </div>
            <p class="mag-modal__hint">Inline mode only. A CSS length (<code>760px</code>, <code>100%</code>) or <code>min()/max()/clamp()</code>. Blank = default size.</p>
          </div>

          <div class="mag-tog-row" style="margin-top:12px">
            <input type="checkbox" id="mag-f-hide-launcher"${magnet?.hide_launcher ? " checked" : ""}>
            <label for="mag-f-hide-launcher">Hide the floating button (opens only from your own button or link)</label>
          </div>
          <p class="mag-modal__hint">For Chat / Slide / Modal: no bubble appears; you open it by calling <code>MachFiveMagnet.open()</code> from your page. Pair with Auto-open = “Manual”.</p>

          <label class="mag-modal__label" for="mag-f-input-ph">Input placeholder</label>
          <input class="mag-modal__input" id="mag-f-input-ph" type="text" placeholder="Type your answer…" value="${esc(magnet?.input_placeholder || "")}">
        </div>
          </section>

          <section class="mag-tab" data-tab="welcome" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Welcome screen</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-home"${homeOn ? " checked" : ""}>
            <label for="mag-f-home">Open on a welcome message + CTA bar (hub)</label>
          </div>
          <label class="mag-modal__label" for="mag-f-welcome">Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-welcome" rows="2" placeholder="Welcome! Pick an option below and we’ll take it from there.">${esc(magnet?.welcome || "")}</textarea>
          <p class="mag-modal__hint">Shown first when the magnet opens. Visitors choose a CTA below instead of a blank chat.</p>
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Call-to-action bar</p>
          <p class="mag-modal__hint" style="margin-top:0">The persistent buttons a visitor taps to pick a channel. Book opens an in-panel scheduler, or your Calendly when connected. Call can use a CallRail tracking number when connected, so calls attribute to this magnet. Chat runs your flow, Support is a multi-select intake. Leave unchecked to hide.</p>
          ${CTA_ORDER.map((t) => ctaRowHTML(t, actionByType[t])).join("")}
        </div>
          </section>

          <section class="mag-tab" data-tab="flow" hidden>
            <div id="mag-flow-panel"></div>
          </section>

          <section class="mag-tab" data-tab="ab" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">A/B experiment</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-ab"${magnet?.ab?.enabled ? " checked" : ""}>
            <label for="mag-f-ab">Run an A/B test on this magnet</label>
          </div>
          <p class="mag-modal__hint">Variant A is what you configured above. Fill in what variant B changes. Visitors are split between them and results appear on <b>A/B Testing</b>.</p>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-ab-title">B: Header title</label>
              <input class="mag-modal__input" id="mag-f-ab-title" type="text" placeholder="(unchanged)" value="${esc(magnet?.ab?.b?.mag_title || "")}">
            </div>
            <div style="flex:0 0 auto">
              <label class="mag-modal__label" for="mag-f-ab-color">B: Color</label>
              <input class="mag-modal__color" id="mag-f-ab-color" type="color" value="${esc(/^#[0-9a-fA-F]{6}$/.test(magnet?.ab?.b?.mag_theme_color || "") ? magnet.ab.b.mag_theme_color : magnet?.theme_color || "#0072BA")}">
            </div>
          </div>
          <label class="mag-modal__label" for="mag-f-ab-welcome">B: Welcome message</label>
          <textarea class="mag-modal__input" id="mag-f-ab-welcome" rows="2" placeholder="(unchanged)">${esc(magnet?.ab?.b?.mag_welcome || "")}</textarea>
          <label class="mag-modal__label" for="mag-f-ab-split">Traffic to variant B</label>
          <select class="mag-modal__select" id="mag-f-ab-split">
            ${[25, 50, 75].map((n) => `<option value="${n}"${(magnet?.ab?.split || 50) === n ? " selected" : ""}>${n}% see B / ${100 - n}% see A</option>`).join("")}
          </select>
        </div>
          </section>

          <section class="mag-tab" data-tab="finish" hidden>
        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">Summary card</p>
          <div class="mag-tog-row">
            <input type="checkbox" id="mag-f-summary"${magnet?.summary ? " checked" : ""}>
            <label for="mag-f-summary">Show a recap card when the visitor finishes</label>
          </div>
          <label class="mag-modal__label" for="mag-f-summary-heading">Recap heading</label>
          <input class="mag-modal__input" id="mag-f-summary-heading" type="text" placeholder="Here’s what we’ve got" value="${esc(magnet?.summary_heading || "")}">
          <label class="mag-modal__label" for="mag-f-summary-confirm">Confirm button label</label>
          <input class="mag-modal__input" id="mag-f-summary-confirm" type="text" placeholder="Confirm &amp; send" value="${esc(magnet?.summary_confirm_label || "")}">
        </div>

        <div class="mag-modal__sec">
          <p class="mag-modal__sec-t">After submit</p>
          <p class="mag-modal__hint" style="margin-top:0">The card shown once the visitor finishes. Blank = the default “You’re all set!” message.</p>
          <label class="mag-modal__label" for="mag-f-success-title">Success title</label>
          <input class="mag-modal__input" id="mag-f-success-title" type="text" placeholder="You’re all set!" value="${esc(magnet?.success_title || "")}">
          <label class="mag-modal__label" for="mag-f-success-text">Success message</label>
          <textarea class="mag-modal__input" id="mag-f-success-text" rows="2" placeholder="Thanks! We’ve got your details and someone will be in touch shortly.">${esc(magnet?.success_text || "")}</textarea>
          <div class="mag-modal__row">
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-label">Button label (optional)</label>
              <input class="mag-modal__input" id="mag-f-success-cta-label" type="text" placeholder="e.g. Visit our site" value="${esc(magnet?.success_cta?.label || "")}">
            </div>
            <div>
              <label class="mag-modal__label" for="mag-f-success-cta-url">Button link</label>
              <input class="mag-modal__input" id="mag-f-success-cta-url" type="text" placeholder="https://…" value="${esc(magnet?.success_cta?.url || "")}">
            </div>
          </div>
          <p class="mag-modal__hint">A deep link shown after submit (e.g. “Play now”). Needs both a label and a URL.</p>
        </div>
          </section>
        </div>
        <aside class="mag-modal__preview" aria-label="Live preview"><div id="mag-preview-pane" style="height:100%"></div></aside>
      </div>
      <div class="mag-modal__foot">
        ${editing ? '<button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="preview"><span class="material-symbols-outlined" aria-hidden="true" style="font-size:18px;vertical-align:-4px;margin-right:4px">visibility</span>Preview</button>' : ""}
        <span class="mag-modal__dirty" id="mag-f-dirty" hidden><span class="material-symbols-outlined" aria-hidden="true">fiber_manual_record</span>Unsaved changes</span>
        <p class="mag-modal__error" id="mag-f-error"></p>
        <div class="mag-modal__foot-btns">
          <button class="mag-modal__btn mag-modal__btn--ghost" type="button" data-x="cancel">Cancel</button>
          <button class="mag-modal__btn mag-modal__btn--primary" type="button" data-x="save">${editing ? "Save" : "Create magnet"}</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  requestAnimationFrame(() => {
    scrim.classList.add("open");
    scrim.querySelector(".mag-modal").classList.add("open");
  });
  const navItems = [...scrim.querySelectorAll(".mag-modal__navitem")];
  const panels = [...scrim.querySelectorAll(".mag-tab")];
  const showTab = (name) => {
    navItems.forEach((b) => b.classList.toggle("is-active", b.dataset.tab === name));
    panels.forEach((p) => {
      p.hidden = p.dataset.tab !== name;
    });
    scrim.querySelector(".mag-modal__body").scrollTop = 0;
  };
  navItems.forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));
  const previewPkg = () => magnetToPackage({ ...magnet, ...collectAppearance(scrim), ...editing ? { steps: currentChatSteps() } : {} });
  const paneEl = scrim.querySelector("#mag-preview-pane");
  const wide = () => window.matchMedia("(min-width: 1200px)").matches;
  let previewApi = null;
  const ensurePane = () => {
    if (!previewApi && wide()) {
      try {
        previewApi = mountPreviewPane(paneEl, previewPkg);
      } catch (e) {
      }
    }
  };
  let refreshTimer = null;
  const scheduleRefresh = () => {
    if (!wide()) return;
    ensurePane();
    if (!previewApi) return;
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => {
      try {
        previewApi.refresh();
      } catch (e) {
      }
    }, 300);
  };
  const mql = window.matchMedia("(min-width: 1200px)");
  const onWidthChange = () => {
    if (wide()) {
      ensurePane();
      scheduleRefresh();
    }
  };
  mql.addEventListener("change", onWidthChange);
  let dirty = false;
  let saved = false;
  const dirtyEl = scrim.querySelector("#mag-f-dirty");
  const setDirty = (v) => {
    dirty = v;
    if (dirtyEl) dirtyEl.hidden = !v;
  };
  const main = scrim.querySelector(".mag-modal__main");
  main.addEventListener("input", () => setDirty(true));
  main.addEventListener("change", () => {
    setDirty(true);
    syncPerDeviceVisibility(scrim);
    scheduleRefresh();
  });
  syncPerDeviceVisibility(scrim);
  scrim.querySelector("#mag-f-color")?.addEventListener("input", () => {
    setDirty(true);
    scheduleRefresh();
  });
  const onBeforeUnload = (e) => {
    if (dirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  };
  window.addEventListener("beforeunload", onBeforeUnload);
  let modalOpen = true;
  const routeGuardToken = PubSub.subscribe(AppBroadcast.ROUTE_NAV_BEFORE, () => {
    if (!modalOpen) return;
    if (dirty && !confirm("Discard your changes to this magnet?")) {
      window.router?.navigate("/magnets");
      return;
    }
    doClose();
  });
  const doClose = () => {
    if (freshDraft && !saved && magnet && magnet.status === "DRAFT") {
      fetch(`${apiBase()}/m5t/v5/magnets/${encodeURIComponent(magnet.guid)}`, { method: "DELETE" }).catch(() => {
      });
      state.magnets = state.magnets.filter((m) => m.guid !== magnet.guid);
      const gridBody = document.getElementById("mag-body");
      paintGrid(gridBody);
    }
    modalOpen = false;
    window.removeEventListener("beforeunload", onBeforeUnload);
    PubSub.unsubscribe(routeGuardToken);
    clearTimeout(refreshTimer);
    mql.removeEventListener("change", onWidthChange);
    if (previewApi && previewApi.destroy) previewApi.destroy();
    scrim.classList.remove("open");
    setTimeout(() => scrim.remove(), 180);
    document.removeEventListener("keydown", onKey);
  };
  const close = () => {
    if (dirty && !confirm("Discard your changes to this magnet?")) return;
    doClose();
  };
  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  }
  document.addEventListener("keydown", onKey);
  scrim.querySelector(".mag-modal__close").addEventListener("click", close);
  scrim.querySelector('[data-x="cancel"]').addEventListener("click", close);
  scrim.querySelector("[data-close-modal]")?.addEventListener("click", close);
  scrim.querySelector("#mag-f-name").focus();
  const flowPanel = scrim.querySelector("#mag-flow-panel");
  if (editing) mountFlowTab(flowPanel, magnet, () => {
    setDirty(true);
    scheduleRefresh();
  });
  else flowPanel.innerHTML = '<p class="mag-modal__hint" style="margin-top:0">Your new magnet starts with a simple starter conversation. Create it first, then reopen it here to build the flow.</p>';
  wireLogoUpload(scrim, magnet);
  if (initialTab) showTab(initialTab);
  ensurePane();
  scrim.querySelectorAll(".mag-cta").forEach((row) => {
    const cb = row.querySelector(".mag-cta__on");
    const val = row.querySelector(".mag-cta__val");
    const opts2 = row.querySelector(".mag-cta__opts");
    const extras = row.querySelectorAll(".mag-cta__booksrc, .mag-cta__calevent, .mag-cta__callsrc, .mag-cta__crtracker");
    cb.addEventListener("change", () => {
      if (val) val.disabled = !cb.checked;
      if (opts2) opts2.disabled = !cb.checked;
      extras.forEach((el) => {
        el.disabled = !cb.checked;
      });
      if (cb.checked) (val || opts2)?.focus();
    });
    if (val) val.addEventListener("input", () => {
      if (val.value.trim() && !cb.checked) {
        cb.checked = true;
        if (opts2) opts2.disabled = false;
      }
    });
  });
  scrim.querySelectorAll('.mag-cta[data-kind="book"]').forEach((row) => {
    const src = row.querySelector(".mag-cta__booksrc");
    const val = row.querySelector(".mag-cta__val");
    const sel = row.querySelector(".mag-cta__calevent");
    if (!src || !sel) return;
    const apply = () => {
      const isCal = src.value === "calendly";
      val.hidden = isCal;
      sel.hidden = !isCal;
      if (isCal && !sel.dataset.listed) {
        sel.dataset.listed = "1";
        populateCalEventSelect(sel);
      }
    };
    src.addEventListener("change", () => {
      const cb = row.querySelector(".mag-cta__on");
      if (!cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event("change"));
      }
      apply();
    });
    apply();
  });
  scrim.querySelectorAll('.mag-cta[data-type="call"]').forEach((row) => {
    const src = row.querySelector(".mag-cta__callsrc");
    const val = row.querySelector(".mag-cta__val");
    const sel = row.querySelector(".mag-cta__crtracker");
    if (!src || !sel) return;
    const apply = () => {
      const isCr = src.value === "callrail";
      val.hidden = isCr;
      sel.hidden = !isCr;
      if (isCr && !sel.dataset.listed) {
        sel.dataset.listed = "1";
        populateCrTrackerSelect(sel);
      }
    };
    src.addEventListener("change", () => {
      const cb = row.querySelector(".mag-cta__on");
      if (!cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event("change"));
      }
      apply();
    });
    apply();
  });
  const surfToggle = scrim.querySelector("#mag-f-surface-on");
  const surfGrid = scrim.querySelector("#mag-f-surface");
  surfToggle.addEventListener("change", () => surfGrid.hidden = !surfToggle.checked);
  const inlineSizeWrap = scrim.querySelector("#mag-f-inline-size");
  scrim.querySelectorAll('input[name="mag-display"]').forEach((r) => r.addEventListener("change", () => {
    inlineSizeWrap.hidden = scrim.querySelector('input[name="mag-display"]:checked')?.value !== "inline";
  }));
  scrim.querySelector('[data-x="preview"]')?.addEventListener("click", () => openPreviewModal(() => magnetToPackage({ ...magnet, ...collectAppearance(scrim), ...editing ? { steps: currentChatSteps() } : {} })));
  scrim.querySelector('[data-x="save"]').addEventListener("click", async (ev) => {
    const saveBtn = ev.currentTarget;
    const errEl = scrim.querySelector("#mag-f-error");
    const name = scrim.querySelector("#mag-f-name").value.trim();
    if (!name) {
      showTab("basics");
      errEl.textContent = "Please give your magnet a name.";
      return;
    }
    const domains = scrim.querySelector("#mag-f-domains").value.split(",").map((s) => s.trim()).filter(Boolean);
    let ctaErr = "";
    scrim.querySelectorAll(".mag-cta").forEach((row) => {
      const on = row.querySelector(".mag-cta__on").checked;
      if (row.dataset.kind === "book") {
        const isCal = row.querySelector(".mag-cta__booksrc")?.value === "calendly";
        if (on && isCal && !(row.querySelector(".mag-cta__calevent")?.value || "")) {
          ctaErr = ctaErr || "Pick a Calendly event for the Book button, or switch it back to the built-in scheduler.";
        }
        return;
      }
      if (row.dataset.kind !== "value") return;
      if (row.dataset.type === "call" && row.querySelector(".mag-cta__callsrc")?.value === "callrail") {
        if (on && !(row.querySelector(".mag-cta__crtracker")?.value || "")) {
          ctaErr = ctaErr || "Pick a CallRail tracking number for the Call button, or switch it back to a phone number.";
        }
        return;
      }
      const value = row.querySelector(".mag-cta__val").value.trim();
      if (on && !value) ctaErr = ctaErr || `Add a target for the ${CTA_META[row.dataset.type].label} button, or uncheck it.`;
    });
    if (ctaErr) {
      showTab("welcome");
      errEl.textContent = ctaErr;
      return;
    }
    const abWanted = collectAB(scrim);
    if (abWanted.enabled && !Object.keys(abWanted.b).length) {
      showTab("ab");
      errEl.textContent = "Give variant B at least one change (title, welcome, or color), or untick the A/B test.";
      return;
    }
    if (editing) {
      const flowProblem = validateFlows();
      if (flowProblem) {
        showTab("flow");
        errEl.textContent = flowProblem.message;
        showFlowRoute(flowProblem.route, flowProblem.message, { uid: flowProblem.uid, field: flowProblem.field });
        return;
      }
    }
    const payload = { name, domains, ...collectAppearance(scrim) };
    if (showOwnerPicker) payload.owner_guid = scrim.querySelector("#mag-f-owner").value;
    const publishingDraft = editing && magnet.status === "DRAFT";
    if (publishingDraft) payload.status = "ENABLED";
    saveBtn.disabled = true;
    errEl.textContent = "";
    try {
      const url = editing ? `${apiBase()}/m5t/v5/magnets/${encodeURIComponent(magnet.guid)}` : `${apiBase()}/m5t/v5/magnets`;
      const headers = { "Content-Type": "application/json" };
      if (createIdemKey) headers["Idempotency-Key"] = createIdemKey;
      const res = await fetch(url, {
        method: editing ? "PATCH" : "POST",
        headers,
        body: JSON.stringify(payload)
      });
      let data = {};
      try {
        data = await res.json();
      } catch {
      }
      if (!res.ok || !data.ok) throw new Error(data.message || `Save failed (${res.status})`);
      if (editing) await saveFlows(magnet.guid);
      toast(publishingDraft || !editing ? "Magnet created" : "Magnet updated", "success");
      saved = true;
      doClose();
      await load();
    } catch (err) {
      saveBtn.disabled = false;
      errEl.textContent = err.message || "Something went wrong.";
    }
  });
}
export {
  CTA_META,
  CTA_ORDER,
  DISPLAY_OPTS,
  FONT_GROUPS,
  MOBILE_BREAKPOINT_PX,
  MODE_LABEL,
  THEME_OPTS,
  TRIGGER_OPTS,
  __stopPairingTimerForTests,
  collectTrigger,
  connIsPast,
  cspNoteHTML,
  init,
  installGuideHTML,
  openModal,
  perDeviceSide,
  perDeviceTrigger,
  perDeviceTriggerLabel,
  render,
  stepFunnelHTML,
  syncPerDeviceVisibility,
  triggerSelection
};
//# sourceMappingURL=magnets-route-vSpr8hQ0.js.map
