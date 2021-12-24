import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const B = () => {
  const stateObject = useContext(MoviesContext);

  const changeHandler = () => {
    stateObject.changeDirector("James");
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>This is B Component</h1>
      <h1>The movie name is {stateObject.movie}</h1>
      <button style={{ margin: "10px" }} onClick={changeHandler}>
        Change Director
      </button>
    </div>
  );
};

export default B;
