import { NextResponse } from "next/server";
import { z } from "zod";
export async function POST(request: Request) {
  const mySchema = z.object({
    actors: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        profile_path: z.string(),
      })
    ),
    movies: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        poster_path: z.string(),
      })
    ),
    categories: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    ),
  });

  const res = await request.json();
  const parsed = mySchema.parse(res);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };
  async function fetchSimilarMovies(movieId: number) {
    const similar = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      options
    );
    return similar.json();
  }

  const promises = parsed.movies.map((movie) => fetchSimilarMovies(movie.id));
  const similarMoviesData = await Promise.all(promises);
  console.log(similarMoviesData);
  return NextResponse.json(similarMoviesData);
}
