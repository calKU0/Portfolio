import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      EMAILJS_SERVICE_ID: JSON.stringify(process.env.EMAILJS_SERVICE_ID),
      EMAILJS_TEMPLATE_ID: JSON.stringify(process.env.EMAILJS_TEMPLATE_ID),
      EMAILJS_PUBLIC_KEY: JSON.stringify(process.env.EMAILJS_PUBLIC_KEY),
    },
  },
})
