<script>
  import "/app.css";

  import Header from "$lib/components/Global-use/Header.svelte";
  import MenuDrawer from "$lib/components/Global-use/MenuDrawer.svelte";
  import Footer from "$lib/components/Global-use/Footer.svelte";
  import Popups from "$lib/components/Global-use/Popups.svelte";
</script>

<Header />
<MenuDrawer />

<main>
  <slot />
</main>

<Footer />
<Popups />