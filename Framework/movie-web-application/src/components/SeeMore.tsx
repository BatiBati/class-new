"use client";
import Link from "next/link";
import { RightArrow } from "./assets/RightArrow";

type Href = {
  href: string;
  movieGenre: string;
};

export const SeeMore = ({ href, movieGenre }: Href) => {
  return (
    <div className="flex justify-between">
      <p className="text-2xl font-semibold">{movieGenre}</p>
      <Link href={href}>
        <button className="flex gap-2 items-center hover:cursor-pointer">
          See more
          <RightArrow />
        </button>
      </Link>
    </div>
  );
};
