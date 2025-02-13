<script>
  import SecondaryButton from '$lib/components/Global-use/SecondaryButton.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  // MOBILE slider state
  let currentIndex = 0; // which package is being viewed (0=Starter, 1=Premium, 2=All-In)
  const totalSlides = 3;
  let slider;
  let dotsContainer;
  let cardWidth = 0;
  let gapSize = 16;
  let packageCards = [];
  let isDragging = false;
  let startPos = 0;

  function choosePackage(packageName) {
    dispatch('choosePackage', { packageName });
  }

  onMount(() => {
    measureCardAndGap();
    window.addEventListener('resize', measureCardAndGap);

    updateDots(0); // init first dot
    return () => {
      window.removeEventListener('resize', measureCardAndGap);
    };
  });

  function measureCardAndGap() {
    if (!slider) return;
    // Use the new class name for mobile packages:
    packageCards = Array.from(slider.querySelectorAll('.pkg-mobile'));
    if (packageCards.length) {
      const rect = packageCards[0].getBoundingClientRect();
      cardWidth = rect.width;
      const sliderStyles = window.getComputedStyle(slider);
      const rawGap = sliderStyles.getPropertyValue('gap');
      if (rawGap) gapSize = parseFloat(rawGap);
      cardWidth += gapSize;
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
  if (isDragging) return; // don’t trigger snapping mid-drag
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

    // Show/hide the relevant mobile package services.
    // Note: We use the new class .pkg-services in place of .services-for-package.
    const services = Array.from(document.querySelectorAll('.pkg-services'));
    services.forEach((s, idx) => {
      s.style.display = idx === newIndex ? 'block' : 'none';
    });
  }
</script>

<style>
  /* ── Desktop Packages & Services ── */
  .pkg-services-desktop {
    margin: 10vh auto 2em;
    width: 80%;
  }
  .pkg-services-desktop h2 {
    text-align: center;
    padding: 1em 0;
  }
  /* Package Headers Row */
  .pkg-headers {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 0.5em;
    align-items: stretch;
  }
  /* Each Package */
  .pkg {
    position: relative;
    width: 20%;
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-top: 6px solid #D35D0E;
    border-radius: 10px 10px 0 0;
    min-height: fit-content;
    padding: 1em;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  .pkg h2 {
    font-size: 1.5em;
    margin-bottom: -0.5em;
  }
  .pkg-desc {
    min-height: 3em;
    font-size: 16px;
    color: #787878;
  }
  .pkg-price {
    display: flex;
    flex-direction: row;
    min-height: 4.3em;
    width: 80%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .pkg .price {
    font-size: 1.5em;
    font-weight: 600;
    color: #F86D11;
  }
  .pkg-img {
    display: block;
    width: 100px;
  }
  .highlight {
    position: absolute;
    top: -12px;
    left: 15px;
    background: #F86D11;
    color: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 2;
  }

  /* Services Table */
  .services {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .service {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 0.5em 0;
  }
  .service-name {
    flex: 2;
    font-size: 18px;
    font-weight: bold;
    padding-left: 0.5em;
  }
  .service-icon {
    flex: 1;
    text-align: center;
  }
  .service-icon img {
    width: 24px;
    height: 24px;
  }
  .service.header-row {
    border-bottom: 2px solid #333;
    font-weight: bold;
  }
  .service.header-row .service-header {
    flex: 1;
    text-align: left;
    font-weight: 800;
    font-size: 1.5em;
    color: #F86D11;
  }
  .services-note {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    margin-top: 15px;
    gap: 5px;
  }

  #combined-packages-services-mobile {
    padding: 11vh 1em 0;
    gap: 1em
  }

  /* ── Mobile Packages & Services ── */
  /* Mobile Slider Dots */
  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 1em;
  }
  .slider-dots .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .slider-dots .dot.active {
    background-color: #F86D11;
    transform: scale(1.1);
  }

  /* Mobile slider */
  .mobile-slider {
    display: flex;
    gap: 1em; /* measured in JS */
    padding: 0.5em 1em 0.25em;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .mobile-slider::-webkit-scrollbar {
    display: none;
  }
  /* Each Mobile Package */
  .pkg-mobile {
    flex: 0 0 85%;
    background: #fff;
    border-radius: 12px;
    border-top: 6px solid #D35D0E;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 1em;
    margin-bottom: 0.5em;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    box-sizing: border-box;
    position: relative;
  }
  .pkg-mobile.premium {
    background-color: rgba(248,109,17,0.1);
  }
  .pkg-mobile h3 {
    font-size: 1.4em;
    margin: 0.5em 0;
  }
  /* Mobile package description & pricing */
  .pkg-desc {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 1em;
  }
  .pkg-price {
    margin-top: -0.7em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .pkg-img {
    width: 100px;
    height: auto;
    display: block;
  }
  .price {
    font-size: 1.75em;
    font-weight: 700;
    color: #F86D11;
  }
  /* Mobile Services container */
  .mobile-services {
    padding: 0 1.5em;
    margin-top: 0.25em;
  }
  /* Package Services for Mobile */
  .pkg-services {
    display: none;
    animation: fadeIn 0.3s ease;
  }
  .pkg-services.active {
    display: block;
  }
  .pkg-services ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .pkg-services li {
    display: flex;
    align-items: center;
    gap: 0.75em;
    padding: 0.75em 0;
    border-bottom: 1px solid #eee;
    font-size: 0.95em;
  }
  .pkg-services li img {
    width: 20px;
    height: 20px;
  }

  .services-base {
    display: flex;
    flex-direction: row;
    gap: 15px;
    border: 1px solid #F86D11;
    background-color: rgba(248,109,17,0.1);
    border-radius: 8px;
    padding: 0.5em;
    margin: 1em 0;
}

.services-base p {
    font-weight: 600;
    font-size: 16px;
}

.services-base img {
    width: 25px;
}

  .services-note {
    width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── Responsive Helpers ── */
  .only-desktop {
    display: block;
  }
  .only-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    .only-desktop {
      display: none !important;
    }
    .only-mobile {
      display: block !important;
      width: 100%;
      overflow: hidden;
    }
  }
</style>

<!-- ── Desktop Packages & Services ── -->
<section class="pkg-services-desktop only-desktop">
  <h2>Een passend pakket voor elke situatie</h2>
  <!-- Package Headers Row -->
  <div class="pkg-headers">
    <!-- Starter -->
    <div class="pkg" id="Starter">
      <h2>Starter</h2>
      <p class="pkg-desc">Doorstart pakket voor bestaande verkopers.</p>
      <div class="pkg-price">
        <p class="price">€395,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-starter.svg" alt="Starter" />
      </div>
      <SecondaryButton on:click={() => choosePackage('Starter')}>
        Kies deze deal
      </SecondaryButton>
    </div>
    <!-- Premium -->
    <div class="pkg" id="Premium">
      <div class="highlight">Meest gekozen</div>
      <h2>Premium</h2>
      <p class="pkg-desc">Bespaar duizenden euro's & behoudt de zelfstandigheid.</p>
      <div class="pkg-price">
        <p class="price">€850,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-premium.svg" alt="Premium" />
      </div>
      <SecondaryButton on:click={() => choosePackage('Premium')}>
        Kies deze deal
      </SecondaryButton>
    </div>
    <!-- All-In -->
    <div class="pkg" id="All-In">
      <h2>All-In</h2>
      <p class="pkg-desc">Forse besparing & ontzorging van alle formaliteiten.</p>
      <div class="pkg-price">
        <p class="price">€1.050,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-allin.svg" alt="All-In" />
      </div>
      <SecondaryButton on:click={() => choosePackage('All-In')}>
        Kies deze deal
      </SecondaryButton>
    </div>
  </div>

  <!-- Desktop Services Table Row -->
  <div class="services">
    <div class="service header-row">
      <div class="service-header">Wat zit er in het pakket?</div>
    </div>
    <div class="service">
      <div class="service-name">Verkooptips &amp; -informatie</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Templates officiële documenten</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Funda advertentie met foto's</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Advertentietekst kosteloos aanpassen</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Open huis vermelding op Funda</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Funda statistieken</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Onderhandel begeleiding</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Verkoopovereenkomst templates &amp; begeleiding</div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Advies verkoopprijs</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Wij schrijven de advertentietekst</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="non-check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">NEN2580 meetrapport</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Professionele plattegrond</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Video plaatsing op Funda</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="service">
      <div class="service-name">Wij stellen de verkoopovereenkomst op</div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/non-check-icon.svg" alt="check"></div>
      <div class="service-icon"><img src="/visuals/icons/check-icon.svg" alt="check"></div>
    </div>
    <div class="services-note">
      <h4 class="secondary">Services notitie</h4>
      <p>
        Bij internetmakelaars staan services vaak dubbel vermeld (om het pakket groter te laten lijken) en betaal je voor Kadastrale gegevens of voor het doorsturen van berichten terwijl deze 2 'services' gratis zijn.
      </p>
      <p>
        MoveRoof is zonder trucjes. Bovenstaand zijn enkel zinvolle services die niet standaard gratis zijn.
      </p>
    </div>
  </div>
</section>

<!-- ── Mobile Packages & Services ── -->
<section id="combined-packages-services-mobile" class="only-mobile">
  <h2>Een passend pakket voor elke situatie</h2>
  <!-- 1) Horizontal packages -->
  <div
    class="mobile-slider"
    id="packages-mobile-slider"
    bind:this={slider}
    on:touchstart={onTouchStart}
    on:touchmove={onTouchMove}
    on:touchend={onTouchEnd}
    on:scroll={onScroll}
  >
    <!-- Starter -->
    <div class="pkg-mobile" data-package-index="0">
      <h3>Starter</h3>
      <p class="pkg-desc">Doorstart pakket voor bestaande verkopers.</p>
      <div class="pkg-price">
        <p class="price">€395,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-starter.svg" alt="Starter" />
      </div>
      <SecondaryButton on:click={() => choosePackage('Starter')}>
        Kies deze deal
      </SecondaryButton>
    </div>
    <!-- Premium -->
    <div class="pkg-mobile premium" data-package-index="1">
      <div class="highlight">Meest gekozen</div>
      <h3>Premium</h3>
      <p class="pkg-desc">Bespaar duizenden euro's &amp; behoudt de zelfstandigheid.</p>
      <div class="pkg-price">
        <p class="price">€850,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-premium.svg" alt="Premium" />
      </div>
      <SecondaryButton on:click={() => choosePackage('Premium')}>
        Kies deze deal
      </SecondaryButton>
    </div>
    <!-- All-In -->
    <div class="pkg-mobile" data-package-index="2">
      <h3>All-In</h3>
      <p class="pkg-desc">Forse besparing &amp; ontzorging van alle formaliteiten.</p>
      <div class="pkg-price">
        <p class="price">€1.050,-</p>
        <img class="pkg-img" src="/visuals/general/packagevis-allin.svg" alt="All-In" />
      </div>
      <SecondaryButton on:click={() => choosePackage('All-In')}>
        Kies deze deal
      </SecondaryButton>
    </div>
  </div>

  <!-- 2) Package dots -->
  <div class="slider-dots" id="mobile-package-dots" bind:this={dotsContainer}>
    <div class="dot active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>

  <!-- 3) Package services -->
  <div class="mobile-services">
    <!-- Starter Services -->
    <div class="pkg-services" data-package-services="0" style="display: block;">
      <ul>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Verkooptips &amp; -informatie</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Templates officiële documenten</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Funda advertentie met foto's</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Advertentietekst kosteloos aanpassen</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Open huis vermelding op Funda</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Funda statistieken</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Onderhandel begeleiding</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Verkoopovereenkomst templates &amp; begeleiding</li>
      </ul>
    </div>
    <!-- Premium Services -->
    <div class="pkg-services" data-package-services="1" style="display: none;">
      <div class="services-base">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Starter</p>
      </div>
      <ul>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Advies verkoopprijs</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Wij schrijven de advertentietekst</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> NEN2580 meetrapport</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Professionele plattegrond</li>
      </ul>
    </div>
    <!-- All-In Services -->
    <div class="pkg-services" data-package-services="2" style="display: none;">
      <div class="services-base">
        <img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary">
        <p>Alles van Premium</p>
      </div>
      <ul>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Video plaatsing op Funda</li>
        <li><img src="/visuals/icons/check-icon.svg" alt="check"> Wij stellen de verkoopovereenkomst op</li>
      </ul>
    </div>
    <div class="services-note">
      <h4 class="secondary">Services notitie</h4>
      <p>
        Bij internetmakelaars staan services vaak dubbel vermeld (om het pakket groter te laten lijken) en betaal je voor Kadastrale gegevens of voor het doorsturen van berichten terwijl deze 2 'services' gratis zijn.
      </p>
      <p>
        MoveRoof is zonder trucjes. Bovenstaand zijn zinvolle services die niet standaard gratis zijn.
      </p>
    </div>
  </div>
</section>