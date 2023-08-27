"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function TmdbInfo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>API</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>API information</AlertDialogTitle>
          <AlertDialogDescription>
            All movie information is fetched from{" "}
            <a
              className="text-gray-800 hover:underline dark:text-gray-300"
              href="https://www.themoviedb.org"
            >
              TMDB (The Movie Database).
            </a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
