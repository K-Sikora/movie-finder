"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { AiFillLike, AiFillStar, AiOutlineLike } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";
import { Movie } from "@/types/Movie";
import { trpc } from "@/app/trpc/client";
import { useToast } from "./ui/use-toast";
import { SignInButton } from "@clerk/nextjs";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
type Props = {
  movie: Movie;
  userId?: string;
  isLiked: boolean;
};
export default function SingleMovieResult(props: Props) {
  const context = trpc.useContext();
  const { toast } = useToast();
  const { movie, userId, isLiked } = props;

  const { mutate: likeMovie } = trpc.likeMovie.useMutation({
    onSuccess: () => {
      toast({
        title: "Success!",
        description: `Added ${movie.title} to your list. ✅`,
      });
      context.getUserMovies.invalidate();
    },
  });
  const { mutate: unlikeMovie } = trpc.unlikeMovie.useMutation({
    onSuccess: () => {
      toast({
        title: "Success!",
        description: `Removed ${movie.title} from your list. ❌`,
      });
      context.getUserMovies.invalidate();
    },
  });
  return (
    <div
      className={`flex w-full min-h-[9rem] md:h-56 border rounded-lg shadow-lg ${poppins.className}`}
    >
      <div className="relative w-24 h-full shadow-lg md:w-32 shrink-0">
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="object-cover w-full rounded-l-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-full p-2 md:p-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium md:text-xl">{movie.title}</h2>
          <p className="text-sm line-clamp-3 md:line-clamp-5">
            {movie.overview}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-2 text-sm md:text-base md:gap-4">
          <div className="flex items-center gap-1">
            <BsCalendar3 />
            {movie.release_date.slice(0, 4)}
          </div>
          <div className="flex items-center gap-1">
            <AiFillStar />
            {movie.vote_average.toFixed(2)}
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock />
            {movie.runtime}m
          </div>
          <Button
            onClick={() => {
              if (userId) {
                if (!isLiked) {
                  likeMovie({
                    imdbUrl: movie.imdb_id,
                    posterUrl: movie.poster_path,
                    title: movie.title,
                    rating: String(movie.vote_average),
                    userId: userId,
                    tmdbId: movie.id,
                  });
                } else {
                  unlikeMovie({
                    movieId: movie.id,
                    userId: userId,
                  });
                }
              } else {
                toast({
                  title: "You must be logged in to add a movie to your list.",
                  description: (
                    <SignInButton mode="modal">
                      <Button
                        variant="default"
                        size="sm"
                      >
                        Sign in
                      </Button>
                    </SignInButton>
                  ),
                });
              }
            }}
            className="w-6 h-6 md:w-7 md:h-7"
            size="icon"
          >
            {isLiked ? <AiFillLike size={17} /> : <AiOutlineLike size={17} />}
          </Button>
          <div className="flex items-center gap-1 md:ml-auto">
            <Link
              target="_blank"
              href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            >
              <Image
                alt="imdb"
                height={32}
                width={32}
                className="w-8"
                src="/imdb-logo.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
