import ChooseMovies from "@/components/ChooseMovies";
import DividerHeading from "@/components/DividerHeading";
import SingleMovie from "@/components/SingleMovie";
import Steps from "@/components/Steps";
import getPopularMovies from "@/lib/services/getPopularMovies";
import { Movie } from "@/types";

type Props = {
  searchParams: {
    movieQuery: string;
  };
};
export default async function Movies(props: Props) {
  const { searchParams } = props;
  const data = await getPopularMovies();
  const { results }: { results: Movie[] } = data;
  return (
    <>
      <Steps />
      <div className="max-w-5xl min-h-screen px-4 pb-12 mx-auto">
        <div className="flex flex-col">
          <DividerHeading>Choose your favorite movies</DividerHeading>
          {!searchParams.movieQuery ? "" : ""}
          <ChooseMovies query={searchParams.movieQuery} />
          {!searchParams.movieQuery && (
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
        </div>
      </div>
    </>
  );
}
