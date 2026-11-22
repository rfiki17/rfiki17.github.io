import { defineConfig } from 'astro/config';

// User site on GitHub Pages: https://rfiki17.github.io (no base path).
export default defineConfig({
  site: 'https://rfiki17.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
