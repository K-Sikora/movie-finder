"use client";
import List from "@/components/List";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";

export default function ListPage() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }
  return <List />;
}
