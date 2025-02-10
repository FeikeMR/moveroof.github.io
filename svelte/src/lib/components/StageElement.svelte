<script>
    import SecondaryButton from "svelte/src/lib/components/Global-use/SecondaryButton.svelte";
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
        src="/public/assets/visuals/icons/chevron-dark.svg"
      />
      <h5>{title}</h5>
    </div>
  
    <div class="stage-element-content {isOpen ? 'show' : ''}">
      {#if templates && templates.length > 0}
        <div class="stage-element-buttons">
          {#each templates as t}
            <SecondaryButton
              class="stage-element-template"
              on:click={(e) => onTemplateClick(e, t.fileUrl, t.fileName)}
            >
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
    /* No local styling needed here because we inherit from the big CSS in the page file or a global file. */
  </style>
  