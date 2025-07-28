import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/projeto_dev_movies/', // <-- O nome do repositório, com / no início e fim
  plugins: [react()]
})
