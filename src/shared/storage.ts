import * as schema from "./schema";
import { app } from "electron";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

// this is necessary , so you don't end up packaing your
// development database with your application as well as ensuring
// your application's stored data lives in the same location as other application specific
// data
process.env = {
  DATABASE_URL: `${app.getPath("appData")}/ElectroStatic/storage.db`,
};

const sqlite = new Database(process.env.DATABASE_URL!, {
  /// this line has to exist because for some reason webpack can't find the .node
  /// file.
  nativeBinding:
    "node_modules/better-sqlite3/build/Release/better_sqlite3.node",
});
const db = drizzle(sqlite, { schema });

await migrate(db, { migrationsFolder: ".drizzle" });

export default db;
