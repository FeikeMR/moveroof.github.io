<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import SecondaryButton from '$lib/components/Global-use/SecondaryButton.svelte';

  // Create a dispatcher for sending custom events (e.g., openDealPopup)
  const dispatch = createEventDispatcher();

  // State variables
  let isScrolled = false;
  let menuIconSrc = '/svelte/assets/visuals/icons/menu-icon-light.svg';
  let logoSrc = '/svelte/assets/visuals/logos/full-logo/full-logo-yellow-orange-light.svg';
  let menuTextColor = '#F4F4F4';
  let bgColor = 'transparent';
  let boxShadow = 'none';

  // Decide if the header should be transparent by defaul.
  function useTransparentHeaderByDefault() {
    const path = window.location.pathname;
    return (
      path === '/' ||
      path === '/home.html' ||
      path.startsWith('/listings/')
    );
  }

  //Update the header’s style (bg color, logo, icon) based on scroll state.
  function updateHeaderStyles() {
    if (isScrolled) {
      // When user has scrolled down
      bgColor = '#F4F4F4';
      boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
      menuIconSrc = '/svelte/assets/visuals/icons/menu-icon-dark.svg';
      menuTextColor = '#333333';
      logoSrc = '/svelte/assets/visuals/logos/full-logo/full-logo-yellow-orange-dark.svg';
    } else {
      // Top of the page
      boxShadow = 'none';

      if (useTransparentHeaderByDefault()) {
        bgColor = 'transparent';
      } else {
        bgColor = '#333333';
      }

      menuIconSrc = '/svelte/assets/visuals/icons/menu-icon-light.svg';
      menuTextColor = '#F4F4F4';
      logoSrc = '/svelte/assets/visuals/logos/full-logo/full-logo-yellow-orange-light.svg';
    }
  }

  // Event handler: check if scrolled > 0, then update styles.
  function handleScroll() {
    isScrolled = window.scrollY > 0;
    updateHeaderStyles();
  }

  // Called when user clicks “MENU” (left side)
  function openMenuDrawer() {
    dispatch('openMenu'); // parent or layout can listen to this event
  }

  // Called when user clicks the “Kies jouw deal” button
  function handleDealClick() {
    // For now, just dispatch an event that a parent can listen for
    dispatch('openDealPopup');
  }

  // onMount lifecycle: set initial style, watch scroll
  onMount(() => {
    // If not transparent by default, set dark background
    if (!useTransparentHeaderByDefault()) {
      bgColor = '#333333';
    }
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Run an initial scroll check in case user is not at top
    handleScroll();

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<style>
  #header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 9vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0% 7%;
    z-index: 999;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  #header-container a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  #header-logo {
    width: auto;
    height: 80%;
    transition: height 0.3s ease;
  }

  /* “MENU” click area */
  #menu-trigger {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;
    cursor: pointer;
  }
  #menu-trigger p {
    margin: 0; /* remove default p margin */
  }

  #icon-menu {
    width: 35px;
    height: auto;
  }

  /* Right side button group */
  #header-button-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  /* Simple responsiveness */
  @media (max-width: 768px) {
    #header-container {
      padding: 5px 2.5%;
      gap: 5px;
    }
    #menu-trigger {
      gap: 8px;
    }
    #header-button-group :global(button) {
      font-size: 16px;
    }
    #header-logo {
      height: 75%;
    }
    #icon-menu {
      width: 20px;
    }
  }
</style>

<header
  id="header-container"
  style="background-color: {bgColor}; box-shadow: {boxShadow};"
>
  <!-- Left side: menu trigger -->
  <div id="menu-trigger" on:click={openMenuDrawer} style="color: {menuTextColor};">
    <img
      id="icon-menu"
      src="{menuIconSrc}"
      alt="Menu Icon"
    />
    <p style="color: {menuTextColor}">MENU</p>
  </div>

  <!-- Center: logo -->
  <a href="/svelte/home.html">
    <img
      id="header-logo"
      src="{logoSrc}"
      alt="Full Logo"
    />
  </a>

  <!-- Right side: use your SecondaryButton component -->
  <div id="header-button-group">
    <SecondaryButton
      text="Kies jouw deal"
      on:click={handleDealClick}
    />
  </div>
</header>