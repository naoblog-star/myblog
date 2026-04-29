// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com', // Vercelデプロイ後に実際のURLに変更してください
	integrations: [mdx(), sitemap()],
});
