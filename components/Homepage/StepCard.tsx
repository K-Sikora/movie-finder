import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";

type Props = {
  title: string;
  description: string;
  img: string;
  index: number;
  length: number;
};
export default function StepCard(props: Props) {
  const { title, description, img, index, length } = props;
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="flex flex-col w-full h-full text-center border-2">
        <Image
          width={1920}
          height={890}
          alt=""
          src={`/assets/${img}`}
          className="object-cover w-full h-full"
        />
        <div className="px-4 py-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="pt-2 text-sm lg:px-8">{description}</p>
        </div>
      </div>
      {index !== length - 1 && (
        <RiArrowRightDoubleFill
          size={42}
          className="my-4 rotate-90 lg:mx-2 xl:mx-4 lg:rotate-0"
        />
      )}
    </div>
  );
}
