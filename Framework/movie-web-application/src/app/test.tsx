// "use client";

// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

// export type Movie = {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   popularity: number;
//   poster_path: string;
//   title: string;
//   overview: string;
// };

// type Response = {
//   results: Movie[];
// };

// export const UpComingMovies = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);

//   useEffect(() => {
//     const getMoviesByAxios = async () => {
//       const { data } = await axios.get<Response>(
//         "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
//         {
//           headers: {
//             Authorization: `Bearer ${ACCESS_TOKEN}`,
//           },
//         }
//       );

//       setMovies(data.results);
//     };
//     getMoviesByAxios();
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <h1>Upcoming</h1>

//         <Button>
//           <span className="text-xs">See all</span>
//         </Button>
//       </div>

//       <div className="grid grid-cols-5">
//         {movies.map((movie) => (
//           <div key={movie.id}>
//             <img
//               src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
//             />

//             <p>{movie.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
