"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PropsWithChildren, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "1");

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "1" : "0");
  }, [isDark]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          isDark ? "dark" : ""
        }`}
      >
        <Header href={"/"} setIsDark={setIsDark} isDark={isDark} />
        {children}
        <div className="w-full flex justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
