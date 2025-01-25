/**
 * Determines if we should use a transparent header by default.
 * @returns {boolean} True if on index or inside /listings/, otherwise false.
 */
function useTransparentHeaderByDefault() {
  const path = window.location.pathname;
  return (
    path === '/' ||
    path === '/index.html' ||
    path.startsWith('/listings/')
  );
}

/* ==========================================================================
 * 1) Fetch Header, Insert, Set Initial Background, & Initialize Menu
 * ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  fetch('/resources/components/header.html')
    .then(response => response.text())
    .then(data => {
      const header = document.getElementById('header');
      header.innerHTML = data;

      // Set initial header background
      if (useTransparentHeaderByDefault()) {
        header.style.backgroundColor = 'transparent';
      } else {
        header.style.backgroundColor = '#E6E5E1';
      }

      // Initialize the slide-out menu once header is loaded
      initPageMenuLogic();
    })
    .catch(error => console.error('Error loading header:', error));
});

/* ==========================================================================
 * 2) Header Scroll Logic: Changes Background & Icon Colors On Scroll
 * ========================================================================== */
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const menuIcon = document.getElementById('menu-icon');
  const headerMenuText = document.querySelector('#header-menu p');
  const headerCenterLogo = document.getElementById('header-center-logo');
  /*const feedbackBtn = document.getElementById('feedback-form-btn');*/
  const listingBtn = document.getElementById('request-listing-form-btn');

  if (!header) return; // If header hasn't loaded yet, skip

  if (window.scrollY > 0) {
    // User scrolled: apply "scrolled" styling
    header.classList.add('scrolled');
    header.style.backgroundColor = '#F4F4F4';
    header.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';

    if (menuIcon) menuIcon.src = '/resources/images/icons/menu-icon-dark.svg';
    if (headerMenuText) headerMenuText.style.color = '#333333';
    if (headerCenterLogo) {
      headerCenterLogo.src = '/resources/images/logos/full logo/full-logo-yellow-orange-dark.svg';
    }
    /*if (feedbackBtn) {
      feedbackBtn.classList.remove('secondary-button-light');
      feedbackBtn.classList.add('secondary-button-dark');
    }*/
    if (listingBtn) {
      listingBtn.classList.remove('secondary-button-light');
      listingBtn.classList.add('secondary-button-dark');
    }
  } else {
    // User at top of page: revert styling
    header.classList.remove('scrolled');
    header.style.boxShadow = 'none';

    if (useTransparentHeaderByDefault()) {
      header.style.backgroundColor = 'transparent';
    } else {
      header.style.backgroundColor = '#E6E5E1';
    }

    if (menuIcon) menuIcon.src = '/resources/images/icons/menu-icon-light.svg';
    if (headerMenuText) headerMenuText.style.color = '#F4F4F4';
    if (headerCenterLogo) {
      headerCenterLogo.src = '/resources/images/logos/full logo/full-logo-yellow-orange-light.svg';
    }
    /*if (feedbackBtn) {
      feedbackBtn.classList.remove('secondary-button-dark');
      feedbackBtn.classList.add('secondary-button-light');
    } */
    if (listingBtn) {
      listingBtn.classList.remove('secondary-button-dark');
      listingBtn.classList.add('secondary-button-light');
    }
  }
});

/* ==========================================================================
 * 3) Fetch Footer, Insert into #footer
 * ========================================================================== */
fetch('/resources/components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

/* ==========================================================================
 * 4) Fetch Popups, Insert into #popups, Then Initialize
 * ========================================================================== */
document.addEventListener('DOMContentLoaded', async () => {
  const popupsContainer = document.getElementById('popups');
  try {
    const response = await fetch('/resources/components/popups.html');
    if (!response.ok) {
      throw new Error(`Failed to load popups.html: ${response.status}`);
    }
    const popupsHTML = await response.text();
    popupsContainer.innerHTML = popupsHTML;

    // Initialize forms and popups after injecting popup HTML
    initializePopups();
  } catch (err) {
    console.error('Error loading popups:', err);
  }
});

/* ==========================================================================
 * 5) Popups & Form Submission Logic
 *    - Attach event listeners to the feedback & listing forms
 *    - Open/close popups & handle overlay
 * ========================================================================== */

/**
 * Sets up forms with submission logic to a remote endpoint.
 * Also prepares click-to-close logic for overlay.
 */
function initializePopups() {
  const feedbackForm = document.getElementById('feedbackForm');
  const listingForm = document.querySelector('.listing-request-form');

  // Setup feedback form handler
  if (feedbackForm) {
    setupFormHandler(
      feedbackForm,
      '/submit-feedback',
      'give-feedback-popup',
      'thankyou-feedback-popup'
    );
  }

  // Setup listing request form handler
  if (listingForm) {
    setupFormHandler(
      listingForm,
      '/submit-listing-request',
      'request-listing-popup',
      'thankyou-listing-request-popup'
    );
  }

  // Close popups when clicking outside them
  const overlay = document.getElementById('popup-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      hideAllPopups();
    });
  }
}

