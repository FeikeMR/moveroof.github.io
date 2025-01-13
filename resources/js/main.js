// Fetch for the header element
document.addEventListener('DOMContentLoaded', () => {
    fetch('/resources/components/header.html')
        .then(response => response.text())
        .then(data => {
            const header = document.getElementById('header');
            header.innerHTML = data;
            // Apply sticky styles after content is loaded
            header.style.position = 'sticky';
            header.style.top = '0';
        })
        .catch(error => console.error('Error loading header:', error));
});


// Fetch for the footer element
fetch('/resources/components/footer.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));

// Fetch for the popups element
document.addEventListener('DOMContentLoaded', async () => {
  const popupsContainer = document.getElementById('popups');

  try {
      const response = await fetch('./resources/components/popups.html');
      if (!response.ok) {
          throw new Error(`Failed to load popups.html: ${response.status}`);
      }

      const popupsHTML = await response.text();
      popupsContainer.innerHTML = popupsHTML;

      initializePopups();
  } catch (err) {
      console.error("Error loading popups:", err);
  }
});

//Pop ups open/close forms
document.addEventListener('DOMContentLoaded', () => {
  initializePopups();
});

function initializePopups() {
  const feedbackForm = document.getElementById('feedbackForm');
  const listingForm = document.querySelector('.listing-interest-form');

  if (feedbackForm) {
      setupFormHandler(
          feedbackForm,
          '/submit-feedback',
          'give-feedback-popup',
          'thankyou-feedback-popup'
      );
  }

  if (listingForm) {
      setupFormHandler(
          listingForm,
          '/submit-request',
          'request-listing-popup',
          'thankyou-listing-request-popup'
      );
  }

  // Close popups when clicking outside of them
  const overlay = document.getElementById('popup-overlay');
  if (overlay) {
      overlay.addEventListener('click', () => {
          hideAllPopups();
      });
  }
}

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
              // Hide the current popup and show the thank-you popup
              if (popup) hidePopup(popup);
              if (thankYouPopup) showPopup(thankYouPopup);

              // Reset the form
              form.reset();
          } else {
              console.error("Form submission failed:", response.status);
          }
      } catch (err) {
          console.error("Error during form submission:", err);
      }
  });
}


function showPopup(popup) {
  const overlay = document.getElementById('popup-overlay');
  if (popup) popup.style.display = 'flex'; // Show the popup
  if (overlay) overlay.style.display = 'block'; // Show the overlay
}

function hidePopup(popup) {
  const overlay = document.getElementById('popup-overlay');
  if (popup) popup.style.display = 'none'; // Hide the popup
  if (overlay) overlay.style.display = 'none'; // Hide the overlay
}

function hideAllPopups() {
  const popups = document.querySelectorAll(
      '#request-listing-popup, #give-feedback-popup, #thankyou-feedback-popup, #thankyou-listing-request-popup'
  );
  const overlay = document.getElementById('popup-overlay');
  
  popups.forEach((popup) => (popup.style.display = 'none')); // Hide all popups
  if (overlay) overlay.style.display = 'none'; // Hide the overlay
}


