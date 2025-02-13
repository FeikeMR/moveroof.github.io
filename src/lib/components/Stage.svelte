<script>
  import { createEventDispatcher } from "svelte";
  import StageElement from "./StageElement.svelte";

  export let stageId = "";
  export let title = "";
  export let description = "";
  export let templateCount = 0;  // how many templates are advertised
  export let elements = [];      // array of objects for sub-articles
  export let isOpen = false;     // parent controls stage open/close

  // local state for open nested stage-element
  let openElementId = null;

  const dispatch = createEventDispatcher();

  function onStageHeadClick() {
    dispatch("toggleStage", { stageId });
  }

  function onToggleElement(e) {
    const { elementId } = e.detail;
    if (openElementId === elementId) {
      openElementId = null;
    } else {
      openElementId = elementId;
    }
  }

  // When the stage is closed, ensure that any open article is also closed.
  $: if (!isOpen) {
    openElementId = null;
  }
</script>
  
<div class="stage">
  <div
    class="stage-head {isOpen ? 'open' : ''}"
    on:click={onStageHeadClick}
  >
    <div class="stage-head-name">
      <h4 class="secondary">{title}</h4>
    </div>
    <div class="stage-head-icons">
      {#if templateCount > 0}
        <p class="template-label-text"><b>+ {templateCount} template</b></p>
        <div class="template-label-icon">
          <p>+{templateCount}</p>
          <img src="/visuals/icons/document-icon-dark.svg" />
        </div>
      {/if}
      <img
        class="stage-head-chevron"
        src="/visuals/icons/chevron-dark.svg"
      />
    </div>
  </div>

  <div class="stage-information {isOpen ? 'show' : ''}">
    <div class="stage-description">
      <p>{description}</p>
    </div>

    <div class="stage-content">
      {#each elements as elem}
        <StageElement
          elementId={elem.elementId}
          title={elem.title}
          templates={elem.templates}
          articleHtml={elem.articleHtml}
          isOpen={openElementId === elem.elementId}
          on:toggleElement={onToggleElement}
        />
      {/each}
    </div>
  </div>
</div>
  
<style>
  /* No local styling needed; big CSS can live in the page or global. */
</style>