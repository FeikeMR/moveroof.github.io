<script>
  import { getImageUrl } from '$lib/getImageUrl.js';
  
  export let listing;
  export let heroImage;
  
  // Helper to format the price.
  function formatPrice(value) {
    if (value === undefined || value === null) return '';
    let num = Number(value).toLocaleString('nl-NL');
    return `€${num}`;
  }
  
  // Build the listing page link
  const listingLink = `/listings/${listing.listing_id}`;
</script>

<div class="listing-tile">
  <!-- Anchor tag linking to detail page -->
  <a href={listingLink}>
    <img
      src={heroImage ? getImageUrl(heroImage.file_path) : '/visuals/general/missing_listing_img.jpg'}
      class="listing-tile-image"
      alt="Property listing" />
  </a>

  <div class="listing-tile-details">
    <div class="listing-tile-main">
      <h5 class="secondary">{listing.city}</h5>
      <h5 class="secondary">{formatPrice(listing.asking_price)} k.k.</h5>
    </div>
    <div class="listing-tile-address">
      <p class="detail">
        {listing.street} {listing.street_number}
        {#if listing.street_number_suffix}{listing.street_number_suffix}{/if},
        {listing.postal_code}
      </p>
    </div>
    <div class="listing-tile-data">
      <div class="listing-tile-data-point">
        <img src="/visuals/icons/bed-icon.svg" alt="bedrooms icon" />
        <p>{listing.bedroom_count} slaapk</p>
      </div>
      <div class="listing-tile-data-point">
        <img src="/visuals/icons/floorplan-icon.svg" alt="square meters icon" />
        <p>{listing.living_space} m&sup2; woon</p>
      </div>
      <div class="listing-tile-data-point">
        <img src="/visuals/icons/leaf-icon.svg" alt="Energy label icon" />
        <p>{listing.energy_label}</p>
      </div>
    </div>
  </div>
</div>

<style>
  /* (Your existing CSS remains unchanged) */
  .listing-tile {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 8px;
    height: 100%;
  }
  .listing-tile:hover .listing-tile-image {
    outline: 2px solid #F86D11;
  }
  .listing-tile-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
  }
  .listing-tile-details {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0 2%;
  }
  .listing-tile-main {
    display: flex;
    justify-content: space-between;
  }
  .listing-tile-data {
    display: flex;
    gap: 3%;
  }
  .listing-tile-data-point {
    display: flex;
    align-items: center;
    gap: 3px;
    border: 1px solid #787878;
    border-radius: 5px;
    padding: 0.3vh 0.75%;
    margin-top: 3px;
  }
  .listing-tile-data-point img {
    height: 23px;
  }
  .listing-tile-data-point p {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    .listing-tile {
      width: 100%;
    }
    .listing-tile-data {
      justify-content: flex-start;
      gap: 2%;
    }
    .listing-tile-data-point {
      flex-direction: row;
      padding: 0.5vh;
      max-width: 200px;
      text-align: center;
    }
    .listing-tile-data-point img {
      height: 18px;
    }
  }
</style>
