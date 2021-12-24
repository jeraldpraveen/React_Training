import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const Navbar = () => {
  const context = useContext(MoviesContext);
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h1>Navbar</h1>
      <h3>The total Movies Count : {context.movies.length}</h3>
    </div>
  );
};

export default Navbar;
