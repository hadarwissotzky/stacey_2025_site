// Patches for the Shopify policy pages, whose body markup is not editable from
// the theme and whose admin editor is not reliably consistent.
document.addEventListener('DOMContentLoaded', function () {
  // Change "Refund policy" to "Returns & Refunds Policy"
  const policyTitle = document.querySelector('.shopify-policy__title h1');

  if (policyTitle && policyTitle.textContent.trim() === 'Refund policy') {
    policyTitle.textContent = 'Returns & Refunds Policy';
  }

  // Mark the numbered section sub-headings so they can be sized consistently.
  //
  // The policy body was pasted from Google Docs over more than one sitting, and
  // the sections are not marked up the same way: 1 to 8 are
  // `p > span > strong`, which base.css happens to enlarge, while 9 to 14 are a
  // bare `p > strong` and rendered at body size. CSS cannot tell those apart
  // from ordinary inline bold such as "Personal Information You Provide", so
  // the distinction has to be made on the text itself.
  //
  // All caps and four characters or more. That matches the section headings and
  // leaves alone the mixed-case sub-sub-headings ("How to Submit a Request")
  // and the support email, which are also bold and also sit after a <br>.
  const body = document.querySelector('.shopify-policy__body');
  if (!body) return;

  body.querySelectorAll('p strong').forEach(function (el) {
    const text = el.textContent.replace(/\s+/g, ' ').trim();
    if (text.length < 4) return;
    if (!/[A-Z]/.test(text)) return;
    if (text !== text.toUpperCase()) return;
    el.classList.add('policy-subheading');
  });
});
