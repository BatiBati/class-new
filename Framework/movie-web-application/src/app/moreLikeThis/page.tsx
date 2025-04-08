"use client";

import axios from "axios";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "../_components/UpcomingMovies";
import { useParams } from "next/navigation";

type ParamsType = {
  id: string;
};

export default function MoreLikeThis() {
  const { id } = useParams<ParamsType>();

  useEffect(() => {
    const getSimilarMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
    };
    getSimilarMovie();
  }, [id]);
  console.log(id);

  return "Hello";
}
