"use client";
import { YellowStar } from "@/app/_components/assets/YellowStar";
import { ACCESS_TOKEN } from "@/app/upComing/_components/UpcomingMoviesAll";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Triangle } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { SeeMore } from "@/app/_components/SeeMore";

type Params = {
  id: string;
};

type GenresType = {
  id: number;
  name: string;
};

type MovieDetails = {
  adult: boolean;
  title: string;
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  vote_count: number;
  genres: GenresType[];
};

export default function SelectedMoviePage() {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [crew, setCrew] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setMovie(data);
    };

    const getNames = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(data);
    };

    getMovie();
    getNames();
  }, [id]);

  useEffect(() => {
    const getSimilarMovies = async () => {
      const { data } = await axios.get(
        `https://image.tmdb.org/t/p/movie/${id}/similar?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(data);
    };
  }, []);

  return (
    <div className="py-16 w-full flex justify-center">
      <div className="w-[1080px] gap-6 flex flex-col">
        <div className=" w-full">
          <div className="flex justify-between gap-6">
            <div>
              <div className="text-4xl font-bold">{movie?.title}</div>
              <div>{movie?.release_date}</div>
            </div>
            <div className="flex flex-col p-2">
              <p className="text-[12px]">Rating</p>
              <div className="flex flex-col w-fit">
                <div className="flex items-center gap-3">
                  <div>
                    <YellowStar width={28} height={48} />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <span className="text-[18px] font-semibold">
                        {movie?.vote_average.toFixed(1)}
                      </span>
                      <span className="opacity-15 text-[16px] "> / 10</span>
                    </div>

                    {movie?.vote_count}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-8">
            <div>
              <img
                className="w-[290px] h-[428px]"
                alt="Poster Picture"
                src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
              />
            </div>

            <div className="relative">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + movie?.backdrop_path
                }
                alt="PosterBig"
                className="w-[760px] h-[428px]"
              />
              <div className="absolute left-6 bottom-6  flex items-center gap-2">
                <div>
                  <Button className="bg-white w-10 h-10 rounded-full rotate-90 cursor-pointer ">
                    <Triangle />
                  </Button>
                </div>
                <div className="text-[16px] text-white w-fit">
                  Play trailer
                  <span className="text-red-500">Trailer run time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex w-fit gap-3">
            {movie?.genres.map((item) => {
              return (
                <Badge
                  key={item.id}
                  className="cursor-pointer"
                  variant={"outline"}
                >
                  {item.name}
                </Badge>
              );
            })}
          </div>
          <div className="text-[14px font-normal]">{movie?.overview}</div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-2 w-full border-b-[1px] border-gray pb-2">
            <div className="w-[100px]  text-[16px] font-bold">Director</div>
            <div>Director name</div>
          </div>
          <div className="flex gap-2 w-full border-b-[1px] border-gray pb-2">
            <div className="w-[100px]  text-[16px] font-bold">Writers</div>
            <div>Writers name</div>
          </div>
          <div className="flex gap-2 w-full border-b-[1px] border-gray pb-2">
            <div className="w-[100px]  text-[16px] font-bold">Stars</div>
            <div>Stars name</div>
          </div>
        </div>

        <div className="w-full bg-amber-300">
          <div className="flex justify-between bg-amber-100">
            <div className="bg-amber-400 text-2xl font-semibold">More like this</div>
            <Button className="bg-amber-400 text-[14px] font-medium">See more <SeeMore href="" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
