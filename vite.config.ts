import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: 'http://localhost:5173',
  css: {
    postcss: {
      plugins: [postcssPresetEnv({
        features: {
          'nesting-rules': true
        }
      })]
    },
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
