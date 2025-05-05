import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from "vite-plugin-node-polyfills"
import tsconfigPaths from "vite-tsconfig-paths"
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: { global: true }
    }),
    tsconfigPaths(),
    commonjs({
      requireReturnsDefault: 'auto',
    }),
  ],
  resolve: {
    alias: {
      buffer: 'buffer', // resolves to node_modules/buffer/index.js (ESM)
    },
  },
  define: {
    global: 'globalThis', // needed for Buffer in browser
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    host: true,
  },
  build: {
    outDir: 'build'
  },
  preview: {
    port: 3002,
    https: true,
    host: 'localhost',
    strictPort: true
  }
})
