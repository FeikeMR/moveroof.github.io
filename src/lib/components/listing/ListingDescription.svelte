<script>
  import { cubicOut } from 'svelte/easing';

  export let listing;
  let showFull = false;

  // Split paragraphs on line-break if necessary
  let moreParagraphs = listing.description_paragraphs
    ? listing.description_paragraphs.split('\n').filter(Boolean)
    : [];

  // Custom slide transition that only animates height (no opacity change)
  function slideNoFade(node, { delay = 0, duration = 300, easing = cubicOut } = {}) {
    const style = getComputedStyle(node);
    const height = parseFloat(style.height);
    return {
      delay,
      duration,
      easing,
      css: t => `overflow: hidden; height: ${t * height}px;`
    };
  }
</script>

<div class="listing-description">
  <h4>{listing.description_header}</h4>
  <p>{listing.description_paragraph1}</p>

  {#if moreParagraphs.length > 0}
    {#if showFull}
      <!-- The container holding both the extra paragraphs and the toggle -->
      <div transition:slideNoFade>
        {#each moreParagraphs as paragraph}
          <p>{paragraph}</p>
        {/each}
        <div class="toggle hide-description" on:click={() => (showFull = false)}>
          <img src="/visuals/icons/chevron-up-orange.svg" alt="chevron up" />
          <p class="secondary">Beschrijving inklappen</p>
        </div>
      </div>
    {:else}
      <!-- The "show" toggle (without a height transition) -->
      <div class="toggle show-description" on:click={() => (showFull = true)}>
        <img src="/visuals/icons/chevron-down-orange.svg" alt="chevron down" />
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

  .toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  .toggle img {
    width: 20px;
  }
</style>