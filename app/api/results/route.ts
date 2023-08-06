import { Movie } from "@/types/Movie";
import { NextResponse } from "next/server";
import { z } from "zod";
export async function POST(request: Request) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };

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
  const categoryIds = parsed.categories
    .map((category) => category.id)
    .join("%7C");
  const actorIds = parsed.actors.map((actor) => actor.id).join("%7C");

  const movieIds = parsed.movies.map((movie) => movie.id);
  console.log(movieIds);
  const getKeywords = movieIds.map(async (movieId) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
      options
    );
    const data = await res.json();
    const onlyIds = data.keywords.map((keyword: { id: number }) => keyword.id);
    return onlyIds;
  });
  const keywordPromises = await Promise.all(getKeywords);
  const allKeywordIds = keywordPromises.flatMap((ids) => ids).join("%");
  console.log(allKeywordIds);
  const discover = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_count.desc&with_cast=${actorIds}&with_genres=${categoryIds}&with_keywords=${allKeywordIds}`,
    options
  );

  const discoverData = await discover.json();
  console.log(discoverData);

  const resultMovieIds = discoverData.results.map((movie: Movie) => movie.id);
  console.log(resultMovieIds);

  async function getMovieDetails(id: number) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const data = await res.json();
    return data;
  }

  const detailedDiscoverData = await Promise.all(
    resultMovieIds.map((movieId: number) => getMovieDetails(movieId))
  );
  console.log(detailedDiscoverData);

  return NextResponse.json(detailedDiscoverData);
}
