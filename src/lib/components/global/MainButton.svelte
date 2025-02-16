<script>
    export let id = "";
    export let type = "button";
</script>
    
<style>
.main-button {
    border: 1px solid #333333;
    border-radius: 6px;
    color: #333333;
    background-color: transparent;
    font-size: 1.2em;
    font-weight: 600;
    padding: 0.5em 0.7em;
    text-decoration: none;
    transition: all 0.3s ease;
}
  
.main-button:hover {
    background-color: #F86D11;
    color: #F4F4F4;
    cursor: pointer;
}
</style>
  
<button class="main-button" {...$$restProps} on:click>
    <slot>Click me</slot>
</button>  