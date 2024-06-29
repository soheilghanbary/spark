import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), macrosPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
