import ChooseActors from "@/components/ChooseActors";
import DividerHeading from "@/components/DividerHeading";
import SingleActor from "@/components/SingleActor";
import getPopularActors from "@/lib/services/getPopularActors";
import { Actor } from "@/types";

type Props = {
  searchParams: {
    actorQuery: string;
  };
};
export default async function Start(props: Props) {
  const { searchParams } = props;
  const data = await getPopularActors();
  const { results }: { results: Actor[] } = data;
  return (
    <div className="max-w-5xl min-h-screen px-4 py-12 mx-auto">
      <div className="flex flex-col">
        <DividerHeading>Choose your favorite actors</DividerHeading>
        <ChooseActors query={searchParams.actorQuery} />
        {!searchParams.actorQuery && (
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
        )}
      </div>
    </div>
  );
}
