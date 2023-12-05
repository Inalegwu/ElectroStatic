import path from "path";
import { BrowserWindow, app } from "electron";
import { createIPCHandler } from "electron-trpc/main";
import { appRouter } from "@src/shared/routers/_app";
import { createContext } from "@src/shared/context";

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // disable the window frame
    // remove this if you don't plan
    // on having a custom frame
    frame: false,
    webPreferences: {
      sandbox: false,
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  // create and attach the ipc handler
  // appRouter is defined in src/shared/routers/_app.ts
  // this is the root and all routers will be attached
  // to that
  createIPCHandler({
    router: appRouter,
    windows: [mainWindow],
    createContext,
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
