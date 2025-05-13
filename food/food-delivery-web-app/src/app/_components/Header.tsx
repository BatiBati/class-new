import { Button } from "@/components/ui/button";
import { Logo } from "./assets/Logo";
import { LocationLogo } from "./assets/Location";
import { RightArrow } from "./assets/RightArrow";
import { ShoppingBox } from "./assets/ShoppingBox";
import { Aman } from "./assets/Aman";
import Link from "next/link";
import { FoodOrders } from "./FoodOrders";
import { useAuth } from "../_providers/AuthProvider";
import { useState } from "react";
import { sign } from "crypto";

export const Header = () => {
  const { user, signOut } = useAuth();
  const [isUser, setIsUser] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[68px]  flex justify-between items-center pl-[88px] pr-[88px] bg-[#18181B]">
        <Logo width={146} heigth={44} />
        {!user && (
          <div className="flex gap-3.5">
            <Link href={"/AuthenticationPage/signUp"}>
              <Button className="w-[75px] h-[36px] bg-[#f4f4f5] hover:bg-[#a39c9b] rounded-full text-[#18181B] cursor-pointer">
                Sign up
              </Button>
            </Link>
            <Link href={"/AuthenticationPage/signIn"}>
              <Button
                className="w-[75px] h-[36px] bg-[#EF4444] hover:text-[#EF4444] rounded-full cursor-pointer"
                variant="outline"
              >
                Log in
              </Button>
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5 relative">
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

            <div className="flex  flex-col  ">
              <Button
                variant="outline"
                className="bg-[#EF4444] hover:bg-[#EF4444] w-9 h-9 rounded-full "
                onClick={() => setIsUser(!isUser)}
              >
                <Aman />
              </Button>
              {isUser && (<div className="absolute -bottom-29 -right-15 w-fit h-[110px] rounded-xl p-4 bg-white flex flex-col justify-center gap-4">
                <div>{user.email}</div>
                <Button variant="outline" className="rounded-full" onClick={signOut}>Sign out</Button>
              </div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
