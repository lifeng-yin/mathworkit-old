import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: postcssPresetEnv({
        features: {
          'nesting-rules': true
        }
      })
    }
  },
  plugins: [react()],
})
