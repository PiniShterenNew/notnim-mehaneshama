// c:\Users\User\Desktop\pini-doc\notnim-mehaneshama\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
})
