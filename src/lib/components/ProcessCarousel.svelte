<script>
  import { onMount } from 'svelte';

  let currentSlide = 0;
  const totalSlides = 5;

  function showSlide(index) {
    // Wrap around
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function goToDot(index) {
    showSlide(index);
  }

  // Swipe logic
  let touchStartX = null;
  let touchEndX = null;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  }

  function handleGesture() {
    if (touchStartX !== null && touchEndX !== null) {
      if (touchEndX < touchStartX - 50) nextSlide();
      else if (touchEndX > touchStartX + 50) prevSlide();
    }
    touchStartX = null;
    touchEndX = null;
  }

  onMount(() => {
    showSlide(0);
  });
</script>

<style>
  .carousel {
    background: #e6e5e1;
    padding: 2em 0;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .container {
    position: relative;
    width: 70%;
    margin: 0 auto;
    overflow: hidden;
  }

  .slide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* Hide inactive slides */
  .hidden {
    display: none;
  }

  .content {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 1em;
    width: 70%;
    position: relative;
  }

  .image img {
    width: 90%;
    border-radius: 5px;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 50%;
    gap: 1em;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 1em 0;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    background-color: #f86d11;
    transform: scale(1.2);
  }

  .arrow {
    background: none;
    border: none;
    padding: 0 1em;
    cursor: pointer;
  }

  .arrow img {
    width: 40px;
    height: 40px;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      width: 90%;
      gap: 1em;
      padding: 0.5em 0;
    }
    .arrow {
      display: none !important;
    }
    .container {
      width: 90%;
      max-width: 100%;
    }
    .slide {
      width: 100%;
    }
  }
</style>

