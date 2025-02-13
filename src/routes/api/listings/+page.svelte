<script context="module" lang="ts">
    export const load = async ({ fetch }) => {
      const res = await fetch('/api/listings');
      const listings = await res.json();
      return { listings };
    };
  </script>
  
  <script lang="ts">
    export let data;
  </script>
  
  <h1>Listings</h1>
  {#if data.listings && data.listings.length > 0}
    <ul>
      {#each data.listings as listing}
        <li>
          <a href="/listings/{listing.listing_id}">
            {listing.street} {listing.street_number}{listing.street_number_suffix}, {listing.city}
          </a> 
          - Asking Price: {listing.asking_price}
        </li>
      {/each}
    </ul>
  {:else}
    <p>No listings found.</p>
  {/if}  