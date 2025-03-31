"use client";
import { useState } from "react";
import { DownArrow } from "./assets/DownArrow";
import { TriangleIcon } from "./assets/TriangleIcon";
import { YellowStar } from "./assets/YellowStar";
import { Button } from "./assets/ui/button";

type CarouselItem = {
  image: string;
  movieName: string;
  rate: number;
  about: string;
};

const topMovie: CarouselItem[] = [
  {
    image: "/images/Wicked1.png",
    movieName: "Wicked",
    rate: 6.9,
    about:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
  },
  {
    image: "/images/Gladiator.png",
    movieName: "Gladiator",
    rate: 6.9,
    about:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
  },
  {
    image: "/images/Moana.png",
    movieName: "Moana",
    rate: 6.9,
    about:
      "Elphaba, a mt Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => () => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <div
        className="w-[300%] h-full f-full flex "
        style={{
          transition: "600ms",
          transform: `translateX(calc(-${currentIndex}00%/3))`,
        }}
      >
        {topMovie.map((item, index) => {
          return (
            <div className="w-[100%]  relative flex items-center" key={index}>
              <img src={item.image} className="w-full h-full" />

              <div className="w-[404px] h-[300px] p-2 absolute left-[140px] flex flex-col text-white justify-between ">
                Now playing:
                <span className="text-4xl font-bold text-white">
                  {item.movieName}
                </span>
                <div className="flex items-center font-semibold text-[18px] gap-2">
                  <YellowStar width={23} height={20} />
                  {item.rate}
                  <span className="font-normal opacity-50 text-[16px]">
                    /10
                  </span>
                </div>
                <div className="text-[12px] w-[70%]">{item.about}</div>
                <Button
                  className="w-fit p-2 hover:cursor-pointer"
                  size="icon"
                  variant="secondary"
                >
                  <div>
                    <TriangleIcon />
                  </div>
                  Watch Trailer
                </Button>
              </div>
              {index === 0 && (
                <Button
                  className="absolute right-[44px] -rotate-90 rounded-full hover:cursor-pointer"
                  variant="outline"
                  size="icon"
                  onClick={handleClick(1)}
                >
                  <DownArrow width={10} height={10} />
                </Button>
              )}
              {index === 1 && (
                <>
                  <Button
                    className="absolute right-[44px] -rotate-90 rounded-full hover:cursor-pointer"
                    variant="outline"
                    size="icon"
                    onClick={handleClick(2)}
                  >
                    <DownArrow width={10} height={10} />
                  </Button>
                  <Button
                    className="absolute left-[44px] rotate-90 rounded-full hover:cursor-pointer"
                    variant="outline"
                    size="icon"
                    onClick={handleClick(0)}
                  >
                    <DownArrow width={10} height={10} />
                  </Button>
                </>
              )}
              {index === 2 && (
                <Button
                  className="absolute left-[44px] rotate-90 rounded-full hover:cursor-pointer"
                  variant="outline"
                  size="icon"
                  onClick={handleClick(1)}
                >
                  <DownArrow width={10} height={10} />
                </Button>
              )}

              <div className="absolute bottom-5 w-full flex justify-center ">
                <div className="flex items-center  gap-2 ">
                  <button
                    className="w-3 h-3 rounded-full hover:bg-gray-300 bg-white hover:cursor-pointer"
                    onClick={handleClick(0)}
                  ></button>
                  <button
                    className="w-3 h-3 rounded-full hover:bg-gray-300  bg-white hover:cursor-pointer"
                    onClick={handleClick(1)}
                  ></button>
                  <button
                    className="w-3 h-3 rounded-full hover:bg-gray-300  bg-white hover:cursor-pointer"
                    onClick={handleClick(2)}
                  ></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
