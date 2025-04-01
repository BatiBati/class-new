"use client";
import { useEffect, useState } from "react";
import { Card } from "../../_components/Card";
import {
  Movie,
  Response,
  ACCESS_TOKEN,
} from "@/app/upComing/_components/UpcomingMovies";
import axios from "axios";

export const TopRatedMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(data.results);
    };
    getMoviesByAxios();
  }, []);

  return (
    <div className="p-20 pt-10 pb-10 flex flex- col gap-8 ">
      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Card
                imageUrl={movie.poster_path}
                rate={movie.vote_average}
                movieName={movie.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
