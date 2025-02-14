<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { afterNavigate } from '$app/navigation';  /* <-- 1) Import afterNavigate */
  import SecondaryButton from '$lib/components/global/SecondaryButton.svelte';

  const dispatch = createEventDispatcher();

  // State variables
  let isScrolled = false;
  let menuIconSrc = '/visuals/icons/menu-icon-light.svg';
  let logoSrc = '/visuals/logos/full-logo/full-logo-yellow-orange-light.svg';
  let menuTextColor = '#F4F4F4';
  let bgColor = 'transparent';
  let boxShadow = 'none';

  // Decide if we start with a transparent header
  function useTransparentHeaderByDefault() {
    const path = window.location.pathname;
    return (
      path === '/' ||
      path === '/home' ||
      path.startsWith('/listings/')
    );
  }

  // Update header styles based on scroll state
  function updateHeaderStyles() {
    if (isScrolled) {
      // SCROLLED style
      bgColor = '#F4F4F4';
      boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
      menuIconSrc = '/visuals/icons/menu-icon-dark.svg';
      menuTextColor = '#333333';
      logoSrc = '/visuals/logos/full-logo/full-logo-yellow-orange-dark.svg';
    } else {
      // NOT scrolled style => check if page should be transparent or #333
      boxShadow = 'none';
      bgColor = useTransparentHeaderByDefault() ? 'transparent' : '#333333';
      menuIconSrc = '/visuals/icons/menu-icon-light.svg';
      menuTextColor = '#F4F4F4';
      logoSrc = '/visuals/logos/full-logo/full-logo-yellow-orange-light.svg';
    }
  }

  // Check current scroll position
  function handleScroll() {
    isScrolled = window.scrollY > 0; // true if user scrolled down
    updateHeaderStyles();
  }

  // Fired by clicking "MENU"
  function openMenuDrawer() {
    dispatch('openMenu');
  }

  // Fired by clicking "Kies jouw deal" button
  function handleDealClick() {
    dispatch('openDealPopup');
  }

  // onMount: set initial styles & attach scroll listener
  onMount(() => {
    // If not a "transparent page," use #333 from the start
    if (!useTransparentHeaderByDefault()) {
      bgColor = '#333333';
    }
    window.addEventListener('scroll', handleScroll);
    // Check if page is scrolled at mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // 2) Re-check after navigation to fix stale header background
  afterNavigate(() => {
    // Possibly reset scroll detection if you want “fresh page” style:
    //    window.scrollY is probably 0, but let's do:
    isScrolled = window.scrollY > 0;
    updateHeaderStyles();
  });
</script>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
    z-index: 999;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  .header a {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header__logo {
    height: 80%;
    transition: height 0.3s ease;
  }
  .header__menu {
    display: flex;
    align-items: center;
    gap: 13px;
    cursor: pointer;
  }
  .header__menu p {
    margin: 0;
  }
  .header__menu-icon {
    width: 35px;
    height: auto;
  }
  @media (max-width: 768px) {
    .header {
      padding: 5px 2.5%;
      gap: 5px;
    }
    .header__menu {
      gap: 8px;
    }
    .header__logo {
      height: 70%;
    }
    .header__menu-icon {
      width: 20px;
    }
  }
</style>

<header
  class="header"
  style="background-color: {bgColor}; box-shadow: {boxShadow};"
>
  <!-- Left side: Menu trigger -->
  <div
    class="header__menu"
    on:click={openMenuDrawer}
    style="color: {menuTextColor};"
  >
    <img
      class="header__menu-icon"
      src={menuIconSrc}
      alt="Menu Icon"
    />
    <p style="color: {menuTextColor}">MENU</p>
  </div>

  <!-- Center: Logo (clicking goes to home) -->
  <a href="/">
    <img class="header__logo" src={logoSrc} alt="Full Logo" />
  </a>

  <!-- Right side: Deal button -->
  <SecondaryButton id="header-button" on:click={handleDealClick}>
    Kies jouw deal
  </SecondaryButton>
</header>