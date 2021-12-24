import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const MoviesList = () => {
  const context = useContext(MoviesContext);

  const moviesList = context.movies.map((movie) => {
    return (
      <div>
        <h1>The Movie Name is {movie.movieName}</h1>
        <h1>The Director Name is {movie.directorName}</h1>
      </div>
    );
  });
  return (
    <div style={{ backgroundColor: "greenyellow" }}>
      <h1>MoviesList</h1>
      {moviesList}
    </div>
  );
};

export default MoviesList;
