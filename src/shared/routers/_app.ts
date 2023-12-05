import { publicProcedure, router } from "@src/trpc";
import { windowRouter } from "./window";
import pkg from "../../../package.json";
import { shell } from "electron";

export const appRouter = router({
  // window controls for custom frame applications
  window: windowRouter,
  //   expose the package.json version to the application
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
  openGithub: publicProcedure.mutation(async () => {
    shell.openExternal("https://github.com/Inalegwu/ElectroStatic");
  }),
});

export type AppRouter = typeof appRouter;
