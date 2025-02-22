import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',    // Output directory
      assets: 'docs',   // Assets directory
      fallback: 'index.html',
      strict: false
    })
  },
  preprocess: [vitePreprocess()]
};

export default config;