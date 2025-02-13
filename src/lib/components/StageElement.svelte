<script>
  import SecondaryButton from '$lib/components/Global-use/SecondaryButton.svelte';
  import { createEventDispatcher } from "svelte";

  export let elementId = "";
  export let title = "";
  export let templates = [];  // e.g. [{ fileUrl, fileName, labelText }]
  export let articleHtml = "";
  export let isOpen = false;  // Parent sets whether this StageElement is open

  const dispatch = createEventDispatcher();

  function onHeaderClick(event) {
    event.stopPropagation(); // prevent toggling parent
    dispatch("toggleElement", { elementId });
  }

  function onTemplateClick(e, fileUrl, fileName) {
    e.stopPropagation();
    // Create an invisible link and auto-click it
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName || "document.pdf";
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
</script>
  
<div class="stage-element" id={elementId}>
  <div
    class="stage-element-header {isOpen ? 'open' : ''}"
    on:click={onHeaderClick}
  >
    <img
      class="stage-element-header-chevron"
      src="/visuals/icons/chevron-dark.svg"
    />
    <h5>{title}</h5>
    {#if templates && templates.length > 0}
      <div class="template-label">
        <img src="/visuals/icons/document-icon-orange.svg" alt="Template Icon"/>
      </div>
    {/if}
  </div>

  <div class="stage-element-content {isOpen ? 'show' : ''}">
    {#if templates && templates.length > 0}
      <div class="stage-element-buttons">
        {#each templates as t}
          <SecondaryButton on:click={(e) => onTemplateClick(e, t.fileUrl, t.fileName)}>
            <p class="white">{t.labelText}</p>
          </SecondaryButton>
        {/each}
      </div>
    {/if}

    <div class="stage-article">
      {@html articleHtml}
    </div>
  </div>
</div>
  
<style>
  .stage-element-content {
    display: flex;
    flex-direction: column;
  }

  /* Horizontal scrolling for template buttons */
  .stage-element-buttons {
    display: flex;
    flex-direction: row;
    width: 250%;
    margin-left: -150%;
    gap: 20px;
    padding-left: 10px;
    overflow-x: auto;
    white-space: nowrap;
  }

  .stage-element-buttons::-webkit-scrollbar {
    display: none;
  }
  .stage-element-buttons::-webkit-scrollbar-thumb {
    display: none;
  }

  .stage-element-buttons p {
    font-size: 16px;
  }

  /* Template label with icon – always shown when templates exist */
  .template-label {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .template-label img {
    width: 20px;
    height: auto;
  }
</style>