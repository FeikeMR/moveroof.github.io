document.addEventListener('DOMContentLoaded', () => {
    // Feedback form logic
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        console.log('Feedback form found.');

        feedbackForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(feedbackForm);

            try {
                const response = await fetch('/submit-feedback', {
                    method: 'POST',
                    body: new URLSearchParams(formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                if (response.ok) {
                    console.log('Feedback submitted successfully.');
            
                    // Hide feedback popup
                    const feedbackPopup = document.getElementById('give-feedback-popup');
                    feedbackPopup?.classList.add('hidden');
            
                    // Show thank-you popup
                    const thankYouPopup = document.getElementById('thankyou-feedback-popup');
                    thankYouPopup?.classList.remove('hidden');
                } else {
                    console.error('Failed to submit feedback:', response.status);
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
            }
        });
    }

    // Request listing form logic
    const listingForm = document.querySelector('.listing-interest-form');
    if (listingForm) {
        console.log('Request listing form found.');

        listingForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(listingForm);

            try {
                const response = await fetch('/submit-request', {
                    method: 'POST',
                    body: new URLSearchParams(formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                if (response.ok) {
                    console.log('Listing request submitted successfully.');

                    // Hide listing popup
                    const listingPopup = document.getElementById('request-listing-popup');
                    listingPopup?.classList.add('hidden');

                    // Show thank-you popup
                    const thankYouPopup = document.getElementById('thankyou-listing-request-popup');
                    thankYouPopup?.classList.remove('hidden');
                } else {
                    console.error('Failed to submit listing request:', response.status);
                }
            } catch (error) {
                console.error('Error submitting listing request:', error);
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const listingInterestForm = document.querySelector('.listing-interest-form');
    const listingInterestDiv = document.querySelector('.listing-interest');
    const thankYouDiv = document.getElementById('listing-interest-thankyou');

    if (listingInterestForm) {
        console.log('Listing interest form found.');

        listingInterestForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const formData = new FormData(listingInterestForm);

            try {
                const response = await fetch('/submit-interest', {
                    method: 'POST',
                    body: new URLSearchParams(formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });

                if (response.ok) {
                    console.log('Listing interest inquiry submitted successfully.');

                    // Hide the form and show the thank-you message
                    listingInterestDiv.style.display = 'none';
                    thankYouDiv.style.display = 'flex';
                } else {
                    console.error('Failed to submit listing interest inquiry:', response.status);
                }
            } catch (error) {
                console.error('Error submitting listing interest inquiry:', error);
            }
        });
    }
});

// Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(feedbackForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('https://moveroofgithubio-production.up.railway.app/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Show thank-you popup
      document.getElementById('give-feedback-popup').classList.add('hidden');
      document.getElementById('thankyou-feedback-popup').classList.remove('hidden');
    } else {
      alert('Feedback submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting feedback:', error);
    alert('An error occurred. Please try again.');
  }
});

// Listing Request Form Submission
const listingForm = document.getElementById('listingForm');
listingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(listingForm);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('https://moveroofgithubio-production.up.railway.app/submit-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Show thank-you popup
      document.getElementById('request-listing-popup').classList.add('hidden');
      document.getElementById('thankyou-listing-request-popup').classList.remove('hidden');
    } else {
      alert('Listing request submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting listing request:', error);
    alert('An error occurred. Please try again.');
  }
});