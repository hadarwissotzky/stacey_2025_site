/*
  Prefills the contact form's message box from an ?estimate= parameter.

  The instant-estimate widget on /pages/jewelry-redesign-cost writes the
  visitor's four selections and the range it showed them into that parameter
  and links here, so nobody has to retype what they just told the calculator.
  Every other field is left alone for them to fill in.

  Loaded from snippets/contact-form-tracking.liquid, which renders inside every
  {% form 'contact' %} on the site — so this works on whichever contact form
  the visitor lands on, not just /pages/contact.
*/
(function () {
  var PARAM = 'estimate';
  var FIELD = 'ContactForm-body';
  var MAX = 2000;

  var params = new URLSearchParams(window.location.search);
  var text = params.get(PARAM);
  if (!text) return;

  // The parameter arrives from a URL, so treat it as untrusted: it is only
  // ever assigned to .value (never innerHTML) and is length-capped.
  text = text.slice(0, MAX);

  var field = document.getElementById(FIELD);
  if (!field) return;

  // The theme fixes this box at 100px — about four lines — while the summary
  // runs to ten. Left alone, the visitor sees a fragment and has to scroll
  // inside a small box to reach the line inviting them to add their own
  // detail. Grow it to fit, and keep fitting as they type.
  function grow() {
    field.style.height = 'auto';
    field.style.height = Math.min(field.scrollHeight, 420) + 'px';
  }

  // Never clobber something the visitor has already written — this can run on
  // a back-navigation where the browser has restored their draft.
  if (field.value.trim() === '') {
    field.value = text;
    // Lets the floating label and any listener react as if it were typed.
    field.dispatchEvent(new Event('input', { bubbles: true }));

    grow();
    field.addEventListener('input', grow);

    var box = field.getBoundingClientRect();
    if (box.top < 0 || box.bottom > window.innerHeight) {
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Drop the parameter so a refresh doesn't re-fill over their edits, and so
  // the address bar isn't carrying several hundred characters of prose.
  params.delete(PARAM);
  var query = params.toString();
  window.history.replaceState(
    null,
    '',
    window.location.pathname + (query ? '?' + query : '') + window.location.hash
  );
})();
