import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "src/main.ts",
      },
      rollupOptions: {
        // externalize better-sqlite3 since it uses
        // a native addon
        external: ["better-sqlite3"],
      },
    },
    resolve: {
      // path aliases
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
      // tell electron-vite where to look for your preload file
      lib: {
        entry: "src/preload.ts",
      },
    },
  },
  renderer: {
    // tell electron-vite where your web entry point is
    root: "src/web/",
    resolve: {
      // path aliases
      alias: {
        "@src": resolve(__dirname, "src/"),
        "@shared": resolve(__dirname, "src/shared/"),
        "@components": resolve(__dirname, "src/web/components/"),
        "@assets": resolve(__dirname, "src/assets/"),
        "@pages": resolve(__dirname, "src/web/pages"),
      },
    },
    plugins: [react(), UnoCSS()],
    // where to output your web files
    build: {
      outDir: "out/renderer",
      rollupOptions: {
        input: "./src/web/index.html",
      },
    },
  },
});
