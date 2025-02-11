<script>
  import { onMount } from 'svelte';

  // BACKEND URL for submissions (adjust as needed)
  const BASE_URL = 'https://moveroofgithubio-production.up.railway.app';

  // Reactive variables controlling what’s displayed
  let showOverlay = false;

  // For listing request popups
  let showListingPopup = false;
  let showThankyouListing = false;

  // For feedback popups
  let showFeedbackPopup = false;
  let showThankyouFeedback = false;

  // The form data for listing
  let listingName = '';
  let listingEmail = '';
  let listingPhone = '';
  let listingAddress = '';
  let listingPackage = '';

  // The form data for feedback
  let feedbackName = '';
  let feedbackEmail = '';
  let feedbackMessage = '';

  // If you want to open the listing popup with a chosen package (e.g., “Starter”)
  export function openListingPopup(packageName = '') {
    listingPackage = packageName;
    showListingPopup = true;
    showOverlay = true;
    showThankyouListing = false;
  }

  // If you want to open the feedback popup
  export function openFeedbackPopup() {
    showFeedbackPopup = true;
    showOverlay = true;
    showThankyouFeedback = false;
  }

  // Hide everything
  function closeAllPopups() {
    showOverlay = false;
    showListingPopup = false;
    showThankyouListing = false;
    showFeedbackPopup = false;
    showThankyouFeedback = false;
  }

  /**
   * LISTING FORM submission
   * Called on <form> submission for the listing.
   */
  async function submitListingForm(event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('naam', listingName);
    formData.append('email', listingEmail);
    formData.append('telefoon', listingPhone);
    formData.append('adres', listingAddress);
    formData.append('packageSelect', listingPackage);

    try {
      const response = await fetch(`${BASE_URL}/submit-listing-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });

      if (response.ok) {
        // Success: hide listing popup, show thank-you
        showListingPopup = false;
        showThankyouListing = true;
      } else {
        console.error('Form submission failed:', response.status);
      }
    } catch (err) {
      console.error('Error during form submission:', err);
    }
  }

  /**
   * FEEDBACK FORM submission
   * Called on <form> submission for feedback.
   */
  async function submitFeedbackForm(event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('naam', feedbackName);
    formData.append('email', feedbackEmail);
    formData.append('bericht', feedbackMessage);

    try {
      const response = await fetch(`${BASE_URL}/submit-feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });

      if (response.ok) {
        // Success: hide feedback popup, show thank-you
        showFeedbackPopup = false;
        showThankyouFeedback = true;
      } else {
        console.error('Feedback submission failed:', response.status);
      }
    } catch (err) {
      console.error('Error during feedback submission:', err);
    }
  }

  // Reset forms when we close popups. If you do want them to persist, remove
  function resetForms() {
    listingName = '';
    listingEmail = '';
    listingPhone = '';
    listingAddress = '';
    listingPackage = '';
    feedbackName = '';
    feedbackEmail = '';
    feedbackMessage = '';
  }

  // Cleanup forms on mount/unmount if you like
  onMount(() => {
    // No special code here yet
    return () => {
      // e.g., reset forms if you want
      resetForms();
    };
  });

  // Called when we click the overlay to close everything
  function onOverlayClick(e) {
    // If user clicked the overlay (not a child), close
    if (e.currentTarget === e.target) {
      closeAllPopups();
      resetForms();
    }
  }
</script>

<style>
  /* BASIC STYLES FOR OVERLAY */
  #popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
  }
  /* Show overlay when visible */
  .active-overlay {
    display: block;
  }

  /* Generic popup container */
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 30px;
    border-radius: 8px;
    z-index: 1001;
    max-width: 550px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }
  /* Hide popups by default */
  .hidden {
    display: none;
  }

  /* The listing request popup specifically */
  #request-listing-popup {
    background-color: #E6E5E1;
  }
  #give-feedback-popup {
    background-color: #E6E5E1;
  }
  /* Thank-you popups too */
  #thankyou-listing-request-popup,
  #thankyou-feedback-popup {
    background-color: #E6E5E1;
  }

  /* Forms */
  .listing-request-form,
  .give-feedback-form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .input-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }
  .input-group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 15px;
    margin-bottom: 5px;
    width: 100%;
  }
  .input-name {
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.3s ease;
    opacity: 0;
  }

  .input-field,
  .text-field {
    font-size: 16px;
    border: none;
    outline: none;
    box-shadow: 2px 3px 3px rgba(0,0,0,0.3);
    border-radius: 8px;
    padding: 0.6em;
    width: 100%;
    color: #333333;
  }
  .text-field {
    margin-bottom: 15px;
    height: 7.5em;
  }

  .input-field::placeholder,
  .text-field::placeholder {
    color: #787878;
  }
  .input-field:focus + .input-name,
  .input-field:not(:placeholder-shown) + .input-name,
  .text-field:focus + .input-name,
  .text-field:not(:placeholder-shown) + .input-name {
    top: 0;
    transform: translateY(-100%);
    font-size: 0.9em;
    opacity: 1;
  }
  .input-field:focus::placeholder,
  .text-field:focus::placeholder {
    opacity: 0;
  }

  .submit-button {
    margin-top: 15px;
    align-self: flex-start;
    background-color: #F86D11;
    color: #fff;
    border: none;
    padding: 0.6em 1em;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
  .submit-button:hover {
    background-color: #e85b08;
  }

  /* Titles and headings inside popups */
  .secondary {
    color: #f86d11;
  }

  @media (max-width: 768px) {
    .input-field::placeholder,
    .text-field::placeholder {
      font-size: 0.85em;
    }
  }
</style>

<!-- The overlay (conditionally shown) -->
<div
  id="popup-overlay"
  class="{showOverlay ? 'active-overlay' : ''}"
  on:click={onOverlayClick}
></div>

<!-- 1) Listing Request Popup -->
<div
  id="request-listing-popup"
  class="popup {showListingPopup ? '' : 'hidden'}"
