"use client";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../_components/Card";
import axios from "axios";
import { IsDarkContext } from "@/app/_components/Provider";
import { MoviesLoader } from "@/app/_components/MoviesLoader";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGYzNDNlZmMwYjgyOTVmMDY3YTBmNDUxYzI2MDAxZSIsIm5iZiI6MTc0MzQwOTc1OC4yMjQsInN1YiI6IjY3ZWE1MjVlNzAwYTZhOTRjNmU1N2VkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bolznFYz55SDoyGnhn3fUZXtdVzZaDyl-l4SzvzDwLc";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

export type Response = {
  results: Movie[];
  total_pages: number;
};

export const UpCominMoviesAll = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [lastPage, setLastPage] = useState<number>(0);

  const { loading, setLoading } = useContext(IsDarkContext);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setLoading(true);
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setLastPage(data.total_pages);

      setMovies(data.results);

      setLoading(false);
    };
    getMoviesByAxios();
  }, [page]);

  return (
    <div className="p-20 pt-10 pb-10 flex flex-col">
      <div className="grid grid-cols-5 grid-rows-2 gap-8 ">
        {loading ? (
          <MoviesLoader />
        ) : (
          movies.map((movie) => {
            return (
              <Link href={`/selectedMoviePage/${movie.id}`} key={movie.id}>
                <div className="cursor-pointer">
                  <Card
                    imageUrl={movie.poster_path}
                    rate={movie.vote_average}
                    movieName={movie.title}
                  />
                </div>
              </Link>
            );
          })
        )}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                handlePage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                handlePage(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => {
                handlePage(lastPage);
              }}
            >
              {lastPage}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