//Verplaats popups naar pagina body en toon vanuit header knoppen
document.addEventListener("DOMContentLoaded", function () {
  function initPopupLogic() {
      const listingBtn = document.getElementById('request-listing-form-btn');
      const feedbackBtn = document.getElementById('feedback-form-btn');
      const heroListingBtn = document.getElementById('request-listing-form-btn-hero'); // Button in index.html
      const listingPopup = document.getElementById('request-listing-popup');
      const feedbackPopup = document.getElementById('give-feedback-popup');

      if (!listingBtn || !feedbackBtn || !listingPopup || !feedbackPopup) {
          console.warn("Popup elements not found. Retrying...");
          setTimeout(initPopupLogic, 200);
          return;
      }

      // Move popups to the body (if not already moved)
      if (!listingPopup.parentNode || listingPopup.parentNode.tagName !== 'BODY') {
          document.body.appendChild(listingPopup);
      }
      if (!feedbackPopup.parentNode || feedbackPopup.parentNode.tagName !== 'BODY') {
          document.body.appendChild(feedbackPopup);
      }

      // Create overlay if it doesn't exist
      let overlay = document.getElementById('popup-overlay');
      if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'popup-overlay';
          document.body.appendChild(overlay);
      }

      // Show popup function
      function showPopup(popup) {
          popup.style.display = 'flex';
          overlay.style.display = 'block';
      }

      // Hide popup function
      function hidePopup() {
          listingPopup.style.display = 'none';
          feedbackPopup.style.display = 'none';
          overlay.style.display = 'none';
      }

      // Event Listeners
      listingBtn.addEventListener('click', function () {
          showPopup(listingPopup);
      });

      feedbackBtn.addEventListener('click', function () {
          showPopup(feedbackPopup);
      });

      // Add event listener for hero button if it exists
      if (heroListingBtn) {
          heroListingBtn.addEventListener('click', function () {
              showPopup(listingPopup);
          });
      }

      overlay.addEventListener('click', hidePopup);
  }

  initPopupLogic();
});



//Setting up forms for NodeMailer
document.addEventListener("DOMContentLoaded", function () {
  function initPopupLogic() {
      const listingBtn = document.getElementById('request-listing-form-btn');
      const feedbackBtn = document.getElementById('feedback-form-btn');
      const listingPopup = document.getElementById('request-listing-popup');
      const feedbackPopup = document.getElementById('give-feedback-popup');
      let retryCount = 0;  // Retry counter to avoid infinite loop

      // Create overlay dynamically if not present
      let overlay = document.getElementById('popup-overlay');
      if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'popup-overlay';
          overlay.classList.add('hidden');
          document.body.appendChild(overlay);
      }

      function retryIfNeeded() {
          if (retryCount < 10) {  // Limit retries to 10 attempts
              console.warn("Popup elements not found. Retrying...");
              retryCount++;
              setTimeout(initPopupLogic, 500);
          } else {
              console.error("Popup elements still not found after 10 attempts.");
          }
      }

      // Retry logic if elements are not yet available
      if (!listingBtn || !feedbackBtn || !listingPopup || !feedbackPopup) {
          retryIfNeeded();
          return;
      }

      // Show popup
      function showPopup(popup) {
          popup.classList.remove('hidden');
          overlay.classList.remove('hidden');
      }

      // Hide all popups
      function hidePopups() {
          listingPopup.classList.add('hidden');
          feedbackPopup.classList.add('hidden');
          overlay.classList.add('hidden');
      }

      // Event Listeners for Buttons
      feedbackBtn.addEventListener('click', function () {
          showPopup(feedbackPopup);
      });

      listingBtn?.addEventListener('click', function () {
          showPopup(listingPopup);
      });

      overlay.addEventListener('click', hidePopups);
  }

  initPopupLogic();
});


document.addEventListener('DOMContentLoaded', function () {
  const feedbackPopup = document.getElementById('give-feedback-popup');
  const feedbackBtn = document.getElementById('feedback-form-btn');
  const overlay = document.createElement('div');

  overlay.id = 'popup-overlay';
  overlay.classList.add('hidden');
  document.body.appendChild(overlay);

  if (feedbackBtn && feedbackPopup) {
      feedbackBtn.addEventListener('click', function () {
          feedbackPopup.classList.remove('hidden');
          overlay.classList.remove('hidden');
      });
  }

  overlay.addEventListener('click', function () {
      feedbackPopup.classList.add('hidden');
      overlay.classList.add('hidden');
  });
});


//FAQ Collapse
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


//Listing detail page styling.

