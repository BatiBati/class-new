"use client";
import { TopRatedMovies } from "@/components/TopRatedMovies";

export default function TopRated() {
  return (
    <>
      <div className="flex flex-col w-full items-center ">
        <div className="w-fit h-full flex flex-col p-8">
          <TopRatedMovies />
        </div>
      </div>
    </>
  );
}
