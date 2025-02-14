<script>
    // We'll take "listing" which has:
    //   listing.description_header
    //   listing.description_paragraph1
    //   listing.description_paragraphs (could be multiple paragraphs in one text)
  
    export let listing;
  
    let showFull = false;
  
    // Split paragraphs on line-break if you'd like:
    let moreParagraphs = listing.description_paragraphs
      ? listing.description_paragraphs.split('\n').filter(Boolean)
      : [];
  </script>
  
  <div class="listing-description">
    <h4>{listing.description_header}</h4>
  
    <!-- The first paragraph -->
    <p>{listing.description_paragraph1}</p>
  
    <!-- Additional paragraphs toggle -->
    {#if showFull}
      {#each moreParagraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
      <!-- Hide button -->
      <div class="hide-description" on:click={() => (showFull = false)}>
        <img src="/visuals/icons/chevron-up.svg" alt="chevron up" />
        <p class="secondary">Beschrijving inklappen</p>
      </div>
    {:else}
      <!-- Show button -->
      {#if moreParagraphs.length > 0}
        <div class="show-description" on:click={() => (showFull = true)}>
          <img src="/visuals/icons/chevron-down.svg" alt="chevron down" />
          <p class="secondary">Volledige beschrijving tonen</p>
        </div>
      {/if}
    {/if}
  </div>
  
  <style>
    .listing-description {
      margin-bottom: 20px;
    }
  
    .listing-description h4 {
      margin-bottom: 8px;
    }
  
    .listing-description p {
      margin-bottom: 8px;
      text-align: justify;
    }
  
    .show-description,
    .hide-description {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      cursor: pointer;
    }
  
    .show-description img,
    .hide-description img {
      width: 20px;
    }
  </style>  