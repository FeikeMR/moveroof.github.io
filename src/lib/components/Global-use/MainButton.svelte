<script>
    // Currently no JS needed.
</script>
    
<style>
.main-button {
    border: 1px solid #333333;
    border-radius: 6px;
    color: #333333;
    font-size: 18px;
    font-weight: 600;
    padding: 0.5em 0.7em;
    text-decoration: none;
    transition: all 0.3s ease;
}
  
.main-button:hover {
    background-color: #D35D0E;
    cursor: pointer;
}
</style>
  
<button class="main-button">
    <slot>Click me</slot>
</button>  