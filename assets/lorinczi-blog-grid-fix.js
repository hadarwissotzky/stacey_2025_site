/**
 * Lorinczi Blog Grid Fix
 * Disables slider behavior for featured blog section to allow grid layout
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all slider components in blog sections
  const blogSliders = document.querySelectorAll('.blog slider-component');

  blogSliders.forEach(function(sliderComponent) {
    // Find the slider element inside
    const slider = sliderComponent.querySelector('[id^="Slider-"]');

    if (slider) {
      // Remove scroll behavior
      slider.style.overflow = 'visible';
      slider.style.scrollSnapType = 'none';

      // Disable slider component functionality
      const prevButton = sliderComponent.querySelector('button[name="previous"]');
      const nextButton = sliderComponent.querySelector('button[name="next"]');

      if (prevButton) prevButton.style.display = 'none';
      if (nextButton) nextButton.style.display = 'none';

      // Remove slider event listeners by cloning and replacing
      const newSlider = slider.cloneNode(true);
      slider.parentNode.replaceChild(newSlider, slider);
    }
  });
});
