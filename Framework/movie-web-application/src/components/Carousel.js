import { DownArrow } from "./assets/DownArrow";
import { TriangleIcon } from "./assets/TriangleIcon";
import { YellowStar } from "./assets/YellowStar";

const topMovie = [
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
  return (
    <div className="w-full h-[600px] overflow-scroll">
      <div className="w-[300%] h-full f-full flex">
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
                <div className="flex gap-2 h-10 py-2 px-2 items-center bg-white w-fit rounded-2xl hover:bg-[#acacac] hover:cursor-pointer">
                  <div>
                    <TriangleIcon />
                  </div>
                  <button className="text-black hover:text-white hover:cursor-pointer">
                    Watch Trailer
                  </button>
                </div>
              </div>
              {index === 0 && (
                <button className="absolute right-[44px] -rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#d2d2d2]">
                  <DownArrow />
                </button>
              )}
              {index === 1 && (
                <>
                  <button className="absolute left-[44px] rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#d2d2d2]">
                    <DownArrow />
                  </button>
                  <button className="absolute right-[44px] -rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#d2d2d2]">
                    <DownArrow />
                  </button>
                </>
              )}
              {index === 2 && (
                <button className="absolute left-[44px] rotate-90 bg-white w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#d2d2d2]">
                  <DownArrow />
                </button>
              )}

              <div className="absolute bottom-5 w-full flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="w-2 h-2 rounded-full bg-white hover:bg-[#747474] hover:cursor-pointer"></button>
                  <button className="w-2 h-2 rounded-full bg-white hover:bg-[#747474] hover:cursor-pointer"></button>
                  <button className="w-2 h-2 rounded-full bg-white hover:bg-[#747474] hover:cursor-pointer"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
