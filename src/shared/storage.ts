import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import * as Effect from 'effect/Effect';
import { pipe } from 'effect/Function';
import * as schema from './schema';

const db = pipe(
  createClient({
    url: 'file:static.db',
  }),
  (client) => drizzle(client, { schema }),
);

Effect.try(() => migrate(db, { migrationsFolder: 'drizzle/' })).pipe(
  Effect.catchTag('UnknownException', (e) => Effect.logFatal(e)),
  Effect.annotateLogs({
    module: 'storage.migrate',
  }),
  Effect.runSync,
);

export default db;
