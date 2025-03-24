import { DownArrow } from "./assets/DownArrow";
import { TriangleIcon } from "./assets/TriangleIcon";
import { YellowStar } from "./assets/YellowStar";

export const Carousel = () => {
  return (
    <div className="w-full h-[600px] overflow-scroll bg-amber-400">
      <div className="w-[300%] h-full f-full flex">
        <div className="w-[100%]  relative flex items-center">
          <img src="./images/Wicked1.png" className="w-full h-full" />

          <div className="w-[404px] h-[300px] p-2 absolute left-[140px] flex flex-col text-white justify-between ">
            Now playing:
            <span className="text-4xl font-bold text-white">WICKED</span>
            <div className="flex items-center font-semibold text-[18px] gap-2">
              <YellowStar />
              6.9<span className="font-normal opacity-50 text-[16px]">/10</span>
            </div>
            <div className="text-[12px] w-[70%]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </div>
            <div className="flex gap-2 h-10 py-2 px-2 items-center bg-white w-fit rounded-2xl">
              <div>
                <TriangleIcon />
              </div>
              <div className="text-black">Watch Trailer</div>
            </div>
          </div>
          <div className="absolute right-[44px] -rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <DownArrow />
          </div>

          <div className="absolute bottom-5 w-full flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
            </div>
          </div>
        </div>
        <div className="w-[100%]  relative flex items-center">
          <img src="./images/Wicked1.png" className="w-full h-full" />

          <div className="w-[404px] h-[300px] p-2 absolute left-[140px] flex flex-col text-white justify-between ">
            Now playing:
            <span className="text-4xl font-bold text-white">WICKED</span>
            <div className="flex items-center font-semibold text-[18px] gap-2">
              <YellowStar />
              6.9<span className="font-normal opacity-50 text-[16px]">/10</span>
            </div>
            <div className="text-[12px] w-[70%]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </div>
            <div className="flex gap-2 h-10 py-2 px-2 items-center bg-white w-fit rounded-2xl">
              <div>
                <TriangleIcon />
              </div>
              <div className="text-black">Watch Trailer</div>
            </div>
          </div>
          <div className="absolute right-[44px] -rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <DownArrow />
          </div>

          <div className="absolute bottom-5 w-full flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
            </div>
          </div>
        </div>
        <div className="w-[100%] relative flex items-center">
          <img src="./images/Wicked1.png" className="w-full h-full" />

          <div className="w-[404px] h-[300px] p-2 absolute left-[140px] flex flex-col text-white justify-between ">
            Now playing:
            <span className="text-4xl font-bold text-white">WICKED</span>
            <div className="flex items-center font-semibold text-[18px] gap-2">
              <YellowStar />
              6.9<span className="font-normal opacity-50 text-[16px]">/10</span>
            </div>
            <div className="text-[12px] w-[70%]">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </div>
            <div className="flex gap-2 h-10 py-2 px-2 items-center bg-white w-fit rounded-2xl">
              <div>
                <TriangleIcon />
              </div>
              <div className="text-black">Watch Trailer</div>
            </div>
          </div>
          <div className="absolute right-[44px] -rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full ">
            <DownArrow />
          </div>

          <div className="absolute bottom-5 w-full flex justify-center">
            <div className="flex items-center gap-2">
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
