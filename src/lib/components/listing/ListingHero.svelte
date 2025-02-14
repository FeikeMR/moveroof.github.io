<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { getImageUrl } from '$lib/getImageUrl.js';
  
  // Expects:
  //   listing: the supabase listing object
  //   heroImages: an array of image objects with { file_path, is_hero, hero_order, ... }
  export let listing;
  export let heroImages = [];
  
  let currentHeroIndex = 0;
  const dispatch = createEventDispatcher();
  
  onMount(() => {
    // Rotate hero images every 5 seconds
    const interval = setInterval(() => {
      if (heroImages.length > 1) {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
      }
    }, 5000);
  
    return () => {
      clearInterval(interval);
    };
  });
  
  function formatPrice(value) {
    if (value === undefined || value === null) return '';
    let num = Number(value).toLocaleString('nl-NL');
    return `€ ${num}`;
  }
  
  // Dispatch event to open the popup (the parent can catch this and call imagesPopup.open())
  function viewAllImages() {
    dispatch('openImagesPopup', { startIndex: currentHeroIndex });
  }
</script>
  
<section class="listing-hero">
  <!-- Slideshow images -->
  <div class="listing-hero-images">
    {#each heroImages as image, i}
      <img
        src={getImageUrl(image.file_path)}
        alt={"Hero image " + i}
        class={`hero-image ${i === currentHeroIndex ? 'active' : ''}`}
        on:click={viewAllImages} />
    {/each}
  </div>
  
  <div class="listing-hero-container">
    <!-- Left block: address & price -->
    <div class="listing-hero-details">
      <div class="listing-hero-address">
        <h4 class="secondary">{listing.city}</h4>
        <div class="listing-hero-city-price">
          <h2 id="listing-hero-street">
            {listing.street} {listing.street_number}
            {#if listing.street_number_suffix}
              {listing.street_number_suffix}
            {/if}
          </h2>
          <h2 id="listing-hero-price">
            {formatPrice(listing.asking_price)} k.k.
          </h2>
        </div>
      </div>
    </div>
  
    <!-- Middle block: data points (bedrooms, bathrooms, living space, energy) -->
    <div class="listing-hero-data">
      <div class="listing-hero-data-point">
        <h6>Slaapkamers</h6>
        <div class="listing-hero-data-point-row">
          <img src="/visuals/icons/bed-icon.svg" alt="bedroom icon" />
          <h5>{listing.bedroom_count}</h5>
        </div>
      </div>
      <div id="seperation-line-vert"></div>
      <div class="listing-hero-data-point">
        <h6>Badkamers</h6>
        <div class="listing-hero-data-point-row">
          <img src="/visuals/icons/bath-icon.svg" alt="bathroom icon" />
          <h5>{listing.bathroom_count}</h5>
        </div>
      </div>
      <div id="seperation-line-vert"></div>
      <div class="listing-hero-data-point">
        <h6>Woon Opp.</h6>
        <div class="listing-hero-data-point-row">
          <img src="/visuals/icons/floorplan-icon.svg" alt="floorplan icon" />
          <h5>{listing.living_space} m&sup2;</h5>
        </div>
      </div>
      <div id="seperation-line-vert"></div>
      <div class="listing-hero-data-point">
        <h6>Energielabel</h6>
        <div class="listing-hero-data-point-row">
          <img src="/visuals/icons/leaf-icon.svg" alt="leaf icon" />
          <h5>{listing.energy_label}</h5>
        </div>
      </div>
    </div>
  
    <!-- Scroll prompt -->
    <div class="scroll-prompt">
      <img src="/visuals/icons/mouse-icon.svg" alt="mouse icon">
      <p>SCROL VOOR MEER</p>
    </div>
  
    <!-- Button to view all images -->
    <div class="main-button" id="view-listing-images" on:click={viewAllImages}>
      <h6>Alle foto's ({heroImages.length})</h6>
    </div>
  </div>
</section>
  
<style>
  /* (Your existing CSS remains unchanged) */
  .listing-hero {
    margin-top: 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .listing-hero-images {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.8s ease-in;
    cursor: pointer;
  }
  .hero-image.active {
    opacity: 1;
    z-index: 2;
  }
  .listing-hero-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    z-index: 3;
    width: 100%;
    height: 13%;
  }
  .listing-hero-details,
  .listing-hero-data {
    background-color: #E6E5E1;
    width: 35%;
    border-top-right-radius: 20px;
  }
  .listing-hero-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    padding: 3% 0 3% 6%;
    height: 100%;
  }
  .listing-hero-address {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .listing-hero-address h4 {
    font-size: 22px;
    font-weight: 400;
  }
  #listing-hero-street {
    font-size: 34px;
    font-weight: 600;
  }
  #listing-hero-price {
    font-size: 26px;
    font-weight: 400;
  }
  .listing-hero-city-price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .listing-hero-data {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    height: 70%;
  }
  #seperation-line-vert {
    height: 70%;
    border: 0.5px solid #787878;
  }
  .listing-hero-data-point {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .listing-hero-data-point img {
    height: 20px;
  }
  .listing-hero-data-point h5 {
    font-size: 18px;
    font-weight: 600;
  }
  .listing-hero-data-point h6 {
    font-size: 18px;
  }
  .listing-hero-data-point-row {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }
  .scroll-prompt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-20%);
    padding-left: 3%;
  }
  .scroll-prompt img {
    width: 50px;
  }
  .scroll-prompt p {
    color: #F4F4F4;
    font-size: 14px;
    text-align: center;
  }
  .main-button {
    position: absolute;
    bottom: 15%;
    right: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E6E5E1;
    padding: 12px 24px;
    border-radius: 10px;
    cursor: pointer;
  }
  .main-button:hover {
    outline: 2px solid #F86D11;
    transition: all 0.1s ease;
  }
  .main-button h6 {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    .listing-hero {
      height: 60vh;
    }
    .hero-image {
      height: 45vh;
      width: auto;
    }
    .listing-hero-container {
      height: auto;
      margin-top: 75vh;
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 2%;
      border-radius: 0;
    }
    .listing-hero-details,
    .listing-hero-data {
      width: 100%;
      border-top-right-radius: 0;
    }
    .listing-hero-details {
      justify-content: space-evenly;
    }
    .listing-hero-data {
      gap: 13px;
      padding-bottom: 0.5%;
      justify-content: center;
      align-items: center;
    }
    .listing-hero-data-point h6 {
      display: none;
    }
    .listing-hero-data-point-row h5 {
      font-weight: 400;
      font-size: 16px;
    }
    .listing-hero-address h4.secondary {
      font-size: 18px;
    }
    #listing-hero-street {
      font-size: 20px;
    }
    #listing-hero-price {
      font-size: 18px;
    }
    .scroll-prompt,
    #view-listing-images {
      display: none;
    }
  }
</style>
