import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'svelte/assets',
      routes: 'svelte/src/routes',
      lib: 'svelte/src/lib'
    }
  }
};