/**
 * Helper to set up form submissions using a POST request to a given endpoint.
 * @param {HTMLFormElement} form - The form to handle.
 * @param {string} endpoint - Endpoint path (after BASE_URL).
 * @param {string} popupId - The ID of the currently shown popup.
 * @param {string} thankYouPopupId - The ID of the "thank you" popup to show on success.
 */
function setupFormHandler(form, endpoint, popupId, thankYouPopupId) {
  const popup = document.getElementById(popupId);
  const thankYouPopup = document.getElementById(thankYouPopupId);
  const BASE_URL = 'https://moveroofgithubio-production.up.railway.app';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (response.ok) {
        if (popup) hidePopup(popup);
        if (thankYouPopup) showPopup(thankYouPopup);
        form.reset();
      } else {
        console.error('Form submission failed:', response.status);
      }
    } catch (err) {
      console.error('Error during form submission:', err);
    }
  });
}

/**
 * Show a specific popup element.
 * @param {HTMLElement} popup - The popup to show.
 */
function showPopup(popup) {
  const overlay = document.getElementById('popup-overlay');
  if (popup) popup.style.display = 'flex';
  if (overlay) overlay.style.display = 'block';
}

/**
 * Hide a specific popup element.
 * @param {HTMLElement} popup - The popup to hide.
 */
function hidePopup(popup) {
  const overlay = document.getElementById('popup-overlay');
  if (popup) popup.style.display = 'none';
  if (overlay) overlay.style.display = 'none';
}

/**
 * Hide all known popups and the overlay.
 */
function hideAllPopups() {
  const popups = document.querySelectorAll(
    '#request-listing-popup, #give-feedback-popup, #thankyou-feedback-popup, #thankyou-listing-request-popup'
  );
  const overlay = document.getElementById('popup-overlay');

  popups.forEach((popup) => (popup.style.display = 'none'));
  if (overlay) overlay.style.display = 'none';
}

/* ==========================================================================
 * 6) Move Popups to <body> and Show Them from Header Buttons
 * ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  function initPopupLogic() {
    const listingBtn = document.getElementById('request-listing-form-btn');
    /*const feedbackBtn = document.getElementById('feedback-form-btn');*/
    const heroListingBtn = document.getElementById('request-listing-form-btn-hero');
    const listingPopup = document.getElementById('request-listing-popup');
    const feedbackPopup = document.getElementById('give-feedback-popup');

    // If these elements are not yet in the DOM, retry until they load
    if (!listingBtn /*|| !feedbackBtn*/ || !listingPopup || !feedbackPopup) {
      setTimeout(initPopupLogic, 200);
      return;
    }

    // Move popups to the body if not already there
    if (listingPopup.parentNode.tagName !== 'BODY') {
      document.body.appendChild(listingPopup);
    }
    if (feedbackPopup.parentNode.tagName !== 'BODY') {
      document.body.appendChild(feedbackPopup);
    }

    // Overlay creation if it doesn't exist
    let overlay = document.getElementById('popup-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'popup-overlay';
      document.body.appendChild(overlay);
    }

    // Show a given popup
    function showPopup(popup) {
      popup.style.display = 'flex';
      overlay.style.display = 'block';
    }

    // Hide all popups
    function hidePopup() {
      listingPopup.style.display = 'none';
      feedbackPopup.style.display = 'none';
      overlay.style.display = 'none';
    }

    // Button event listeners
    listingBtn.addEventListener('click', () => showPopup(listingPopup));
    /*feedbackBtn.addEventListener('click', () => showPopup(feedbackPopup));*/
    if (heroListingBtn) {
      heroListingBtn.addEventListener('click', () => showPopup(listingPopup));
    }

    overlay.addEventListener('click', hidePopup);
  }

  initPopupLogic();
});

/* ==========================================================================
 * 7) Page Menu: Slide-Out Logic (Called After Header Partial is Loaded)
 * ========================================================================== */
