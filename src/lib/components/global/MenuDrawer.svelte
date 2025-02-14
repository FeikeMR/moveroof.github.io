<script>
  import MainButton from '$lib/components/global/MainButton.svelte';
  import { createEventDispatcher } from 'svelte';

  export let isOpen = false; // Controlled via parent or openDrawer/closeDrawer
  const dispatch = createEventDispatcher();

  // Variable to force re-render of animated links
  let animationKey = 0;

  // Watch for changes to isOpen so we can reset animations
  $: if (isOpen) {
    // Increase the key value whenever the drawer opens.
    animationKey += 1;
  }

  // Close the drawer
  function closeDrawer() {
    isOpen = false;
  }

  // Programmatic method to open the drawer if needed
  export function openDrawer() {
    isOpen = true;
  }

  // “Geef feedback” button
  function handleFeedbackClick() {
    dispatch('openFeedback');
    closeDrawer();
  }

  // “Kies jouw deal” button
  function handleDealClick() {
    dispatch('openDeal');
    closeDrawer();
  }
</script>

<style>
  /* Drawer container */
  .drawer {
    position: fixed;
    top: 0;
    /* -50% because width is fit content so it changes per user/screen*/
    left: -50%;
    width: fit-content;
    height: 100vh;
    background-color: #F4F4F4;
    box-shadow: 2px 0 6px rgba(0,0,0,0.2);
    transition: left 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    overflow-y: auto;
  }
  /* Open state */
  .drawer.open {
    left: 0;
  }

  /* Close icon row */
  .drawer-close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
  .drawer-close-icon {
    width: 35px;
    height: 35px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  .drawer-close-icon:hover {
    transform: rotate(180deg);
  }

  /* Drawer links container */
  .drawer-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 0.5em;
  }

  .drawer-links a {
    text-decoration: none;
    transform: translateX(-20px);
    opacity: 0;
    animation: fadeSlideIn 0.3s forwards ease;
  }

  .drawer-links a h4:hover {
    transform: translateX(15px);
    color: #F86D11;
    transition: transform 0.2s ease;
  }

  @keyframes fadeSlideIn {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Overlay behind the drawer */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    display: none;
  }
  .overlay.active {
    display: block;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .drawer {
      width: 70%;
      left: -70%;
    }
    .drawer.open {
      left: 0;
    }
  }
</style>

<!-- Overlay that closes the drawer on click -->
<div class="overlay {isOpen ? 'active' : ''}" on:click={closeDrawer}></div>

<!-- Drawer -->
<div class="drawer {isOpen ? 'open' : ''}">
  <!-- Close Icon -->
  <div class="drawer-close">
    <img
      class="drawer-close-icon"
      src="/visuals/icons/close-icon.svg"
      alt="Close Menu"
      on:click={closeDrawer}
    />
  </div>

  <!-- NAVIGATION LINKS -->
  <!-- Use a keyed block so the links re-mount (and animate) every time the drawer opens -->
  {#if isOpen}
    <div class="drawer-links" key={animationKey}>
      <a href="/" on:click={closeDrawer} style="animation-delay: 0.1s">
        <h4>Home</h4>
      </a>
      <a href="/aanbod" on:click={closeDrawer} style="animation-delay: 0.2s">
        <h4>Aanbod</h4>
      </a>
      <a href="/zelf-verkopen" on:click={closeDrawer} style="animation-delay: 0.3s">
        <h4>Zelf je huis verkopen</h4>
      </a>
      <a href="/verkoop-begeleiding" on:click={closeDrawer} style="animation-delay: 0.4s">
        <h4>Verkoop begeleiding</h4>
      </a>
      <a href="/koop-begeleiding" on:click={closeDrawer} style="animation-delay: 0.5s">
        <h4>Koop begeleiding</h4>
      </a>
      <a href="/over-moveroof" on:click={closeDrawer} style="animation-delay: 0.6s">
        <h4>Over MoveRoof</h4>
      </a>
    </div>
  {/if}

  <!-- BUTTONS BELOW LINKS -->
  <div class="button-row">
    <MainButton on:click={handleFeedbackClick}>
      Geef feedback
    </MainButton>
    <MainButton on:click={handleDealClick}>
      Deal kiezen
    </MainButton>
  </div>
</div>