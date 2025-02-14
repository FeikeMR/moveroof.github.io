<script>
  import SecondaryButton from '$lib/components/global/SecondaryButton.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  // MOBILE carousel state
  let currentIndex = 0; // active slide index (0 = Starter, 1 = Premium, 2 = All-In)
  const totalSlides = 3;

  // References for mobile slider measurements
  let packageCards = [];
  let cardWidth = 0;
  let gapSize = 16; // default gap; will try to read from CSS
  let sliderWidth = 0;
  let isDragging = false;
  let startPos = 0;

  // Svelte refs
  let slider;       // reference to the mobile slider element
  let dotsContainer; // reference to the dots container

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
    packageCards = Array.from(slider.querySelectorAll('.pkg-mobile'));

    if (packageCards.length) {
      const firstRect = packageCards[0].getBoundingClientRect();
      cardWidth = firstRect.width;
      // Attempt to read gap from CSS
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
    slider.style.scrollSnapType = 'x proximity';
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
    updateDots(index);
    slider.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
  }

  function updateDots(newIndex) {
    if (!dotsContainer) return;
    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
    dots.forEach((d, i) => {
      d.classList.remove('dot-active');
      if (i === newIndex) {
        d.classList.add('dot-active');
      }
    });
  }

  // Fired when a package button is clicked
  function choosePackage(packageName) {
    dispatch('choosePackage', { packageName });
  }
</script>

<style>
  /* Desktop Packages */
  .desktop {
    padding: 0 0 2em;
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    margin-top: 4em;
  }
  .package {
    position: relative;
    background: #fff;
    border-radius: 12px;
    padding: 2em;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border: 1px solid #eee;
  }
  .services {
    display: flex;
    flex-direction: row;
    gap: 15px;
    border: 1px solid #F86D11;
    background-color: rgba(248, 109, 17, 0.1);
    border-radius: 8px;
    padding: 0.5em;
    margin: 1em 0;
  }
  .services p {
    font-weight: 600;
    font-size: 16px;
  }
  .services img {
    width: 25px;
  }
  .premium {
    border: 2px solid #F86D11;
  }
  .most-chosen {
    position: absolute;
    top: -5px;
    left: -30px;
    background: #F86D11;
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    transform: rotate(-20deg);
    font-size: 0.9em;
    font-weight: 600;
  }
  .pkg-image {
    width: 120px;
    margin: -4em auto 1em;
    display: block;
  }
  .pkg-desc {
    color: #666;
    margin: 0.5em 0 0;
    min-height: 60px;
  }
  .pkg-price {
    margin: 1.5em 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
  }
  .pkg-price h4 {
    font-size: 2em;
    color: #F86D11;
    margin: 0;
  }
  .price-detail {
    color: #666;
    font-size: 0.9em;
    margin: 0.5em 0;
  }
  .pkg-content {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    align-items: flex-start;
    padding: 0 1em 1em;
    gap: 10px;
  }
  .pkg-row {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    text-align: left;
  }
  .pkg-row img {
    width: 20px;
  }
  .plus-row {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .plus-row img {
    width: 20px;
  }
  .compare-link {
    text-align: center;
    margin-top: 2em;
  }
  .compare-link a {
    color: #F86D11;
    text-decoration: underline;
  }
  .compare-link a:hover {
    color: #FF8243;
    font-weight: 600;
  }

  /* Mobile Packages */
  .mobile {
    padding: 0 1em;
    text-align: center;
  }
  .mobile-slider {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-snap-type: x proximity;
    padding: 2.5em 0 1em;
    margin-top: 0.5em;
    gap: 1em;
  }
  .mobile-slider::-webkit-scrollbar {
    display: none;
  }
  .pkg-mobile {
    flex: 0 0 85%;
    scroll-snap-align: center;
    overflow: visible !important;
    background: #fff;
    border-radius: 12px;
    padding: 1.5em;
    position: relative;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .pkg-mobile.premium {
    border: 2px solid #F86D11;
  }
  .pkg-mobile .pkg-image {
    width: 120px;
    margin: -4em auto 1em;
    display: block;
  }
  .pkg-desc {
    font-size: 0.95em;
  }
  .mobile-dots {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    margin: 1em 0;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
  }
  .dot-active {
    background: #F86D11;
  }

  /* Visibility helpers */
  .only-desktop {
    display: block;
  }
  .only-mobile {
    display: none !important;
  }
  @media (max-width: 768px) {
    .desktop {
      display: none !important;
    }
    .mobile {
      display: block !important;
      width: 100%;
      overflow: hidden;
    }
  }
</style>

<!-- Desktop Packages -->
<section class="desktop only-desktop">
  <h2>Kies jouw deal</h2>
  <div class="container">
    <!-- Starter Package -->
    <div class="package">
      <img class="pkg-image" src="/visuals/general/packagevis-starter.svg" alt="Starter">
      <h3 class="secondary">Starter</h3>
      <p class="pkg-desc">Doorstart pakket voor bestaande verkopers.</p>
      <div class="pkg-price">
        <h4>€395,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Funda advertentie</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Template officiële docs</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Onderhandel begeleiding</p>
        </div>
        <div class="plus-row">
          <img src="/visuals/icons/plus-icon.svg" alt="Plus">
          <p>Plus nog veel meer!</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('Starter')}>
        Kies deze deal
      </SecondaryButton>
    </div>

    <!-- Premium Package -->
    <div class="package premium">
      <div class="most-chosen">Meest gekozen</div>
      <img class="pkg-image" src="/visuals/general/packagevis-premium.svg" alt="Premium">
      <h3 class="secondary">Premium</h3>
      <p class="pkg-desc">Bespaar duizenden euro's & behoudt de zelfstandigheid.</p>
      <div class="pkg-price">
        <h4>€850,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="services">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Starter</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Advies verkoopprijs</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>NEN2580 meetrapport</p>
        </div>
        <div class="plus-row">
          <img src="/visuals/icons/plus-icon.svg" alt="Plus">
          <p>Plus nog veel meer!</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('Premium')}>
        Kies deze deal
      </SecondaryButton>
    </div>

    <!-- All-In Package -->
    <div class="package">
      <img class="pkg-image" src="/visuals/general/packagevis-allin.svg" alt="All-In">
      <h3 class="secondary">All-In</h3>
      <p class="pkg-desc">Forse besparing & ontzorging van alle formaliteiten.</p>
      <div class="pkg-price">
        <h4>€1.050,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="services">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Premium</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Video plaatsing Funda</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Jouw overeenkomst opstellen</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('All-In')}>
        Kies deze deal
      </SecondaryButton>
    </div>
  </div>
  <p class="compare-link">
    <a href="/zelf-verkopen">Alle pakketten vergelijken</a>
  </p>
