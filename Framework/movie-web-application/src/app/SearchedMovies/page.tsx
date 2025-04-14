"use client"
import Link from "next/link";
import { Arrow } from "../MovieGenrePage/assets/Arrow";
import { PageNumber } from "../MovieGenrePage/_components/PageNumber";
import { GenreCard } from "../MovieGenrePage/_components/GenreCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ACCESS_TOKEN } from "../_components/UpcomingMovies";
import { MappedSearchValueType, SearchValueType } from "../_components/Header";



export default function SearchedMovies() {
  const [searchValue, setSearchValue] = useState<SearchValueType[]>([])

  useEffect(() => {
    const getSearchMovie = async () => {
      const { data } = await axios.get<MappedSearchValueType>(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setSearchValue(data.results);

    };
    getSearchMovie();
  }, []);



  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-6 gap-8">
        <div className="text-3xl font-semibold">Search filter</div>
        <div className="flex w-[1280px] justify-between">
          <div className="w-[80%] h-fit text-2xl font-semibold flex flex-col gap-y-6 border-r-2 ">
            <div>
              <div className="flex gap-1">
                {/* {totalTitles} titles in
                {genres
                  .filter((item) => item.id == genreID)
                  .map((el, index) => {
                    return <div key={index}>`{el.name}`</div>;
                  })} */}
              </div>
              <div className="grid grid-cols-4 gap-3 w-full">
                {/* {genreMovies.map((item) => {
                  return (
                    <Link href={`/selectedMoviePage/${item.id}`} key={item.id}>
                      <div className=" h-fit" key={item.id}>
                        <GenreCard
                          imageUrl={item.poster_path}
                          rate={item.vote_average}
                          movieName={item.title}
                        />
                      </div>
                    </Link>
                  );
                })} */}

              </div>
            </div>

            <div className="w-full flex justify-end">
              {/* <PageNumber page={page} setPage={setPage} lastPage={lastPage} /> */}
            </div>

            sss
          </div>
          <div className=" flex flex-col gap-5 w-[40%] pl-4">
            <div className="w-full">
              <p className="w-fit h-fit text-3xl font-semibold">Genres</p>
              <p className="w-fit">See lists of movies by genre</p>
            </div>
            <div className="flex flex-wrap pl-0 w-[400px] gap-x-1.5">
              {/* {genres.map((item) => {
                return (
                  <Link href={`/MovieGenrePage?genre=${item.id}`} key={item.id}>
                    <div className="flex w-fit h-fit p-1.5 ">
                      <button
                        key={item.id}
                        className="flex  w-fit border-[1px] rounded-2xl p-2 py-1 items-center gap-1 border-[#E4E4E7] cursor-pointer hover:bg-[#EFEFEF]"
                        style={
                          genreID == item.id
                            ? { backgroundColor: "black", color: "white" }
                            : {}
                        }
                      >
                        {item.name}
                        {genreID == item.id ? (
                          <Arrow color={"white"} />
                        ) : (
                          <Arrow color={"black"} />
                        )}
                      </button>
                    </div>
                  </Link>
                );
              })} */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
