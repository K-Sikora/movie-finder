import ChooseMovies from "@/components/ChooseMovies";
import Container from "@/components/Container";
import DividerHeading from "@/components/DividerHeading";
import SingleMovie from "@/components/SingleMovie";
import Steps from "@/components/Steps";
import getPopularMovies from "@/lib/services/getPopularMovies";
import { Movie } from "@/types/Movie";
type Props = {
  searchParams: {
    query: string;
  };
};
export default async function Movies(props: Props) {
  const { searchParams } = props;
  const data = await getPopularMovies();
  const { results }: { results: Movie[] } = data;
  return (
    <>
      <Steps />
      <Container className="min-h-screen pb-12">
        <div className="flex flex-col">
          <DividerHeading>2. Choose your favorite movies</DividerHeading>
          <span className="mt-2 text-sm">Select at least 3 movies</span>
          {!searchParams.query ? "" : ""}
          <ChooseMovies query={searchParams.query} />
          {!searchParams.query && (
            <div className="grid grid-cols-3 gap-2 gap-y-8 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-8">
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
      </Container>
    </>
  );
}
