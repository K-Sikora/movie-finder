"use client";

import { trpc } from "@/app/trpc/client";
import { useUser } from "@clerk/nextjs";
import Container from "./Container";
import SingleListMovie from "./SingleListMovie";

export default function List() {
  const { user, isLoaded } = useUser();

  if (user) {
    const { data } = trpc.getUserMovies.useQuery(user.id);
    return (
      <div className="min-h-screen py-24">
        <Container>
          <h1 className="text-4xl text-center">Your list of movies</h1>
          <div className="grid grid-cols-2 gap-2 mt-24 gap-y-8 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
            {data?.map((movie) => (
              <SingleListMovie
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
