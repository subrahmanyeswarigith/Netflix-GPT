import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6 bg-black">
      <div>
        <h1 className="font-bold text-white text-3xl p-4 mt-6">{title}</h1>
      </div>
      <div className="flex  overflow-x-scroll hideScrollbar cursor-pointer">
        <div className="flex gap-6">
          {movies?.map((movie) => (
            <MovieCard key={movie} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
