"use client";
import { PopularMovies } from "@/components/PopularMovies";

export default function Popular() {
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="w-fit h-full flex flex-col p-8">
        <PopularMovies />
      </div>
    </div>
  );
}
