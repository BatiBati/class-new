"use client";

import { Settings } from "lucide-react";
import { FoodMenu } from "./AdminPage/_components/assets/FoodMenu";
import { AdminPageLogo } from "./AdminPage/_components/assets/Logo";
import { Van } from "./AdminPage/_components/assets/Van";

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col gap-10 h-full w-fit py-9 px-5">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px]">
            <AdminPageLogo />
          </div>
          <div>
            <div className="text-[18px] font-semibold">NomNom</div>
            <div className="text-[12px] text-[#71717A]">Swift delivery</div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-[10px] py-2 px-6 cursor-pointer">
            <FoodMenu />
            <div className="text-[14px] text-[#09090b]">Food menu</div>
          </div>
          <div className="flex items-center gap-[10px] py-2 px-6 cursor-pointer">
            <Van />
            <div className="text-[14px] text-[#09090b]">Orders</div>
          </div>
          <div className="flex items-center gap-[10px] py-2 px-6 cursor-pointer">
            <Settings />
            <div className="text-[14px] text-[#09090b]">Settings</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
