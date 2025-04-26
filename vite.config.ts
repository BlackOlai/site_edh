import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
<<<<<<< HEAD
  base: '/site_edh/', // Deve corresponder ao nome do seu repositório
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    assetsInlineLimit: 4096 // Aumenta o limite para arquivos maiores (4KB padrão)
=======
  base: '/site_edh/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
>>>>>>> 422dbd255e0fcb73dfd4960b20fe4751866095cd
  }
})
