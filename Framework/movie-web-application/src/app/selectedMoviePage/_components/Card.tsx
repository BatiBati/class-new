"use client";

import { YellowStar } from "@/app/_components/assets/YellowStar";

type CardType = {
  rate: number;
  imageUrl: string;
  movieName: string;
};

export const Card = ({ rate, imageUrl, movieName }: CardType) => {
  return (
    <div className="w-[190px] h-fit bg-[#e5e5e5] rounded-2xl overflow-hidden dark:bg-[#27272A]">
      <img
        src={`https://image.tmdb.org/t/p/original${imageUrl}`}
        className="h-[80%] w-full"
      />
      <div className="p-2">
        <div className="flex gap-1">
          <YellowStar width={16} height={16} />
          <span className="text-[14px]">
            {rate}
            <span className="text-[12px] text-[#9e9e9e] "> / 10 </span>
          </span>
        </div>
        <div className="h-6 overflow-hidden">{movieName}</div>
      </div>
    </div>
  );
};
