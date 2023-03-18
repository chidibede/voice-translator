import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

import { dependencies } from './package.json';

function renderChunks(deps) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (
      ['react', 'react-router-dom', 'react-dom', '@heroicons/react'].includes(
        key
      )
    ) {
      return;
    }

    chunks[key] = [key];
  });

  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [NodeGlobalsPolyfillPlugin({ buffer: true })],
    },
  },
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ]
  },
  plugins: [react()],
  build: {
    sourcemap: false,
    target: 'esnext',
  },
});
