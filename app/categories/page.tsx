import ChooseCategories from "@/components/ChooseCategories";
import DividerHeading from "@/components/DividerHeading";
import QueryProvider from "@/components/QueryProvider";
import Steps from "@/components/Steps";

export default async function Categories() {
  return (
    <>
      <QueryProvider>
        <Steps />
      </QueryProvider>
      <div className="max-w-5xl min-h-screen px-4 pb-12 mx-auto">
        <div className="flex flex-col">
          <DividerHeading>3. Choose your favorite categories</DividerHeading>
          <span className="mt-2 text-sm">Select at least 3 categories</span>
          <ChooseCategories />
        </div>
      </div>
    </>
  );
}
