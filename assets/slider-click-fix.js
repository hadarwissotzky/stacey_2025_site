/**
 * Slider Click Fix
 * Ensures links in sliders are clickable while still allowing drag/scroll
 */

document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.slider--desktop, .slider--tablet, .slider--mobile');

  sliders.forEach(function(slider) {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    slider.addEventListener('mousedown', function(e) {
      // Only prevent default on the slider itself, not on links
      if (e.target.tagName !== 'A' && !e.target.closest('a')) {
        isDragging = false;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      }
    });

    slider.addEventListener('mousemove', function(e) {
      if (isDragging === false && startX !== 0) {
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        // If moved more than 5px, consider it a drag
        if (Math.abs(walk) > 5) {
          isDragging = true;
        }
      }
    });

    slider.addEventListener('mouseup', function() {
      startX = 0;
      setTimeout(function() {
        isDragging = false;
      }, 10);
    });

    slider.addEventListener('click', function(e) {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
  });
});
