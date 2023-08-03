import ChooseCategories from "@/components/ChooseCategories";
import DividerHeading from "@/components/DividerHeading";
import Steps from "@/components/Steps";

export default async function Categories() {
  return (
    <>
      <Steps />
      <div className="max-w-5xl min-h-screen px-4 pb-12 mx-auto">
        <div className="flex flex-col">
          <DividerHeading>Choose your favorite categories</DividerHeading>
          <ChooseCategories />
        </div>
      </div>
    </>
  );
}
