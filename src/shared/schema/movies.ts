import {
  integer,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const movies = sqliteTable(
  "movies",
  {
    id: text("id").notNull().unique(),
    name: text("name"),
    director: text("director"),
    releaseYear: integer("release_year"),
  },
  (table) => ({
    idIdx: uniqueIndex("idx_idx").on(table.id),
  })
);
