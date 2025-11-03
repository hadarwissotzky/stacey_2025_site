// Change "Refund policy" to "Returns & Refunds Policy"
document.addEventListener('DOMContentLoaded', function() {
  const policyTitle = document.querySelector('.shopify-policy__title h1');

  if (policyTitle && policyTitle.textContent.trim() === 'Refund policy') {
    policyTitle.textContent = 'Returns & Refunds Policy';
  }
});
