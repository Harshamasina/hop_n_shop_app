import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    sitemapPlugin({
      hostname: 'https://sinclairrolla.com',
      routes: ['/home', '/about_us', '/inventory', 'camps_fried_chicken', 'hunts_pizza', 'inventory', 'gallery', 'contact']
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
