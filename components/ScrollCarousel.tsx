"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Movie } from "@/types/Movie";
export default function ScrollCarousel({ movies }: { movies: Movie[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-200%", "200%"]);
  return (
    <motion.div
      ref={ref}
      className="flex justify-center gap-4 py-32 overflow-hidden pointer-events-none md:py-48 md:gap-8"
    >
      {movies.map((movie) => (
        <motion.div
          key={movie.id}
          style={{ x }}
          className="md:min-w-[15rem] min-w-[10rem] h-64 md:h-96"
        >
          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
