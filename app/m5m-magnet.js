/**
 * Mach Five Magnet — embeddable conversational lead-capture widget (v1).
 *
 * Drop-in: <script src="https://machfivemagnet.com/app/m5m-magnet.js"
 *                  data-magnet="<APP_GUID>" data-api="https://machfivemagnet-saas.onrender.com"></script>
 *
 * Self-contained vanilla JS, Shadow-DOM isolated (no host-page CSS bleed), no dependencies and
 * no real-time engine. It fetches the magnet's appearance + linear flow, runs a chat-bubble
 * conversation (message / choice / text / email / phone steps), and POSTs the captured answers
 * to the public capture endpoint → an m5mLead in the owning tenant's leads inbox.
 */
(function () {
  var script = document.currentScript || (function () {
    var s = document.querySelectorAll('script[data-magnet]');
    return s[s.length - 1];
  })();
  var APP_GUID = script && script.getAttribute('data-magnet');
  var API = ((script && script.getAttribute('data-api')) || 'https://machfivemagnet-saas.onrender.com').replace(/\/$/, '');
  if (!APP_GUID) { console.warn('[m5m] missing data-magnet attribute'); return; }
  if (document.getElementById('m5m-magnet-root')) return; // single instance per page

  var cfg = null, steps = [], idx = 0, answers = {}, captured = false, started = false;
  var shadow, els = {};

  fetch(API + '/m5t/v5/magnet/' + encodeURIComponent(APP_GUID) + '/config?ts=' + Date.now(), { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.ok) { console.warn('[m5m] magnet config unavailable'); return; }
      cfg = { appearance: data.appearance || {}, flow: data.flow || { steps: [] } };
      steps = (cfg.flow.steps || []).slice();
      mount();
    })
    .catch(function (e) { console.warn('[m5m] config fetch failed', e); });

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function mount() {
    var a = cfg.appearance;
    var color = a.color || '#FF6B35';
    var host = document.createElement('div');
    host.id = 'm5m-magnet-root';
    document.body.appendChild(host);
    shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML =
      '<style>' + styles(color) + '</style>' +
      '<button class="m5m-launcher" aria-label="Open chat">' +
        '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' +
        (a.launcher ? '<span class="m5m-launcher-label">' + esc(a.launcher) + '</span>' : '') +
      '</button>' +
      '<div class="m5m-panel" hidden>' +
        '<div class="m5m-header"><span class="m5m-title">' + esc(a.title || 'Chat with us') + '</span>' +
          '<button class="m5m-close" aria-label="Close">&times;</button></div>' +
        '<div class="m5m-messages"></div>' +
        '<div class="m5m-input"></div>' +
      '</div>';

    els.launcher = shadow.querySelector('.m5m-launcher');
    els.panel = shadow.querySelector('.m5m-panel');
    els.messages = shadow.querySelector('.m5m-messages');
    els.input = shadow.querySelector('.m5m-input');
    els.launcher.addEventListener('click', openPanel);
    shadow.querySelector('.m5m-close').addEventListener('click', function () {
      els.panel.hidden = true; els.launcher.hidden = false;
    });
  }

  function openPanel() {
    els.panel.hidden = false;
    els.launcher.hidden = true;
    if (!started) { started = true; idx = 0; advance(); }
  }

  function botBubble(text) {
    var d = document.createElement('div');
    d.className = 'm5m-msg m5m-bot';
    d.innerHTML = esc(text);
    els.messages.appendChild(d);
    els.messages.scrollTop = els.messages.scrollHeight;
  }
  function userBubble(text) {
    var d = document.createElement('div');
    d.className = 'm5m-msg m5m-user';
    d.textContent = text;
    els.messages.appendChild(d);
    els.messages.scrollTop = els.messages.scrollHeight;
  }
  function clearInput() { els.input.innerHTML = ''; }

  function advance() {
    if (idx >= steps.length) { finish(); return; }
    var step = steps[idx];
    if (step.type === 'message') {
      botBubble(step.text || '');
      idx++;
      setTimeout(advance, 450);
      return;
    }
    // question step: prompt + collect
    botBubble(step.prompt || step.text || '');
    if (step.type === 'choice') {
      renderChoices(step);
    } else {
      renderInput(step);
    }
  }

  function commit(step, value, display) {
    if (step.field) {
      // 'name' is mapped server-side; everything else maps to a lead column.
      answers[step.field] = value;
    }
    userBubble(display != null ? display : value);
    clearInput();
    idx++;
    setTimeout(advance, 300);
  }

  function renderChoices(step) {
    clearInput();
    var wrap = document.createElement('div');
    wrap.className = 'm5m-choices';
    (step.options || []).forEach(function (opt) {
      var b = document.createElement('button');
      b.className = 'm5m-choice';
      b.textContent = opt;
      b.addEventListener('click', function () { commit(step, opt, opt); });
      wrap.appendChild(b);
    });
    els.input.appendChild(wrap);
  }

  function renderInput(step) {
    clearInput();
    var form = document.createElement('form');
    form.className = 'm5m-form';
    var input = document.createElement('input');
    input.type = step.type === 'email' ? 'email' : (step.type === 'phone' ? 'tel' : 'text');
    input.placeholder = step.placeholder || 'Type your answer…';
    if (!step.optional) input.required = true;
    var send = document.createElement('button');
    send.type = 'submit';
    send.className = 'm5m-send';
    send.setAttribute('aria-label', 'Send');
    send.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
    form.appendChild(input);
    form.appendChild(send);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = (input.value || '').trim();
      if (!v && step.optional) { commit(step, '', '(skipped)'); return; }
      if (!v) { input.focus(); return; }
      commit(step, v);
    });
    els.input.appendChild(form);
    input.focus();
  }

  function finish() {
    clearInput();
    if (captured) return;
    captured = true;
    fetch(API + '/m5t/v5/magnet/' + encodeURIComponent(APP_GUID) + '/capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: answers }),
    }).catch(function (e) { console.warn('[m5m] capture failed', e); });
  }

  function styles(color) {
    return [
      ':host{all:initial;}',
      '*{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}',
      // [hidden] must beat the .m5m-panel/.m5m-launcher display rules (author > UA), or the
      // panel loads open + empty over the launcher and the flow never starts on click.
      '[hidden]{display:none!important;}',
      '.m5m-launcher{position:fixed;bottom:20px;right:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;border:0;cursor:pointer;background:' + color + ';color:#fff;height:56px;padding:0 20px 0 16px;border-radius:28px;box-shadow:0 6px 20px rgba(0,0,0,.25);}',
      '.m5m-launcher-label{font-size:15px;font-weight:600;}',
      '.m5m-panel{position:fixed;bottom:20px;right:20px;z-index:2147483000;width:360px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 40px);background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.28);display:flex;flex-direction:column;overflow:hidden;}',
      '.m5m-header{background:' + color + ';color:#fff;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:16px;}',
      '.m5m-close{background:transparent;border:0;color:#fff;font-size:24px;line-height:1;cursor:pointer;}',
      '.m5m-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:#F8FAFC;}',
      '.m5m-msg{max-width:80%;padding:10px 14px;border-radius:16px;font-size:14px;line-height:1.45;}',
      '.m5m-bot{align-self:flex-start;background:#fff;border:1px solid #E2E8F0;color:#1E293B;border-bottom-left-radius:4px;}',
      '.m5m-user{align-self:flex-end;background:' + color + ';color:#fff;border-bottom-right-radius:4px;}',
      '.m5m-input{padding:12px;border-top:1px solid #E2E8F0;background:#fff;}',
      '.m5m-form{display:flex;gap:8px;}',
      '.m5m-form input{flex:1;border:1px solid #E2E8F0;border-radius:22px;padding:10px 14px;font-size:14px;outline:none;}',
      '.m5m-form input:focus{border-color:' + color + ';}',
      '.m5m-send{width:40px;height:40px;border:0;border-radius:50%;background:' + color + ';cursor:pointer;display:grid;place-items:center;flex:0 0 auto;}',
      '.m5m-choices{display:flex;flex-wrap:wrap;gap:8px;}',
      '.m5m-choice{border:1px solid ' + color + ';color:' + color + ';background:#fff;border-radius:20px;padding:8px 14px;font-size:14px;font-weight:600;cursor:pointer;}',
      '.m5m-choice:hover{background:' + color + ';color:#fff;}',
    ].join('');
  }
})();