<section class="carousel">
  <div
    class="container"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <!-- Slide 1 -->
    <div class="slide {currentSlide === 0 ? '' : 'hidden'}" data-index="0">
      <button class="arrow prev" on:click={prevSlide}>
        <img src="/visuals/icons/left-arrow-icon.svg" alt="prev" />
      </button>
      <div class="content">
        <div class="image">
          <img
            src="/visuals/general/process-step1-signup.png"
            alt="Slide 1"
          />
        </div>
        <div class="text">
          <h5>Verkopen via MoveRoof</h5>
          <h4 class="secondary">Woning aanmelden</h4>
          <p>
            Na het selecteren en aanvragen van een pakket nemen wij de woning op
            voor een pagina op MoveRoof.com. We
            zullen je ook wijzen op onze informatiebronnen waar je allerlei
            praktische informatie kan vinden.
          </p>
          <p class="detail">
            Pssst... die info is geen geheimpje, maar kan je gewoon
            <u><a href="/verkoop-begeleiding">hier</a></u> vinden.
          </p>
          <div class="dots">
            <div class="dot {currentSlide === 0 ? 'active' : ''}" on:click={() => goToDot(0)}></div>
            <div class="dot {currentSlide === 1 ? 'active' : ''}" on:click={() => goToDot(1)}></div>
            <div class="dot {currentSlide === 2 ? 'active' : ''}" on:click={() => goToDot(2)}></div>
            <div class="dot {currentSlide === 3 ? 'active' : ''}" on:click={() => goToDot(3)}></div>
            <div class="dot {currentSlide === 4 ? 'active' : ''}" on:click={() => goToDot(4)}></div>
          </div>
        </div>
      </div>
      <button class="arrow next" on:click={nextSlide}>
        <img src="/visuals/icons/right-arrow-icon.svg" alt="next" />
      </button>
    </div>

    <!-- Slide 2 -->
    <div class="slide {currentSlide === 1 ? '' : 'hidden'}" data-index="1">
      <button class="arrow prev" on:click={prevSlide}>
        <img src="/visuals/icons/left-arrow-icon.svg" alt="prev" />
      </button>
      <div class="content">
        <div class="image">
          <img
            src="/visuals/general/process-step2-online.png"
            alt="Slide 2"
          />
        </div>
        <div class="text">
          <h5>Verkopen via MoveRoof</h5>
          <h4 class="secondary">Jouw woning online</h4>
          <p>
            Wij zorgen dat jouw woning binnen 1 dag op onze website waarna we samen de woning zullen promoten via andere sociale media kanalen.
          </p>
          <div class="dots">
            <div class="dot {currentSlide === 0 ? 'active' : ''}" on:click={() => goToDot(0)}></div>
            <div class="dot {currentSlide === 1 ? 'active' : ''}" on:click={() => goToDot(1)}></div>
            <div class="dot {currentSlide === 2 ? 'active' : ''}" on:click={() => goToDot(2)}></div>
            <div class="dot {currentSlide === 3 ? 'active' : ''}" on:click={() => goToDot(3)}></div>
            <div class="dot {currentSlide === 4 ? 'active' : ''}" on:click={() => goToDot(4)}></div>
          </div>
        </div>
      </div>
      <button class="arrow next" on:click={nextSlide}>
        <img src="/visuals/icons/right-arrow-icon.svg" alt="next" />
      </button>
    </div>

    <!-- Slide 3 -->
    <div class="slide {currentSlide === 2 ? '' : 'hidden'}" data-index="2">
      <button class="arrow prev" on:click={prevSlide}>
        <img src="/visuals/icons/left-arrow-icon.svg" alt="prev" />
      </button>
      <div class="content">
        <div class="image">
          <img
            src="/visuals/general/process-step3-tours.png"
            alt="Slide 3"
          />
        </div>
        <div class="text">
          <h5>Verkopen via MoveRoof</h5>
          <h4 class="secondary">Bezichtigingen</h4>
          <p>
            Zodra er aanvragen via onze website binnenkomen, komen
            deze ook direct bij jou binnen. Ondanks dat we begeleidende
            artikelen hebben kunnen wij je altijd helpen als je vastloopt in
            contact met een potentiële koper. Ook voor bezichtigingen geven
            hebben wij veel tips indien nodig.
          </p>
          <div class="dots">
            <div class="dot {currentSlide === 0 ? 'active' : ''}" on:click={() => goToDot(0)}></div>
            <div class="dot {currentSlide === 1 ? 'active' : ''}" on:click={() => goToDot(1)}></div>
            <div class="dot {currentSlide === 2 ? 'active' : ''}" on:click={() => goToDot(2)}></div>
            <div class="dot {currentSlide === 3 ? 'active' : ''}" on:click={() => goToDot(3)}></div>
            <div class="dot {currentSlide === 4 ? 'active' : ''}" on:click={() => goToDot(4)}></div>
          </div>
        </div>
      </div>
      <button class="arrow next" on:click={nextSlide}>
        <img src="/visuals/icons/right-arrow-icon.svg" alt="next" />
      </button>
    </div>

    <!-- Slide 4 -->
    <div class="slide {currentSlide === 3 ? '' : 'hidden'}" data-index="3">
      <button class="arrow prev" on:click={prevSlide}>
        <img src="/visuals/icons/left-arrow-icon.svg" alt="prev" />
      </button>
      <div class="content">
        <div class="image">
          <img
            src="/visuals/general/process-step4-negotiate.png"
            alt="Slide 4"
          />
        </div>
        <div class="text">
          <h5>Verkopen via MoveRoof</h5>
          <h4 class="secondary">Onderhandelen &amp; -tekenen</h4>
          <p>
            MoveRoof neemt de onderhandelingen over en zal, samen met jou, toewerken naar de gewenste verkoopprijs. Ook stellen wij de juridische documenten voor je op.
          </p>
          <div class="dots">
            <div class="dot {currentSlide === 0 ? 'active' : ''}" on:click={() => goToDot(0)}></div>
            <div class="dot {currentSlide === 1 ? 'active' : ''}" on:click={() => goToDot(1)}></div>
            <div class="dot {currentSlide === 2 ? 'active' : ''}" on:click={() => goToDot(2)}></div>
            <div class="dot {currentSlide === 3 ? 'active' : ''}" on:click={() => goToDot(3)}></div>
            <div class="dot {currentSlide === 4 ? 'active' : ''}" on:click={() => goToDot(4)}></div>
          </div>
        </div>
      </div>
      <button class="arrow next" on:click={nextSlide}>
        <img src="/visuals/icons/right-arrow-icon.svg" alt="next" />
      </button>
    </div>

    <!-- Slide 5 -->
    <div class="slide {currentSlide === 4 ? '' : 'hidden'}" data-index="4">
      <button class="arrow prev" on:click={prevSlide}>
        <img src="/visuals/icons/left-arrow-icon.svg" alt="prev" />
      </button>
      <div class="content">
        <div class="image">
          <img
            src="/visuals/general/process-step5-celebrate.png"
            alt="Slide 5"
          />
        </div>
        <div class="text">
          <h5>Verkopen via MoveRoof</h5>
          <h4 class="secondary">Feestje vieren</h4>
          <p>
            Als de handtekening eronder staat en de financieringsperiode is
            voorbij is het tijd voor een klein vreugde dansje. De verkoop is
            rond en dat heb je toch even helemaal zelf gedaan!
          </p>
          <p>Oprecht, super tof!</p>
          <div class="dots">
            <div class="dot {currentSlide === 0 ? 'active' : ''}" on:click={() => goToDot(0)}></div>
            <div class="dot {currentSlide === 1 ? 'active' : ''}" on:click={() => goToDot(1)}></div>
            <div class="dot {currentSlide === 2 ? 'active' : ''}" on:click={() => goToDot(2)}></div>
            <div class="dot {currentSlide === 3 ? 'active' : ''}" on:click={() => goToDot(3)}></div>
            <div class="dot {currentSlide === 4 ? 'active' : ''}" on:click={() => goToDot(4)}></div>
          </div>
        </div>
      </div>
      <button class="arrow next" on:click={nextSlide}>
        <img src="/visuals/icons/right-arrow-icon.svg" alt="next" />
      </button>
    </div>
  </div>
</section>
