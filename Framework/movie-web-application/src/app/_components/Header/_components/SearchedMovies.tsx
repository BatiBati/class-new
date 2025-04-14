import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../UpcomingMovies";
import axios from "axios";
import { Card } from "../../Card";
import Link from "next/link";
import { Arrow } from "@/app/MovieGenrePage/assets/Arrow";
import { PageNumber } from "@/app/MovieGenrePage/_components/PageNumber";
import { GenresFromData } from "@/app/MovieGenrePage/page";
import { MovieGenres } from "../Header";

export const SearchedMovies = () => {
    const [genres, setGenres] = useState<GenresFromData[]>([]);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        const getMoviesGenre = async () => {
            const { data } = await axios.get<MovieGenres>(
                "https://api.themoviedb.org/3/genre/movie/list?language=en",
                { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
            );
            setGenres(data.genres);
        };
        getMoviesGenre();
    }, []);



    useEffect(() => {
        const getMovies = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                    },
                }
            );
            setSearchValue(data);
            console.log(data);
        }
        getMovies()
    }, [])
    return (<div className="flex justify-center">
        <div className="flex flex-col p-6 gap-8">
            <div className="text-3xl font-semibold">Search filter</div>
            <div className="flex w-[1280px] justify-between">
                <div className=" flex flex-col gap-5 w-[40%] ">
                    <div className="w-full">
                        <p className="w-fit h-fit text-3xl font-semibold">Genres</p>
                        <p className="w-fit">See lists of movies by genre</p>
                    </div>
                    <div className="flex flex-wrap pl-0 w-[400px] gap-x-1.5">
                        {genres.map((item) => {
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
                        })}
                    </div>
                </div>
                <div className="w-[80%] h-fit text-2xl font-semibold flex flex-col gap-y-6 border-l-2 pl-4">
                    <div>
                        <div className="flex gap-1">
                            {totalTitles} titles in
                            {genres
                                .filter((item) => item.id == genreID)
                                .map((el, index) => {
                                    return <div key={index}>`{el.name}`</div>;
                                })}
                        </div>
                        <div className="grid grid-cols-4 gap-3 w-full">
                            {genreMovies.map((item) => {
                                return (
                                    <Link href={`/selectedMoviePage/${item.id}`} key={item.id}>
                                        <div className=" h-fit" key={item.id}>
                                            <Card
                                                imageUrl={item.poster_path}
                                                rate={item.vote_average}
                                                movieName={item.title}
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <PageNumber page={page} setPage={setPage} lastPage={lastPage} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}