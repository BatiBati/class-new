import { DownArrow } from "@/components/assets/DownArrow";
import { MailSvg } from "@/components/assets/MailSvg";
import { MoonIcon } from "@/components/assets/MoonIcon";
import { MovieLogo } from "@/components/assets/MovieLogo";
import { Phone } from "@/components/assets/Phone";
import { RightArrow } from "@/components/assets/RightArrow";
import { SearchIcon } from "@/components/assets/SearchIcon";
import { YellowStar } from "@/components/assets/YellowStar";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { PopularMovies } from "@/components/PopularMovies";
import { TopRatedMovies } from "@/components/TopRatedMovies";
import { UpcominMovies } from "@/components/UpcomingMovies";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className=" w-[1440px] h-full flex flex-col ">
        <div className="flex items-center justify-center w-full h-[59px] mt-7  pt-0 pb-0">
          <div className=" flex  justify-between w-[1280px] h-9">
            <div className="flex items-center gap-2 ">
              <MovieLogo stroke={"#4338CA"} width={20} height={20} />
              <span className="text-[#4338CA] font-bold ">Movie Z</span>
            </div>
            <div className="flex gap-4 h-full ">
              <div className=" flex gap-2 items-center justify-center  w-[97px] border-[1px] border-[#b4b3b3] rounded-[8px]">
                <DownArrow />
                <span>Genre</span>
              </div>
              <div className=" flex items-center gap-2 pl-3 border-[1px] border-[#b4b3b3] rounded-[8px] w-[450px]">
                <SearchIcon />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="text-gray h-full w-full "
                />
              </div>
            </div>
            <Button size="icon" variant="outline">
              <MoonIcon />
            </Button>
          </div>
        </div>
        <div className="pt-10">
          <Carousel />
        </div>

        <div className="w-[1440px]">
          <UpcominMovies />
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