function initPageMenuLogic() {
  const menuTrigger = document.getElementById('header-menu'); // The "MENU" click area
  const pageMenu = document.getElementById('page-menu');      // The side menu
  const pageMenuOverlay = document.getElementById('page-menu-overlay');
  const closeIcon = document.getElementById('close-icon');

  // Menu popup buttons
  const feedbackMenuBtn = document.getElementById('feedback-form-btn-menu');
  const listingMenuBtn = document.getElementById('request-listing-form-btn-menu');

  // Links inside the menu
  const menuLinks = document.querySelectorAll('#menu-links .menu-link');

  // If menu elements aren't ready yet, retry
  if (!menuTrigger || !pageMenu || !pageMenuOverlay) {
    setTimeout(initPageMenuLogic, 100);
    return;
  }

  // Slide menu in
  function openPageMenu() {
    pageMenu.classList.add('open');
    pageMenuOverlay.classList.add('active');
  }

  // Slide menu out
  function closePageMenu() {
    pageMenu.classList.remove('open');
    pageMenuOverlay.classList.remove('active');
  }

  // 1) Clicking "MENU" opens the side menu
  menuTrigger.addEventListener('click', openPageMenu);

  // 2) Close menu when close icon clicked
  if (closeIcon) {
    closeIcon.addEventListener('click', closePageMenu);
  }

  // 3) Close menu when overlay clicked
  pageMenuOverlay.addEventListener('click', closePageMenu);

  // 4) Close menu on link click
  menuLinks.forEach(link => {
    link.addEventListener('click', closePageMenu);
  });

  // 5) Menu buttons open popups
  if (feedbackMenuBtn) {
    feedbackMenuBtn.addEventListener('click', function () {
      closePageMenu();
      const feedbackPopup = document.getElementById('give-feedback-popup');
      if (feedbackPopup) {
        showPopup(feedbackPopup);
      }
    });
  }
  if (listingMenuBtn) {
    listingMenuBtn.addEventListener('click', function () {
      closePageMenu();
      const listingPopup = document.getElementById('request-listing-popup');
      if (listingPopup) {
        showPopup(listingPopup);
      }
    });
  }

  /**
   * Reuse existing 'showPopup' logic for the menu buttons.
   */
  function showPopup(popup) {
    const overlay = document.getElementById('popup-overlay');
    if (popup) popup.style.display = 'flex';
    if (overlay) overlay.style.display = 'block';
  }
}

/* ==========================================================================
 * 8) FAQ Collapse
 *    - Toggles display of FAQ answers when question is clicked
 * ========================================================================== */
document.querySelectorAll('.FAQ-question h6').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    const answer = parent.querySelector('p');
    const isOpen = parent.classList.contains('active');

    if (isOpen) {
      parent.classList.remove('active');
      answer.style.display = 'none';
    } else {
      parent.classList.add('active');
      answer.style.display = 'block';
    }
  });
});

/* ==========================================================================
 * 9) Listing Detail Page Styling
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

/* ==========================================================================
 * 10) Experience Hide/Show Accordions
 *     - Outer stage-level accordion
 *     - Inner element-level accordion
 *     - Template download
 * ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Stage-Level Accordion
   */
  const stageHeads = document.querySelectorAll(".stage-head");
  let currentlyOpenStage = null;

  stageHeads.forEach((stageHead) => {
    stageHead.addEventListener("click", function () {
      if (currentlyOpenStage === stageHead) {
        // Close if this stage is already open
        closeStage(stageHead);
        currentlyOpenStage = null;
      } else {
        // Close previously open stage
        if (currentlyOpenStage) {
          closeStage(currentlyOpenStage);
        }
        // Open the clicked stage
        openStage(stageHead);
        currentlyOpenStage = stageHead;
      }
    });
  });

  function openStage(stageHead) {
    stageHead.classList.add("open");
    const stageInformation = stageHead.nextElementSibling;
    if (stageInformation) {
      stageInformation.classList.add("show");
    }
    // Smooth scroll so the top is ~125px from viewport top
    const offsetTop = stageHead.getBoundingClientRect().top + window.scrollY - 125;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }

  function closeStage(stageHead) {
    stageHead.classList.remove("open");
    const stageInformation = stageHead.nextElementSibling;
    if (stageInformation) {
      stageInformation.classList.remove("show");
      // Also close any open .stage-element-content
      const openElementHeaders = stageInformation.querySelectorAll(".stage-element-header.open");
      openElementHeaders.forEach((header) => {
        closeElement(header);
      });
    }
  }

  /**
   * Stage-Element-Level Accordion (Inner)
   */
  const elementHeaders = document.querySelectorAll(".stage-element-header");
  let currentlyOpenElement = null;

  elementHeaders.forEach((header) => {
    header.addEventListener("click", function (e) {
      e.stopPropagation(); // Avoid toggling parent .stage

      if (currentlyOpenElement === header) {
        closeElement(header);
        currentlyOpenElement = null;
      } else {
        if (currentlyOpenElement) {
          closeElement(currentlyOpenElement);
        }
        openElement(header);
        currentlyOpenElement = header;
      }
    });
  });

  function openElement(header) {
    header.classList.add("open");
    const elementContent = header.nextElementSibling;
    if (elementContent) {
      elementContent.classList.add("show");
    }
  }

  function closeElement(header) {
    header.classList.remove("open");
    const elementContent = header.nextElementSibling;
    if (elementContent) {
      elementContent.classList.remove("show");
    }
  }

  /**
   * Template Download Handler
   */
  const templateButtons = document.querySelectorAll(".stage-element-template");
  templateButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Avoid toggling any accordions

      // Retrieve file info
      const fileUrl = btn.getAttribute("data-file-url") || "/path/to/my-document.pdf";
      const fileName = btn.getAttribute("data-file-name") || "my-document.pdf";

      // Create an invisible link and auto-click it
      const anchor = document.createElement("a");
      anchor.href = fileUrl;
      anchor.download = fileName;
      anchor.target = "_blank";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    });
  });
});