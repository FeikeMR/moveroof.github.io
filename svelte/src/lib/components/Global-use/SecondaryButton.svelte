<script>
    // Currently no JS needed.
</script>
    
<style>
.secondary-button {
    border-radius: 6px;
    background-color: #F86D11;
    color: #F4F4F4;
    font-size: 24px;
    font-weight: 600;
    display: inline-flex;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
}
  
.secondary-button:hover {
    background-color: #D35D0E;
    cursor: pointer;
}
</style>
  
<button class="secondary-button">
    <slot>Click me</slot>
</button>  