import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-of-ansh-sharma/',  // 👈 IMPORTANT: must match your repo name
})

