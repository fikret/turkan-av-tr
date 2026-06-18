// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://turkan.av.tr',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en-US',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
