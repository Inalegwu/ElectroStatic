import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { app } from "electron";
import * as schema from "./schema/index";

process.env = {
  STORAGE_LOCATION: `${app.getPath("appData")}/Vision/comics.db`,
};

const sqlite = new Database(process.env.STORAGE_LOCATION!);

export const db = drizzle(sqlite, { schema });
