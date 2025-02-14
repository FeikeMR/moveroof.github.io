<script>
  import { onMount } from 'svelte';
  import { getImageUrl } from '$lib/getImageUrl.js';
  
  // Expect an array of objects, e.g. [{ file_path: '/path/to/image.jpg', ...}, ...]
  export let images = [];
  
  let isOpen = false;
  let currentIndex = 0;
  
  // Open popup at the specified image index
  export function open(index = 0) {
    isOpen = true;
    currentIndex = index;
  }
  
  function close() {
    isOpen = false;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  
  function handleBackgroundClick(e) {
    // Close if user clicks directly on the popup background
    if (e.target === e.currentTarget) {
      close();
    }
  }
  
  function handleKeydown(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }
  
  onMount(() => {
    // Listen for key presses at the window level
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>
  
{#if isOpen}
  <div id="image-popup" on:click={handleBackgroundClick}>
    <div class="popup-content">
      <!-- Current image -->
      <img
        id="popup-image"
        src={getImageUrl(images[currentIndex]?.file_path)}
        alt="Listing Image" />
  
      <!-- Close button -->
      <img
        class="close-btn"
        src="/visuals/icons/close-icon.svg"
        alt="Close"
        on:click={close} />
  
      <!-- Navigation arrows -->
      {#if images.length > 1}
        <img
          class="arrow left-arrow"
          src="/visuals/icons/left-arrow-icon.svg"
          alt="Previous"
          on:click={prevImage} />
        <img
          class="arrow right-arrow"
          src="/visuals/icons/right-arrow-icon.svg"
          alt="Next"
          on:click={nextImage} />
      {/if}
    </div>
  </div>
{/if}
  
<style>
  /* Popup background overlay */
  #image-popup {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
  }
  .popup-content {
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #popup-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
  .close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    z-index: 1100;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .close-btn:hover {
    transform: rotate(180deg);
  }
  .arrow {
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1100;
  }
  .left-arrow {
    left: 30px;
  }
  .right-arrow {
    right: 30px;
  }
</style>
