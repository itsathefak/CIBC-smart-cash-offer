import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),  // Auto import Vuetify components
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Alias '@' to 'src' directory
    },
    extensions: ['.js', '.ts', '.vue', '.json'],  // Ensure proper extensions are resolved
  },
  server: {
    port: 3000,  // Set server port to 3000
  },
  build: {
    outDir: 'dist',  // Output directory for production build
  },
})

