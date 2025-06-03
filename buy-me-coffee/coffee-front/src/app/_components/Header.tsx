"use client";
import { useState } from "react";
import { CoffeeSVG } from "./assets/CoffeeSVG";
import { AvatarComp } from "./AvatarComp";
import { Button } from "@/components/ui/button";
import { useAuth } from "../_providers/AuthProvider";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [avatarButton, setAvatarButton] = useState<boolean>(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <div className="w-full h-[50%] py-2 px-4 flex justify-center">
      <div className="relative">
        <div className="flex w-[1240px] justify-between">
          <div className="flex text-4 font-bold items-center gap-[8px]">
            <CoffeeSVG />
            Buy Me Coffee
          </div>

          {user ? (
            <AvatarComp
              avatarButton={avatarButton}
              setAvatarButton={setAvatarButton}
              user={user}
            />
          ) : (
            <Button onClick={() => router.push(`/signIn`)} variant={"outline"}>
              Sign in
            </Button>
          )}
        </div>
        {avatarButton && (
          <div className="absolute right-0">
            <Button
              variant={"outline"}
              className="w-[150px]"
              onClick={() => signOut()}
            >
              Log out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