>
  <h3 class="secondary">Verkopen via MoveRoof</h3>
  <p>Breng verandering in de markt teweeg met een ongebonden makelaar en bespaar duizenden euro's.</p>

  <form class="listing-request-form" on:submit|preventDefault={submitListingForm}>
    <!-- Name -->
    <div class="input-group">
      <input
        class="input-field"
        type="text"
        bind:value={listingName}
        required
        placeholder="Naam"
      />
      <label class="input-name">Naam</label>
    </div>

    <!-- Email & Phone -->
    <div class="input-row">
      <div class="input-group">
        <input
          class="input-field"
          type="email"
          bind:value={listingEmail}
          required
          placeholder="E-mailadres"
        />
        <label class="input-name">E-mail</label>
      </div>
      <div class="input-group">
        <input
          class="input-field"
          type="tel"
          bind:value={listingPhone}
          placeholder="Tel nr - optioneel"
        />
        <label class="input-name">Tel nr - optioneel</label>
      </div>
    </div>

    <!-- Address -->
    <div class="input-group">
      <input
        class="input-field"
        type="text"
        bind:value={listingAddress}
        required
        placeholder="Adres - Straat, nummer en plaats"
      />
      <label class="input-name">Adres - Straat, nummer en plaats</label>
    </div>

    <!-- Package Select -->
    <div class="input-group">
      <select
        class="input-field"
        bind:value={listingPackage}
        required
      >
        <option value="" disabled selected hidden>Kies een deal</option>
        <option value="Starter">Starter - €395,-</option>
        <option value="Premium">Premium - €850,-</option>
        <option value="All-In">All-In - €1.050,-</option>
      </select>
    </div>

    <br />

    <button class="submit-button" type="submit">
      Start met verkopen!
    </button>
  </form>
</div>

<!-- 2) Thank you popup (listing) -->
<div
  id="thankyou-listing-request-popup"
  class="popup {showThankyouListing ? '' : 'hidden'}"
>
  <h4 class="secondary">Bedankt voor de aanvraag! Oprecht!</h4>
  <br />
  <p>
    Dat je het vertrouwen in mij en MoveRoof hebt om je woning met ons te delen vind ik onwijs tof.
  </p>
  <br />
  <p>
    Het vertrouwen is mij onwijs veel waard, dankjewel hiervoor! We gaan er wat moois van maken samen.
  </p>
  <br />
  <p>Feike Leemkuil.</p>
</div>

<!-- 3) Feedback Popup -->
<div
  id="give-feedback-popup"
  class="popup {showFeedbackPopup ? '' : 'hidden'}"
>
  <h3 class="secondary">Feedback delen</h3>
  <p>
    Heb je suggesties of feedback op MoveRoof en de website en/of service?
    Deel het hieronder. Waardeer het oprecht!
  </p>

  <form class="give-feedback-form" on:submit|preventDefault={submitFeedbackForm}>
    <div class="input-row">
      <div class="input-group">
        <input
          class="input-field"
          type="text"
          bind:value={feedbackName}
          required
          placeholder="Naam"
        />
        <label class="input-name">Naam</label>
      </div>

      <div class="input-group">
        <input
          class="input-field"
          type="email"
          bind:value={feedbackEmail}
          placeholder="E-mailadres"
        />
        <label class="input-name">E-mail - optioneel</label>
      </div>
    </div>

    <div class="input-group">
      <textarea
        class="text-field"
        bind:value={feedbackMessage}
        placeholder="Deel hier je bericht..."
      ></textarea>
      <label class="input-name">Je feedback/suggestie</label>
    </div>

    <button class="submit-button" type="submit">
      Feedback versturen
    </button>
  </form>
</div>

<!-- 4) Thank you popup (feedback) -->
<div
  id="thankyou-feedback-popup"
  class="popup {showThankyouFeedback ? '' : 'hidden'}"
>
  <h4 class="secondary">Bedankt voor de feedback! Oprecht!</h4>
  <br />
  <p>
    Dat je de tijd hebt genomen om je gedachtes en suggesties omtrent MoveRoof te 
    delen waardeer ik oprecht enorm. Dankjewel!
  </p>
  <br />
  <p>
    Als je je contactgegevens hebt gedeeld hoop ik je nog te kunnen spreken 
    en nogmaals te bedanken. Anders bij deze: mijn dankbaarheid is groot!
  </p>
  <br />
  <p>Fijne dag en hopelijk spreken we elkaar nog eens.</p>
  <br />
  <p>Feike Leemkuil.</p>
</div>