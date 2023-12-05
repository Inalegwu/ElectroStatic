import { publicProcedure, router } from "@src/trpc";

// router for custom window controls ,
// see src/shared/context.ts to see definition of
// window
export const windowRouter = router({
  closeWindow: publicProcedure.mutation(async ({ ctx }) => {
    // by definition , the window is always probably undefined
    // so this line makes that check and ideally , it'll always work
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
