import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center h-20 border-b bg-background">
      <div className="flex items-center justify-between w-full max-w-5xl px-4 mx-auto">
        <Link href="/">
          <Image
            priority
            src="/logo.png"
            alt="site logo"
            height={40}
            width={40}
            className="w-10 mx-auto"
          />
        </Link>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
