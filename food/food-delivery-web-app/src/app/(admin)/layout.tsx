"use client";

import { Settings } from "lucide-react";
import { FoodMenu } from "./AdminPage/_components/assets/FoodMenu";
import { AdminPageLogo } from "./AdminPage/_components/assets/Logo";
import { Van } from "./AdminPage/_components/assets/Van";
import Link from "next/link";
import { useState } from "react";
import { AdminPageStyleChange } from "./AdminPage/_components/AdminPageStyleChange";
import { Toaster } from "@/components/ui/sonner";

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
      <AdminPageStyleChange />

      {children}
      <Toaster position="top-center" />
    </div>
  );
}
