"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { api } from "../../../axios";
import { DownArrowSvg } from "./assets/DownArrowSvg";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type PropsType = {
  avatarButton: boolean;
  setAvatarButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AvatarComp = ({ avatarButton, setAvatarButton }: PropsType) => {
  const [user, setUser] = useState<User>();

  const getUserData = async () => {
    try {
      const response = await api.get(`/auth/get-me`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  const logOutButton = () => {
    setAvatarButton(!avatarButton);
  };

  return (
    <div className="flex flex-row flex-wrap items-center gap-12 ">
      <div className="flex text-[14px] font-medium items-center gap-3 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
