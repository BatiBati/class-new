"use client";
import { ACCESS_TOKEN } from "@/app/upComing/_components/UpcomingMoviesAll";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Params = {
  id: string;
};

type MovieDetails = {
  adult: boolean;
  title: string;
  id: number;
  overview: string;
  poster_path: string;
};

export default function SelectedMoviePage() {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

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
    getMovie();
  }, [id]);
  return (
    <div className="py-16 w-full flex justify-center">
      <div className="flex items-center gap-12 w-[1440px]">
        <img
          className="w-[300px] h-[400px]"
          alt=""
          src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">{movie?.title}</h1>

          <p className="text-secondary-foreground">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}
