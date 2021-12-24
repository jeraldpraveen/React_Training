import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const B = () => {
  const stateObject = useContext(MoviesContext);
  return (
    <div>
      <h1>This is B Component</h1>
      <h1>{stateObject.director}</h1>
    </div>
  );
};

export default B;
