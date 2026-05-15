import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',   // silences legacy-js-api warning
        silenceDeprecations: ['color-functions'],   // silences darken() etc during transition
      }
    }
  }
})
