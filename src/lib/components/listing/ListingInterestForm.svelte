<script>
    let name = '';
    let email = '';
    let phone = '';
    let message = '';
  
    // Optional: pass listing info or ID from parent so we can identify which listing
    export let listing;
    // Or just build some short listing descriptor
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
        <input type="hidden" name="listingInfo" value="{listingInfo}" />
  
        <div class="input-group">
          <input
            class="input-field"
            type="text"
            id="naam"
            name="naam"
            bind:value={name}
            required
            placeholder="Naam" />
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
              placeholder="E-mailadres" />
            <label class="input-name" for="email">E-mail</label>
          </div>
          
          <div class="input-group">
            <input
              class="input-field"
              type="tel"
              id="telefoon"
              name="telefoon"
              bind:value={phone}
              placeholder="Telefoonnummer" />
            <label class="input-name" for="telefoon">Tel nr - optioneel</label>
          </div>
        </div>
  
        <div class="input-group">
          <textarea
            class="text-field"
            id="bericht"
            name="bericht"
            bind:value={message}
            placeholder="Deel hier je bericht...">
          </textarea>
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
        Als je intussen vragen hebt of je wilt feedback delen, neem gerust
        contact met ons op.
      </p>
    </div>
  {/if}
  
  <style>
    .listing-interest {
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
  
    .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
  
    .input-row {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  
    .input-field,
    .text-field {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .input-name {
      font-size: 0.8rem;
      color: #666;
      margin-top: 4px;
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