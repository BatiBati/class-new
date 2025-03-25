import { DownArrow } from "@/components/assets/DownArrow";
import { MailSvg } from "@/components/assets/MailSvg";
import { MoonIcon } from "@/components/assets/MoonIcon";
import { MovieLogo } from "@/components/assets/MovieLogo";
import { Phone } from "@/components/assets/Phone";
import { RightArrow } from "@/components/assets/RightArrow";
import { SearchIcon } from "@/components/assets/SearchIcon";
import { YellowStar } from "@/components/assets/YellowStar";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
const upComing = [
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

const popular = [
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/ShawShank.png",
    rate: 6.9,
    movieName: "Dear Santa",
  },
];

const topRated = [
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Santa",
  },
  {
    imageUrl: "/images/LordOfRing.png",
    rate: 6.9,
    movieName: "Dear Santa",
  },
];

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
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-gray h-full w-full "
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-2 border-2 border-[#E4E4E7] rounded-[10px]">
              <MoonIcon />
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Carousel />
        </div>

        <div className="w-[1440px]">
          <div className="p-20 pt-10 pb-10 flex flex-col gap-8 ">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">Upcoming</p>
              <button className="flex gap-2 items-center">
                See more
                <span>
                  <RightArrow />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
              {upComing.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-[230px] h-fit bg-[#e5e5e5] rounded-2xl overflow-hidden">
                      <img src={item.imageUrl} className="h-[80%] w-full" />
                      <div className="p-2">
                        <div className="flex gap-1">
                          <YellowStar width={16} height={16} />
                          <span className="text-[14px]">
                            {item.rate}
                            <span className="text-[12px] text-[#9e9e9e] ">
                              /10
                            </span>
                          </span>
                        </div>
                        <h5>{item.movieName}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[1440px]">
          <div className="p-20 pt-0 pb-10 flex flex-col gap-8 ">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">Popular</p>
              <button className="flex gap-2 items-center">
                See more
                <span>
                  <RightArrow />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
              {popular.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-[230px] h-fit bg-[#e5e5e5] rounded-2xl overflow-hidden">
                      <img src={item.imageUrl} className="h-[80%] w-full" />
                      <div className="p-2">
                        <div className="flex gap-1">
                          <YellowStar width={16} height={16} />
                          <span className="text-[14px]">
                            {item.rate}
                            <span className="text-[12px] text-[#9e9e9e] ">
                              /10
                            </span>
                          </span>
                        </div>
                        <h5>{item.movieName}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[1440px]">
          <div className="p-20 pt-0 pb-10 flex flex-col gap-8 ">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold">Top Rated</p>
              <button className="flex gap-2 items-center">
                See more
                <span>
                  <RightArrow />
                </span>
              </button>
            </div>

            <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
              {topRated.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-[230px] h-fit bg-[#e5e5e5] rounded-2xl overflow-hidden">
                      <img src={item.imageUrl} className="h-[80%] w-full" />
                      <div className="p-2">
                        <div className="flex gap-1">
                          <YellowStar width={16} height={16} />
                          <span className="text-[14px]">
                            {item.rate}
                            <span className="text-[12px] text-[#9e9e9e] ">
                              /10
                            </span>
                          </span>
                        </div>
                        <h5>{item.movieName}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[1440px] h-[280px] bg-[#4338CA] p-20 pt-10 pb-10 flex ">
            <div className="w-fit h-full flex flex-col gap-3">
              <div className="flex gap-3 text-white items-center font-bold">
                <MovieLogo stroke={"#FAFAFA"} width={17} height={17} /> Movie Z
              </div>

              <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
            </div>
            <div className="flex w-full justify-end gap-30">
              <div className="w-fit h-full text-white flex flex-col gap-2">
                Contact information
                <div className="flex items-center gap-4">
                  <MailSvg />
                  <div className="flex flex-col gap-1">
                    <p>Email:</p>
                    <p>support@movieZ.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone />
                  <div className="flex flex-col gap-1">
                    <p>Phone:</p>
                    <p>+976 (11) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="w-fit h-full text-white flex flex-col gap-2">
                Follow us
                <div className="flex gap-2">
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Twitter</p>
                  <p>Youtube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
