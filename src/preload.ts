import { exposeElectronTRPC } from "trpc-electron/main";

process.once("loaded", () => {
  exposeElectronTRPC();
});
