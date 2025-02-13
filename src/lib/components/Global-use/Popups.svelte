<script>
  import SecondaryButton from '$lib/components/Global-use/SecondaryButton.svelte';
  import { onMount } from 'svelte';

  // BACKEND URL for submissions (adjust as needed)
  const BASE_URL = 'https://moveroofgithubio-production.up.railway.app';

  // Reactive state for popups
  let showOverlay = false;

  // Listing popup state
  let showListing = false;
  let showThankYouListing = false;

  // Feedback popup state
  let showFeedback = false;
  let showThankYouFeedback = false;

  // Listing form data
  let nameListing = '';
  let emailListing = '';
  let phoneListing = '';
  let addressListing = '';
  let packageListing = '';

  // Feedback form data
  let nameFeedback = '';
  let emailFeedback = '';
  let messageFeedback = '';

  // Open listing popup (optionally with a package pre-selected)
  export function openListingPopup(packageName = '') {
    packageListing = packageName;
    showListing = true;
    showOverlay = true;
    showThankYouListing = false;
  }

  // Open feedback popup
  export function openFeedbackPopup() {
    showFeedback = true;
    showOverlay = true;
    showThankYouFeedback = false;
  }

  // Hide all popups
  function closeAll() {
    showOverlay = false;
    showListing = false;
    showThankYouListing = false;
    showFeedback = false;
    showThankYouFeedback = false;
  }

  // Listing form submission
  async function submitListingForm(event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('naam', nameListing);
    formData.append('email', emailListing);
    formData.append('telefoon', phoneListing);
    formData.append('adres', addressListing);
    formData.append('packageSelect', packageListing);

    try {
      const res = await fetch(`${BASE_URL}/submit-listing-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });

      if (res.ok) {
        // Success: hide listing form, show thank-you popup
        showListing = false;
        showThankYouListing = true;
      } else {
        console.error('Form submission failed:', res.status);
      }
    } catch (err) {
      console.error('Error during form submission:', err);
    }
  }

  // Feedback form submission
  async function submitFeedbackForm(event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('naam', nameFeedback);
    formData.append('email', emailFeedback);
    formData.append('bericht', messageFeedback);

    try {
      const res = await fetch(`${BASE_URL}/submit-feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });

      if (res.ok) {
        // Success: hide feedback form, show thank-you popup
        showFeedback = false;
        showThankYouFeedback = true;
      } else {
        console.error('Feedback submission failed:', res.status);
      }
    } catch (err) {
      console.error('Error during feedback submission:', err);
    }
  }

  // Reset both forms
  function resetForms() {
    nameListing = '';
    emailListing = '';
    phoneListing = '';
    addressListing = '';
    packageListing = '';
    nameFeedback = '';
    emailFeedback = '';
    messageFeedback = '';
  }

  onMount(() => {
    return () => {
      resetForms();
    };
  });

  // When clicking the overlay, close all popups if the overlay itself was clicked
  function onOverlayClick(e) {
    if (e.currentTarget === e.target) {
      closeAll();
      resetForms();
    }
  }
</script>

<style>
  /* Overlay styles */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: none;
    z-index: 1000;
  }
  .overlay.active {
    display: block;
  }

  /* Popup container */
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
  .hidden {
    display: none;
  }

  /* Use a common background for all popups */
  .popup.listing,
  .popup.feedback,
  .popup.thankyou {
    background-color: #E6E5E1;
  }

  /* Form styling */
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }
  .group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 15px 0 5px;
    width: 100%;
  }
  .label {
    font-size: 18px;
    font-weight: 400;
    color: #333;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.3s ease;
    opacity: 0;
  }
  .input,
  .textarea {
    font-size: 16px;
    border: none;
    outline: none;
    box-shadow: 2px 3px 3px rgba(0,0,0,0.3);
    border-radius: 8px;
    padding: 0.6em;
    width: 100%;
    color: #333;
  }
  .textarea {
    margin-bottom: 15px;
    height: 7.5em;
  }
  .input::placeholder,
  .textarea::placeholder {
    color: #787878;
  }
  .input:focus + .label,
  .input:not(:placeholder-shown) + .label,
  .textarea:focus + .label,
  .textarea:not(:placeholder-shown) + .label {
    top: 0;
    transform: translateY(-100%);
    font-size: 0.9em;
    opacity: 1;
  }
  .input:focus::placeholder,
  .textarea:focus::placeholder {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .input::placeholder,
    .textarea::placeholder {
      font-size: 0.85em;
    }
  }
</style>

