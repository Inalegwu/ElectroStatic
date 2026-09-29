import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'electron-vite';

export default defineConfig({
  main: {
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      externalizeDeps: true,
      lib: {
        entry: {
          main: 'src/main.ts',
          'workers/executor': 'src/workers/executor.ts',
        },
      },
    },
  },
  preload: {
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      externalizeDeps: true,
      lib: {
        entry: 'src/preload.ts',
      },
    },
  },
  renderer: {
    resolve: {
      tsconfigPaths: true,
    },
    root: 'src/web/',
    plugins: [
      react(),
      tailwindcss(),
      tanstackRouter({
        routesDirectory: path.join(__dirname, 'src/web/routes'),
        generatedRouteTree: path.join(__dirname, 'src/web/routeTree.gen.ts'),
      }),
    ],
    build: {
      outDir: 'out/renderer',
      rollupOptions: {
        input: path.join(__dirname, 'src/web/index.html'),
      },
    },
  },
});
