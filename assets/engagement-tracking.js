/*
  Engagement tracking — where people click and how far they read.

  Two events, site-wide. Deliberately small: GA4 Enhanced Measurement already covers
  pageviews, outbound clicks and a single scroll event at 90% depth, and the contact
  form is covered by contact-form-tracking.js. This fills the two real gaps.

    cta_click     — a button-styled link was clicked
                    cta_label · cta_destination · cta_position · page_path
    scroll_depth  — reader passed 25 / 50 / 75 percent
                    scroll_percent · page_path

  Why scroll_depth exists: GA4's built-in `scroll` fires only at 90%, so a visitor who
  reads 60% of a page registers nothing. That made "83% never scroll" impossible to
  interpret — it could mean they bounced instantly or read most of the page. Now we know.

  Names are namespaced away from GA4's automatic events on purpose. `form_start` and
  `form_submit` are taken by Enhanced Measurement and fire for any form on the page
  (search box, newsletter), which is why our form events carry the contact_ prefix.

  Cost: at most 3 scroll events per page view, plus one per CTA click. Nothing fires
  for a visitor who neither scrolls nor clicks.
*/
(function () {
  if (window.lzEngagementInit) return;
  window.lzEngagementInit = true;

  var GA_ID = 'G-NL5P1911ZX';
  var gaReady = false;

  function gtag() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  }

  function ensureGA() {
    if (gaReady) return;
    gaReady = true;
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
    ensureGA();
    params = params || {};
    params.page_path = location.pathname;
    gtag('event', name, params);
  }

  // ——— which section a click came from ———
  function sectionOf(el) {
    var s = el.closest ? el.closest('[id^="shopify-section-"]') : null;
    if (!s) return 'other';
    if (s.querySelector('.banner__buttons') || s.querySelector('.banner')) return 'hero';
    var id = s.id.replace('shopify-section-', '').replace(/^template--\d+__/, '');
    return id.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40) || 'other';
  }

  // ——— CTA clicks ———
  // Only button-styled links. Add-to-cart is a <button>, so it's excluded here and
  // stays covered by the store's own add_to_cart event.
  document.addEventListener(
    'click',
    function (e) {
      var t = e.target;
      var a = t && t.closest ? t.closest('a') : null;
      if (!a) return;
      if (!a.classList.contains('button') && !a.closest('.button')) return;

      var label = (a.innerText || a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
      track('cta_click', {
        cta_label: label || '(no label)',
        cta_destination: (a.getAttribute('href') || '').slice(0, 100),
        cta_position: sectionOf(a)
      });
    },
    true
  );

  // ——— scroll depth ———
  var MARKS = [25, 50, 75];
  var fired = {};
  var queued = false;

  function measure() {
    queued = false;
    var d = document.documentElement;
    var scrollable = d.scrollHeight - d.clientHeight;
    if (scrollable <= 0) return;
    var pct = ((window.scrollY || d.scrollTop) / scrollable) * 100;

    for (var i = 0; i < MARKS.length; i++) {
      var m = MARKS[i];
      if (pct >= m && !fired[m]) {
        fired[m] = true;
        track('scroll_depth', { scroll_percent: m });
      }
    }
    if (fired[75]) window.removeEventListener('scroll', onScroll);
  }

  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(measure);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
