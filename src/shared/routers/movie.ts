import z from "zod";
import { publicProcedure, router } from "@src/trpc";
import { movies } from "@shared/schema";

export const movieRouter = router({
  saveMovie: publicProcedure
    .input(
      z.object({
        name: z.string(),
        director: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(movies).values({
        id: "",
        director: input.director,
        name: input.name,
      });
    }),
  getMovies: publicProcedure.query(async ({ ctx }) => {
    const movies = await ctx.db.query.movies.findMany({});
    return {
      movies,
    };
  }),
});
