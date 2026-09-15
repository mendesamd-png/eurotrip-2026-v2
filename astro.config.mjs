import { defineConfig } from 'astro/config';

// GitHub Pages: https://mendesamd-png.github.io/eurotrip-2026-v2/
export default defineConfig({
  site: 'https://mendesamd-png.github.io',
  base: '/eurotrip-2026-v2',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
