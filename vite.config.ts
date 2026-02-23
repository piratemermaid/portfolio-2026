import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [
    tanstackRouter({
      routesDirectory: './src/routes',
      autoCodeSplitting: false,
    }),
    react(),
  ],
})
