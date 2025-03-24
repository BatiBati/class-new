import { DownArrow } from "@/components/assets/DownArrow";
import { MoonIcon } from "@/components/assets/MoonIcon";
import { MovieLogo } from "@/components/assets/MovieLogo";
import { SearchIcon } from "@/components/assets/SearchIcon";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col justify-center ">
      <div className="flex justify-center items-center w-full h-[59px] p-4 ">
        <div className=" flex  justify-between w-[80%] h-9">
          {/* Header */}
          <div className="flex items-center gap-2">
            <MovieLogo />
            <span className="text-[#4338CA] font-bold">Movie Z</span>
          </div>
          <div className="flex gap-4 h-full ">
            <div className=" flex gap-2 items-center justify-center  w-[97px] border-[1px] border-[#b4b3b3] rounded-[8px]">
              <DownArrow />
              <span className=" ">Genre</span>
            </div>
            <div className=" flex items-center gap-2 pl-3 border-[1px] border-[#b4b3b3] rounded-[8px] w-[370px]">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search..."
                className="text-gray h-full w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-2 border-2 border-[#E4E4E7] rounded-[10px]">
            <MoonIcon />
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  );
}
