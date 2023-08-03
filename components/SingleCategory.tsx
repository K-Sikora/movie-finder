"use client";
import { update, remove } from "@/redux/features/categories-slice";
import { useDispatch } from "react-redux";
import { Poppins } from "next/font/google";
import { AppDispatch, useAppSelector } from "@/redux/store";
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
type Props = {
  category: {
    id: string;
    name: string;
  };
};
export default function SingleCategory(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { category } = props;
  const categories = useAppSelector((state) => state.categoriesReducer);
  return (
    <div
      onClick={() => {
        const isInArray = categories.some(
          (categoryElement) => categoryElement.id === category.id
        );
        if (isInArray) {
          dispatch(remove(category.id));
        } else {
          dispatch(update(category));
        }
        console.log(categories);
      }}
      className={`p-2 duration-200 border-2 rounded-lg shadow-md cursor-pointer hover:opacity-90 hover:border-primary ${
        categories.some((categoryElement) => categoryElement.id === category.id)
          ? "border-primary"
          : ""
      } group`}
    >
      <h2
        className={`text-sm px-2 line-clamp-2 break-words ${poppins.className}`}
      >
        {category.name}
      </h2>
    </div>
  );
}
