"use client";
import Image from "next/image";
import { update, remove } from "@/redux/features/movies-slice";
import { useDispatch } from "react-redux";
import { Poppins } from "next/font/google";
import { Button } from "./ui/button";
import { AiOutlineCheck } from "react-icons/ai";
import { AppDispatch, useAppSelector } from "@/redux/store";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
type Props = {
  movie: {
    id: string;
    title: string;
    poster_path: string;
  };
};
export default function SingleMovie(props: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const { movie } = props;
  const movies = useAppSelector((state) => state.moviesReducer);

  return (
    <div
      onClick={() => {
        const isInArray = movies.some(
          (movieElement) => movieElement.id === movie.id
        );
        if (isInArray) {
          dispatch(remove(movie.id));
        } else {
          dispatch(update(movie));
        }
        console.log(movies);
      }}
      className={`relative flex flex-col gap-2 pb-2 duration-200 border-2 rounded-lg shadow-md cursor-pointer hover:opacity-90 hover:border-primary ${
        movies.some((movieElement) => movieElement.id === movie.id)
          ? "border-primary"
          : ""
      } group`}
    >
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={126}
          height={189}
          className="w-full"
          alt={movie.title}
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
    </div>
  );
}
