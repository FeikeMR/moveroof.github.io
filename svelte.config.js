import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',    // or use 'docs' if you prefer GitHub Pages to serve from /docs
      assets: 'build',
      fallback: 'index.html', // creates a fallback for dynamic routes
      strict: false           // disable the error that requires all routes to be prerenderable
    })
    // No need to set a base path since your repo is at the root (moveroof.github.io)
  },
  preprocess: [vitePreprocess()]
};
