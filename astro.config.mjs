// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Pits-webdev.github.io',
  base: 'peter-webdesign',
  integrations: [tailwind()]
});