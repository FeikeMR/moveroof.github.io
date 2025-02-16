<script>
  import { onMount } from 'svelte';
  import ListingHero from '$lib/components/listing/ListingHero.svelte';
  import ListingDataList from '$lib/components/listing/ListingDataList.svelte';
  import ListingDescription from '$lib/components/listing/ListingDescription.svelte';
  import ListingInterestForm from '$lib/components/listing/ListingInterestForm.svelte';
  import ImagesPopup from '$lib/components/listing/ImagePopup.svelte';

  export let data; // Data from the load function (includes "listing" & "images")

  let listing = data.listing;
  let images = data.images;

  // Create a dynamic title based on listing columns from your database.
  // Note: "street_number_suffix" is defined as NOT NULL so it might be an empty string.
  $: dynamicTitle = `Huis te koop: ${listing.street} ${listing.street_number}${
    listing.street_number_suffix && listing.street_number_suffix.trim() !== ''
      ? ' ' + listing.street_number_suffix
      : ''
  } ${listing.city} - MoveRoof`;

  let popupRef; // reference to the ImagesPopup component

  // Open the images popup at a given index (triggered from ListingHero)
  function openImagesPopup(e) {
    popupRef.open(e.detail.startIndex || 0);
  }

  /* ----- Sticky form logic on desktop ----- */
  let listingDetailEl;   // Outer container
  let descriptionEl;     // Where the description ends
  let listingInterestEl; // The interest form container

  let isDesktop = false;
  let isSticky = false;
  let stopSticky = false;

  onMount(() => {
    // Check initial size and add listeners
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function handleResize() {
    // If >= 769px wide => isDesktop = true; else false
    isDesktop = window.matchMedia('(min-width: 769px)').matches;
    // Disable sticky if not desktop
    if (!isDesktop) {
      isSticky = false;
      stopSticky = false;
    }
  }

  function handleScroll() {
    // Only do sticky if desktop
    if (!isDesktop) return;
    // Ensure we have references
    if (!listingDetailEl || !descriptionEl || !listingInterestEl) return;

    // Where the form should become sticky
    const offsetTop = descriptionEl.offsetTop + descriptionEl.offsetHeight - (window.innerHeight * 0.1);
    // Where it must stop (bottom boundary of the listingDetailEl)
    const stopPoint = listingDetailEl.offsetTop + listingDetailEl.offsetHeight - listingInterestEl.offsetHeight;

    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= offsetTop && scrollY < stopPoint) {
      isSticky = true;
      stopSticky = false;
    } else if (scrollY >= stopPoint) {
      isSticky = false;
      stopSticky = true;
    } else {
      isSticky = false;
      stopSticky = false;
    }
  }
</script>

<svelte:head>
  <title>{dynamicTitle}</title>
</svelte:head>

<!-- Hero at top -->
<ListingHero
  {listing}
  heroImages={images}
  on:openImagesPopup={openImagesPopup}
/>

<!-- Fullscreen popup for images -->
<ImagesPopup bind:this={popupRef} {images} />

<!-- Main detail container -->
<div
  class="listing-detail-content"
  bind:this={listingDetailEl}
>
  <!-- Left column (desktop) or second section (mobile) -->
  <ListingDataList {listing} class="listing-data-list" />

  <!-- Right column (desktop) or first section (mobile) -->
  <div class="listing-description-interest">
    <div
      class="listing-description-desktop"
      bind:this={descriptionEl}
    >
      <ListingDescription {listing} />
    </div>

    <!-- Interest form: sticky on desktop -->
    <div
      class="listing-interest-wrapper"
      bind:this={listingInterestEl}
      class:sticky-active={isSticky}
      class:stop-sticky={stopSticky}
    >
      <ListingInterestForm {listing} />
    </div>
  </div>
</div>

<style>
/* Desktop layout: two columns */
.listing-detail-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  gap: 5%;
  margin: 3rem auto; /* top/bottom space */
}

.listing-data-list {
  max-width: 50%;
}

/* The right side (description + interest form) is a column */
.listing-description-interest {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  width: 45%;
}

/* Sticky classes for the interest form container */
.sticky-active {
  position: fixed;
  top: 10vh;
  z-index: 900;
  width: 30%; /* adapt as needed to fit your design */
}

.stop-sticky {
  position: absolute;
  bottom: 0;
}

@media (max-width: 768px) {
  .listing-detail-content {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
  }

  /* Flatten the container so its children become flex items */
  .listing-description-interest {
    display: contents;
  }

  /* Order the listing description first */
  .listing-description-desktop {
    order: 1;
    width: 100%;
  }

  /* Order the data list second */
  .listing-data-list {
    order: 2;
    width: 100%;
    margin-top: 1.5rem;
  }

  /* Order the interest form third */
  .listing-interest-wrapper {
    order: 3;
    position: static !important; /* non-sticky on mobile */
    width: 100%;
  }
}
</style>