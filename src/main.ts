import { createContext } from "@src/shared/context";
import { appRouter } from "@src/shared/routers/_app";
import { BrowserWindow, app } from "electron";
import { createIPCHandler } from "electron-trpc/main";
import { join } from "node:path";

// set the app name independent of package.json name
app.setName("ElectroStatic");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // disable the window frame
    // remove this if you don't plan
    // on having a custom frame
    frame: false,
    webPreferences: {
      sandbox: false,
      preload: join(__dirname, "../preload/preload.js"),
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

  mainWindow.webContents.on("dom-ready", () => {
    mainWindow.show;
  });

  if (import.meta.env.DEV) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }

  mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
