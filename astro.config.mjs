// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://felipeasenjo.com', // Cambia esto por tu dominio real cuando lo tengas
    integrations: [tailwind(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    }
});
