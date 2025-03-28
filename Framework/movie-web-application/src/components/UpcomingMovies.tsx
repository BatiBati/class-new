"use client";
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
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
  {
    imageUrl: "/images/TheOrder.png",
    rate: 6.9,
    movieName: "The Order",
  },
];

export const UpCominMovies = () => {
  return (
    <div className="p-20 pt-10 pb-10 flex flex- col gap-8 ">
      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {upComing.map((item, index) => {
          return (
            <div key={index}>
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
