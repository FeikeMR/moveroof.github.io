


/* ==========================================================================
 * 10) Listing Detail Page Styling
 *    - Rotating hero images
 *    - Expandable image popup gallery
 *    - Show/Hide listing descriptions (desktop & mobile)
 *    - Sticky scroll interest form
 * ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  /**
   * Hero Section Image Rotation
   */
  const heroImages = document.querySelectorAll('.listing-hero-images .hero-image');
  let heroIndex = 0;
  function rotateHeroImages() {
    heroImages.forEach(img => img.classList.remove('active'));
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImages[heroIndex].classList.add('active');
  }
  setInterval(rotateHeroImages, 5000);

  /**
   * Image Popup Logic
   */
  const images = Array.from(document.querySelectorAll('#popup-hidden-images img'));
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closeBtn = document.querySelector('.close-btn');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');
  let currentIndex = 0;
  let isNavigating = false;

  // Clickable triggers for popup
  const triggers = [
    ...document.querySelectorAll('.hero-image'),
    document.getElementById('view-listing-images'),
    ...document.querySelectorAll('.listing-hero-images')
  ].filter(Boolean);

  triggers.forEach(element => {
    element.onclick = function () {
      if (images.length > 0) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        currentIndex = 0;
        showImage(currentIndex);
      }
    };
  });

  // Close popup
  closeBtn.onclick = function () {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  // Close if clicking outside the image
  popup.onclick = function (e) {
    if (e.target === popup) {
      popup.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

  // Next/Previous arrow logic
  rightArrow.onclick = nextImage;
  leftArrow.onclick = prevImage;

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!isNavigating && popup.style.display === 'block') {
      isNavigating = true;
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
      setTimeout(() => {
        isNavigating = false;
      }, 300);
    }
  });

  // Helper functions for image popup
  function showImage(index) {
    if (index >= 0 && index < images.length) {
      popupImage.src = images[index].src;
    }
  }
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  /**
   * Show/Hide Descriptions (Desktop & Mobile)
   */
  const descriptionDesktop = document.querySelector('.listing-description-desktop');
  const showDescriptionDesktop = document.querySelector('#show-description-desktop');
  const hideDescriptionDesktop = document.querySelector('#hide-description-desktop');
  const paragraphsDesktop = descriptionDesktop
    ? descriptionDesktop.querySelectorAll('p:not(:first-of-type)')
    : [];

  const descriptionMobile = document.querySelector('.listing-description-mobile');
  const showDescriptionMobile = document.querySelector('#show-description-mobile');
  const hideDescriptionMobile = document.querySelector('#hide-description-mobile');
  const paragraphsMobile = descriptionMobile
    ? descriptionMobile.querySelectorAll('p:not(:first-of-type)')
    : [];

  // Utility: hide paragraphs
  function hideParagraphs(paragraphs) {
    paragraphs.forEach((p) => {
      p.style.opacity = '0';
      setTimeout(() => (p.style.display = 'none'), 300);
    });
  }
  // Utility: show paragraphs
  function showParagraphs(paragraphs) {
    paragraphs.forEach((p) => {
      p.style.display = 'block';
      setTimeout(() => (p.style.opacity = '1'), 10);
    });
  }

  // Desktop toggles
  if (showDescriptionDesktop && hideDescriptionDesktop && paragraphsDesktop.length > 0) {
    hideParagraphs(paragraphsDesktop);
    hideDescriptionDesktop.style.display = 'none';

    showDescriptionDesktop.addEventListener('click', () => {
      showParagraphs(paragraphsDesktop);
      showDescriptionDesktop.style.display = 'none';
      hideDescriptionDesktop.style.display = 'flex';
    });

    hideDescriptionDesktop.addEventListener('click', () => {
      hideParagraphs(paragraphsDesktop);
      hideDescriptionDesktop.style.display = 'none';
      showDescriptionDesktop.style.display = 'flex';
    });
  }

  // Mobile toggles
  if (showDescriptionMobile && hideDescriptionMobile && paragraphsMobile.length > 0) {
    hideParagraphs(paragraphsMobile);
    hideDescriptionMobile.style.display = 'none';

    showDescriptionMobile.addEventListener('click', () => {
      showParagraphs(paragraphsMobile);
      showDescriptionMobile.style.display = 'none';
      hideDescriptionMobile.style.display = 'flex';
    });

    hideDescriptionMobile.addEventListener('click', () => {
      hideParagraphs(paragraphsMobile);
      hideDescriptionMobile.style.display = 'none';
      showDescriptionMobile.style.display = 'flex';
    });
  }

  // Ensure correct desktop/mobile display on load & resize
  function toggleVisibility() {
    if (!descriptionDesktop || !descriptionMobile) return;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      descriptionDesktop.style.display = 'none';
      descriptionMobile.style.display = 'block';
    } else {
      descriptionDesktop.style.display = 'block';
      descriptionMobile.style.display = 'none';
    }
  }
  toggleVisibility();
  window.addEventListener('resize', toggleVisibility);

  /**
   * Sticky Scroll for Listing Interest Form
   */
  const listingInterest = document.querySelector('.listing-interest');
  const description = document.querySelector('.listing-description-desktop');
  const listingDetailContent = document.querySelector('.listing-detail-content');

  if (listingInterest && description && listingDetailContent) {
    window.addEventListener('scroll', function() {
      const offsetTop = description.offsetTop + description.offsetHeight - (window.innerHeight * 0.09);
      const stopPoint = listingDetailContent.offsetTop + listingDetailContent.offsetHeight - listingInterest.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY >= offsetTop && scrollY < stopPoint) {
        listingInterest.classList.add('sticky-active');
        listingInterest.classList.remove('stop-sticky');
      } else if (scrollY >= stopPoint) {
        listingInterest.classList.remove('sticky-active');
        listingInterest.classList.add('stop-sticky');
      } else {
        listingInterest.classList.remove('sticky-active', 'stop-sticky');
      }
    });
  }
});