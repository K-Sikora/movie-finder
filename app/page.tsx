import Hero from "@/components/Homepage/Hero";
import Overview from "@/components/Homepage/Overview";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import getPopularMovies from "@/lib/services/getPopularMovies";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
export default async function Home() {
  const { results } = await getPopularMovies();
  return (
    <main className="min-h-screen -mt-20 bg-background">
      <Hero />
      {/* <div className="flex gap-8 flex-col p-8 border justify-center rounded-md max-w-[450px] h-96">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold md:text-xl">
            Movie Recommender
          </h1>
          <p className="text-sm">
            You can either create an account and save your movies or continue
            without signing in.
          </p>
        </div>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
        <div className="flex items-center justify-center">
          <span className="h-[1px] bg-input w-full"></span>
          <span className="px-2 font-medium">OR</span>
          <span className="h-[1px] bg-input w-full"></span>
        </div>
        <Link
          href="/actors"
          className={`${buttonVariants({ variant: "outline" })}`}
        >
          Continue
        </Link>
      </div> */}
      <Overview movies={results} />
    </main>
  );
}
