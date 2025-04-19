// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Removing the css.postcss block ensures that your postcss.config.js is used automatically.
});
