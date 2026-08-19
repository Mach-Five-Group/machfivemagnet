import { g as getQuestionnaireLinkParams, A as AuthController } from "./index.js";
import { m as mfmLockupColorUrl } from "./coBrand-DbiPODuF.js";
import { f as fmtDateTime, a as answersMetaHtml, b as answersHtml, c as collectAnswers, e as ensureQuestionnaireAnswerStyles } from "./questionnaireAnswers-BUs4-Lnv.js";
import { h as heroSketch } from "./auth-hero-sketch-emnp5_QT.js";
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-questionnaire-fill-styles";
  style.textContent = `
    .qf-page {
      min-height: 100vh; padding: 32px 20px 64px; position: relative;
      /* The auth panel's brand-blue field, one step lighter (500/700/800 vs
         the panel's 600/800/900) so the white card leads. */
      background:
        radial-gradient(120% 120% at 80% 10%, rgba(34, 160, 255, 0.30) 0%, transparent 55%),
        linear-gradient(160deg, var(--color-primary-500, #0088DD) 0%, var(--color-primary-700, #00558D) 70%, var(--color-primary-800, #003961) 100%);
      color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    /* The marketing hero sketch over the blue field - same multiply treatment
       as the auth panel (white ground sinks, linework survives as darker
       blue), a touch quieter here. fixed = holds still while the form scrolls. */
    .qf-page::before {
      content: ""; position: fixed; inset: 0; z-index: 0;
      background: url("${heroSketch}") center / cover no-repeat;
      mix-blend-mode: multiply;
      opacity: 0.24; pointer-events: none;
    }
    .qf-card {
      width: min(680px, 100%); margin: 0 auto; background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 36px 32px;
      position: relative; z-index: 1;
    }
    .qf-card h1 { font-family: var(--font-display, inherit); font-size: 1.5rem; font-weight: 600; margin: 0 0 6px; color: var(--color-primary-600, #0072BA); }
    .qf-card .qf-sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 28px; }
    .qf-brand { height: 38px; width: auto; display: block; margin: 0 0 18px; }
    .qf-help { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 6px; }
    .qf-section { margin-bottom: 28px; }
    .qf-section h2 { font-size: 1.05rem; font-weight: 600; margin: 0 0 14px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qf-field { margin-bottom: 18px; }
    .qf-field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
    .qf-field input[type="text"], .qf-field textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.92rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .qf-field textarea { min-height: 76px; resize: vertical; }
    .qf-field input:focus, .qf-field textarea:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .qf-checkbox-group { display: flex; flex-wrap: wrap; gap: 10px 20px; }
    .qf-checkbox-row { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; }
    .qf-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 8px;
    }
    .qf-btn:hover { background: var(--color-primary-700, #00558D); }
    .qf-btn[disabled] { opacity: 0.6; cursor: default; }
    .qf-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .qf-msg.error { color: var(--color-danger, #DD4124); }
    .qf-msg.ok { color: var(--color-success, #009473); }
    .qf-state { text-align: center; padding: 20px 0; }
    .qf-state .material-symbols-outlined { font-size: 2.4rem; color: var(--color-primary-600, #0072BA); }
    /* ── stepper chrome ── */
    .qf-progress { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 18px; }
    .qf-progress-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .qf-dots { display: flex; gap: 8px; }
    .qf-dot {
      appearance: none; border: 0; cursor: pointer; padding: 0;
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--color-border, #D4DCE8); transition: background .15s ease, transform .15s ease;
    }
    .qf-dot[aria-current="step"] { background: var(--color-primary-600, #0072BA); transform: scale(1.25); }
    .qf-dot:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.25)); }
    .qf-section[hidden] { display: none; }
    .qf-section { margin-bottom: 8px; }
    .qf-section.qf-enter { animation: qfSlideIn .18s ease; }
    @keyframes qfSlideIn { from { opacity: 0; transform: translateX(var(--qf-dx, 14px)); } }
    html.ff-no-animations .qf-section.qf-enter { animation: none; }
    @media (prefers-reduced-motion: reduce) { .qf-section.qf-enter { animation: none; } }
    .qf-nav { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
    .qf-nav .qf-btn { margin-top: 0; }
    .qf-btn--ghost {
      appearance: none; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px 18px; border-radius: var(--radius-md, 10px);
      border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;
    }
    .qf-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .qf-btn--ghost .material-symbols-outlined, .qf-btn .material-symbols-outlined { font-size: 1.1rem; }
    /* ── return-visit chrome (edit + locked states) ── */
    .qf-note {
      display: flex; align-items: flex-start; gap: 8px; padding: 11px 13px; margin: 0 0 20px;
      border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB);
      font-size: 0.85rem; line-height: 1.45; color: var(--color-text, #0B1220);
    }
    .qf-note .material-symbols-outlined { font-size: 1.15rem; flex: 0 0 auto; color: var(--color-primary-600, #0072BA); }
    .qf-note--locked .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .qf-note--done { background: var(--color-success-soft, #E6F5F1); }
    .qf-note--done .material-symbols-outlined { color: var(--color-success, #009473); }
  `;
  document.head.appendChild(style);
  ensureQuestionnaireAnswerStyles();
  stylesInjected = true;
}
function apiBase() {
  return AuthController.getConfig?.().BASE_URL || "";
}
function fieldHtml(q) {
  const id = `qf-${q.id}`;
  if (q.type === "checkbox_group") {
    const options = Array.isArray(q.options) ? q.options : [];
    return `
      <div class="qf-field" data-question-id="${q.id}" data-question-type="checkbox_group">
        <label>${escapeHtml(q.label)}</label>
        ${q.help ? `<p class="qf-help">${escapeHtml(q.help)}</p>` : ""}
        <div class="qf-checkbox-group">
          ${options.map((opt, i) => `
            <label class="qf-checkbox-row">
              <input type="checkbox" id="${id}-${i}" value="${escapeHtml(opt)}" />
              ${escapeHtml(opt)}
            </label>`).join("")}
        </div>
      </div>`;
  }
  if (q.type === "textarea") {
    return `
      <div class="qf-field" data-question-id="${q.id}" data-question-type="textarea">
        <label for="${id}">${escapeHtml(q.label)}</label>
        ${q.help ? `<p class="qf-help">${escapeHtml(q.help)}</p>` : ""}
        <textarea id="${id}"></textarea>
      </div>`;
  }
  return `
    <div class="qf-field" data-question-id="${q.id}" data-question-type="text">
      <label for="${id}">${escapeHtml(q.label)}</label>
      ${q.help ? `<p class="qf-help">${escapeHtml(q.help)}</p>` : ""}
      <input type="text" id="${id}" />
    </div>`;
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
function stateHtml(icon, title, body) {
  return `
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">${icon}</span>
      <h1>${escapeHtml(title)}</h1>
      <p class="qf-sub">${escapeHtml(body)}</p>
    </div></div></div>`;
}
function render() {
  ensureStyles();
  return `<div id="qf-root">${stateHtml("hourglass_top", "Loading your questionnaire…", "One moment.")}</div>`;
}
async function init() {
  const root = document.getElementById("qf-root");
  if (!root) return;
  const params = getQuestionnaireLinkParams();
  if (!params) {
    root.innerHTML = stateHtml("error", "Invalid link", "This link is missing required information. Please use the link exactly as sent.");
    return;
  }
  let data;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(params.guid)}?token=${encodeURIComponent(params.token)}`);
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.ok) {
      const msg = res.status === 404 ? body.error || "This link is invalid or has expired." : "Something went wrong loading your questionnaire. Please try again shortly.";
      root.innerHTML = stateHtml("error", "Cannot open this questionnaire", msg);
      return;
    }
    data = body.data;
  } catch (err) {
    console.error("[questionnaire-fill] load error:", err);
    root.innerHTML = stateHtml("wifi_off", "Connection problem", "Could not reach the server. Please check your connection and try again.");
    return;
  }
  const mode = modeFor(data);
  if (mode === "locked") {
    renderLocked(root, data);
    return;
  }
  renderForm(root, data, params, mode);
}
function modeFor(data) {
  if (data.status !== "SUBMITTED") return "fill";
  const edit = data.editability || { editable: !data.locked_tz };
  return edit.editable ? "edit" : "locked";
}
function lockedReasonText(data) {
  const edit = data.editability || {};
  if (edit.reason === "finalized") {
    return "Your account manager has finalised these answers, so they can no longer be changed here.";
  }
  const when = edit.deadline ? ` The window closed on ${fmtDateTime(edit.deadline)}.` : "";
  return `Answers can be changed for 14 days after they are submitted.${when}`;
}
function renderLocked(root, data) {
  root.innerHTML = `
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${mfmLockupColorUrl}" alt="Mach Five Marketing" height="34" />
      <h1>${escapeHtml(data.questionnaire?.name || "Kickoff Questionnaire")}</h1>
      <p class="qf-sub">${data.submitted_tz ? `Submitted ${escapeHtml(fmtDateTime(data.submitted_tz))}.` : "Submitted."} Here is what you sent.</p>
      <div class="qf-note qf-note--locked">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <span>${escapeHtml(lockedReasonText(data))} To change anything now, contact your account manager.</span>
      </div>
      ${answersMetaHtml(data)}
      ${answersHtml(data, { emptyLabel: "Left blank" })}
    </div></div>`;
}
function renderForm(root, data, params, mode) {
  const editing = mode === "edit";
  const sections = data.questionnaire?.sections || [];
  const savedAnswers = data.answers || {};
  const deadline = data.editability?.deadline;
  const intro = editing ? "Change anything you need to, then save. Everything you sent before is already filled in." : "Answer what applies. If a question doesn't apply to your business, leave it blank.";
  const noteHtml = editing ? `<div class="qf-note">
         <span class="material-symbols-outlined" aria-hidden="true">edit_note</span>
         <span>You already submitted this${data.submitted_tz ? ` on ${escapeHtml(fmtDateTime(data.submitted_tz))}` : ""}.${deadline ? ` You can make changes until <strong>${escapeHtml(fmtDateTime(deadline))}</strong>.` : ""}</span>
       </div>` : "";
  root.innerHTML = `
    <div class="qf-page"><div class="qf-card">
      <img class="qf-brand" src="${mfmLockupColorUrl}" alt="Mach Five Marketing" height="34" />
      <h1>${escapeHtml(data.questionnaire?.name || "Kickoff Questionnaire")}</h1>
      <p class="qf-sub">${escapeHtml(intro)}</p>
      ${noteHtml}
      <div class="qf-progress">
        <span class="qf-progress-label" id="qf-progress-label"></span>
        <div class="qf-dots" role="group" aria-label="Sections">
          ${sections.map((s, i) => `<button type="button" class="qf-dot" data-step="${i}" aria-label="${escapeHtml(s.title)}"></button>`).join("")}
        </div>
      </div>
      <form id="qf-form" novalidate>
        ${sections.map((s, i) => `
          <div class="qf-section" data-step="${i}" hidden>
            <h2>${escapeHtml(s.title)}</h2>
            ${(s.questions || []).map(fieldHtml).join("")}
          </div>`).join("")}
        <div class="qf-nav">
          <button class="qf-btn--ghost" type="button" id="qf-back"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>Back</button>
          <button class="qf-btn" type="button" id="qf-next">Next<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
          <button class="qf-btn" type="submit" id="qf-submit">${editing ? "Save changes" : "Submit questionnaire"}</button>
        </div>
        <p class="qf-msg" id="qf-msg" role="status"></p>
      </form>
    </div></div>`;
  const stepEls = [...root.querySelectorAll(".qf-section[data-step]")];
  const dotEls = [...root.querySelectorAll(".qf-dot")];
  const backBtn = document.getElementById("qf-back");
  const nextBtn = document.getElementById("qf-next");
  const submitBtn = document.getElementById("qf-submit");
  const progressLabel = document.getElementById("qf-progress-label");
  let step = 0;
  function showStep(n, fromDirection = 1) {
    step = Math.max(0, Math.min(sections.length - 1, n));
    stepEls.forEach((el, i) => {
      el.hidden = i !== step;
      el.classList.remove("qf-enter");
    });
    const active = stepEls[step];
    if (active) {
      active.style.setProperty("--qf-dx", `${fromDirection >= 0 ? 14 : -14}px`);
      void active.offsetWidth;
      active.classList.add("qf-enter");
    }
    dotEls.forEach((d, i) => {
      if (i === step) d.setAttribute("aria-current", "step");
      else d.removeAttribute("aria-current");
    });
    if (progressLabel) progressLabel.textContent = `Section ${step + 1} of ${sections.length}`;
    backBtn.style.visibility = step === 0 ? "hidden" : "";
    nextBtn.style.display = step === sections.length - 1 ? "none" : "";
    submitBtn.style.display = step === sections.length - 1 ? "" : "none";
    root.querySelector(".qf-card")?.scrollIntoView({ block: "start" });
  }
  backBtn.addEventListener("click", () => showStep(step - 1, -1));
  nextBtn.addEventListener("click", () => showStep(step + 1, 1));
  dotEls.forEach((d) => d.addEventListener("click", () => {
    const target = Number(d.dataset.step) || 0;
    showStep(target, target >= step ? 1 : -1);
  }));
  showStep(0);
  root.querySelectorAll("[data-question-id]").forEach((fieldEl) => {
    const qid = fieldEl.dataset.questionId;
    const type = fieldEl.dataset.questionType;
    const saved = savedAnswers[qid];
    if (saved == null) return;
    if (type === "checkbox_group") {
      const selected = Array.isArray(saved) ? saved : [];
      fieldEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        cb.checked = selected.includes(cb.value);
      });
    } else {
      const input = fieldEl.querySelector("input,textarea");
      if (input) input.value = saved;
    }
  });
  const form = document.getElementById("qf-form");
  const btn = document.getElementById("qf-submit");
  const msg = document.getElementById("qf-msg");
  const setMsg = (text, kind = "error") => {
    msg.textContent = text;
    msg.className = `qf-msg ${kind}`;
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answers = collectAnswers(root);
    const base = `${apiBase()}/m5t/v5/m5mQuestionnaireResponse/public/${encodeURIComponent(params.guid)}`;
    const url = editing ? `${base}?token=${encodeURIComponent(params.token)}` : `${base}/submit?token=${encodeURIComponent(params.token)}`;
    btn.disabled = true;
    setMsg(editing ? "Saving…" : "Submitting…", "ok");
    let res;
    try {
      res = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers })
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        if (res.status === 423) {
          setMsg(body.error || "These answers are now locked.", "error");
          await init();
          return;
        }
        const m = res.status === 409 ? editing ? "This questionnaire is not open for changes." : "This questionnaire has already been submitted." : res.status === 404 ? "This link is invalid or has expired." : body.error || `Could not ${editing ? "save" : "submit"} (HTTP ${res.status}).`;
        setMsg(m);
        btn.disabled = false;
        return;
      }
      renderDone(root, editing, body.data?.editability?.deadline);
    } catch (err) {
      console.error(`[questionnaire-fill] ${editing ? "edit" : "submit"} error:`, err);
      setMsg("Something went wrong. Please try again.");
      btn.disabled = false;
    }
  });
}
function renderDone(root, wasEdit, deadline) {
  const until = deadline ? ` until ${fmtDateTime(deadline)}` : "";
  root.innerHTML = `
    <div class="qf-page"><div class="qf-card"><div class="qf-state">
      <span class="material-symbols-outlined">check_circle</span>
      <h1>${wasEdit ? "Changes saved" : "Thank you!"}</h1>
      <p class="qf-sub">${wasEdit ? "Your account manager will see the updated answers." : "Your answers have been submitted. Your account manager will be in touch."}</p>
      <div class="qf-note qf-note--done">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Need to change something? This same link keeps working${escapeHtml(until)}. Keep the email we sent you and open it again any time before then.</span>
      </div>
      <button class="qf-btn" type="button" id="qf-again">Make another change</button>
    </div></div></div>`;
  document.getElementById("qf-again")?.addEventListener("click", () => {
    init();
  });
}
const questionnaireFillRoute = { render, init };
export {
  questionnaireFillRoute as default,
  init,
  render
};
//# sourceMappingURL=questionnaire-fill-route-CXeqTkJo.js.map
