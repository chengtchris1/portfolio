import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.gltf"],

  optimizeDeps: {
    exclude: [
      // Add the path to the problematic dependency here
      "/Users/Chris/Portfolio Website/portfolio_js/node_modules/.vite/deps/chunk-HJT5OPQQ.js?v=c273261d"
    ]
  }
})