<!-- Overlay (conditionally visible) -->
<div
  class="overlay {showOverlay ? 'active' : ''}"
  on:click={onOverlayClick}
></div>

<!-- 1) Listing Request Popup -->
<div class="popup listing {showListing ? '' : 'hidden'}">
  <h3 class="secondary">Verkopen via MoveRoof</h3>
  <p>
    Breng verandering in de markt teweeg met een ongebonden makelaar en bespaar
    duizenden euro's.
  </p>
  <form class="form" on:submit|preventDefault={submitListingForm}>
    <!-- Name -->
    <div class="group">
      <input
        class="input"
        type="text"
        bind:value={nameListing}
        required
        placeholder="Naam"
      />
      <label class="label">Naam</label>
    </div>
    <!-- Email & Phone -->
    <div class="row">
      <div class="group">
        <input
          class="input"
          type="email"
          bind:value={emailListing}
          required
          placeholder="E-mailadres"
        />
        <label class="label">E-mail</label>
      </div>
      <div class="group">
        <input
          class="input"
          type="tel"
          bind:value={phoneListing}
          placeholder="Tel nr - optioneel"
        />
        <label class="label">Tel nr - optioneel</label>
      </div>
    </div>
    <!-- Address -->
    <div class="group">
      <input
        class="input"
        type="text"
        bind:value={addressListing}
        required
        placeholder="Adres - Straat, nummer en plaats"
      />
      <label class="label">Adres - Straat, nummer en plaats</label>
    </div>
    <!-- Package Select -->
    <div class="group">
      <select class="input" bind:value={packageListing} required>
        <option value="" disabled selected hidden>Kies een deal</option>
        <option value="Starter">Starter - €395,-</option>
        <option value="Premium">Premium - €850,-</option>
        <option value="All-In">All-In - €1.050,-</option>
      </select>
    </div>
    <br />
    <SecondaryButton type="submit">
      Start de verkoop!
    </SecondaryButton>
  </form>
</div>

<!-- 2) Thank-You Popup (Listing) -->
<div class="popup thankyou {showThankYouListing ? '' : 'hidden'}">
  <h4 class="secondary">Bedankt voor de aanvraag! Oprecht!</h4>
  <br />
  <p>
    Dat je het vertrouwen in mij en MoveRoof hebt om je woning met ons te delen
    vind ik onwijs tof.
  </p>
  <br />
  <p>
    Het vertrouwen is mij onwijs veel waard, dankjewel hiervoor! We gaan er wat
    moois van maken samen.
  </p>
  <br />
  <p>Feike Leemkuil.</p>
</div>

<!-- 3) Feedback Popup -->
<div class="popup feedback {showFeedback ? '' : 'hidden'}">
  <h3 class="secondary">Feedback delen</h3>
  <p>
    Heb je suggesties of feedback op MoveRoof en de website en/of service? Deel het
    hieronder. Waardeer het oprecht!
  </p>
  <form class="form" on:submit|preventDefault={submitFeedbackForm}>
    <div class="row">
      <div class="group">
        <input
          class="input"
          type="text"
          bind:value={nameFeedback}
          required
          placeholder="Naam"
        />
        <label class="label">Naam</label>
      </div>
      <div class="group">
        <input
          class="input"
          type="email"
          bind:value={emailFeedback}
          placeholder="E-mailadres"
        />
        <label class="label">E-mail - optioneel</label>
      </div>
    </div>
    <div class="group">
      <textarea
        class="textarea"
        bind:value={messageFeedback}
        placeholder="Deel hier je bericht..."
      ></textarea>
      <label class="label">Je feedback/suggestie</label>
    </div>
    <SecondaryButton type="submit">
      Feedback versturen
    </SecondaryButton>
  </form>
</div>

<!-- 4) Thank-You Popup (Feedback) -->
<div class="popup thankyou {showThankYouFeedback ? '' : 'hidden'}">
  <h4 class="secondary">Bedankt voor de feedback! Oprecht!</h4>
  <br />
  <p>
    Dat je de tijd hebt genomen om je gedachtes en suggesties omtrent MoveRoof te
    delen waardeer ik oprecht enorm. Dankjewel!
  </p>
  <br />
  <p>
    Als je je contactgegevens hebt gedeeld hoop ik je nog te kunnen spreken en
    nogmaals te bedanken. Anders bij deze: mijn dankbaarheid is groot!
  </p>
  <br />
  <p>Fijne dag en hopelijk spreken we elkaar nog eens.</p>
  <br />
  <p>Feike Leemkuil.</p>
</div>