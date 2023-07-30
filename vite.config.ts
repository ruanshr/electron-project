import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ElectronDevPlugin } from './plugins/vite.electron.dev'
import { ElectronBuildPlugin } from './plugins/vite.electron.build'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ElectronDevPlugin(), ElectronBuildPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
