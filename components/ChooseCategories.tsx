import { Category } from "@/types";
import getCategories from "@/lib/services/getCategories";
import SingleCategory from "./SingleCategory";

export default async function ChooseCategories() {
  const data = await getCategories();
  console.log(data);
  const { genres }: { genres: Category[] } = data;
  return (
    <div className="flex flex-wrap gap-2 my-6 gap-y-4">
      {genres.map((category) => (
        <SingleCategory
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}
