"use client";
import { Card } from "../../_components/Card";

type TopRatedMovieItem = {
  imageUrl: string;
  rate: number;
  movieName: string;
};

const topRated: TopRatedMovieItem[] = [
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "The Lord of the Rings: Fellowship of the Kings",
  },
];

export const TopRatedMovies = () => {
  return (
    <div className="p-20 pt-10 pb-10 flex flex- col gap-8 ">
      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {topRated.map((item, index) => {
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
