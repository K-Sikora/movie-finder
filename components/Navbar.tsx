import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center h-20 border-b bg-background">
      <div className="flex items-center justify-between w-full max-w-5xl px-4 mx-auto">
        <Link href="/">Movie Recommender</Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
