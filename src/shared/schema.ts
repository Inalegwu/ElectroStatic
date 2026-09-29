import { index, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const item = sqliteTable(
  'items',
  {
    id: text('id').notNull().primaryKey().unique(),
    name: text('name'),
  },
  (table) => [index('collection_id_index').on(table.id)],
);
