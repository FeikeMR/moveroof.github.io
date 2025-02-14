import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],

  optimizeDeps: {
    include: ['@supabase/supabase-js']
  },

  // Sometimes you need this for SSR as well:
  ssr: {
    noExternal: ['@supabase/supabase-js']
  }
});