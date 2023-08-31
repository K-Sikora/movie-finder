"use client";
import Container from "@/components/Container";
import DividerHeading from "@/components/DividerHeading";
import SingleMovieResult from "@/components/SingleMovieResult";
import { useAppSelector } from "@/redux/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { trpc } from "../trpc/client";
export default function Results() {
  const context = trpc.useContext();
  const router = useRouter();
  const { user } = useUser();
  const recommended = useAppSelector((state) => state.resultsReducer);
  if (!recommended) {
    return router.push("/");
  }

  const { data } = trpc.getUserMovies.useQuery(
    user === null || user === undefined ? "" : user.id
  );
  console.log(data);
  return (
    <Container className="flex flex-col gap-12 py-12">
      <DividerHeading>Movies you might like</DividerHeading>

      <div className="grid gap-2 gap-y-8 ">
        {recommended
          .filter((movie) => movie.poster_path)
          .map((result) => (
            <SingleMovieResult
              userId={user?.id}
              movie={result}
              key={result.id}
              isLiked={
                data ? data?.some((movie) => movie.tmdbId === result.id) : false
              }
            />
          ))}
      </div>
    </Container>
  );
}
