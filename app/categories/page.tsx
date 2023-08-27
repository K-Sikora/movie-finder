import ChooseCategories from "@/components/ChooseCategories";
import Container from "@/components/Container";
import DividerHeading from "@/components/DividerHeading";
import QueryProvider from "@/components/Providers/QueryProvider";
import Steps from "@/components/Steps";

export default async function Categories() {
  return (
    <>
      <QueryProvider>
        <Steps />
      </QueryProvider>
      <Container className="min-h-screen pb-12">
        <div className="flex flex-col">
          <DividerHeading>3. Choose your favorite categories</DividerHeading>
          <span className="mt-2 text-sm">Select at least 3 categories</span>
          <ChooseCategories />
        </div>
      </Container>
    </>
  );
}
