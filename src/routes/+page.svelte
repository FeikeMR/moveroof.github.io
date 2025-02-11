<script>
  import PackagesOverview from '$lib/components/PackagesOverview.svelte';
  import ProcessCarousel from '$lib/components/ProcessCarousel.svelte';
  import FAQ from '$lib/components/FAQ.svelte';

  function onChoosePackage(e) {
    const { packageName } = e.detail;
    console.log("User chose: ", packageName);
  }
</script>

<svelte:head>
  <title>Home - MoveRoof</title>
  <link rel="icon" href="/assets/visuals/logos/logo-favicon.svg" type="image/svg+xml">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</svelte:head>

<style>
  /* ================= HERO SECTION CSS ================= */
  #hero-container {
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

  #hero-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #F8B411;
    opacity: 0.7;
    z-index: 0;
  }

  #hero-container > * {
    width: auto;
    background: transparent;
    z-index: 1;
  }

  #hero-container img {
    width: auto;
    height: 75%;
  }

  #hero-text-container {
    display: flex;
    flex-direction: column;
    max-width: 40%;
  }

  #hero-text-container h1 {
    margin-bottom: 10px;
  }

  #hero-text-container p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  #hero-buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    #hero-container {
      flex-direction: column;
      height: auto;
      text-align: center;
      padding: 10vh 0 2vh 0;
    }

    #hero-text-container {
      max-width: 90%;
      margin: 0 auto;
    }

    #hero-text-container h1 {
      font-size: 36px;
      word-spacing: 0%;
      line-height: 1.1;
    }

    #hero-text-container p {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    #hero-buttons {
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    #hero-buttons .main-button {
      font-size: 18px;
    }

    #hero-container img {
      width: 80%;
      height: auto;
      margin-top: 20px;
    }
  }
</style>

<!-- ================= HERO SECTION ================= -->
<section id="hero-container">
  <div id="hero-text-container">
    <h1 class="secondary">Jouw huis. Jouw deal.</h1>
    <p>
      Verkopen of kopen via MoveRoof is eenvoudig, betaalbaar en transparant. Wij zijn een
      <b>ongebonden internetmakelaar</b> en dus volledig onafhankelijk in jouw voordeel.
    </p>
    <p>
      Geen courtages, geen hoge kosten, geen elleboog wrijven en direct contact met de kopers.
      Elke verdiende euro gaat terug in de dienstverlening, dit om échte verandering teweeg te brengen!
    </p>
    <p><b>Eerlijk vastgoed, zoals het hoort.</b></p>
    <div id="hero-buttons">
      <h4 class="main-button" id="request-listing-form-btn-hero">
        <a href="public/zelf-verkopen.html" style="color: inherit;">Vergelijk pakketten</a>
      </h4>
      <h4 class="main-button">
        <a href="/public/aanbod.html">Bekijk ons aanbod</a>
      </h4>
    </div>
  </div>
  <img
    src="/assets/visuals/general/phone-3dmockup.svg"
    alt="house and phone illustration"
  />
</section>

<PackagesOverview on:choosePackage={onChoosePackage} />

<ProcessCarousel />

<FAQ />
