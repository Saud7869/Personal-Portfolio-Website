import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/repository-name/' if repo is not username.github.io
  // For custom domain or username.github.io, use '/'
  base: process.env.NODE_ENV === 'production' ? '/personal-portfolio/' : '/',
})

