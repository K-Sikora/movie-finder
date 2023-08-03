type Props = {
  children: React.ReactNode;
};
export default function DividerHeading(props: Props) {
  return (
    <div className="flex items-center my-8 font-medium sm:text-2xl">
      <span className="pr-2 md:pr-4 min-w-max">{props.children}</span>
      <span className="w-full h-[2px] bg-input"></span>
    </div>
  );
}
