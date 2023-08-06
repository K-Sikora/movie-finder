"use client";
import DividerHeading from "@/components/DividerHeading";
import SingleMovieResult from "@/components/SingleMovieResult";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Results() {
  const router = useRouter();
  const recommended = useAppSelector((state) => state.resultsReducer);
  console.log(recommended);
  if (!recommended.results) {
    return router.push("/");
  }
  const { results } = recommended;
  return (
    <div className="flex flex-col max-w-5xl gap-12 px-4 py-12 mx-auto">
      <DividerHeading>Movies you might like</DividerHeading>

      <div className="grid grid-cols-3 gap-2 gap-y-8 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-7">
        {results
          .filter((movie) => movie.poster_path)
          .map((result) => (
            <SingleMovieResult
              movie={result}
              key={result.id}
            />
          ))}
      </div>
    </div>
  );
}
