import { CoffeeSVG } from "@/app/_components/assets/CoffeeSVG";

export const LeftSide = () => {
  return (
    <div className="w-[50%] bg-[#FBBF24] relative p-10">
      <div className="text-4 font-bold flex gap-2 absolute left-10 top-10">
        <CoffeeSVG /> Buy Me Coffee
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <img src={"/images/LogInLogo.png"} width="240px" height="240px" />
        <div className="w-full flex flex-col items-center gap-[12px]">
          <div className="text-[24px] font-bold">Find your creative work</div>
          <div className="text-[16px] w-[400px] flex text-center ">Accept support. Start a membership. Setup a shop. It’s easier than you think.</div>
        </div>
      </div>
    </div>
  );
};
