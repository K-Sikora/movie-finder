import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Actor } from "@/types/Actor";
import { Category } from "@/types/Category";
import { Movie } from "@/types/Movie";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  open: boolean;
  actors: Actor[];
  movies: Movie[];
  categories: Category[];
};
export default function LoadingResultsAnimation(props: Props) {
  const { open, categories, movies, actors } = props;

  const movieNames = movies.map((movie) => movie.title);
  const categoryNames = categories.map((category) => category.name);
  const actorNames = actors.map((actor) => actor.name);

  const names = [...movieNames, ...categoryNames, ...actorNames];

  return (
    <Dialog open={open}>
      <DialogContent className="flex flex-wrap items-center justify-center w-full h-full">
        <div className="relative w-full h-full text-center bg-background">
          {names.map((name, index) => (
            <motion.p
              animate={{ opacity: [0, 1, 0], y: [100, -100] }}
              transition={{
                duration: 1,
                delay: index / 4,
              }}
              className="absolute w-full text-lg -translate-y-1/2 md:text-5xl top-1/2"
              key={name}
            >
              {name}
            </motion.p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
