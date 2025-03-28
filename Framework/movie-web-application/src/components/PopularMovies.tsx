"use client";

import { Card } from "./Card";

export type PopularMovieItem = {
  imageUrl: string;
  rate: number;
  movieName: string;
};

const popular: PopularMovieItem[] = [
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
  {
    imageUrl: "/images/shawShank.png",
    rate: 6.9,
    movieName: "The Shawshank Redemption",
  },
];

export const PopularMovies = () => {
  return (
    <div className="p-20 pt-10 pb-10 flex flex- col gap-8 ">
      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {popular.map((item, index) => {
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
