"use client";
import Image from "next/image";
import { update, remove } from "@/redux/features/movies-slice";
import { useDispatch } from "react-redux";
import { Poppins } from "next/font/google";
import { Button, buttonVariants } from "./ui/button";
import { AiOutlineCheck } from "react-icons/ai";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Movie } from "@/types/Movie";
import { BsFillTrashFill } from "react-icons/bs";
import { trpc } from "@/app/trpc/client";
import { useToast } from "./ui/use-toast";
import { useUser } from "@clerk/nextjs";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
type Props = {
  movie: {
    imdbUrl: string | null;
    posterUrl: string | null;
    rating: string | null;
    title: string | null;
    userId: string | null;
    tmdbId: number | null;
    id: number;
    createdAt: string | null;
  };
};

const options: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

export default function SingleListMovie(props: Props) {
  const { movie } = props;
  const movies = useAppSelector((state) => state.moviesReducer);

  const formattedDate = new Date(movie.createdAt as string).toLocaleString(
    "en-GB",
    options
  );
  const context = trpc.useContext();
  const { toast } = useToast();
  const { user } = useUser();
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
    <div className="relative flex flex-col gap-2 pb-2 duration-200 border rounded-lg shadow-md group">
      <div className="relative aspect-[10/16]">
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full p-2">
          <Button
            size="icon"
            variant="destructive"
            onClick={() => {
              if (user) {
                unlikeMovie({
                  movieId: movie.tmdbId as number,
                  userId: user.id,
                });
              }
            }}
          >
            <BsFillTrashFill />
          </Button>
          <a
            className="duration-200 w-9 h-9 hover:opacity-95"
            href={`https://www.imdb.com/title/${movie.imdbUrl}/`}
          >
            <img
              className="w-full"
              src="./imdb-logo.png"
            />
          </a>
        </div>
        <Image
          priority
          src={`https://image.tmdb.org/t/p/w500${movie.posterUrl}`}
          width={126}
          height={189}
          className="object-cover w-full h-full rounded-t-md"
          alt={movie.title || ""}
        />
        {movies.some((movieElement) => movieElement.id === movie.id) && (
          <div className="absolute duration-300 right-1 bottom-1">
            <Button
              variant={"default"}
              size={"icon"}
              className="w-6 h-6"
            >
              <AiOutlineCheck className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
      <h2
        className={`text-sm px-2 line-clamp-2 break-words ${poppins.className}`}
      >
        {movie.title}
      </h2>

      <span className="px-2 text-sm break-all line-clamp-2">
        {formattedDate}
      </span>
    </div>
  );
}
