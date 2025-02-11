document.addEventListener('DOMContentLoaded', () => {
    // Generic form handler
    function setupFormHandler(formSelector, endpoint, onSuccessCallback) {
        const form = document.querySelector(formSelector);
        if (form) {
            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const formData = new FormData(form);
                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        body: new URLSearchParams(formData),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    });

                    if (response.ok) {
                        onSuccessCallback?.();
                        form.reset();
                    } else {
                        console.error(`Form submission to ${endpoint} failed with status:`, response.status);
                    }
                } catch (error) {
                    console.error(`Error during form submission to ${endpoint}:`, error);
                }
            });
        }
    }

    // Use Railway backend URL as the base for API calls
    const API_BASE_URL = 'https://moveroofgithubio-production.up.railway.app';

    // Setup handlers for each form
    setupFormHandler(
        '.listing-interest-form',
        `${API_BASE_URL}/submit-interest`,
        () => {
            const listingInterestDiv = document.querySelector('.listing-interest');
            const thankYouDiv = document.getElementById('listing-interest-thankyou');
            if (listingInterestDiv && thankYouDiv) {
                listingInterestDiv.style.display = 'none';
                thankYouDiv.style.display = 'flex';
            }
        }
    );

    setupFormHandler(
        '.listing-request-form',
        `${API_BASE_URL}/submit-listing-request`,
        () => {
            const listingPopup = document.getElementById('request-listing-popup');
            const thankYouPopup = document.getElementById('thankyou-listing-request-popup');
            listingPopup?.classList.add('hidden');
            thankYouPopup?.classList.remove('hidden');
        }
    );

    setupFormHandler(
        '#feedbackForm',
        `${API_BASE_URL}/submit-feedback`,
        () => {
            const feedbackPopup = document.getElementById('give-feedback-popup');
            const thankYouPopup = document.getElementById('thankyou-feedback-popup');
            feedbackPopup?.classList.add('hidden');
            thankYouPopup?.classList.remove('hidden');
        }
    );
});
