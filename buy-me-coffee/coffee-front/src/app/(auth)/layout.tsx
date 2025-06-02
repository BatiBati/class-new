"use client";
import { Toaster } from "@/components/ui/sonner";
import { LeftSide } from "./_components/LeftSide";
import { AuthProvider } from "../_providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen ">
      <LeftSide />
      {children}
      <Toaster position="top-center" />
    </div>
  );
}
