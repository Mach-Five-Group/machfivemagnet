import { a as getDeliverableLinkParams, A as AuthController } from "./index.js";
import { m as mfmLockupColorUrl } from "./coBrand-DbiPODuF.js";
import { f as fmtDateTime, c as collectAnswers, e as ensureQuestionnaireAnswerStyles, d as answerDisplay } from "./questionnaireAnswers-BUs4-Lnv.js";
import { h as heroSketch } from "./auth-hero-sketch-emnp5_QT.js";
let stylesInjected = false;
function ensureStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-deliverable-fill-styles";
  style.textContent = `
    .dlf-page {
      min-height: 100vh; padding: 32px 20px 64px; position: relative;
      /* Same brand-blue field as the questionnaire fill page (auth panel one
         step lighter), so every emailed-link surface reads as one family. */
      background:
        radial-gradient(120% 120% at 80% 10%, rgba(34, 160, 255, 0.30) 0%, transparent 55%),
        linear-gradient(160deg, var(--color-primary-500, #0088DD) 0%, var(--color-primary-700, #00558D) 70%, var(--color-primary-800, #003961) 100%);
      color: var(--color-text, #0B1220);
      color-scheme: light; font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    }
    .dlf-page::before {
      content: ""; position: fixed; inset: 0; z-index: 0;
      background: url("${heroSketch}") center / cover no-repeat;
      mix-blend-mode: multiply;
      opacity: 0.24; pointer-events: none;
    }
    .dlf-card {
      width: min(720px, 100%); margin: 0 auto; background: var(--color-bg, #fff);
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-lg, 16px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(11,18,32,0.10)); padding: 36px 32px;
      position: relative; z-index: 1;
    }
    .dlf-card h1 { font-family: var(--font-display, inherit); font-size: 1.5rem; font-weight: 600; margin: 0 0 6px; color: var(--color-primary-600, #0072BA); }
    .dlf-card .dlf-sub { font-size: 0.9rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 28px; }
    .dlf-brand { height: 38px; width: auto; display: block; margin: 0 0 18px; }
    .dlf-section { margin-bottom: 8px; }
    .dlf-section[hidden] { display: none; }
    .dlf-section h2 { font-size: 1.05rem; font-weight: 600; margin: 0 0 10px; padding-bottom: 8px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .dlf-intro { font-size: 0.85rem; color: var(--color-text-muted, #4A5A78); margin: 0 0 16px; }
    /* The authored plan content — the document the client is approving. A
       tinted panel keeps "their plan" visually distinct from "your review". */
    .dlf-plan { background: var(--color-surface, #F4F7FB); border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px); padding: 14px 16px; margin: 0 0 18px; }
    .dlf-plan__item { margin-bottom: 12px; }
    .dlf-plan__item:last-child { margin-bottom: 0; }
    .dlf-plan__label { font-size: 0.76rem; font-weight: 600; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 2px; }
    .dlf-plan__value { font-size: 0.92rem; white-space: pre-wrap; }
    .dlf-plan__empty { font-size: 0.85rem; color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .dlf-review-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--color-primary-600, #0072BA); margin: 0 0 12px; }
    .dlf-help { font-size: 0.8rem; color: var(--color-text-subtle, #6C7C9A); margin: -2px 0 6px; }
    .dlf-field { margin-bottom: 18px; }
    .dlf-field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
    .dlf-field input[type="text"], .dlf-field textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.92rem; padding: 10px 12px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 10px);
      background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .dlf-field textarea { min-height: 76px; resize: vertical; }
    .dlf-field input:focus, .dlf-field textarea:focus { outline: none; border-color: var(--color-primary-600, #0072BA); box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.15)); }
    .dlf-checkbox-group { display: flex; flex-wrap: wrap; gap: 10px 20px; }
    .dlf-checkbox-row { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; }
    .dlf-btn {
      width: 100%; appearance: none; border: 0; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px; border-radius: var(--radius-md, 10px); background: var(--color-primary-600, #0072BA); color: #fff; margin-top: 8px;
    }
    .dlf-btn:hover { background: var(--color-primary-700, #00558D); }
    .dlf-btn[disabled] { opacity: 0.6; cursor: default; }
    .dlf-btn--ghost {
      appearance: none; cursor: pointer; font: inherit; font-size: 0.98rem; font-weight: 600;
      padding: 13px 18px; border-radius: var(--radius-md, 10px);
      border: 1px solid var(--color-border, #D4DCE8); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
      display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;
    }
    .dlf-btn--ghost:hover { background: var(--color-surface, #F4F7FB); }
    .dlf-btn--ghost .material-symbols-outlined, .dlf-btn .material-symbols-outlined { font-size: 1.1rem; }
    .dlf-msg { font-size: 0.85rem; margin: 14px 0 0; min-height: 1em; }
    .dlf-msg.error { color: var(--color-danger, #DD4124); }
    .dlf-msg.ok { color: var(--color-success, #009473); }
    .dlf-state { text-align: center; padding: 20px 0; }
    .dlf-state .material-symbols-outlined { font-size: 2.4rem; color: var(--color-primary-600, #0072BA); }
    /* ── stepper chrome — same roller as the questionnaire fill page ── */
    .dlf-progress { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 18px; }
    .dlf-progress-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-text-subtle, #6C7C9A); }
    .dlf-dots { display: flex; gap: 8px; }
    .dlf-dot {
      appearance: none; border: 0; cursor: pointer; padding: 0;
      width: 10px; height: 10px; border-radius: 50%;
      background: var(--color-border, #D4DCE8); transition: background .15s ease, transform .15s ease;
    }
    .dlf-dot[aria-current="step"] { background: var(--color-primary-600, #0072BA); transform: scale(1.25); }
    .dlf-dot:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--color-accent-soft, rgba(0,114,186,0.25)); }
    .dlf-section.dlf-enter { animation: dlfSlideIn .18s ease; }
    @keyframes dlfSlideIn { from { opacity: 0; transform: translateX(var(--dlf-dx, 14px)); } }
    html.ff-no-animations .dlf-section.dlf-enter { animation: none; }
    @media (prefers-reduced-motion: reduce) { .dlf-section.dlf-enter { animation: none; } }
    .dlf-nav { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
    .dlf-nav .dlf-btn { margin-top: 0; }
    /* ── return-visit chrome (edit + locked states) ── */
    .dlf-note {
      display: flex; align-items: flex-start; gap: 8px; padding: 11px 13px; margin: 0 0 20px;
      border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB);
      font-size: 0.85rem; line-height: 1.45; color: var(--color-text, #0B1220);
    }
    .dlf-note .material-symbols-outlined { font-size: 1.15rem; flex: 0 0 auto; color: var(--color-primary-600, #0072BA); }
    .dlf-note--locked .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .dlf-note--done { background: var(--color-success-soft, #E6F5F1); }
    .dlf-note--done .material-symbols-outlined { color: var(--color-success, #009473); }
  `;
  document.head.appendChild(style);
  ensureQuestionnaireAnswerStyles();
  stylesInjected = true;
}
function apiBase() {
  return AuthController.getConfig?.().BASE_URL || "";
}
function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
const isAm = (q) => q.audience === "am";
function hasContent(q, content) {
  const v = content?.[q.id];
  return Array.isArray(v) ? v.length > 0 : !!(v && String(v).trim());
}
function planHtml(section, content) {
  const items = (section.questions || []).filter((q) => isAm(q) && hasContent(q, content));
  if (!items.length) return "";
  return `<div class="dlf-plan">${items.map((q) => `
    <div class="dlf-plan__item">
      <div class="dlf-plan__label">${escapeHtml(q.label)}</div>
      <div class="dlf-plan__value">${answerDisplay(q, content)}</div>
    </div>`).join("")}</div>`;
}
function fieldHtml(q) {
  const id = `dlf-${q.id}`;
  if (q.type === "checkbox_group") {
    const options = Array.isArray(q.options) ? q.options : [];
    return `
      <div class="dlf-field" data-question-id="${q.id}" data-question-type="checkbox_group">
        <label>${escapeHtml(q.label)}</label>
        ${q.help ? `<p class="dlf-help">${escapeHtml(q.help)}</p>` : ""}
        <div class="dlf-checkbox-group">
          ${options.map((opt, i) => `
            <label class="dlf-checkbox-row">
              <input type="checkbox" id="${id}-${i}" value="${escapeHtml(opt)}" />
              ${escapeHtml(opt)}
            </label>`).join("")}
        </div>
      </div>`;
  }
  if (q.type === "textarea") {
    return `
      <div class="dlf-field" data-question-id="${q.id}" data-question-type="textarea">
        <label for="${id}">${escapeHtml(q.label)}</label>
        ${q.help ? `<p class="dlf-help">${escapeHtml(q.help)}</p>` : ""}
        <textarea id="${id}"></textarea>
      </div>`;
  }
  return `
    <div class="dlf-field" data-question-id="${q.id}" data-question-type="text">
      <label for="${id}">${escapeHtml(q.label)}</label>
      ${q.help ? `<p class="dlf-help">${escapeHtml(q.help)}</p>` : ""}
      <input type="text" id="${id}" />
    </div>`;
}
function reviewReadOnlyHtml(q, answers) {
  return `
    <div class="qm-qa">
      <div class="qm-qa__q">${escapeHtml(q.label)}</div>
      <div class="qm-qa__a">${answerDisplay(q, answers) || '<span class="qm-qa__a--empty">Left blank</span>'}</div>
    </div>`;
}
function sectionBodyHtml(section, content, { readOnly = false, answers = {} } = {}) {
  const clQuestions = (section.questions || []).filter((q) => !isAm(q));
  const plan = planHtml(section, content);
  const eyebrow = plan && clQuestions.length ? '<p class="dlf-review-label">Your review</p>' : "";
  const review = clQuestions.map((q) => readOnly ? reviewReadOnlyHtml(q, answers) : fieldHtml(q)).join("");
  return `
    ${section.intro ? `<p class="dlf-intro">${escapeHtml(section.intro)}</p>` : ""}
    ${plan}
    ${eyebrow}
    ${review}`;
}
function stateHtml(icon, title, body) {
  return `
    <div class="dlf-page"><div class="dlf-card"><div class="dlf-state">
      <span class="material-symbols-outlined">${icon}</span>
      <h1>${escapeHtml(title)}</h1>
      <p class="dlf-sub">${escapeHtml(body)}</p>
    </div></div></div>`;
}
function render() {
  ensureStyles();
  return `<div id="dlf-root">${stateHtml("hourglass_top", "Loading your plan…", "One moment.")}</div>`;
}
async function init() {
  const root = document.getElementById("dlf-root");
  if (!root) return;
  const params = getDeliverableLinkParams();
  if (!params) {
    root.innerHTML = stateHtml("error", "Invalid link", "This link is missing required information. Please use the link exactly as sent.");
    return;
  }
  let data;
  try {
    const res = await fetch(`${apiBase()}/m5t/v5/m5mDeliverable/public/${encodeURIComponent(params.guid)}?token=${encodeURIComponent(params.token)}`);
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body.ok) {
      const msg = res.status === 404 ? body.error || "This link is invalid or has expired." : "Something went wrong loading your plan. Please try again shortly.";
      root.innerHTML = stateHtml("error", "Cannot open this plan", msg);
      return;
    }
    data = body.data;
  } catch (err) {
    console.error("[deliverable-fill] load error:", err);
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
    return "Your account manager has finalised this plan, so the review can no longer be changed here.";
  }
  const when = edit.deadline ? ` The window closed on ${fmtDateTime(edit.deadline)}.` : "";
  return `A review can be changed for 14 days after it is submitted.${when}`;
}
function renderLocked(root, data) {
  const sections = data.template?.sections || [];
  root.innerHTML = `
    <div class="dlf-page"><div class="dlf-card">
      <img class="dlf-brand" src="${mfmLockupColorUrl}" alt="Mach Five Marketing" height="34" />
      <h1>${escapeHtml(data.template?.name || "Your Plan")}</h1>
      <p class="dlf-sub">${data.submitted_tz ? `Submitted ${escapeHtml(fmtDateTime(data.submitted_tz))}.` : "Submitted."} Here is the plan and your review.</p>
      <div class="dlf-note dlf-note--locked">
        <span class="material-symbols-outlined" aria-hidden="true">lock</span>
        <span>${escapeHtml(lockedReasonText(data))} To change anything now, contact your account manager.</span>
      </div>
      ${sections.map((s) => `
        <div class="dlf-section">
          <h2>${escapeHtml(s.title)}</h2>
          ${sectionBodyHtml(s, data.content || {}, { readOnly: true, answers: data.answers || {} })}
        </div>`).join("")}
    </div></div>`;
}
function renderForm(root, data, params, mode) {
  const editing = mode === "edit";
  const sections = data.template?.sections || [];
  const savedAnswers = data.answers || {};
  const content = data.content || {};
  const deadline = data.editability?.deadline;
  const intro = editing ? "Change anything you need to, then save. Everything you sent before is already filled in." : "Review each section and mark it Approved, or note what you want changed. Sign at the end. Nothing launches before your sign-off.";
  const noteHtml = editing ? `<div class="dlf-note">
         <span class="material-symbols-outlined" aria-hidden="true">edit_note</span>
         <span>You already submitted this${data.submitted_tz ? ` on ${escapeHtml(fmtDateTime(data.submitted_tz))}` : ""}.${deadline ? ` You can make changes until <strong>${escapeHtml(fmtDateTime(deadline))}</strong>.` : ""}</span>
       </div>` : "";
  root.innerHTML = `
    <div class="dlf-page"><div class="dlf-card">
      <img class="dlf-brand" src="${mfmLockupColorUrl}" alt="Mach Five Marketing" height="34" />
      <h1>${escapeHtml(data.template?.name || "Your Plan")}</h1>
      <p class="dlf-sub">${escapeHtml(intro)}</p>
      ${noteHtml}
      <div class="dlf-progress">
        <span class="dlf-progress-label" id="dlf-progress-label"></span>
        <div class="dlf-dots" role="group" aria-label="Sections">
          ${sections.map((s, i) => `<button type="button" class="dlf-dot" data-step="${i}" aria-label="${escapeHtml(s.title)}"></button>`).join("")}
        </div>
      </div>
      <form id="dlf-form" novalidate>
        ${sections.map((s, i) => `
          <div class="dlf-section" data-step="${i}" hidden>
            <h2>${escapeHtml(s.title)}</h2>
            ${sectionBodyHtml(s, content)}
          </div>`).join("")}
        <div class="dlf-nav">
          <button class="dlf-btn--ghost" type="button" id="dlf-back"><span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>Back</button>
          <button class="dlf-btn" type="button" id="dlf-next">Next<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
          <button class="dlf-btn" type="submit" id="dlf-submit">${editing ? "Save changes" : "Submit review"}</button>
        </div>
        <p class="dlf-msg" id="dlf-msg" role="status"></p>
      </form>
    </div></div>`;
  const stepEls = [...root.querySelectorAll(".dlf-section[data-step]")];
  const dotEls = [...root.querySelectorAll(".dlf-dot")];
  const backBtn = document.getElementById("dlf-back");
  const nextBtn = document.getElementById("dlf-next");
  const submitBtn = document.getElementById("dlf-submit");
  const progressLabel = document.getElementById("dlf-progress-label");
  let step = 0;
  function showStep(n, fromDirection = 1) {
    step = Math.max(0, Math.min(sections.length - 1, n));
    stepEls.forEach((el, i) => {
      el.hidden = i !== step;
      el.classList.remove("dlf-enter");
    });
    const active = stepEls[step];
    if (active) {
      active.style.setProperty("--dlf-dx", `${fromDirection >= 0 ? 14 : -14}px`);
      void active.offsetWidth;
      active.classList.add("dlf-enter");
    }
    dotEls.forEach((d, i) => {
      if (i === step) d.setAttribute("aria-current", "step");
      else d.removeAttribute("aria-current");
    });
    if (progressLabel) progressLabel.textContent = `Section ${step + 1} of ${sections.length}`;
    backBtn.style.visibility = step === 0 ? "hidden" : "";
    nextBtn.style.display = step === sections.length - 1 ? "none" : "";
    submitBtn.style.display = step === sections.length - 1 ? "" : "none";
    root.querySelector(".dlf-card")?.scrollIntoView({ block: "start" });
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
  const form = document.getElementById("dlf-form");
  const btn = document.getElementById("dlf-submit");
  const msg = document.getElementById("dlf-msg");
  const setMsg = (text, kind = "error") => {
    msg.textContent = text;
    msg.className = `dlf-msg ${kind}`;
  };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answers = collectAnswers(root);
    const base = `${apiBase()}/m5t/v5/m5mDeliverable/public/${encodeURIComponent(params.guid)}`;
    const url = editing ? `${base}?token=${encodeURIComponent(params.token)}` : `${base}/submit?token=${encodeURIComponent(params.token)}`;
    btn.disabled = true;
    setMsg(editing ? "Saving…" : "Submitting…", "ok");
    let res;
    try {
      res = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        // content_fingerprint binds this approval to the plan version rendered
        // above — the server refuses (409 content_changed) if the plan moved
        // after this tab loaded, and we reload the current version instead.
        body: JSON.stringify(editing ? { answers } : { answers, content_fingerprint: data.content_fingerprint || "" })
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        if (res.status === 423) {
          setMsg(body.error || "This review is now locked.", "error");
          await init();
          return;
        }
        if (res.status === 409 && body.reason === "content_changed") {
          await init();
          const freshMsg = document.getElementById("dlf-msg");
          if (freshMsg) {
            freshMsg.textContent = body.error || "This plan was updated after you opened it. Review the latest version and submit again.";
            freshMsg.className = "dlf-msg error";
          }
          return;
        }
        const m = res.status === 409 ? editing ? "This plan is not open for changes." : "This plan has already been submitted." : res.status === 404 ? "This link is invalid or has expired." : body.error || `Could not ${editing ? "save" : "submit"} (HTTP ${res.status}).`;
        setMsg(m);
        btn.disabled = false;
        return;
      }
      renderDone(root, editing, body.data?.editability?.deadline);
    } catch (err) {
      console.error(`[deliverable-fill] ${editing ? "edit" : "submit"} error:`, err);
      setMsg("Something went wrong. Please try again.");
      btn.disabled = false;
    }
  });
}
function renderDone(root, wasEdit, deadline) {
  const until = deadline ? ` until ${fmtDateTime(deadline)}` : "";
  root.innerHTML = `
    <div class="dlf-page"><div class="dlf-card"><div class="dlf-state">
      <span class="material-symbols-outlined">check_circle</span>
      <h1>${wasEdit ? "Changes saved" : "Thank you"}</h1>
      <p class="dlf-sub">${wasEdit ? "Your account manager will see the updated review." : "Your review has been submitted. Your account manager will be in touch."}</p>
      <div class="dlf-note dlf-note--done">
        <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
        <span>Need to change something? This same link keeps working${escapeHtml(until)}. Keep the email we sent you and open it again any time before then.</span>
      </div>
      <button class="dlf-btn" type="button" id="dlf-again">Make another change</button>
    </div></div></div>`;
  document.getElementById("dlf-again")?.addEventListener("click", () => {
    init();
  });
}
const deliverableFillRoute = { render, init };
export {
  deliverableFillRoute as default,
  init,
  render
};
//# sourceMappingURL=deliverable-fill-route-Cj00vKRO.js.map
