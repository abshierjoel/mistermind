import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import elm from 'vite-plugin-elm';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mistermind/',
  plugins: [react(), elm()],
});
