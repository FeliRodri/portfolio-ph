// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],

    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    },

    adapter: cloudflare()
});