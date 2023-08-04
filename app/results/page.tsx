"use client";
import { useAppSelector } from "@/redux/store";

export default function Results() {
  const results = useAppSelector((state) => state.resultsReducer);
  console.log(results);

  return (
    <>
      {results.map((result) => (
        <div key={result.page}>{result.page}</div>
      ))}
    </>
  );
}
