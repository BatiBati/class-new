"use client";
import { UpCominMovies } from "@/app/upComing/_components/UpcomingMovies";

export default function Upcoming() {
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="w-fit h-full flex flex-col p-8">
        <UpCominMovies />
      </div>
    </div>
  );
}
