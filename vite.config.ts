import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/// <reference types="vitest" />
export default defineConfig({
  plugins: [
      react()
  ],
  server: {
    port: 3000,
  },
  test: {
    globals: true, // Enable global APIs like describe, it, expect
    environment: "jsdom",
  },
})