</section>

<!-- Mobile Packages -->
<section class="mobile only-mobile">
  <h2>Kies jouw deal</h2>
  <div
    class="mobile-slider"
    bind:this={slider}
    on:touchstart={onTouchStart}
    on:touchmove={onTouchMove}
    on:touchend={onTouchEnd}
    on:scroll={onScroll}
  >
    <!-- Starter Package -->
    <div class="pkg-mobile" data-package-index="0">
      <img class="pkg-image" src="/visuals/general/packagevis-starter.svg" alt="Starter">
      <h3>Starter</h3>
      <p class="pkg-desc">Doorstart pakket voor bestaande verkopers.</p>
      <div class="pkg-price">
        <h4>€395,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Funda advertentie</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Template officiële docs</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Onderhandel begeleiding</p>
        </div>
        <div class="plus-row">
          <img src="/visuals/icons/plus-icon.svg" alt="Plus">
          <p>Plus nog veel meer!</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('Starter')}>
        Kies deze deal
      </SecondaryButton>
    </div>

    <!-- Premium Package -->
    <div class="pkg-mobile premium" data-package-index="1">
      <div class="most-chosen">Meest gekozen</div>
      <img class="pkg-image" src="/visuals/general/packagevis-premium.svg" alt="Premium">
      <h3>Premium</h3>
      <p class="pkg-desc">Bespaar duizenden euro's & behoudt de zelfstandigheid.</p>
      <div class="pkg-price">
        <h4>€850,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="services">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Starter</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Advies verkoopprijs</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>NEN2580 meetrapport</p>
        </div>
        <div class="plus-row">
          <img src="/visuals/icons/plus-icon.svg" alt="Plus">
          <p>Plus nog veel meer!</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('Premium')}>
        Kies deze deal
      </SecondaryButton>
    </div>

    <!-- All-In Package -->
    <div class="pkg-mobile" data-package-index="2">
      <img class="pkg-image" src="/visuals/general/packagevis-allin.svg" alt="All-In">
      <h3>All-In</h3>
      <p class="pkg-desc">Forse besparing & ontzorging van alle formaliteiten.</p>
      <div class="pkg-price">
        <h4>€1.050,-</h4>
        <p class="price-detail">Eenmalig</p>
      </div>
      <div class="services">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Premium</p>
      </div>
      <div class="pkg-content">
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Video plaatsing Funda</p>
        </div>
        <div class="pkg-row">
          <img src="/visuals/icons/check-icon.svg" alt="check">
          <p>Jouw overeenkomst opstellen</p>
        </div>
      </div>
      <SecondaryButton on:click={() => choosePackage('All-In')}>
        Kies deze deal
      </SecondaryButton>
    </div>
  </div>
  <div class="mobile-dots" bind:this={dotsContainer}>
    <div class="dot dot-active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <p class="compare-link">
    <a href="/zelf-verkopen">Alle pakketten vergelijken</a>
  </p>
</section>
