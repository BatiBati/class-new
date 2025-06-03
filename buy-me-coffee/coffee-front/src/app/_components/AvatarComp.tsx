"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "../../../axios";
import { DownArrowSvg } from "./assets/DownArrowSvg";
import { Button } from "@/components/ui/button";
import { useAuth, User } from "../_providers/AuthProvider";

type PropsType = {
  avatarButton: boolean;
  setAvatarButton: Dispatch<SetStateAction<boolean>>;
  user: User;
};

export const AvatarComp = ({
  avatarButton,
  setAvatarButton,
  user,
}: PropsType) => {
  const logOutButton = () => {
    setAvatarButton(!avatarButton);
  };

  return (
    <div className="flex flex-row flex-wrap items-center gap-12 ">
      <div className="flex text-[14px] font-medium items-center gap-3 ">
        <Avatar>
          <AvatarImage
            src={`${
              user?.profile?.avatarImage === null
                ? "https://github.com/shadcn.png"
                : user?.profile?.avatarImage
            } `}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {user?.username}
      </div>

      <div onClick={logOutButton} className="flex flex-col ">
        <Button className="w-[2px] h-[2px]" variant={"outline"}>
          <DownArrowSvg />
        </Button>
      </div>
    </div>
  );
};
