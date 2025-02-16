import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // Serve index.html for dynamic routes
      strict: false         // Allow dynamic routes without erroring out
    })
  },
  preprocess: [vitePreprocess()]
};