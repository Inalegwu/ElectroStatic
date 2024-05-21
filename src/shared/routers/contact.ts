import { publicProcedure, router } from "@src/trpc";
import { z } from "zod";

export const contactRouter = router({
  getContacts: publicProcedure.query(async ({ ctx }) => {
    return ctx.store.getTable("contact");
  }),
  saveContact: publicProcedure
    .input(
      z.object({
        name: z.string(),
        number: z.number().min(11).max(11),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const id = "";
      ctx.store.setRow("contact", id, {
        name: input.name,
        phoneNumber: input.number,
      });

      const created = ctx.store.getRow("contact", id);

      return created;
    }),
});
