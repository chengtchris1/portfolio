import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.gltf"],
  build: {
    sourcemap: false, // Enable sourcemaps for debugging
  },
})
