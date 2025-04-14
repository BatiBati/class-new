import { Button } from "@/components/ui/button";
import { Logo } from "./assets/Logo";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[68px]  flex justify-between items-center pl-[88px] pr-[88px] bg-[#18181B]">
        <Logo />
        <div className="flex gap-3.5">
          <Button
            className="w-[75px] h-[36px] bg-[#f4f4f5] rounded-full text-[#18181B] "
            variant={"outline"}
          >
            Sign up
          </Button>
          <Button className="w-[75px] h-[36px] bg-[#EF4444] rounded-full">
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};
