"use client";
import { Carousel } from "@/components/Carousel";
import { TopRatedMovies } from "@/components/TopRatedMovies";
import { UpCominMovies } from "@/components/UpcomingMovies";
import { SeeMore } from "@/components/SeeMore";
import { PopularMovies } from "@/components/PopularMovies";

export default function Home() {
  return (
    <div className="w-screen flex justify-center ">
      <div className=" w-[1440px] h-full flex flex-col ">
        <div className="pt-10">
          <Carousel />
        </div>
        <div className="w-[1440px]">
          <div className="pt-10 pl-20 pr-20 flex flex-col gap-8">
            <SeeMore href={"/upComing"} movieGenre="Upcoming" />
          </div>
          <UpCominMovies />
        </div>
        <div className="w-[1440px]">
          <div className="pt-10 pl-20 pr-20 flex flex-col gap-8">
            <SeeMore href={"/popular"} movieGenre="Popular" />
          </div>
          <PopularMovies />
        </div>
        <div className="w-[1440px]">
          <div className="pt-10 pl-20 pr-20 flex flex-col gap-8">
            <SeeMore href={"/topRated"} movieGenre="Top Rated" />
          </div>
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
}
