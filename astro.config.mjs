// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Crucial for SEO: allows the sitemap integration to build absolute URLs
  site: 'https://rishikamiranda.com',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});