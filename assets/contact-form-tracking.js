/*
  Contact form tracking — attribution + engagement.

  1. Fills the hidden `contact[Source]` field from the first-touch source captured
     in theme.liquid, so the notification email says where the enquiry came from.
  2. Fires GA4 events: contact_form_start, contact_form_abandon, generate_lead.

  Event names are namespaced deliberately. GA4 Enhanced Measurement already emits its own
  `form_start` and `form_submit` on this property, and those fire for ANY form on the page
  (newsletter, search). Reusing those names would double-count and would pair an abandon
  count against a denominator that includes unrelated forms.

  GA4 on this store is installed as a sandboxed Shopify web pixel, so gtag() is not
  reachable from theme scope. We load our own gtag with send_page_view:false (no
  duplicate pageviews) and only on first interaction — visitors who never touch the
  form download nothing extra.

  contact_form_abandon carries METADATA ONLY — which fields were filled, message length,
  time on form. It never sends what anyone typed.
*/
(function () {
  if (window.lzContactTrackingInit) return;
  window.lzContactTrackingInit = true;

  var form = document.getElementById('ContactForm');
  if (!form) return;

  var GA_ID = 'G-NL5P1911ZX';
  var FIELDS = ['name', 'email', 'phone', 'budget', 'body'];

  function field(name) {
    return document.getElementById('ContactForm-' + name);
  }

  // ——— hidden source field ———
  var sourceInput = field('source');
  if (sourceInput) {
    var src = 'direct';
    var landing = '';
    try {
      src = sessionStorage.getItem('lz_src') || 'direct';
      landing = sessionStorage.getItem('lz_landing') || '';
    } catch (e) {}
    sourceInput.value =
      src + (landing && landing !== location.pathname ? ' (landed on ' + landing + ')' : '');
  }

  // ——— lazy GA4 loader ———
  var gaLoaded = false;
  function gtag() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  }
  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    // The store already runs a main-frame gtag for this stream on most pages —
    // reuse it rather than configuring the same measurement ID twice.
    if (window.google_tag_manager && window.google_tag_manager[GA_ID]) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID, { send_page_view: false });
  }

  function track(name, params) {
    loadGA();
    params = params || {};
    params.page_location = location.href;
    params.page_path = location.pathname;
    params.page_title = document.title;
    gtag('event', name, params);
  }

  // ——— completed submission (Shopify re-renders the page on success) ———
  // Shopify sets posted_successfully? from ?contact_posted=true, so a refresh or a
  // back-navigation onto the thank-you page re-renders it as "posted" and would fire
  // generate_lead a second time for the same enquiry. Guard with a session flag, and
  // clear that flag on any page that is NOT the thank-you render — so a genuine second
  // enquiry later in the same session still counts.
  var LEAD_FLAG = 'lz_lead_fired';
  function sess(op, key, val) {
    try {
      if (op === 'get') return sessionStorage.getItem(key);
      if (op === 'set') sessionStorage.setItem(key, val);
      if (op === 'del') sessionStorage.removeItem(key);
    } catch (e) {}
    return null;
  }

  if (window.lzContactPosted) {
    if (!sess('get', LEAD_FLAG)) {
      sess('set', LEAD_FLAG, '1');
      track('generate_lead', { form_id: 'contact' });
    }
  } else {
    sess('del', LEAD_FLAG);
  }

  // ——— start / abandon ———
  var started = false;
  var submitted = false;
  var reported = false;
  var startedAt = 0;

  function onFirstInput() {
    if (started) return;
    started = true;
    startedAt = Date.now();
    track('contact_form_start', { form_id: 'contact' });
  }

  FIELDS.forEach(function (name) {
    var el = field(name);
    if (el) el.addEventListener('input', onFirstInput, { passive: true });
  });

  var fileInput = field('file');
  if (fileInput) fileInput.addEventListener('change', onFirstInput);

  // Capture phase: runs before the section's own handler calls preventDefault().
  form.addEventListener(
    'submit',
    function () {
      submitted = true;
    },
    true
  );

  function reportAbandon() {
    if (!started || submitted || reported) return;

    var filled = [];
    var messageLength = 0;
    FIELDS.forEach(function (name) {
      var el = field(name);
      if (el && el.value.trim()) {
        filled.push(name);
        if (name === 'body') messageLength = el.value.trim().length;
      }
    });
    if (!filled.length) return;

    var seconds = Math.round((Date.now() - startedAt) / 1000);
    if (seconds < 2) return; // stray keypress or bot

    reported = true;
    track('contact_form_abandon', {
      form_id: 'contact',
      fields_filled: filled.join(','),
      fields_filled_count: filled.length,
      furthest_field: filled[filled.length - 1],
      message_length: messageLength,
      wrote_message: messageLength > 0 ? 'yes' : 'no',
      seconds_on_form: seconds
    });
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') reportAbandon();
  });
  window.addEventListener('pagehide', reportAbandon);
})();
