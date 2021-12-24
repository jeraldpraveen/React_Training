import React, { Component } from "react";

export const MoviesContext = React.createContext();

export class MoviesProvider extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      addMovie: this.addMovie,
    };
  }

  addMovie = (movie) => {
    console.log(movie);
  };

  render() {
    return (
      <MoviesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

export default MoviesProvider;
