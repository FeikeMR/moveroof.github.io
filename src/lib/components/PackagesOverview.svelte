<script>
    import { createEventDispatcher, onMount } from 'svelte';
  
    // We'll dispatch an event "choosePackage" when user clicks "Kies dit pakket"
    const dispatch = createEventDispatcher();
  
    // MOBILE carousel state
    let currentIndex = 0; // the active slide index (0 = Starter, 1 = Premium, 2 = All-In)
    const totalSlides = 3;
  
    // We'll store references to the .home-package-mobile elements so we can measure their width
    let packageCards = [];
    let cardWidth = 0;
    let gapSize = 16; // default gap, can be read from CSS
    let sliderWidth = 0;
    let isDragging = false;
    let startPos = 0;
  
    // Refs in Svelte
    let slider;       // <div id="home-packages-mobile-slider">
    let dotsContainer; // <div id="home-mobile-package-dots">
  
    onMount(() => {
      measureCardAndGap();
      window.addEventListener('resize', measureCardAndGap);
  
      // Initialize first dot as active
      updateDots(0);
      return () => {
        window.removeEventListener('resize', measureCardAndGap);
      };
    });
  
    function measureCardAndGap() {
      if (!slider) return;
      sliderWidth = slider.offsetWidth;
      packageCards = Array.from(slider.querySelectorAll('.home-package-mobile'));
  
      if (packageCards.length) {
        const firstRect = packageCards[0].getBoundingClientRect();
        cardWidth = firstRect.width;
        // attempt to read gap from CSS
        const sliderStyles = window.getComputedStyle(slider);
        const rawGap = sliderStyles.getPropertyValue('gap');
        if (rawGap) {
          gapSize = parseFloat(rawGap);
        }
        cardWidth = cardWidth + gapSize;
      }
    }
  
    function onTouchStart(e) {
      isDragging = true;
      startPos = e.touches[0].clientX;
      slider.style.scrollSnapType = 'none';
    }
  
    function onTouchMove(e) {
      if (!isDragging) return;
      const currentPosition = e.touches[0].clientX;
      const diff = currentPosition - startPos;
      slider.scrollLeft -= diff;
      startPos = currentPosition;
    }
  
    function onTouchEnd() {
      isDragging = false;
      slider.style.scrollSnapType = 'x mandatory';
      let newIndex = Math.round(slider.scrollLeft / cardWidth);
      goToSlide(newIndex);
    }
  
    function onScroll() {
      const newIndex = Math.round(slider.scrollLeft / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
        goToSlide(newIndex);
      }
    }
  
    function goToSlide(index) {
      if (index < 0) index = 0;
      if (index >= totalSlides) index = totalSlides - 1;
      currentIndex = index;
      // visually update dots
      updateDots(index);
      // smoothly scroll
      slider.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  
    function updateDots(newIndex) {
      // update dot classes
      if (!dotsContainer) return;
      const dots = Array.from(dotsContainer.querySelectorAll('.home-dot'));
      dots.forEach((d, i) => {
        d.classList.remove('home-dot-active');
        if (i === newIndex) {
          d.classList.add('home-dot-active');
        }
      });
    }
  
    // Fired when user clicks a package button
    function choosePackage(packageName) {
      dispatch('choosePackage', { packageName });
    }
</script>
  
<style>
    /* Home Page Desktop Styles */
    #home-packages-desktop {
      padding: 0em 0em 2em 0em;
      width: 70%;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
  
    .home-packages-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      margin-top: 4em;
    }
  
    .home-package {
      position: relative;
      background: #fff;
      border-radius: 12px;
      padding: 2em;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      border: 1px solid #eee;
    }
  
    .package-services-base {
      display: flex;
      flex-direction: row;
      gap: 15px;
      border: 1px solid #F86D11;
      background-color: rgba(248,109,17,0.1);
      border-radius: 8px;
      padding: 0.5em;
      margin: 1em 0;
    }
    .package-services-base p {
      font-weight: 600;
      font-size: 16px;
    }
    .package-services-base img {
      width: 25px;
    }
  
    .home-package.pemium {
      border: 2px solid #F86D11;
    }
    .home-most-chosen-tag {
      position: absolute;
      top: -5px;
      left: -30px;
      background: #F86D11;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      transform: rotate(-20deg);
      font-size: 0.9em;
      font-weight: 600;
    }
  
    .home-package-image {
      width: 120px;
      margin: -4em auto 1em;
      display: block;
    }
  
    .home-package-description {
      color: #666;
      margin: 0.5em 0 0 0;
      min-height: 60px;
    }
  
    .home-package-price {
      margin: 1.5em 0;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
      gap: 10px;
      margin: 0 auto;
    }
    .home-package-price h4 {
      font-size: 2em;
      align-items: center;
      color: #F86D11;
      margin: 0;
    }
    .home-price-detail {
      color: #666;
      font-size: 0.9em;
      margin: 0.5em 0;
    }
  
    .home-package-content {
      display: flex;
      flex-direction: column;
      margin-top: 1em;
      align-items: flex-start;
      padding: 0em 1em 1em 1em;
      gap: 10px;
    }
    .home-package-service-row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      text-align: left;
    }
    .home-package-service-row img {
      width: 20px;
    }
    .plus-row img {
      width: 20px;
    }
    .plus-row {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
  
    .home-cta-button {
      background: #F86D11;
      color: white;
      width: 70%;
      padding: 1em 0.5em;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
    }
    .home-cta-button:hover {
      background: #FF8243;
    }
  
    .home-compare-link {
      text-align: center;
      margin-top: 2em;
    }
    .home-compare-link a {
      color: #F86D11;
      text-decoration: underline;
    }
    .home-compare-link a:hover {
      color: #FF8243;
      font-weight: 600;
    }
  
    /* Home Mobile Styles */
    #home-packages-mobile {
      padding: 0 1em;
      text-align: center;
    }
    .home-packages-mobile-slider {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-snap-type: x mandatory;
      padding: 2.5em 0 1em 0;
      margin-top: 0.5em;
      gap: 1em;
    }
    .home-packages-mobile-slider::-webkit-scrollbar {
      display: none;
    }
  
    .home-package-mobile {
      flex: 0 0 85%;
      overflow: visible !important;
      background: #fff;
      border-radius: 12px;
      padding: 1.5em;
      scroll-snap-align: start;
      position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .home-package-mobile.pemium {
      border: 2px solid #F86D11;
    }
  
    .home-package-mobile .home-package-image {
      width: 120px;
      margin: -4em auto 1em;
      display: block;
    }
  
    .home-package-description {
      font-size: 0.95em;
    }
  
    .home-mobile-cta {
      background: #F86D11;
      color: white;
      width: 100%;
      padding: 1em;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
    }
    .home-mobile-cta:hover {
      background: #ff8243;
    }
  
    .home-package-dots {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      margin: 1em 0;
    }
    .home-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ddd;
      cursor: pointer;
    }
    .home-dot-active {
      background: #F86D11;
    }

    .only-desktop {
    display: block;
    }
  
    @media (max-width: 768px) {
      #home-packages-desktop {
        display: none !important;
      }
      #home-packages-mobile {
        display: block !important;
        width: 100%;
        overflow: hidden;
      }
    }
