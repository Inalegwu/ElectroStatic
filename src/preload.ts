// preload.ts is exposed to the renderer process once loaded from main.ts
import { exposeElectronTRPC } from "electron-trpc/main";

// once this file is loaded , the electron-trpc ipcLink can
// then be exposed
process.once("loaded", () => {
  exposeElectronTRPC();
});
