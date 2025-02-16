<script>
  let name = '';
  let email = '';
  let phone = '';
  let message = '';

  // Auto-resize functionality for the textarea
  let textAreaElement;
  function autoResize() {
    textAreaElement.style.height = 'auto';
    textAreaElement.style.height = textAreaElement.scrollHeight + 'px';
  }

  // Optional: pass listing info or ID from parent so we can identify which listing
  export let listing;
  // Build some short listing descriptor
  $: listingInfo = listing
    ? `${listing.street} ${listing.street_number}, ${listing.city}`
    : '';

  let showThankYou = false;

  async function submitForm(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://moveroofgithubio-production.up.railway.app/submit-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          listingInfo,
          naam: name,
          email,
          telefoon: phone,
          bericht: message
        })
      });
      if (!response.ok) {
        throw new Error('Netwerkfout of serverfout bij versturen interesse');
      }
      // If success:
      showThankYou = true;
    } catch (error) {
      console.error(error);
      alert('Er is iets fout gegaan bij het versturen van je bericht.');
    }
  }
</script>

{#if !showThankYou}
  <div class="listing-interest">
    <h4 class="secondary">Contact opnemen met de verkoper:</h4>
    <p class="detail">De onderstaande gegevens worden doorgestuurd naar de verkoper.</p>

    <form class="listing-interest-form" on:submit|preventDefault={submitForm}>
      <!-- Optionally store hidden listing info -->
      <input type="hidden" name="listingInfo" value={listingInfo} />

      <div class="input-group">
        <input
          class="input-field"
          type="text"
          id="naam"
          name="naam"
          bind:value={name}
          required
          placeholder=" " />
        <label class="input-name" for="naam">Naam</label>
      </div>

      <div class="input-row">
        <div class="input-group">
          <input
            class="input-field"
            type="email"
            id="email"
            name="email"
            bind:value={email}
            required
            placeholder=" " />
          <label class="input-name" for="email">E-mail</label>
        </div>
          
        <div class="input-group">
          <input
            class="input-field"
            type="tel"
            id="telefoon"
            name="telefoon"
            bind:value={phone}
            placeholder=" " />
          <label class="input-name" for="telefoon">Tel nr - optioneel</label>
        </div>
      </div>

      <div class="input-group">
        <textarea
          class="text-field"
          id="bericht"
          name="bericht"
          bind:value={message}
          placeholder=" "
          bind:this={textAreaElement}
          on:input={autoResize}></textarea>
        <label class="input-name" for="bericht">Bericht aan de verkoper</label>
      </div>

      <button class="submit-button" type="submit">Bericht versturen</button>
    </form>
  </div>
{:else}
  <div id="listing-interest-thankyou">
    <h4 class="secondary">Bericht is verzonden!</h4>
    <br />
    <p>De verkoper zal contact met je opnemen!</p>
    <br />
    <p>
      Als je intussen vragen hebt of je wilt feedback delen, neem gerust contact met ons op.
    </p>
  </div>
{/if}

<style>
  .listing-interest {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #E6E5E1;
    border: 0.5px solid #787878;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 90%;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .listing-interest h4 {
    margin-bottom: 5px;
  }

  .listing-interest p.detail {
    margin-bottom: 1rem;
    color: #333;
  }

  .listing-interest-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* Floating Label Styles */
  .input-group {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .input-field,
  .text-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  /* For the textarea: disable manual resize and hide overflow */
  .text-field {
    resize: none;
    overflow: hidden;
  }
  
  /* Hide the native placeholder text */
  .input-field::placeholder,
  .text-field::placeholder {
    color: transparent;
  }
  
  .input-name {
    position: absolute;
    left: 12px;
    top: 12px;
    transition: all 0.2s ease-out;
    pointer-events: none;
    color: #666;
    background-color: transparent;
    padding: 0 4px;
  }
  
  /* Animate label on focus or when field is not empty */
  .input-field:focus + .input-name,
  .input-field:not(:placeholder-shown) + .input-name,
  .text-field:focus + .input-name,
  .text-field:not(:placeholder-shown) + .input-name {
    top: -20px;
    left: 8px;
    font-size: 1rem;
    color: #333333;
  }
  
  .input-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  
  .submit-button {
    background-color: #f86d11;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  #listing-interest-thankyou {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #E6E5E1;
    width: 100%;
    padding: 1rem;
    border: 0.5px solid #787878;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  #listing-interest-thankyou p {
    margin: 0.5rem 0;
  }
</style>