document.addEventListener('DOMContentLoaded', () => {
  // Hero Section Image Rotation Logic
  const heroImages = document.querySelectorAll('.listing-hero-images .hero-image');
  let heroIndex = 0;

  function rotateHeroImages() {
    heroImages.forEach(img => img.classList.remove('active'));
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImages[heroIndex].classList.add('active');
  }

  // Rotate hero images every 5 seconds
  setInterval(rotateHeroImages, 5000);




  // Popup Image Logic
  const images = Array.from(document.querySelectorAll('#popup-hidden-images img'));
  const popup = document.getElementById('image-popup');
  const popupImage = document.getElementById('popup-image');
  const closeBtn = document.querySelector('.close-btn');
  const rightArrow = document.querySelector('.right-arrow');
  const leftArrow = document.querySelector('.left-arrow');
  let currentIndex = 0;
  let isNavigating = false;

  // Select all elements by their IDs
const elements = document.querySelectorAll('.hero-image, #view-listing-images', '.listing-hero-images');

// Attach the click event to each element
elements.forEach(element => {
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

// Close when clicking outside the image
popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};

// Show next image on right arrow click
rightArrow.onclick = function () {
  nextImage();
};

// Show previous image on left arrow click
leftArrow.onclick = function () {
  prevImage();
};


  // Keyboard navigation for popup
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

  // Show image by index
  function showImage(index) {
    if (index >= 0 && index < images.length) {
      popupImage.src = images[index].src;
    }
  }

  // Go to next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Go to previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});



//Description hide/show on listing detail page.
document.addEventListener('DOMContentLoaded', function () {
  // Desktop elements
  const descriptionDesktop = document.querySelector('.listing-description-desktop');
  const showDescriptionDesktop = document.querySelector('#show-description-desktop');
  const hideDescriptionDesktop = document.querySelector('#hide-description-desktop');
  const paragraphsDesktop = descriptionDesktop.querySelectorAll('p:not(:first-of-type)');

  // Mobile elements
  const descriptionMobile = document.querySelector('.listing-description-mobile');
  const showDescriptionMobile = document.querySelector('#show-description-mobile');
  const hideDescriptionMobile = document.querySelector('#hide-description-mobile');
  const paragraphsMobile = descriptionMobile.querySelectorAll('p:not(:first-of-type)');

  // Utility functions
  function hideParagraphs(paragraphs) {
    paragraphs.forEach((p) => {
      p.style.opacity = '0';
      setTimeout(() => (p.style.display = 'none'), 300); // Matches transition duration
    });
  }

  function showParagraphs(paragraphs) {
    paragraphs.forEach((p) => {
      p.style.display = 'block';
      setTimeout(() => (p.style.opacity = '1'), 10); // Smooth transition
    });
  }

  // Toggle visibility for Desktop
  if (showDescriptionDesktop && hideDescriptionDesktop && paragraphsDesktop.length > 0) {
    // Initially hide extra paragraphs
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

  // Toggle visibility for Mobile
  if (showDescriptionMobile && hideDescriptionMobile && paragraphsMobile.length > 0) {
    // Initially hide extra paragraphs
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

  // Ensure correct visibility on load
  function toggleVisibility() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      descriptionDesktop.style.display = 'none';
      descriptionMobile.style.display = 'block';
    } else {
      descriptionDesktop.style.display = 'block';
      descriptionMobile.style.display = 'none';
    }
  }

  // Check visibility on load and resize
  toggleVisibility();
  window.addEventListener('resize', toggleVisibility);
});



  // Sticky scroll listing interest form
  window.addEventListener('scroll', function() {
    const listingInterest = document.querySelector('.listing-interest');
    const description = document.querySelector('.listing-description-desktop');
    const listingDetailContent = document.querySelector('.listing-detail-content');

    const offsetTop = description.offsetTop + description.offsetHeight;
    const stopPoint = listingDetailContent.offsetTop + listingDetailContent.offsetHeight - listingInterest.offsetHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate parent sticky scroll element width
    const parentWidth = listingInterest.parentElement.offsetWidth;
    listingInterest.style.width = parentWidth + 'px';

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