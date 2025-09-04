import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/UpdatedWebsite/', // 👈 MUST match your GitHub repo name exactly (case-sensitive)
  plugins: [react()],
})
