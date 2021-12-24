import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const A = () => {
  const stateObject = useContext(MoviesContext);
  return (
    <div>
      <h1>This is A Component</h1>
      <h1>The director name is {stateObject.director}</h1>
    </div>
  );
};

export default A;
