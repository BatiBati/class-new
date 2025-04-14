"use client";

import { MoonIcon, SearchIcon } from "lucide-react";
import { MovieLogo } from "../assets/MovieLogo";
import { Button } from "../assets/ui/button";
import { Input } from "@/app/_components/assets/ui/input";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IsDarkContext } from "../Provider";
import axios from "axios";
import { ACCESS_TOKEN } from "../../upComing/_components/UpcomingMoviesAll";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RightArrow } from "../assets/RightArrow";
import { Arrow } from "../../MovieGenrePage/assets/Arrow";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

type JumpToHomePage = {
  href: string;
};
export type MovieGenres = {
  genres: GenresFromData[];
};

type GenresFromData = {
  id: number;
  name: string;
};

export const Header = ({ href }: JumpToHomePage) => {
  const { isDark } = useContext(IsDarkContext);
  const { setIsDark } = useContext(IsDarkContext);
  const [genre, setGenre] = useState<GenresFromData[]>([]);
  const searchParam = useSearchParams();
  const genreID = searchParam.get("genre") || 0;
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const getMoviesGenre = async () => {
      const { data } = await axios.get<MovieGenres>(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setGenre(data.genres);
    };
    getMoviesGenre();
  }, []);

  const handleEventChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => { }, [])

  console.log(searchValue);

  return (
    <div className="flex items-center justify-center w-full h-[59px] mt-7  pt-0 pb-0">
      <div className=" flex  justify-between w-[1280px] h-9">
        <Link href={href}>
          <div className="flex items-center gap-2 ">
            <MovieLogo stroke={"#4338CA"} width={20} height={20} />
            <span className="text-[#4338CA] font-bold ">Movie Z</span>
          </div>
        </Link>
        <div className="flex gap-4 h-full">
          <div className="flex flex-col gap-3 ">
            <Popover>
              <div>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="cursor-pointer">
                    <div className="rotate-90">
                      <RightArrow />
                    </div>
                    Genre
                  </Button>
                </PopoverTrigger>
                <div className="w-fit h-fit">
                  <PopoverContent className="w-fit ">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Genres</h4>
                        <p className="text-sm text-muted-foreground">
                          See lists of movies by genre
                        </p>
                      </div>
                      <div className="border-[1px] border-solid"></div>
                      <div className="grid grid-cols-5 gap-3 ">
                        {genre.map((item) => {
                          return (
                            <Link
                              href={`/MovieGenrePage?genre=${item.id}`}
                              key={item.id}
                            >
                              <button
                                className="flex w-fit border-[1px] rounded-2xl p-2 py-0 items-center gap-1 border-[#E4E4E7] cursor-pointer hover:bg-[#EFEFEF]"
                                style={
                                  genreID == item.id
                                    ? {
                                      backgroundColor: "black",
                                      color: "white",
                                    }
                                    : {}
                                }
                              >
                                {item.name}
                                {genre ? (
                                  <Arrow color={"white"} />
                                ) : (
                                  <Arrow color={"black"} />
                                )}
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </PopoverContent>
                </div>
              </div>
            </Popover>
          </div>

          <div className="flex items-center relative w-[500px] p-3">
            <div className="p-1">
              <SearchIcon width={20} height={20} />
            </div>

            <Input
              type="search"
              placeholder="Search..."
              className="absolute w-full pl-7"
              onChange={handleEventChange}
            />
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="hover:cursor-pointer"
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          <MoonIcon />
        </Button>
      </div>
    </div>
  );
};
