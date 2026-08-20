/*
  Bloom copy of each contact-form enquiry.

  ── Why this is structured the way it is ─────────────────────────────────────
  The form now submits NATIVELY, so Shopify's invisible captcha can attach its
  token (see the note in sections/lorinczi-contact-form.liquid). That means the
  page navigates away the instant Send is pressed, and any request still in
  flight is cancelled — which is exactly how enquiries with photos were being
  lost before: Safari reported "Load failed" at 0ms.

  So the work is moved off the submit path entirely:

    • the answer group is created as soon as an email address is entered
    • answers are saved whenever a field is left (blur), and when photos finish
      uploading
    • pressing Send fires ONE short request — the SUBMIT — with keepalive:true,
      which the browser is required to complete even as the page unloads

  By the time anyone presses Send, Bloom already holds the whole enquiry. The
  final call just marks it submitted.

  BEST EFFORT, ALWAYS. Shopify delivers the enquiry by email regardless. Nothing
  here blocks, delays or interferes with that. This talks to a private,
  undocumented API and no enquiry may ever depend on it.

  ── The API (captured from Bloom's own form, 11 Aug 2026) ────────────────────
    POST /api/questionnaires/{qid}/answer-groups        -> { id, accessToken }
    POST /api/questionnaires/{qid}/answer-groups/{agId} -> { answers: [...] }
    POST /api/questionnaires/{qid}/answers              -> { answerGroupId, payload: "SUBMIT" }
  All three are unauthenticated and send access-control-allow-origin: *.

  ── Question IDs ─────────────────────────────────────────────────────────────
  Stable until the form is edited in Bloom. To refresh, load
  https://lorinczijewelry.bloom.io/contact-form and read the ids out of the
  embedded page data. A stale id makes Bloom reject that answer; the enquiry
  still reaches the inbox by email.
*/
(function () {
  if (window.lzBloomSend) return;

  var API = 'https://api.bloom.io/api';
  var CFG = window.lzBloomConfig || {};
  var QUESTIONNAIRE = CFG.questionnaireId || 'kj49qxnw1dl12';
  var GA_ID = 'G-NL5P1911ZX';
  var STORE_KEY = 'lz_bloom_last';

  var Q = {
    personal: '8wod4e4gzm701', // PERSONAL_INFO — first/last/email/phone + custom fields
    message: 'pv5d6l2g88dw4', // TEXTUAL — "tell me a bit what you'd like to make"
    attachment: 'vn8d2kqmzqdoq' // ATTACHMENT — photos
  };
  var CUSTOM = {
    budget: 'l0zdg15jxd3go',
    source: '8vk9n6zkydpe6',
    sentFrom: '8mx73xqw87qe2'
  };

  var agId = null;        // Bloom's answer group, created once
  var creating = null;    // in-flight creation promise
  var photos = [];        // hosted photo descriptors
  var steps = [];         // diagnostic trail
  var lastSaveAt = 0;

  function field(name) {
    var el = document.getElementById('ContactForm-' + name);
    return el ? String(el.value || '').trim() : '';
  }

  /*
    Bloom REQUIRES first name, last name and email — it answers 400
    "Last Name is required." otherwise and rejects the whole enquiry. Our form
    asks for a single optional "Name", so both halves are filled defensively.
    A single space does not satisfy Bloom (it trims), so the placeholder has to
    be a real character; an em dash reads as "none given" in the lead list.
  */
  function personName(full, email) {
    var parts = String(full || '').trim().split(/\s+/).filter(Boolean);
    var first = parts.shift() || '';
    var last = parts.join(' ');
    if (!first) first = String(email || '').split('@')[0] || 'Website enquiry';
    if (!last) last = '—';
    return { firstName: first, lastName: last };
  }

  function firstTouch() {
    var src = 'direct', landing = '';
    try {
      src = sessionStorage.getItem('lz_src') || 'direct';
      landing = sessionStorage.getItem('lz_landing') || '';
    } catch (e) {}
    return src + (landing && landing !== location.pathname ? ' (landed on ' + landing + ')' : '');
  }

  // ——— GA4, loaded the way contact-form-tracking.js does it ———
  var gaLoaded = false;
  function gtag() { (window.dataLayer = window.dataLayer || []).push(arguments); }
  function track(name, params) {
    if (!gaLoaded) {
      gaLoaded = true;
      if (!(window.google_tag_manager && window.google_tag_manager[GA_ID])) {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        gtag('js', new Date());
        gtag('config', GA_ID, { send_page_view: false });
      }
    }
    gtag('event', name, params || {});
  }

  function persist(extra) {
    var rec = {
      at: new Date().toISOString(),
      page: location.pathname,
      answerGroup: agId,
      photos: photos.length,
      steps: steps.slice(-8)
    };
    for (var k in extra) rec[k] = extra[k];
    window.lzBloomLast = rec;
    var json = JSON.stringify(rec);
    try { localStorage.setItem(STORE_KEY, json); } catch (e) {}
    try { sessionStorage.setItem(STORE_KEY, json); } catch (e) {}
  }
  function lastRecord() {
    if (window.lzBloomLast) return window.lzBloomLast;
    try { var l = localStorage.getItem(STORE_KEY); if (l) return JSON.parse(l); } catch (e) {}
    return null;
  }

  function post(path, body, opts) {
    var t0 = Date.now();
    var init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };
    if (opts && opts.keepalive) init.keepalive = true;
    return fetch(API + path, init).then(
      function (r) {
        steps.push({ call: path.split('/').pop(), status: r.status, ms: Date.now() - t0 });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.status === 204 ? {} : r.json();
      },
      function (err) {
        steps.push({ call: path.split('/').pop(), status: 'blocked', ms: Date.now() - t0 });
        throw err;
      }
    );
  }

  // ——— 1. create the answer group, once, as early as possible ———
  function ensureGroup() {
    if (agId) return Promise.resolve(agId);
    if (creating) return creating;
    if (!field('email')) return Promise.resolve(null); // Bloom rejects without one
    creating = post('/questionnaires/' + QUESTIONNAIRE + '/answer-groups', {})
      .then(function (d) {
        var ag = d && d['answer-group'];
        agId = ag && ag.id ? ag.id : null;
        persist({ stage: 'group-created' });
        return agId;
      })
      .catch(function () { creating = null; return null; });
    return creating;
  }

  // ——— 2. save whatever is currently in the form ———
  var saveTimer = null;
  function saveAnswers() {
    return ensureGroup().then(function (id) {
      if (!id) return false;
      var email = field('email');
      var name = personName(field('name'), email);
      var answers = [
        {
          answerGroupId: id,
          questionId: Q.personal,
          payload: {
            firstName: name.firstName,
            lastName: name.lastName,
            email: email,
            phone: field('phone'),
            customFields: [
              { customFieldId: CUSTOM.budget, value: field('budget') },
              { customFieldId: CUSTOM.source, value: firstTouch() },
              { customFieldId: CUSTOM.sentFrom, value: location.pathname }
            ]
          }
        },
        { answerGroupId: id, questionId: Q.message, payload: field('body') }
      ];
      if (photos.length) {
        answers.push({
          answerGroupId: id,
          questionId: Q.attachment,
          payload: photos.map(function (f) {
            return {
              date: new Date().toISOString(),
              mimeType: f.mimeType || 'image/jpeg',
              size: f.size || 0,
              title: f.title || 'photo',
              url: f.url
            };
          })
        });
      }
      return post('/questionnaires/' + QUESTIONNAIRE + '/answer-groups/' + id, { answers: answers })
        .then(function () { lastSaveAt = Date.now(); persist({ stage: 'answers-saved' }); return true; })
        .catch(function (err) {
          // A photo Bloom won't take must not cost the enquiry — retry without.
          if (!photos.length) return false;
          track('bloom_attachments_dropped', { form_id: 'contact', photos_attached: photos.length });
          return post('/questionnaires/' + QUESTIONNAIRE + '/answer-groups/' + id,
            { answers: answers.slice(0, 2) })
            .then(function () { lastSaveAt = Date.now(); return true; })
            .catch(function () { return false; });
        });
    });
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveAnswers, 400);
  }

  // ——— 3. photos, handed over by the section once they are hosted ———
  window.lzBloomSetPhotos = function (list) {
    photos = (list || []).filter(function (f) { return f && f.url; });
    scheduleSave();
  };

  /*
    ——— 4. Send. One short request, keepalive so it outlives the navigation.

    No preventDefault, no awaiting, nothing returned that the caller must handle.
    If the group was never created (no email, or Bloom unreachable) this quietly
    does nothing and Shopify still delivers the enquiry.
  */
  window.lzBloomSend = function () {
    if (!agId) {
      persist({ stage: 'submit-skipped', reason: 'no answer group' });
      track('bloom_submit_failed', { form_id: 'contact', bloom_fail_reason: 'no_group' });
      return;
    }
    // If a field changed within the debounce window, the blur handler may not
    // have fired yet — send the answers once more before marking it submitted.
    if (Date.now() - lastSaveAt > 1500) {
      try { saveAnswers(); } catch (e) {}
    }
    post('/questionnaires/' + QUESTIONNAIRE + '/answers',
      { answerGroupId: agId, payload: 'SUBMIT' }, { keepalive: true })
      .then(function () { persist({ stage: 'submitted', ok: true }); })
      .catch(function (err) {
        persist({ stage: 'submit-failed', ok: false, detail: String(err && err.message).slice(0, 120) });
        track('bloom_submit_failed', { form_id: 'contact', bloom_fail_reason: 'error' });
      });
    persist({ stage: 'submit-fired' });
  };

  // ——— wire up: create early, save on blur ———
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('ContactForm');
    if (!form) return;

    var FIELDS = ['name', 'email', 'phone', 'budget', 'body'];
    FIELDS.forEach(function (n) {
      var el = document.getElementById('ContactForm-' + n);
      if (!el) return;
      el.addEventListener('blur', function () {
        if (field('email')) scheduleSave();
      });
    });

    // Create the group as soon as there is an email to attach it to, so the
    // slow part is long finished before anyone presses Send.
    var emailEl = document.getElementById('ContactForm-email');
    if (emailEl) emailEl.addEventListener('blur', function () { ensureGroup(); });
  });

  // ——— ?bloomdebug=1 — on-page diagnostics ———
  if (location.search.indexOf('bloomdebug') > -1) {
    document.addEventListener('DOMContentLoaded', function () {
      var box = document.createElement('div');
      box.style.cssText =
        'position:fixed;bottom:0;left:0;right:0;z-index:99999;padding:12px 16px;max-height:55vh;' +
        'overflow:auto;background:#111;color:#0f0;font:12px/1.45 monospace;white-space:pre-wrap;border-top:2px solid #0f0;';
      var out = document.createElement('pre');
      out.style.cssText = 'margin:8px 0 0;white-space:pre-wrap;font:inherit;color:inherit;';
      function status() {
        var rec = lastRecord();
        return 'BLOOM DEBUG\n' +
          '  script loaded ......... ' + (typeof window.lzBloomSend === 'function') + '\n' +
          '  submit handler ready .. ' + (window.lzContactSubmitReady === true) + '\n' +
          '  answer group .......... ' + (agId || 'not created yet (enter an email and click away)') + '\n' +
          '  photos ready .......... ' + photos.length + '\n' +
          '  form id ............... ' + QUESTIONNAIRE + '\n\n' +
          'LAST RECORD\n' + (rec ? JSON.stringify(rec, null, 2) : '  none yet');
      }
      var btn = document.createElement('button');
      btn.textContent = 'Save answers to Bloom now (no submit)';
      btn.style.cssText = 'background:#0f0;color:#111;border:0;padding:8px 14px;font:bold 12px monospace;cursor:pointer;';
      btn.onclick = function () {
        btn.disabled = true; btn.textContent = 'saving…';
        saveAnswers().then(function (ok) {
          btn.disabled = false; btn.textContent = 'Save answers to Bloom now (no submit)';
          out.textContent = (ok ? 'SAVED OK\n\n' : 'SAVE FAILED\n\n') + status();
        });
      };
      box.appendChild(btn); box.appendChild(out);
      out.textContent = status();
      document.body.appendChild(box);
      setInterval(function () { if (!btn.disabled) out.textContent = status(); }, 2000);
    });
  }
})();
