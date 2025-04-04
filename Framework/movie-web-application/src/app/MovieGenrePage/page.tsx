"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import { ACCESS_TOKEN } from "../_components/UpcomingMovies"
import { RightArrow } from "../_components/assets/RightArrow"
import { useParams } from "next/navigation"



type MovieGenres = {
    genres: GenresFromData[];
}

type GenresFromData = {
    id: number;
    name: string;
}

type SelectedMoviesGenre = {

}

type Params = {
    id: number
}

// type MovieData = {
//     results: {
//         id: number;
//         title: string;
//         poster_path: string;
//     }[];
// }

export default function MovieGenrePage() {
    const [genre, setGenre] = useState<GenresFromData[]>([]);
    const [selectedGenre, setSelectedGenre] = useState();
    // const { id } = useParams<Params>();


    useEffect(() => {
        const getMoviesGenre = async () => {
            const { data } = await axios.get<MovieGenres>(
                "https://api.themoviedb.org/3/genre/movie/list?language=en",
                { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
            )
            setGenre(data.genres)
        }
        getMoviesGenre();
    }, []);

    useEffect(() => {
        const chosenGenreMovie = async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genre}&page=1`,
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                    },
                }

            )
            setSelectedGenre(data)

        }
        chosenGenreMovie();


    }, []);
    console.log(selectedGenre);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-6 gap-8">
                <div className="text-3xl font-semibold">Search filter</div>
                <div className="flex w-[1280px] ">
                    <div className="w-[30%] flex flex-col gap-5">
                        <div>
                            <p className="w-fit h-fit text-3xl font-semibold">Genres</p>
                            <p className="w-fit">See lists of movies by genre</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 ">
                            {genre.map((item) => {
                                return (
                                    <button
                                        key={item.id}
                                        className=" flex w-fit border-[1px] rounded-2xl p-2 py-0 items-center gap-1 border-[#E4E4E7] cursor-pointer hover:bg-[#EFEFEF]"
                                    >
                                        {item.name}
                                        <RightArrow />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-[70%] h-fit text-2xl font-semibold bg-amber-600">
                        <div>titles animation</div>
                        <div>
                            {/* {selectedGenre.map((item) => {
                                return (
                                    <div key={item.id} className="bg-amber-400">
                                        <img src={`/discover/movie?language=en&with_genres=${item}&page=${item}`} />
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}