import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projeto_dev_movies/', // 👈 nome exato do repositório
  plugins: [react()],
})
