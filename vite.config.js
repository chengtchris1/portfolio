import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.gltf"],
  build: {
    sourcemap: false, // Enable sourcemaps for debugging
  },
  optimizeDeps: {
    exclude: [
      // Add the path to the problematic dependency here
      "/Users/Chris/Portfolio Website/portfolio_js/node_modules/.vite/deps/chunk-HJT5OPQQ.js?v=c273261d"
    ]
  }
})
