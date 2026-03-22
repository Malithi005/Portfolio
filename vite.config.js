import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On Vercel, we use root. On GitHub Pages, we use the repo name.
  base: process.env.VERCEL ? '/' : '/Portfolio/',
})