</style>
  
  <!-- Desktop Packages -->
<section id="home-packages-desktop" class="only-desktop">
    <h2>Kies jouw deal</h2>
  
    <div class="home-packages-container">
      <!-- Starter -->
      <div class="home-package">
        <img class="home-package-image" src="/assets/visuals/general/packagevis-starter.svg" alt="Starter">
        <h3 class="secondary">Starter</h3>
        <p class="home-package-description">Doorstart pakket voor bestaande verkopers.</p>
        <div class="home-package-price">
          <h4>€395,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Funda advertentie</p>
          </div>
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Template officiële docs</p>
          </div>
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Onderhandel begeleiding</p>
          </div>
          <div class="plus-row">
            <img src="assets/visuals/icons/plus-icon.svg" alt="Plus">
            <p>Plus nog veel meer!</p>
          </div>
        </div>
        <button
          class="home-cta-button"
          on:click={() => choosePackage('Starter')}
        >
          Kies dit pakket
        </button>
      </div>
  
      <!-- Premium -->
      <div class="home-package premium">
        <div class="home-most-chosen-tag">Meest gekozen</div>
        <img class="home-package-image premium-img" src="/assets/visuals/general/packagevis-premium.svg" alt="Premium">
        <h3 class="secondary">Premium</h3>
        <p class="home-package-description">Bespaar duizenden euro's & behoudt de zelfstandigheid.</p>
        <div class="home-package-price">
          <h4>€850,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="package-services-base">
          <img src="assets/visuals/icons/check-icon-secondary.svg" alt="check secondary">
          <p>Alles van Starter</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Advies verkoopprijs</p>
          </div>
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>NEN2580 meetrapport</p>
          </div>
          <div class="plus-row">
            <img src="assets/visuals/icons/plus-icon.svg" alt="Plus">
            <p>Plus nog veel meer!</p>
          </div>
        </div>
        <button
          class="home-cta-button"
          on:click={() => choosePackage('Premium')}
        >
          Kies dit pakket
        </button>
      </div>
  
      <!-- All-In -->
      <div class="home-package">
        <img class="home-package-image" src="/assets/visuals/general/packagevis-allin.svg" alt="All-In">
        <h3 class="secondary">All-In</h3>
        <p class="home-package-description">Forse besparing & ontzorging van alle formaliteiten.</p>
        <div class="home-package-price">
          <h4>€1.050,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="package-services-base">
          <img src="assets/visuals/icons/check-icon-secondary.svg" alt="check secondary">
          <p>Alles van Premium</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Video plaatsing Funda</p>
          </div>
          <div class="home-package-service-row">
            <img src="assets/visuals/icons/check-icon.svg" alt="check">
            <p>Jouw overeenkomst opstellen</p>
          </div>
        </div>
        <button
          class="home-cta-button"
          on:click={() => choosePackage('All-In')}
        >
          Kies dit pakket
        </button>
      </div>
    </div>
  
    <p class="home-compare-link">
      <a href="public/zelf-verkopen.html">Alle pakketten vergelijken</a>
    </p>
  </section>
  
  <!-- Mobile Packages -->
  <section id="home-packages-mobile" class="only-mobile">
    <h2>Kies jouw deal</h2>
  
    <div
      class="home-packages-mobile-slider"
      id="home-packages-mobile-slider"
      bind:this={slider}
      on:touchstart={onTouchStart}
      on:touchmove={onTouchMove}
      on:touchend={onTouchEnd}
      on:scroll={onScroll}
    >
      <!-- Starter -->
      <div class="home-package-mobile" data-package-index="0">
        <img class="home-package-image" src="/assets/visuals/general/packagevis-starter.svg" alt="Starter">
        <h3>Starter</h3>
        <p class="home-package-description">Doorstart pakket voor bestaande verkopers.</p>
        <div class="home-package-price">
          <h4>€395,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Funda advertentie</p></div>
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Template officiële docs</p></div>
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Onderhandel begeleiding</p></div>
          <div class="plus-row">
            <img src="assets/visuals/icons/plus-icon.svg" alt="Plus">
            <p>Plus nog veel meer!</p>
          </div>
        </div>
        <button
          class="home-mobile-cta"
          on:click={() => choosePackage('Starter')}
        >
          Kies dit pakket
        </button>
      </div>
  
      <!-- Premium -->
      <div class="home-package-mobile premium" data-package-index="1">
        <div class="home-most-chosen-tag">Meest gekozen</div>
        <img class="home-package-image" src="/assets/visuals/general/packagevis-premium.svg" alt="Premium">
        <h3>Premium</h3>
        <p class="home-package-description">Bespaar duizenden euro's & behoudt de zelfstandigheid.</p>
        <div class="home-package-price">
          <h4>€850,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="package-services-base">
          <img src="assets/visuals/icons/check-icon-secondary.svg" alt="check secondary">
          <p>Alles van Starter</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Advies verkoopprijs</p></div>
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>NEN2580 meetrapport</p></div>
          <div class="plus-row">
            <img src="assets/visuals/icons/plus-icon.svg" alt="Plus">
            <p>Plus nog veel meer!</p>
          </div>
        </div>
        <button
          class="home-mobile-cta"
          on:click={() => choosePackage('Premium')}
        >
          Kies dit pakket
        </button>
      </div>
  
      <!-- All-In -->
      <div class="home-package-mobile" data-package-index="2">
        <img class="home-package-image" src="/assets/visuals/general/packagevis-allin.svg" alt="All-In">
        <h3>All-In</h3>
        <p class="home-package-description">Forse besparing & ontzorging van alle formaliteiten.</p>
        <div class="home-package-price">
          <h4>€1.050,-</h4>
          <p class="home-price-detail">Eenmalig</p>
        </div>
        <div class="package-services-base">
          <img src="assets/visuals/icons/check-icon-secondary.svg" alt="check secondary">
          <p>Alles van Premium</p>
        </div>
        <div class="home-package-content">
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Video plaatsing Funda</p></div>
          <div class="home-package-service-row"><img src="assets/visuals/icons/check-icon.svg" alt="check"><p>Jouw overeenkomst opstellen</p></div>
        </div>
        <button
          class="home-mobile-cta"
          on:click={() => choosePackage('All-In')}
        >
          Kies dit pakket
        </button>
      </div>
    </div>
  
    <div class="home-package-dots" id="home-mobile-package-dots" bind:this={dotsContainer}>
      <div class="home-dot home-dot-active"></div>
      <div class="home-dot"></div>
      <div class="home-dot"></div>
    </div>
  
    <p class="home-compare-link">
      <a href="public/zelf-verkopen.html">Alle pakketten vergelijken</a>
    </p>
</section>