import { Button } from "@/components/ui/button";
import { Logo } from "./assets/Logo";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[68px] bg-[#18181B] flex items-center pl-[88px] pr-[88px]">
        <Logo />
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};
