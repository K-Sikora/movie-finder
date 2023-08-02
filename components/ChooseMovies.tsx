import { Actor } from "@/types";
import SingleActor from "./SingleActor";
import getActorsByName from "@/lib/services/getActorsByName";
import SearchMovie from "./SearchMovie";

type Props = {
  query: string;
};
export default async function ChooseMovies(props: Props) {
  const { query } = props;
  const data = await getActorsByName(query);
  const { results }: { results: Actor[] } = data;
  return (
    <>
      <SearchMovie />
      <div className="grid grid-cols-3 gap-2 gap-y-8 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8">
        {results
          .filter((actor) => actor.profile_path)
          .map((actor) => (
            <SingleActor
              key={actor.id}
              actor={actor}
            />
          ))}
      </div>
    </>
  );
}
