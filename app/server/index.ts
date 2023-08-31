import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import { auth } from "@clerk/nextjs";
import { publicProcedure, router } from "./trpc";
import { movies } from "@/app/db/schema";
import { z } from "zod";
import dotenv from "dotenv";
import postgres from "postgres";
import { eq, and } from "drizzle-orm";
dotenv.config();

const movie = z.object({
  imdbUrl: z.string(),
  posterUrl: z.string(),
  rating: z.string(),
  title: z.string(),
  userId: z.string(),
  tmdbId: z.number(),
});

const movieToDelete = z.object({
  movieId: z.number(),
  userId: z.string(),
});

const queryClient = postgres(process.env.POSTGRES_URL + "?sslmode=require");
const db: PostgresJsDatabase = drizzle(queryClient);

export const appRouter = router({
  likeMovie: publicProcedure.input(movie).mutation(async (payload) => {
    const newMovie = payload.input;
    return await db.insert(movies).values(newMovie);
  }),

  unlikeMovie: publicProcedure
    .input(movieToDelete)
    .mutation(async (payload) => {
      const user = auth();

      if (payload.input.userId === user.userId) {
        return await db
          .delete(movies)
          .where(
            and(
              eq(movies.userId, payload.input.userId),
              eq(movies.tmdbId, payload.input.movieId)
            )
          );
      } else {
        return;
      }
    }),

  getUserMovies: publicProcedure.input(z.string()).query(async (payload) => {
    const user = auth();

    const userId = payload.input;
    if (userId === user.userId) {
      return await db.select().from(movies).where(eq(movies.userId, userId));
    } else {
      return;
    }
  }),
});

export type AppRouter = typeof appRouter;
