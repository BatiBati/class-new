"use client";

import Link from "next/link";
import { RightArrow } from "./assets/RightArrow";
import { YellowStar } from "./assets/YellowStar";
import { Card } from "./Card";

export type UpComingMovieItem = {
  imageUrl: string;
  rate: number;
  movieName: string;
};

const upComing: UpComingMovieItem[] = [
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "Dear Santa",
  },
];

export const UpCominMovies = () => {
  return (
    <div className="p-20 pt-10 pb-10 flex flex-col gap-8 ">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Upcoming</p>
        <Link href={"/upComing"}>
          <button className="flex gap-2 items-center">
            See more
            <RightArrow />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {upComing.map((item, index) => {
          return (
            <div key={index} className="bg-amber-600">
              <Card
                imageUrl={item.imageUrl}
                rate={item.rate}
                movieName={item.movieName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
