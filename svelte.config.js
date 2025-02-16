import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',   // or 'docs' if you prefer that folder for GitHub Pages
      assets: 'build',
      fallback: 'index.html' // Generates a fallback page for non-prerendered routes
    })
  },
  preprocess: [vitePreprocess()]
};
