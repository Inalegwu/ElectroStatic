import type { inferAsyncReturnType } from "@trpc/server";
import { BrowserWindow } from "electron";
import db from "./storage";

export async function createContext() {
  const browserWindow = BrowserWindow.getFocusedWindow();

  return {
    window: browserWindow,
    db,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
