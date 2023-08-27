import ChooseActors from "@/components/ChooseActors";
import Container from "@/components/Container";
import DividerHeading from "@/components/DividerHeading";
import QueryProvider from "@/components/Providers/QueryProvider";
import SingleActor from "@/components/SingleActor";
import Steps from "@/components/Steps";
import getPopularActors from "@/lib/services/getPopularActors";
import { Actor } from "@/types/Actor";

type Props = {
  searchParams: {
    query: string;
  };
};
export default async function Actors(props: Props) {
  const { searchParams } = props;
  const data = await getPopularActors();
  const { results }: { results: Actor[] } = data;
  return (
    <>
      <QueryProvider>
        <Steps />
      </QueryProvider>
      <Container className="min-h-screen pb-12">
        <div className="flex flex-col">
          <DividerHeading>1. Choose your favorite actors</DividerHeading>
          <span className="mt-2 text-sm">Select at least 3 actors</span>
          <ChooseActors query={searchParams.query} />
          {!searchParams.query && (
            <div className="grid grid-cols-3 gap-2 gap-y-8 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-8">
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
      </Container>
    </>
  );
}
