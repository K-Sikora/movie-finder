"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export default function SearchActor() {
  const searchParams = useSearchParams();
  const actorQuery = searchParams.get("actorQuery");
  console.log(actorQuery);
  const router = useRouter();
  const [search, setSearch] = useState(actorQuery ? actorQuery : "");
  const [query] = useDebounce(search, 500);
  useEffect(() => {
    if (!query) {
      router.push("/actors");
    } else {
      router.push(`/actors?query=${query}`);
    }
  }, [query, router]);
  return (
    <Input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder="Search actor..."
      className="my-6"
    />
  );
}
