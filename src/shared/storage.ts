import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import * as schema from "./schema";

const client = new PGlite(process.env.DATABASE_URL);
const db = drizzle({ client, schema });

export default db;

migrate(db, { migrationsFolder: "drizzle" });
