"use client";
import { AiOutlineCheck } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { InfoDrawer } from "./Drawer";
export default function Steps() {
  const pathname = usePathname();

  const dispatch = useDispatch<AppDispatch>();
  const categories = useAppSelector((state) => state.categoriesReducer);
  const movies = useAppSelector((state) => state.moviesReducer);
  const actors = useAppSelector((state) => state.actorsReducer);
  const stepsInfo = [
    {
      name: "actors",
      isFinished: actors.length >= 3,
    },
    {
      name: "movies",
      isFinished: movies.length >= 3,
    },
    {
      name: "categories",
      isFinished: categories.length >= 3,
    },
  ];
  return (
    <div className="flex flex-col max-w-5xl gap-12 px-4 py-12 mx-auto">
      <div className="flex flex-wrap items-start gap-8">
        {stepsInfo.map((step) => (
          <div
            key={step.name}
            className="flex items-center gap-2"
          >
            <div
              className={`flex items-center justify-center border-2 rounded-full w-10 h-10 ${
                step.isFinished ? "bg-primary text-white" : "bg-background"
              }`}
            >
              <AiOutlineCheck className="w-4 h-4" />
            </div>
            <span className="font-medium capitalize md:text-lg">
              {step.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full">
        {pathname !== "/actors" && (
          <Link
            href={pathname === "/movies" ? "/actors" : "/movies"}
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Go back
          </Link>
        )}
        <Link
          href={pathname === "/actors" ? "/movies" : "/categories"}
          className={`${buttonVariants({ variant: "default" })} ml-auto`}
        >
          Next step
        </Link>
      </div>
      <InfoDrawer />
    </div>
  );
}
