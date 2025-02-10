<script>
    import { onMount } from 'svelte';
  
    // We have 5 slides total
    let currentSlide = 0;
    const totalSlides = 5;
  
    // If you want to hide arrows on the first or last slide
    function showSlide(index) {
      // wrap around
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
  
    // For clicking on a dot
    function goToDot(index) {
      showSlide(index);
    }
  
    // Basic swipe logic
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
        if (touchEndX < touchStartX - 50) {
          nextSlide();
        } else if (touchEndX > touchStartX + 50) {
          prevSlide();
        }
      }
      touchStartX = null;
      touchEndX = null;
    }
  
    onMount(() => {
      // Show the first slide initially (already default to 0)
      showSlide(0);
    });
</script>
  
<style>
    /* Carousel section (desktop) */
    #carousel-section {
      background: #E6E5E1;
      padding: 2em 0;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
  
    .carousel-container {
      position: relative;
      width: 70%;
      margin: 0 auto;
      overflow: hidden;
    }
  
    .carousel-slide {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
      justify-content: center;
      width: 100%;
    }
  
    .carousel-content {
      display: flex;
      gap: 20px;
      align-items: center;
      margin: 0 auto;
      justify-content: center;
      padding: 1em;
      width: 70%;
      position: relative;
    }
  
    .carousel-image img {
      width: 90%;
      border-radius: 5px;
    }
  
    .carousel-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 50%;
      gap: 1em;
    }
  
    /* Dots & arrows */
    .dots-container {
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
      background-color: #F86D11;
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
  
    /* Carousel mobile adjustments */
    @media (max-width: 768px) {
      .carousel-content {
        flex-direction: column;
      }
      .arrow {
        display: none !important; /* Swiping is used instead on mobile */
      }
      #carousel-section {
        padding: 2em 0;
      }
      .carousel-container {
        width: 90% !important;
        max-width: 100%;
      }
      .carousel-slide {
        width: 100% !important;
        margin-bottom: 2em;
      }
      .carousel-content {
        flex-direction: column;
        width: 90% !important;
        gap: 1em;
        padding: 1em 0;
      }
    }
  
    /* Hide slides by default */
    .hidden-slide {
      display: none;
    }
</style>
  
