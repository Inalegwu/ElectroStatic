// electron.vite.config.ts
import KumaUI from "@kuma-ui/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve } from "path";
var __electron_vite_injected_dirname = "C:\\Users\\Studio\\Documents\\development\\OSS\\ElectroStatic";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: "src/main.ts"
      },
      rollupOptions: {
        // externalize better-sqlite3 since it uses
        // a native addon
        external: ["better-sqlite3"]
      }
    },
    resolve: {
      // path aliases
      alias: {
        "@src": resolve(__electron_vite_injected_dirname, "src/"),
        "@shared": resolve(__electron_vite_injected_dirname, "src/shared/"),
        "@components": resolve(__electron_vite_injected_dirname, "src/web/components/"),
        "@assets": resolve(__electron_vite_injected_dirname, "src/assets/")
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      // tell electron-vite where to look for your preload file
      lib: {
        entry: "src/preload.ts"
      }
    }
  },
  renderer: {
    // tell electron-vite where your web entry point is
    root: "src/web/",
    resolve: {
      alias: {
        "@src": resolve(__electron_vite_injected_dirname, "src/"),
        "@shared": resolve(__electron_vite_injected_dirname, "src/shared/"),
        "@components": resolve(__electron_vite_injected_dirname, "src/web/components/"),
        "@assets": resolve(__electron_vite_injected_dirname, "src/assets/")
      }
    },
    plugins: [react(), KumaUI()],
    // where to output your web files
    build: {
      outDir: "out/renderer",
      rollupOptions: {
        input: "./src/web/index.html"
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
