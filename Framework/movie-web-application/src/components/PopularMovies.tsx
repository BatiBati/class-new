import { RightArrow } from "./assets/RightArrow";
import { YellowStar } from "./assets/YellowStar";

type PopularMovieItem = {
  imageUrl: string;
  rate: number;
  movieName: string;
};

const popular: PopularMovieItem[] = [
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

export const PopularMovies = () => {
  return (
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
                      <span className="text-[12px] text-[#9e9e9e] ">/10</span>
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
  );
};
