import { publicProcedure, router } from '@/trpc';
import pkg from '../../../package.json';
import { windowRouter } from './window';

export const appRouter = router({
  window: windowRouter,
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
});

export type AppRouter = typeof appRouter;
