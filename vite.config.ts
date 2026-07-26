import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Base path is configurable so the app can be deployed to a GitHub Pages
// project site (/<repo>/) or to a custom domain (/) without code changes.
const base = process.env.BASE_PATH ?? '/bounty-atlas-vn/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
});
