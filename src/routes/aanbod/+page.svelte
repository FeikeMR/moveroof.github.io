<script>
  import ListingTile from '$lib/components/listing/ListingTile.svelte'; 
  export let data;
  let listings = data.listings || [];

  // Helper: find hero image for a listing or return null
  function getHeroImage(listing) {
    if (!listing.listing_images || listing.listing_images.length === 0) {
      return null;
    }
    // Either the is_hero or fallback to the first image
    return listing.listing_images.find(img => img.is_hero) ?? listing.listing_images[0];
  }
</script>


<section id="overview-topbar">
  <div id="topbar-row">
    <h6><b>{listings.length} Woningen in aanbod</b></h6>
  </div>
  <div id="seperation-line"></div>
</section>

<!-- The grid container -->
<div id="listing-overview">
  {#each listings as listing}
    <!-- Check if we have a hero image -->
    {#if getHeroImage(listing)}
      <ListingTile 
        listing={listing} 
        heroImage={getHeroImage(listing)}
      />
    {:else}
      {console.error(`${listing.street} ${listing.street_number}, ${listing.city} listing not loaded, no images`)}
    {/if}
  {/each}
</div>

<style>
  #overview-topbar {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 12vh auto 0 auto;
  }

  #topbar-row {
    display: flex;
    padding: 0 2% 0.5%;
  }

  #seperation-line {
    height: 70%;
    border: 0.4px solid #787878;
  }
  
  #listing-overview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1rem 0;
    width: 75%;
    margin: 2em auto;
  }
  @media (max-width: 768px) {
    #listing-overview {
      grid-template-columns: 1fr;
      width: 90%;
    }
  }
</style>