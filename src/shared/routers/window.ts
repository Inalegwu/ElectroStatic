import { publicProcedure, router } from "@src/trpc";

export const windowRouter = router({
  closeWindow: publicProcedure.mutation(async ({ ctx }) => {
    if (!ctx.window) return;

    ctx.window.close();
  }),
  minimize: publicProcedure.mutation(async ({ ctx }) => {
    if (!ctx.window) return;
    ctx.window.minimize();
  }),
  maximize: publicProcedure.mutation(({ ctx }) => {
    if (!ctx.window) return;
    const isMaximized = ctx.window.isMaximized();

    if (isMaximized) {
      ctx.window.unmaximize();
    } else {
      ctx.window.maximize();
    }
  }),
});
