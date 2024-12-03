import { integer, pgTable } from "drizzle-orm/pg-core";

export const testTable = pgTable("test-table", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
});
