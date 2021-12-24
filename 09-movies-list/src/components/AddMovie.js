import React, { useState, useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");

  const context = useContext(MoviesContext);

  const movieHandler = (e) => {
    setMovieName(e.target.value);
  };

  const directorHandler = (e) => {
    setDirectorName(e.target.value);
  };

  const addHandler = (event) => {
    var movie = {
      movieName,
      directorName,
    };
    context.addMovie(movie);
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Add Movie</h1>
      <input
        type="text"
        value={movieName}
        onChange={movieHandler}
        placeholder="Movie Name"
      />
      <br />
      <input
        type="text"
        value={directorName}
        onChange={directorHandler}
        placeholder="Director Name"
      />
      <br />
      <button onClick={addHandler}>ADD MOVIE</button>
    </div>
  );
};

export default AddMovie;
