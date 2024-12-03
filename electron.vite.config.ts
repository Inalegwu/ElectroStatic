import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "node:path";
import UnoCSS from "unocss/vite";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "src/main.ts",
      },
    },
    resolve: {
      alias: {
        "@src": resolve(__dirname, "src/"),
        "@shared": resolve(__dirname, "src/shared/"),
        "@components": resolve(__dirname, "src/web/components/"),
        "@assets": resolve(__dirname, "src/assets/"),
        "@pages": resolve(__dirname, "src/web/pages"),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "src/preload.ts",
      },
    },
  },
  renderer: {
    root: "src/web/",
    resolve: {
      alias: {
        "@src": resolve(__dirname, "src/"),
        "@shared": resolve(__dirname, "src/shared/"),
        "@components": resolve(__dirname, "src/web/components/"),
        "@assets": resolve(__dirname, "src/assets/"),
        "@pages": resolve(__dirname, "src/web/pages"),
      },
    },
    plugins: [
      react(),
      UnoCSS(),
      TanStackRouterVite({
        routesDirectory: "./src/web/routes/",
        generatedRouteTree: "./src/web/routeTree.gen.ts",
      }),
    ],
    // where to output your web files
    build: {
      outDir: "out/renderer",
      rollupOptions: {
        input: "./src/web/index.html",
      },
    },
  },
});
