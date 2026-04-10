// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://tinyhouseheavens.com',
  output: 'static',
  integrations: [sitemap(), mdx()],
  redirects: {
    '/': '/nl/',
    '/nl/elementor-23523/': '/nl/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
