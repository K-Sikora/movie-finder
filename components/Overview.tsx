import { Movie } from "@/types/Movie";
import ScrollCarousel from "./ScrollCarousel";
import { FiPlay } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import Container from "./Container";
import { Button, buttonVariants } from "./ui/button";
import StepCard from "./Homepage/StepCard";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const steps = [
  {
    title: "1. Choose actors",
    description:
      "Select your favorite actors and actresses whose performances resonate with your cinematic preferences.",
    img: "choose-actors.jpg",
  },
  {
    title: "2. Choose movies",

    description:
      "Pick some of your all-time favorite movies that reflect your taste.",
    img: "choose-movies.jpg",
  },
  {
    title: "3. Choose categories",

    description:
      "Select the genres that resonate with you. Your genre preferences provide valuable insight for the algorithm.",
    img: "choose-categories.jpg",
  },
];
export default function Overview({ movies }: { movies: Movie[] }) {
  return (
    <div className="pt-16 md:pt-24">
      <h2 className="px-4 text-3xl font-semibold text-center md:text-5xl">
        Only 3 steps to receive your personalized movie list!
      </h2>
      <section className="grid grid-cols-1 px-4 mt-8 lg:mt-16 lg:grid-cols-3">
        {steps.map((step, index, array) => (
          <StepCard
            key={step.title}
            {...step}
            index={index}
            length={array.length}
          />
        ))}
      </section>
      <Container className="flex flex-col items-center justify-center gap-4">
        <RiArrowDownDoubleFill
          className="my-8 md:my-12"
          size={64}
        />
        <h5 className="pb-8 text-2xl text-center md:text-3xl">
          20 Personalized movies for you to watch
        </h5>
        <div className="relative flex items-center justify-center group">
          {movies.splice(0, 3).map((movie, index) => (
            <div key={movie.title}>
              <img
                className={`w-32 h-48 sm:w-48 sm:h-72 ${
                  index === 0
                    ? "-rotate-12 group-hover:-rotate-[16deg] duration-500"
                    : index === 2
                    ? "rotate-12 group-hover:rotate-[16deg] duration-500"
                    : "absolute z-10 left-1/2 -translate-x-1/2 -top-5 group-hover:-top-7 duration-500"
                }`}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <div className="flex flex-col pt-32 md:flex-row md:pt-42">
          <div className="flex justify-center w-full md:w-1/2 md:justify-normal">
            <div className="flex items-center justify-center h-64 mb-6 rounded-full md:mb-0 bg-gradient-to-br from-primary to-secondary md:h-72 lg:h-96 aspect-square">
              <img
                src="/assets/popcorn.svg"
                alt=""
                className="h-full p-6"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-4 text-center md:text-left md:items-start md:justify-center md:gap-8 md:w-1/2">
            <h3 className="text-3xl md:text-5xl">
              <span className="text-accent">900K+</span> Movies
            </h3>
            <p>
              Movie recommender leverages an external API featuring an extensive
              collection of over 900,000 movies. Using this vast resource, the
              algorithm carefully searches through the options to create a
              personalized list of films that perfectly match your choices.
            </p>
            <Link
              href="/actors"
              className={`text-foreground w-64 ${buttonVariants({
                size: "lg",
              })}`}
            >
              Start now
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center md:items-start pt-36 md:pt-44 md:flex-row">
          <div className="flex flex-col items-center w-full gap-4 text-center md:items-start md:text-left md:gap-8 md:w-1/2 md:justify-center">
            <h3 className="text-3xl md:text-5xl">
              Create an account and store your movies
            </h3>
            <p>
              Sign up and enjoy the convenience of storing your chosen movies.
              With your personalized account, you gain the power to revisit the
              movies you have handpicked.
            </p>
            <Button className="flex items-center justify-center gap-1 w-52 md:w-64">
              Create an account
              <BiRightArrowAlt size={22} />
            </Button>
          </div>
          <div className="flex mb-8 md:mb-0 md:justify-end md:w-1/2">
            <div className="flex items-center justify-center h-64 rounded-full bg-gradient-to-tl from-primary to-secondary md:h-72 lg:h-96 aspect-square">
              <img
                src="/assets/movies.svg"
                alt=""
                className="h-full p-6"
              />
            </div>
          </div>
        </div>
      </Container>
      <ScrollCarousel movies={movies} />
      <div className="py-8 mb-16 md:mb-24 bg-secondary dark:bg-primary">
        <Container className="flex md:h-[350px] w-full text-center md:text-left">
          <div className="flex flex-col w-full h-full md:items-center md:flex-row">
            <div className="flex flex-col w-full gap-4 md:gap-8 md:w-1/2">
              <h3 className="text-3xl md:text-5xl">Try it out now</h3>
              <p>
                Why wait? Begin your personalized movie journey today. Get
                hands-on with movie selections curated to match your taste. Your
                cinematic choices are just moments away. Dive in and explore
                movies made just for you!
              </p>
            </div>
            <div className="flex justify-center w-full mt-8 md:justify-end md:mt-0 md:w-1/2">
              <Link
                href="/actors"
                className="relative flex items-center justify-center p-4 rounded-full h-52 md:h-72 aspect-square bg-gradient-to-b group from-primary to-secondary"
              >
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full duration-300 rounded-full group-hover:bg-black/20 bg-black/50">
                  <FiPlay className="text-6xl text-white" />
                </div>
                <img
                  alt=""
                  className="h-full rounded-full"
                  src="/assets/action.svg"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
