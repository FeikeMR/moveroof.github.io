<script>
    export let id = "";
    export let type = "button";
    export let onClick;
</script>

<style>
.secondary-button {
    border-radius: 6px;
    background-color: #F86D11;
    color: #F4F4F4;
    font-size: 1.15em;
    font-weight: 600;
    display: inline-flex;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    width: fit-content;
}

.secondary-button:hover {
    background-color: #D35D0E;
    cursor: pointer;
}

#hero-button {
    font-size: 1.5em;
}

@media (max-width: 768px) {
    #header-button {
        display: none;
    }

    #hero-button {
        font-size: 1.2em;
    }
}
</style>

<button class="secondary-button" id={id} type={type} {...$$restProps} on:click>
    <slot>Click me</slot>
</button>