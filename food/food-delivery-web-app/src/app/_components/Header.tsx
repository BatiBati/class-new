import { Button } from "@/components/ui/button";
import { Logo } from "./assets/Logo";
import { LocationLogo } from "./assets/Location";
import { RightArrow } from "./assets/RightArrow";
import { ShoppingBox } from "./assets/ShoppingBox";
import { Aman } from "./assets/Aman";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[68px]  flex justify-between items-center pl-[88px] pr-[88px] bg-[#18181B]">
        <Logo />
        <div className="flex gap-3.5">
          <Button className="w-[75px] h-[36px] bg-[#f4f4f5] hover:bg-[#a39c9b] rounded-full text-[#18181B] cursor-pointer">
            Sign up
          </Button>
          <Button className="w-[75px] h-[36px] bg-[#EF4444] hover:bg-[#a39c9b] rounded-full cursor-pointer">
            Log in
          </Button>
        </div>
        {/* <div className="flex gap-3">
          <Button className="w-[251px] h-[36px] bg-white hover:bg-white rounded-full cursor-pointer text-black">
            <LocationLogo />
            <span className="text-[#ef4444] text-[12px] font-normal">
              Delivery address:
            </span>
            <span className="text-[#71717a] text-[12px] font-normal">
              Add location
            </span>
            <RightArrow width="5px" height="10px" />
          </Button>
          <Button className="bg-white hover:bg-white w-9 h-9 rounded-full">
            <ShoppingBox width="100px" height="13px" />
          </Button>
          <Button className="bg-[#EF4444] hover:bg-white w-9 h-9 rounded-full">
            <Aman />
          </Button>
        </div> */}
      </div>
    </div>
  );
};
