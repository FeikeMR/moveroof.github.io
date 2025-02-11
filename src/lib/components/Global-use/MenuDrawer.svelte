<script>
    import { createEventDispatcher } from 'svelte';
  
    // We allow a parent to control or watch the drawer’s open/closed state
    // by setting or binding to `isOpen`.
    export let isOpen = false;
  
    // We can dispatch custom events for "feedback" or "deal" so the parent
    // can open corresponding popups, etc.
    const dispatch = createEventDispatcher();
  
    // Called from the template to close the drawer
    function closeDrawer() {
      isOpen = false;
    }
  
    // Called if you want to open the drawer from inside this component
    // (a parent can also do <MenuDrawer bind:isOpen> = true)
    export function openDrawer() {
      isOpen = true;
    }
  
    // User clicked “Geef feedback”
    function handleFeedbackClick() {
      dispatch('openFeedback');
      closeDrawer();
    }
  
    // User clicked “Kies jouw deal”
    function handleDealClick() {
      dispatch('openDeal');
      closeDrawer();
    }
</script>
  
<style>
    #menu-drawer {
      position: fixed;
      top: 0;
      left: -20%;
      width: 20%;
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
    /* .drawer-open => left: 0 */
    .drawer-open {
      left: 0;
    }
  
    /* "Close" row (X icon at top-right) */
    #drawer-close-row {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 15px;
    }
    #icon-drawer-close {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    #icon-drawer-close:hover {
      transform: rotate(180deg);
    }
  
    /* Links in the drawer */
    #drawer-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .drawer-link {
      transform: translateX(-20px);
      opacity: 0;
      transition: transform 0.4s ease, opacity 0.3s ease;
    }
    /* Animate them in sequence once open */
    .drawer-open #drawer-links .drawer-link:nth-child(1) {
      transition-delay: 0.15s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-open #drawer-links .drawer-link:nth-child(2) {
      transition-delay: 0.25s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-open #drawer-links .drawer-link:nth-child(3) {
      transition-delay: 0.35s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-open #drawer-links .drawer-link:nth-child(4) {
      transition-delay: 0.45s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-open #drawer-links .drawer-link:nth-child(5) {
      transition-delay: 0.55s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-open #drawer-links .drawer-link:nth-child(6) {
      transition-delay: 0.65s;
      transform: translateX(0);
      opacity: 1;
    }
    .drawer-link:hover {
      transform: translateX(5px);
      transition: transform 0.3s ease;
      cursor: pointer;
    }
  
    /* Bottom buttons in menu */
    #drawer-buttons {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 20px;
    }
  
    /* Overlay behind drawer */
    #drawer-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 999;
      display: none; /* hidden by default */
    }
    .drawer-active {
      display: block;
    }
  
    /* Mobile drawer: 70% wide instead of 20% */
    @media (max-width: 768px) {
      #menu-drawer {
        width: 70%;
        left: -70%;
      }
      .drawer-open {
        left: 0;
      }
      #drawer-buttons {
        flex-direction: column;
        align-items: stretch;
      }
    }
</style>
  
<!-- Overlay -->
<div
    id="drawer-overlay"
    class="{isOpen ? 'drawer-active' : ''}"
    on:click="{closeDrawer}"
  ></div>
  
  <!-- The Page Menu Drawer -->
  <div
    id="menu-drawer"
    class="{isOpen ? 'drawer-open' : ''}"
  >
    <!-- Close Icon -->
    <div id="drawer-close-row">
      <img
        id="icon-drawer-close"
        src="/assets/visuals/icons/close-icon.svg"
        alt="Close Menu"
        on:click="{closeDrawer}"
      />
    </div>
  
    <!-- Links -->
    <div id="drawer-links">
      <a href="/svelte/home.html" class="drawer-link">
        <h4>Home</h4>
      </a>
      <a href="/svelte/listing-overview.html" class="drawer-link">
        <h4>Aanbod</h4>
      </a>
      <a href="/svelte/sales-packages.html" class="drawer-link">
        <h4>Zelf je huis verkopen</h4>
      </a>
      <a href="/svelte/selling-experience.html" class="drawer-link">
        <h4>Verkoop begeleiding</h4>
      </a>
      <a href="/svelte/buying-experience.html" class="drawer-link">
        <h4>Koop begeleiding</h4>
      </a>
      <a href="/svelte/about-moveroof.html" class="drawer-link">
        <h4>Over MoveRoof</h4>
      </a>
    </div>
  
    <!-- Drawer Buttons -->
    <div id="drawer-buttons">
      <h5 class="btn-secondary-dark" on:click="{handleFeedbackClick}">Geef feedback</h5>
      <h5 class="btn-secondary-dark" on:click="{handleDealClick}">Kies jouw deal</h5>
    </div>
</div>  