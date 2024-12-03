import { publicProcedure, router } from "@src/trpc";
import { shell } from "electron";
import pkg from "../../../package.json";
import { windowRouter } from "./window";

export const appRouter = router({
  window: windowRouter,
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
  gh: publicProcedure.mutation(async () => {
    shell.openExternal("https://github.com/Inalegwu/ElectroStatic");
  }),
});

export type AppRouter = typeof appRouter;
