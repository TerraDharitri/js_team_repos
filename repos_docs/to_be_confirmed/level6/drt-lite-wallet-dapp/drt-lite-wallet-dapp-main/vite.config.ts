import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      process: 'process',
      buffer: 'buffer',
      stream: 'stream-browserify',
      util: 'util',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // ✅ Correct way
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin(),
    commonjs(),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      plugins: [
        inject({
          process: 'process',
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
    },
  },
});
