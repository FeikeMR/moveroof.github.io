<script>
  import PackagesDetail from '$lib/components/PackagesDetail.svelte';
  function handleChoose(e) {
    const { packageName } = e.detail;
    console.log("Chose: ", packageName);
  }
  import ProcessCarousel from '$lib/components/ProcessCarousel.svelte';
  import PackagesOverview from '$lib/components/PackagesOverview.svelte';
  function onChoosePackage(e) {
    const { packageName } = e.detail;
    console.log("User chose: ", packageName);
  }
</script>

<svelte:head>
  <title>Zelf verkopen - MoveRoof</title>
  <link rel="icon" href="/svelte/src/lib/assets/visuals/logos/logo-favicon.svg" type="image/svg+xml">
</svelte:head>

<style>
  #why-moveroof {
    background: #f8f8f8;
    padding: 2em 0;
    text-align: center;
  }
  .why-moveroof-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1em;
    justify-items: center;
  }
  .why-moveroof-container h2 {
    margin-bottom: 0.75em;
  }
  .why-moveroof-container p {
    margin-bottom: 1em;
  }
  #over-moveroof {
    width: 30%;
  }
</style>

<PackagesDetail on:choosePackage={handleChoose} />

<ProcessCarousel />

<section id="why-moveroof">
  <div class="why-moveroof-container">
    <h2>Waarom kiezen voor MoveRoof?</h2>
    <p>
      MoveRoof is een van de weinige ongebonden makelaars in Nederland. Dit betekent dat wij niet
      de belangen van investeerders of andere "belangrijke" mensen te balanceren met klanten
      belangen, maar ons 'gewoon' volledig op de klant kunnen focussen.
    </p>
    <p>
      Door de opbouw van MoveRoof - 1 persoon met een full-time baan ernaast - gaat elke verdiende
      euro regelrecht naar de verbetering van ons product, de service en ons platform.
    </p>
    <p>Meer weten over waarom MoveRoof uniek is?</p>
    <div class="secondary-button-dark" id="over-moveroof">
      <a href="/public/over-moveroof.html">Over MoveRoof</a>
    </div>
  </div>
</section>