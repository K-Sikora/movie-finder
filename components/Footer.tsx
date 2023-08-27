import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-24 border-t">
      <Container className="flex items-center justify-between h-full">
        <Link
          className="flex items-center gap-2 font-bold text-transparent bg-primary md:text-lg bg-gradient-to-t from-primary to-accent text-clip bg-clip-text"
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
          <span className="hidden md:block">Movie Recommender</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-6 font-medium text-gray-800 dark:text-gray-200 sm:mt-0">
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              API
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
