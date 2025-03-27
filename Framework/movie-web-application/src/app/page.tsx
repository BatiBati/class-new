"use client";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { PopularMovies } from "@/components/PopularMovies";
import { TopRatedMovies } from "@/components/TopRatedMovies";
import { UpCominMovies } from "@/components/UpcomingMovies";
import { Header } from "@/components/Header";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className=" w-[1440px] h-full flex flex-col ">
        <Header />
        <div className="pt-10">
          <Carousel />
        </div>
        <div className="w-[1440px]">
          <UpCominMovies />
        </div>

        <div className="w-[1440px]">
          <PopularMovies />
        </div>
        <div className="w-[1440px]">
          <TopRatedMovies />
        </div>
        <div className="w-full flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
