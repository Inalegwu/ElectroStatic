import { publicProcedure, router } from "@src/trpc";
import { windowRouter } from "./window";
import pkg from "../../../package.json";

export const appRouter = router({
  // window controls for custom frame applications
  window: windowRouter,
  //   expose the package.json version to the application
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
});

export type AppRouter = typeof appRouter;
