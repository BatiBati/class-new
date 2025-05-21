import { CoffeeSVG } from "@/app/_components/assets/CoffeeSVG";

export const LeftSide = () => {
  return (
    <div className="w-[50%] bg-[#FBBF24] relative p-10">
      <div className="text-4 font-middle flex gap-2 absolute left-10 top-10">
        <CoffeeSVG /> Buy Me Coffee
      </div>
      <div className="w-full h-full flex justify-center items-center">s</div>
    </div>
  );
};
