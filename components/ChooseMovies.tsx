import { Movie } from "@/types/Movie";
import SearchMovie from "./SearchMovie";
import SingleMovie from "./SingleMovie";
import getMoviesByName from "@/lib/services/getMoviesByName";

type Props = {
  query: string;
};
export default async function ChooseMovies(props: Props) {
  const { query } = props;
  const data = await getMoviesByName(query);
  const { results }: { results: Movie[] } = data;
  return (
    <>
      <SearchMovie />
      {query && (
        <div className="grid grid-cols-3 gap-2 gap-y-8 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8">
          {results
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <SingleMovie
                key={movie.id}
                movie={movie}
              />
            ))}
        </div>
      )}
    </>
  );
}
