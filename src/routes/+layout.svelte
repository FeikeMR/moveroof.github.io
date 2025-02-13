<script>
  import "/src/app.css";

  import Header from "$lib/components/Global-use/Header.svelte";
  import MenuDrawer from "$lib/components/Global-use/MenuDrawer.svelte";
  import Footer from "$lib/components/Global-use/Footer.svelte";
  import Popups from "$lib/components/Global-use/Popups.svelte";
  import { goto } from '$app/navigation';

  // Shared state for the menu drawer
  let isMenuOpen = false;
  // Reference to the Popups component so we can call its exported functions
  let popupsRef;

  // When the Header dispatches "openMenu"
  function handleOpenMenu() {
    console.log("handleOpenMenu triggered");
    isMenuOpen = true;
  }

  // When the Header’s secondary button ("Kies jouw deal") is clicked
  function handleHeaderDeal() {
    console.log("Header Deal Clicked");
    if (popupsRef && popupsRef.openListingPopup) {
      popupsRef.openListingPopup();
    } else {
      console.error("popupsRef is not set or openListingPopup is not defined");
    }
  }

  // When the MenuDrawer’s “Geef feedback” button is clicked
  function handleFeedback() {
    console.log("MenuDrawer Feedback Clicked");
    if (popupsRef && popupsRef.openFeedbackPopup) {
      popupsRef.openFeedbackPopup();
    } else {
      console.error("popupsRef is not set or openFeedbackPopup is not defined");
    }
  }

  // When the MenuDrawer’s “Deal kiezen” button is clicked
  function handleDeal() {
    console.log("MenuDrawer Deal Clicked");
    if (popupsRef && popupsRef.openListingPopup) {
      popupsRef.openListingPopup();
    } else {
      console.error("popupsRef is not set or openListingPopup is not defined");
    }
  }

  // When a package button is clicked (from packagesdetail or packagesoverview)
    function handleChoosePackage(e) {
    console.log("Package chosen:", e.detail.packageName);
    if (popupsRef && popupsRef.openListingPopup) {
      popupsRef.openListingPopup(e.detail.packageName);
    } else {
      console.error("popupsRef is not set or openListingPopup is not defined");
    }
  }
</script>

<Header 
  on:openMenu={handleOpenMenu} 
  on:openDealPopup={handleHeaderDeal} 
/>

<MenuDrawer
  bind:isOpen={isMenuOpen}
  on:openFeedback={handleFeedback}
  on:openDeal={handleDeal}
/>

<!-- Attach the choosePackage event handler on <main> so that events dispatched from package components bubble up -->
<main on:choosePackage={handleChoosePackage}>
  <slot />
</main>

<Footer />

<!-- Bind the Popups component to popupsRef so we can call its exported functions -->
<Popups bind:this={popupsRef} />