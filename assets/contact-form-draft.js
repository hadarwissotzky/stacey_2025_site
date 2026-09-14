/*
  Contact form — unsent-draft guard and draft restore.

  WHY THIS EXISTS
  An enquiry only becomes visible to Stacey when someone presses Send. Everything
  before that is invisible: Shopify never sees it, no notification email is sent,
  and Bloom holds the text in an answer group it will not surface or hand back
  (the dashboard lists submitted responses only, and its API answers 403 on read).

  Between 26 Aug and 12 Sep 2026 that blind spot cost at least three enquiries.
  The photo upload box ignored 8 of every 9 taps, and three people filled every
  field, wrote 172 to 377 characters, and left without sending. One arrived from
  ChatGPT, typed for 35 seconds, then rage-clicked. Another came back 54 minutes
  later and retyped from scratch. None of it reached the studio.

  The upload box is fixed now, but the blind spot is structural, so this adds two
  safety nets. NEITHER SENDS ANYTHING ON THE VISITOR'S BEHALF. Both exist to help
  the person send it themselves:

    1. If there is an email address and a real message and the form has not been
       submitted, warn before the page unloads. The browser shows its own generic
       prompt; we cannot word it. iOS Safari honours this inconsistently, which is
       exactly why net 2 matters more on mobile.

    2. Save the draft to this visitor's own localStorage as they type, and put it
       back if they return.

  PRIVACY
  The draft is the visitor's own text, in their own browser, and never leaves the
  device. It is cleared the moment Shopify confirms the enquiry was posted, and
  expires after DRAFT_TTL_DAYS regardless. The file input cannot be restored by
  script, so photos are never part of a draft.
*/
(function () {
  if (window.lzContactDraftInit) return;
  window.lzContactDraftInit = true;

  var form = document.getElementById('ContactForm');
  if (!form) return;

  var FIELDS = ['name', 'email', 'phone', 'budget', 'body'];
  var KEY = 'lz_contact_draft';
  var DRAFT_TTL_DAYS = 7;
  var MIN_MESSAGE = 10; // below this it is a stray keystroke, not an enquiry

  var submitted = false;
  var saveTimer = null;

  function el(name) {
    return document.getElementById('ContactForm-' + name);
  }

  function val(name) {
    var e = el(name);
    return e ? String(e.value || '').trim() : '';
  }

  // localStorage throws outright in some privacy modes, so every access is guarded.
  function store(op, value) {
    try {
      if (op === 'get') return localStorage.getItem(KEY);
      if (op === 'set') localStorage.setItem(KEY, value);
      if (op === 'del') localStorage.removeItem(KEY);
    } catch (e) {}
    return null;
  }

  /* Only worth interrupting someone over if the enquiry could actually be sent:
     an address to reply to, and something more than a stray keystroke. */
  function worthKeeping() {
    return !!val('email') && val('body').length >= MIN_MESSAGE;
  }

  // ——— draft save ———
  function save() {
    if (submitted) return;
    var any = FIELDS.some(function (n) { return val(n); });
    if (!any) {
      store('del');
      return;
    }
    var data = { at: Date.now(), fields: {} };
    FIELDS.forEach(function (n) { data.fields[n] = val(n); });
    store('set', JSON.stringify(data));
  }

  // ——— draft restore ———
  function restore() {
    var raw = store('get');
    if (!raw) return false;

    var data;
    try { data = JSON.parse(raw); } catch (e) { store('del'); return false; }
    if (!data || !data.fields) { store('del'); return false; }
    if (Date.now() - (data.at || 0) > DRAFT_TTL_DAYS * 86400000) {
      store('del');
      return false;
    }

    var restored = 0;
    FIELDS.forEach(function (n) {
      var e = el(n);
      var v = data.fields[n];
      // Never overwrite something already on the page, e.g. the ?estimate= prefill.
      if (e && v && !String(e.value || '').trim()) {
        e.value = v;
        restored++;
      }
    });
    return restored > 0;
  }

  function showRestoredNotice() {
    var note = document.createElement('p');
    note.className = 'contact-draft-notice';
    note.setAttribute('role', 'status');
    note.textContent = "I brought back what you were writing. Finish it whenever you're ready.";
    form.insertBefore(note, form.firstChild);

    // It has done its job the moment they carry on typing.
    FIELDS.forEach(function (n) {
      var e = el(n);
      if (!e) return;
      e.addEventListener('input', function () {
        if (note.parentNode) note.parentNode.removeChild(note);
      }, { once: true });
    });
  }

  // ——— wire up ———

  /* Shopify re-renders the page with posted_successfully? on a real submission.
     That is the only trustworthy signal the enquiry landed, so it is the only
     thing that clears the draft. A submit that bounces off validation or the
     captcha leaves the draft intact, which is the whole point. */
  if (window.lzContactPosted) {
    store('del');
  } else if (restore()) {
    showRestoredNotice();
  }

  FIELDS.forEach(function (n) {
    var e = el(n);
    if (!e) return;
    e.addEventListener('input', function () {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 400);
    }, { passive: true });
    e.addEventListener('blur', save);
  });

  // Capture phase, so it runs before the section's own submit handling.
  form.addEventListener('submit', function () { submitted = true; }, true);

  /* Backgrounding a tab on mobile can end the page without a further event, so
     flush the draft the moment it stops being visible. */
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') save();
  });
  window.addEventListener('pagehide', save);

  // Not in the theme editor: nagging Stacey while she edits the page is useless.
  if (!(window.Shopify && window.Shopify.designMode)) {
    window.addEventListener('beforeunload', function (e) {
      if (submitted || !worthKeeping()) return;
      e.preventDefault();
      e.returnValue = ''; // required by Chrome and Safari to show their prompt
      return '';
    });
  }
})();