<section id="carousel-section">
    <div
      class="carousel-container"
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    >
      <!-- Slide 1 -->
      <div
        class="carousel-slide {currentSlide === 0 ? '' : 'hidden-slide'}"
        data-index="0"
      >
        <button class="arrow left-arrow" on:click={prevSlide}>
          <img src="svelte/assets/visuals/icons/left-arrow-icon.svg" alt="prev" />
        </button>
        <div class="carousel-content">
          <div class="carousel-image">
            <img
              src="svelte/assets/visuals/general/process-step1-signup.png"
              alt="Slide 1"
            />
          </div>
          <div class="carousel-text">
            <h5>Verkopen via MoveRoof</h5>
            <h4 class="secondary">Woning aanmelden</h4>
            <p>
              Na het selecteren en aanvragen van een pakket nemen wij de woning op
              voor een pagina op MoveRoof.com en een advertentie op Funda. We
              zullen je ook wijzen op onze informatiebronnen waar je allerlei
              praktische informatie kan vinden.
            </p>
            <p class="detail">
              Pssst... die info is geen geheimpje, maar kan je gewoon
              <u><a href="/svelte/verkoop-begeleiding.html">hier</a></u> vinden.
            </p>
            <div class="dots-container">
              <div
                class="dot {currentSlide === 0 ? 'active' : ''}"
                on:click={() => goToDot(0)}
              ></div>
              <div
                class="dot {currentSlide === 1 ? 'active' : ''}"
                on:click={() => goToDot(1)}
              ></div>
              <div
                class="dot {currentSlide === 2 ? 'active' : ''}"
                on:click={() => goToDot(2)}
              ></div>
              <div
                class="dot {currentSlide === 3 ? 'active' : ''}"
                on:click={() => goToDot(3)}
              ></div>
              <div
                class="dot {currentSlide === 4 ? 'active' : ''}"
                on:click={() => goToDot(4)}
              ></div>
            </div>
          </div>
        </div>
        <button class="arrow right-arrow" on:click={nextSlide}>
          <img src="svelte/assets/visuals/icons/right-arrow-icon.svg" alt="next" />
        </button>
      </div>
  
      <!-- Slide 2 -->
      <div
        class="carousel-slide {currentSlide === 1 ? '' : 'hidden-slide'}"
        data-index="1"
      >
        <button class="arrow left-arrow" on:click={prevSlide}>
          <img src="svelte/assets/visuals/icons/left-arrow-icon.svg" alt="prev" />
        </button>
        <div class="carousel-content">
          <div class="carousel-image">
            <img
              src="svelte/assets/visuals/general/process-step2-online.png"
              alt="Slide 2"
            />
          </div>
          <div class="carousel-text">
            <h5>Verkopen via MoveRoof</h5>
            <h4 class="secondary">Jouw woning online</h4>
            <p>
              Wij zorgen dat jouw woning binnen 1 dag op onze website staat en zo
              snel mogelijk op Funda te zien is, hier zit aan de kant van Funda
              een vertraging van 3 werkdagen. Let hierbij op de 2 verschillende
              advertenties waarbij Premium advertenties vaak meer opvallen.
            </p>
            <div class="dots-container">
              <div
                class="dot {currentSlide === 0 ? 'active' : ''}"
                on:click={() => goToDot(0)}
              ></div>
              <div
                class="dot {currentSlide === 1 ? 'active' : ''}"
                on:click={() => goToDot(1)}
              ></div>
              <div
                class="dot {currentSlide === 2 ? 'active' : ''}"
                on:click={() => goToDot(2)}
              ></div>
              <div
                class="dot {currentSlide === 3 ? 'active' : ''}"
                on:click={() => goToDot(3)}
              ></div>
              <div
                class="dot {currentSlide === 4 ? 'active' : ''}"
                on:click={() => goToDot(4)}
              ></div>
            </div>
          </div>
        </div>
        <button class="arrow right-arrow" on:click={nextSlide}>
          <img src="svelte/assets/visuals/icons/right-arrow-icon.svg" alt="next" />
        </button>
      </div>
  
      <!-- Slide 3 -->
      <div
        class="carousel-slide {currentSlide === 2 ? '' : 'hidden-slide'}"
        data-index="2"
      >
        <button class="arrow left-arrow" on:click={prevSlide}>
          <img src="svelte/assets/visuals/icons/left-arrow-icon.svg" alt="prev" />
        </button>
        <div class="carousel-content">
          <div class="carousel-image">
            <img
              src="svelte/assets/visuals/general/process-step3-tours.png"
              alt="Slide 3"
            />
          </div>
          <div class="carousel-text">
            <h5>Verkopen via MoveRoof</h5>
            <h4 class="secondary">Bezichtigingen</h4>
            <p>
              Zodra er aanvragen via onze website of Funda binnenkomen, komen
              deze ook direct bij jou binnen. Ondanks dat we begeleidende
              artikelen hebben kunnen wij je altijd helpen als je vastloopt in
              contact met een potentiële koper. Ook voor bezichtigingen geven
              hebben wij veel tips indien nodig.
            </p>
            <div class="dots-container">
              <div
                class="dot {currentSlide === 0 ? 'active' : ''}"
                on:click={() => goToDot(0)}
              ></div>
              <div
                class="dot {currentSlide === 1 ? 'active' : ''}"
                on:click={() => goToDot(1)}
              ></div>
              <div
                class="dot {currentSlide === 2 ? 'active' : ''}"
                on:click={() => goToDot(2)}
              ></div>
              <div
                class="dot {currentSlide === 3 ? 'active' : ''}"
                on:click={() => goToDot(3)}
              ></div>
              <div
                class="dot {currentSlide === 4 ? 'active' : ''}"
                on:click={() => goToDot(4)}
              ></div>
            </div>
          </div>
        </div>
        <button class="arrow right-arrow" on:click={nextSlide}>
          <img src="svelte/assets/visuals/icons/right-arrow-icon.svg" alt="next" />
        </button>
      </div>
  
      <!-- Slide 4 -->
      <div
        class="carousel-slide {currentSlide === 3 ? '' : 'hidden-slide'}"
        data-index="3"
      >
        <button class="arrow left-arrow" on:click={prevSlide}>
          <img src="svelte/assets/visuals/icons/left-arrow-icon.svg" alt="prev" />
        </button>
        <div class="carousel-content">
          <div class="carousel-image">
            <img
              src="svelte/assets/visuals/general/process-step4-negotiate.png"
              alt="Slide 4"
            />
          </div>
          <div class="carousel-text">
            <h5>Verkopen via MoveRoof</h5>
            <h4 class="secondary">Onderhandelen &amp; -tekenen</h4>
            <p>
              Naast onze onderhandel tips en overeenkomst templates staan wij
              altijd voor je klaar om te assisteren waar nodig bij deze 2
              belangrijke onderdelen van het proces.
            </p>
            <div class="dots-container">
              <div
                class="dot {currentSlide === 0 ? 'active' : ''}"
                on:click={() => goToDot(0)}
              ></div>
              <div
                class="dot {currentSlide === 1 ? 'active' : ''}"
                on:click={() => goToDot(1)}
              ></div>
              <div
                class="dot {currentSlide === 2 ? 'active' : ''}"
                on:click={() => goToDot(2)}
              ></div>
              <div
                class="dot {currentSlide === 3 ? 'active' : ''}"
                on:click={() => goToDot(3)}
              ></div>
              <div
                class="dot {currentSlide === 4 ? 'active' : ''}"
                on:click={() => goToDot(4)}
              ></div>
            </div>
          </div>
        </div>
        <button class="arrow right-arrow" on:click={nextSlide}>
          <img src="svelte/assets/visuals/icons/right-arrow-icon.svg" alt="next" />
        </button>
      </div>
  
      <!-- Slide 5 -->
      <div
        class="carousel-slide {currentSlide === 4 ? '' : 'hidden-slide'}"
        data-index="4"
      >
        <button class="arrow left-arrow" on:click={prevSlide}>
          <img src="svelte/assets/visuals/icons/left-arrow-icon.svg" alt="prev" />
        </button>
        <div class="carousel-content">
          <div class="carousel-image">
            <img
              src="svelte/assets/visuals/general/process-step5-celebrate.png"
              alt="Slide 5"
            />
          </div>
          <div class="carousel-text">
            <h5>Verkopen via MoveRoof</h5>
            <h4 class="secondary">Feestje vieren</h4>
            <p>
              Als de handtekening eronder staat en de financieringsperiode is
              voorbij is het tijd voor een klein vreugde dansje. De verkoop is
              rond en dat heb je toch even helemaal zelf gedaan!
            </p>
            <p>Oprecht, super tof!</p>
            <div class="dots-container">
              <div
                class="dot {currentSlide === 0 ? 'active' : ''}"
                on:click={() => goToDot(0)}
              ></div>
              <div
                class="dot {currentSlide === 1 ? 'active' : ''}"
                on:click={() => goToDot(1)}
              ></div>
              <div
                class="dot {currentSlide === 2 ? 'active' : ''}"
                on:click={() => goToDot(2)}
              ></div>
              <div
                class="dot {currentSlide === 3 ? 'active' : ''}"
                on:click={() => goToDot(3)}
              ></div>
              <div
                class="dot {currentSlide === 4 ? 'active' : ''}"
                on:click={() => goToDot(4)}
              ></div>
            </div>
          </div>
        </div>
        <button class="arrow right-arrow" on:click={nextSlide}>
          <img src="svelte/assets/visuals/icons/right-arrow-icon.svg" alt="next" />
        </button>
      </div>
    </div>
</section>  