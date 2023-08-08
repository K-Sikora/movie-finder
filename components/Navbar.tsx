import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center h-20 border-b bg-background">
      <div className="flex items-center justify-between w-full max-w-5xl px-4 mx-auto">
        <Link
          className="flex items-center gap-2 text-sm font-bold text-transparent bg-primary md:text-lg bg-gradient-to-t from-primary to-accent text-clip bg-clip-text"
          href="/"
        >
          <Image
            priority
            src="/logo.svg"
            alt="site logo"
            height={40}
            width={40}
            className="w-6 mx-auto md:w-8"
          />
          Movie Recommender
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
