<script>
  import PackagesOverview from '$lib/components/PackagesOverview.svelte';
  import ProcessCarousel from '$lib/components/ProcessCarousel.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import SecondaryButton from '$lib/components/global/SecondaryButton.svelte';
  import { goto } from '$app/navigation';

  function onChoosePackage(e) {
    const { packageName } = e.detail;
    console.log("User chose: ", packageName);
  }
</script>

<svelte:head>
  <title>Home - MoveRoof</title>
</svelte:head>

<section class="hero-container">
  <div class="hero-text">
    <h1 class="secondary">Jouw huis. Jouw deal.</h1>
    <p>
      (Ver)kopen via MoveRoof is transparant en eenvoudig. Pak de controle en zelfstandigheid en verkoop via MoveRoof
    </p>
    <p>
      Geen hoge variabele kosten, maar direct contact met kopers en een heldere, eerlijke aanpak met een vaste prijs. 
    </p>
    <p><b>Eerlijk vastgoed, zoals het hoort.</b></p>
    <div class="button-row">
      <SecondaryButton id="hero-button" on:click={() => goto('/zelf-verkopen')}>
        Zelf verkopen
      </SecondaryButton>
      <SecondaryButton id="hero-button" on:click={() => goto('/aanbod')}>
        Bekijk ons aanbod
      </SecondaryButton>
    </div>
  </div>
  <img
    src="/visuals/general/phone-3dmockup.svg"
    alt="house and phone illustration"
  />
</section>

<PackagesOverview on:choosePackage={onChoosePackage} />

<ProcessCarousel />

<FAQ />

<style>
  /* ================= HERO SECTION CSS ================= */
  .hero-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 90vh;
    width: 100%;
    padding: 2% 0;
    z-index: 1;
    overflow: hidden;
  }

  .hero-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #F8B411;
    opacity: 0.7;
    z-index: 0;
  }

  .hero-container > * {
    width: auto;
    background: transparent;
    z-index: 1;
  }

  .hero-container img {
    width: auto;
    height: 75%;
  }

  .hero-text {
    display: flex;
    flex-direction: column;
    max-width: 40%;
  }

  .hero-text h1 {
    margin-bottom: 10px;
  }

  .hero-text p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .hero-container {
      flex-direction: column;
      height: auto;
      text-align: center;
      padding: 10vh 0 2vh 0;
    }

    .hero-text {
      max-width: 90%;
      margin: 0 auto;
    }

    .hero-text h1 {
      font-size: 36px;
      word-spacing: 0;
      line-height: 1.1;
    }

    .hero-text p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .button-row .main-button {
      font-size: 18px;
    }

    .hero-container img {
      width: 90%;
      height: auto;
      margin-top: 20px;
    }
  }
</style>