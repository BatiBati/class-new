import { Button } from "@/components/ui/button";
import { Logo } from "./assets/Logo";
import { LocationLogo } from "./assets/Location";
import { RightArrow } from "./assets/RightArrow";
import { ShoppingBox } from "./assets/ShoppingBox";
import { Aman } from "./assets/Aman";
import Link from "next/link";
import { FoodOrders } from "./FoodOrders";

export const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[68px]  flex justify-between items-center pl-[88px] pr-[88px] bg-[#18181B]">
        <Logo width={146} heigth={44} />
        {/* <div className="flex gap-3.5">
          <Link href={"/AuthenticationPage"}>
            <Button className="w-[75px] h-[36px] bg-[#f4f4f5] hover:bg-[#a39c9b] rounded-full text-[#18181B] cursor-pointer">
              Sign up
            </Button>
          </Link>
          <Button className="w-[75px] h-[36px] bg-[#EF4444] hover:bg-[#a39c9b] rounded-full cursor-pointer">
            Log in
          </Button>
        </div> */}
        <div className="flex gap-5">
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

          <FoodOrders />
          <Button className="bg-[#EF4444] hover:bg-white w-9 h-9 rounded-full">
            <Aman />
          </Button>
        </div>
      </div>
    </div>
  );
};
