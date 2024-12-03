import type { inferAsyncReturnType } from "@trpc/server";
import { BrowserWindow } from "electron";
import { store } from "./storage";

export async function createContext() {
  const browserWindow = BrowserWindow.getFocusedWindow();

  return {
    window: browserWindow,
    store,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
