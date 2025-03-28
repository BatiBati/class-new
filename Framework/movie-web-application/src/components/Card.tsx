"use client";

import { YellowStar } from "./assets/YellowStar";
import { UpComingMovieItem } from "./UpcomingMovies";

export const Card = ({ rate, imageUrl, movieName }: UpComingMovieItem) => {
  return (
    <div className="w-[230px] h-fit bg-[#e5e5e5] rounded-2xl overflow-hidden">
      <img src={imageUrl} className="h-[80%] w-full" />
      <div className="p-2">
        <div className="flex gap-1">
          <YellowStar width={16} height={16} />
          <span className="text-[14px]">
            {rate}
            <span className="text-[12px] text-[#9e9e9e] ">/10</span>
          </span>
        </div>
        <h5>{movieName}</h5>
      </div>
    </div>
  );
};
