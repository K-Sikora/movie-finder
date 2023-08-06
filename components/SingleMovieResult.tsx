"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button } from "./ui/button";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineReadMore } from "react-icons/md";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
type Props = {
  movie: {
    id: string;
    title: string;
    poster_path: string;
    vote_average: string;
  };
};
export default function SingleMovieResult(props: Props) {
  const { movie } = props;

  return (
    <div
      className={`relative flex flex-col gap-2 pb-2 duration-200 border-2 rounded-lg shadow-md cursor-pointer hover:opacity-90 hover:border-primary `}
    >
      <div className="relative aspect-[9/16]">
        <Image
          priority
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          fill
          className="object-cover w-full h-full rounded-t-md"
          alt={movie.title}
        />
        <div className="absolute flex items-center gap-1 px-2 py-1 text-sm font-medium rounded-full md:text-base text-accent bg-white/60 dark:bg-black/60 bottom-2 right-2">
          <AiFillStar />
          <h3>{movie.vote_average}</h3>
        </div>
        <div className="absolute z-10 flex items-center justify-center gap-1 font-medium rounded-full w-9 h-9 text-accent bg-white/80 dark:bg-black/80 top-2 left-2">
          <MdOutlineReadMore size={24} />
        </div>
      </div>
      <h2
        className={`text-sm px-2 line-clamp-2 break-words ${poppins.className}`}
      >
        {movie.title}
      </h2>
    </div>
  );
}
