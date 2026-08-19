const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
function fmtDateTime(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return String(iso);
  }
}
function answerDisplay(q, answers = {}) {
  const val = answers[q.id];
  if (q.type === "checkbox_group") {
    const selected = Array.isArray(val) ? val : [];
    return selected.length ? esc(selected.join(", ")) : "";
  }
  return val ? esc(val) : "";
}
function answersHtml(data, { emptyLabel = "(blank)", renderAnswer = null } = {}) {
  const sections = data?.questionnaire?.sections || [];
  const answers = data?.answers || {};
  if (!sections.length) return '<p class="qm-qa__a qm-qa__a--empty">This questionnaire has no questions.</p>';
  return sections.map((s) => `
    <div class="qm-section">
      <h3>${esc(s.title)}</h3>
      ${(s.questions || []).map((q) => `
        <div class="qm-qa" data-question-id="${esc(q.id)}" data-question-type="${esc(q.type)}">
          <div class="qm-qa__q">${esc(q.label)}</div>
          <div class="qm-qa__a">${renderAnswer ? renderAnswer(q, answers) : answerDisplay(q, answers) || `<span class="qm-qa__a--empty">${esc(emptyLabel)}</span>`}</div>
        </div>`).join("")}
    </div>`).join("");
}
function editFieldHtml(q, answers = {}) {
  const val = answers[q.id];
  if (q.type === "checkbox_group") {
    const selected = Array.isArray(val) ? val : [];
    const options = Array.isArray(q.options) ? q.options : [];
    return `<div class="qm-checkbox-group">${options.map((opt) => `
      <label><input type="checkbox" value="${esc(opt)}" ${selected.includes(opt) ? "checked" : ""}/> ${esc(opt)}</label>`).join("")}</div>`;
  }
  if (q.type === "textarea") return `<textarea>${esc(val || "")}</textarea>`;
  return `<input type="text" value="${esc(val || "")}" />`;
}
function collectAnswers(root) {
  const answers = {};
  if (!root) return answers;
  root.querySelectorAll("[data-question-id]").forEach((fieldEl) => {
    const qid = fieldEl.dataset.questionId;
    if (fieldEl.dataset.questionType === "checkbox_group") {
      const checked = [...fieldEl.querySelectorAll('input[type="checkbox"]:checked')].map((cb) => cb.value);
      if (checked.length) answers[qid] = checked;
    } else {
      const value = (fieldEl.querySelector("input,textarea")?.value || "").trim();
      if (value) answers[qid] = value;
    }
  });
  return answers;
}
function answersMetaHtml(data) {
  const recipient = data?.recipient_email ? `<p class="qm-recipient">Sent to ${esc(data.recipient_email)}</p>` : "";
  const edited = data?.last_edited_tz ? `<p class="qm-edited-marker">Last edited by ${esc(data.last_edited_by_email || "a team member")} on ${esc(fmtDateTime(data.last_edited_tz))}</p>` : "";
  const clientEdited = data?.client_edited_tz ? `<p class="qm-edited-marker">Updated by the client on ${esc(fmtDateTime(data.client_edited_tz))}</p>` : "";
  return recipient + edited + clientEdited;
}
let stylesInjected = false;
function ensureQuestionnaireAnswerStyles() {
  if (stylesInjected) return;
  const style = document.createElement("style");
  style.id = "m5t-questionnaire-answer-styles";
  style.textContent = `
    .qm-status { display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: var(--radius-md, 10px); background: var(--color-surface, #F4F7FB); margin-bottom: 16px; font-size: 0.85rem; }
    .qm-status .material-symbols-outlined { color: var(--color-primary-600, #0072BA); }
    .qm-status[data-status="SUBMITTED"] .material-symbols-outlined { color: var(--color-success, #009473); }
    .qm-status[data-status="CANCELLED"] .material-symbols-outlined { color: var(--color-danger, #DD4124); }
    .qm-status[data-status="LOCKED"] { background: var(--color-surface-2, #EAF0F7); }
    .qm-status[data-status="LOCKED"] .material-symbols-outlined { color: var(--color-text-muted, #4A5A78); }
    .qm-recipient { font-size: 0.78rem; color: var(--color-text-subtle, #6C7C9A); margin: -8px 0 16px; }
    .qm-edited-marker { font-size: 0.76rem; color: var(--color-text-subtle, #6C7C9A); margin: -8px 0 16px; }
    .qm-section { margin-bottom: 18px; }
    .qm-section h3 { font-size: 0.92rem; font-weight: 600; margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--color-border, #D4DCE8); }
    .qm-qa { margin-bottom: 10px; }
    .qm-qa__q { font-size: 0.78rem; font-weight: 600; color: var(--color-text-subtle, #6C7C9A); margin-bottom: 3px; }
    .qm-qa__a { font-size: 0.9rem; white-space: pre-wrap; }
    .qm-qa__a.qm-qa__a--empty, .qm-qa__a .qm-qa__a--empty { color: var(--color-text-subtle, #6C7C9A); font-style: italic; }
    .qm-qa__a input[type="text"], .qm-qa__a textarea {
      width: 100%; box-sizing: border-box; font: inherit; font-size: 0.88rem; padding: 8px 10px;
      border: 1px solid var(--color-border, #D4DCE8); border-radius: var(--radius-md, 8px); background: var(--color-bg, #fff); color: var(--color-text, #0B1220);
    }
    .qm-qa__a textarea { min-height: 60px; resize: vertical; }
    .qm-qa__a .qm-checkbox-group { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 0.85rem; }
    .qm-qa__a .qm-checkbox-group label { display: flex; align-items: center; gap: 5px; }
  `;
  document.head.appendChild(style);
  stylesInjected = true;
}
export {
  answersMetaHtml as a,
  answersHtml as b,
  collectAnswers as c,
  answerDisplay as d,
  ensureQuestionnaireAnswerStyles as e,
  fmtDateTime as f,
  editFieldHtml as g
};
//# sourceMappingURL=questionnaireAnswers-BUs4-Lnv.js.map
