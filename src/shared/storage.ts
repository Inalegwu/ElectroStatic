import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { app } from "electron";
import * as schema from "./schema";

// this is necessary , so you don't end up packaing your
// development database with your application as well as ensuring
// your application's stored data lives in the same location as other application specific
// data
process.env = {
  DATABASE_URL: `${app.getPath("appData")}/ElectroStatic/storage.db`,
};

// there is no longer any need to keep the native binding
// line because using webpack external for better-sqlite3
// the binding file can be found naturally
const sqlite = new Database(process.env.DATABASE_URL!);
const db = drizzle(sqlite, { schema });

await migrate(db, { migrationsFolder: ".drizzle" });

export default db;
