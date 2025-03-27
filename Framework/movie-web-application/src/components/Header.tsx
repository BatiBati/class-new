"use client";

import { MoonIcon, SearchIcon } from "lucide-react";
import { DownArrow } from "./assets/DownArrow";
import { MovieLogo } from "./assets/MovieLogo";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-[59px] mt-7  pt-0 pb-0">
      <div className=" flex  justify-between w-[1280px] h-9">
        <div className="flex items-center gap-2 ">
          <MovieLogo stroke={"#4338CA"} width={20} height={20} />
          <span className="text-[#4338CA] font-bold ">Movie Z</span>
        </div>
        <div className="flex gap-4 h-full ">
          <Button
            size="icon"
            variant="outline"
            className="w-fit p-4 flex items-center"
          >
            <DownArrow width={8} height={4} />
            Genre
          </Button>
          <div className="flex items-center relative w-[500px] p-3">
            <div className="p-1">
              <SearchIcon width={20} height={20} />
            </div>

            <Input
              type="search"
              placeholder="Search..."
              className="absolute w-full pl-7"
            />
          </div>
        </div>
        <Button size="icon" variant="outline">
          <MoonIcon />
        </Button>
      </div>
    </div>
  );
};
