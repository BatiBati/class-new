"use client";

import { Header } from "@/components/Header";
import { UpCominMovies } from "@/components/UpcomingMovies";

export default function Upcoming() {
  return (
    <>
      <div className="flex flex-col w-full items-center ">
        <Header />

        <div className="w-[50%] h-full flex flex-col ">
          <UpCominMovies />
        </div>
      </div>
    </>
  );
}
