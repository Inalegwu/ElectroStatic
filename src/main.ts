import path, { join } from 'node:path';
import { createContext } from '@shared/context';
import { appRouter } from '@shared/routers/_app';
import { app, BrowserWindow, screen } from 'electron';
import { createIPCHandler } from 'trpc-electron/main';
import pkg from '../package.json';
import './workers/executor';

app.setName(pkg.name.toLocaleUpperCase());

const data_dir = path.join(app.getPath('appData'), 'Nova');

process.env.db_url = path.join(data_dir, `${pkg.name}_storage.db`);

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    frame: false,
    show: false,
    width: width - 25,
    height: height - 25,
    minWidth: width - 25,
    minHeight: height - 25,
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, '../preload/preload.js'),
    },
  });

  createIPCHandler({
    router: appRouter,
    windows: [mainWindow],
    createContext,
  });

  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.show();
  });

  if (import.meta.env.DEV) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }

  // mainWindow.webContents.openDevTools({ mode: "bottom" });
};

app.whenReady().then(() => {
  createWindow();
});

app.once('window-all-closed', () => app.quit());
