import { defineConfig } from 'vite'
import assetMap from './asset-map.js';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: { 
    manifest: 'registry.json',
    
  },
  plugins: [react(), assetMap()],
})
