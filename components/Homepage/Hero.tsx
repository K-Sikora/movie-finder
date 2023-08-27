import Link from "next/link";
import Container from "../Container";
import { Button, buttonVariants } from "../ui/button";

export default function SimpleSlider() {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 z-10 flex w-full h-full bg-black/60">
        <Container className="flex flex-col items-center justify-center w-full h-full gap-8 text-center text-white md:text-left md:items-start">
          <h1 className="text-4xl font-black uppercase sm:text-6xl md:text-8xl">
            Movie <br />{" "}
            <span className="text-transparent duration-300 font-outline-2 hover:text-white">
              recommender
            </span>
          </h1>
          <p className="md:text-lg">
            <span className="block mb-2 text-lg md:text-2xl">
              Easy way to find a movie based on your favorite
              actors/movies/genres.
            </span>
            You can either create an account and save your movies or continue
            without signing in.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/actors"
              className={`text-foreground ${buttonVariants({
                variant: "outline",
                size: "lg",
              })}`}
            >
              Continue
            </Link>
            <Button
              size="lg"
              className="bg-transparent border border-white"
            >
              Sign in
            </Button>
          </div>
        </Container>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="object-cover w-full h-full"
          muted
          loop
          autoPlay
          src="./assets/bg.m4v"
        ></video>
      </div>
    </div>
  );
}
