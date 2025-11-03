// Fix for custom gallery slider buttons on custom-design-journey page
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the slider component to be initialized
  setTimeout(function() {
    const customGallerySection = document.querySelector('[id*="featured_collection_eT4ph9"]');

    if (customGallerySection) {
      const sliderComponent = customGallerySection.querySelector('slider-component');

      if (sliderComponent) {
        // Get the slider container and buttons
        const slider = sliderComponent.querySelector('.slider');
        const prevButton = sliderComponent.querySelector('.slider-button--prev');
        const nextButton = sliderComponent.querySelector('.slider-button--next');

        if (slider && prevButton && nextButton) {
          // Remove disabled attributes to ensure buttons are clickable
          prevButton.removeAttribute('disabled');
          nextButton.removeAttribute('disabled');

          // Calculate slide width
          const slides = slider.querySelectorAll('.grid__item');
          if (slides.length > 0) {
            const slideWidth = slides[0].offsetWidth;
            const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;
            const scrollDistance = slideWidth + gap;

            // Add click handlers for navigation
            prevButton.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();

              // Scroll to previous item
              const currentScroll = slider.scrollLeft;
              const targetScroll = Math.max(0, currentScroll - scrollDistance);

              slider.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });

              // Update button states
              updateButtonStates();
            });

            nextButton.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();

              // Scroll to next item
              const currentScroll = slider.scrollLeft;
              const maxScroll = slider.scrollWidth - slider.clientWidth;
              const targetScroll = Math.min(maxScroll, currentScroll + scrollDistance);

              slider.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });

              // Update button states
              updateButtonStates();
            });

            // Function to update button disabled states
            function updateButtonStates() {
              setTimeout(function() {
                const currentScroll = slider.scrollLeft;
                const maxScroll = slider.scrollWidth - slider.clientWidth;

                // Enable/disable prev button
                if (currentScroll <= 0) {
                  prevButton.setAttribute('disabled', 'disabled');
                } else {
                  prevButton.removeAttribute('disabled');
                }

                // Enable/disable next button
                if (currentScroll >= maxScroll - 5) { // Small tolerance for rounding
                  nextButton.setAttribute('disabled', 'disabled');
                } else {
                  nextButton.removeAttribute('disabled');
                }
              }, 350); // Wait for scroll animation to complete
            }

            // Initial button state check
            updateButtonStates();

            // Update button states on scroll
            let scrollTimeout;
            slider.addEventListener('scroll', function() {
              clearTimeout(scrollTimeout);
              scrollTimeout = setTimeout(updateButtonStates, 100);
            });

            // Handle window resize
            window.addEventListener('resize', function() {
              updateButtonStates();
            });
          }
        }
      }
    }
  }, 500); // Wait for page to fully load
});