"use client";
import Container from "@/components/Container";
import DividerHeading from "@/components/DividerHeading";
import SingleMovieResult from "@/components/SingleMovieResult";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Results() {
  const router = useRouter();
  const recommended = useAppSelector((state) => state.resultsReducer);
  if (!recommended) {
    return router.push("/");
  }
  return (
    <Container className="flex flex-col gap-12 py-12">
      <DividerHeading>Movies you might like</DividerHeading>

      <div className="grid gap-2 gap-y-8 ">
        {recommended
          .filter((movie) => movie.poster_path)
          .map((result) => (
            <SingleMovieResult
              movie={result}
              key={result.id}
            />
          ))}
      </div>
    </Container>
  );
}
