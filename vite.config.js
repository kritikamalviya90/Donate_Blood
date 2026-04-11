import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // suppresses the 500KB warning
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // splits React into separate chunk
        }
      }
    }
  }
})