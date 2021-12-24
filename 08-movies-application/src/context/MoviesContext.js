import React, { Component } from "react";

export const MoviesContext = React.createContext();

export class MoviesProvider extends Component {
  constructor() {
    super();
    this.state = {
      director: "Shankar",
      movie: "Gentleman",
      changeMovie: this.changeMovie,
      changeDirector: this.changeDirector,
    };
  }

  changeMovie = (movie) => {
    this.setState({ movie });
  };

  changeDirector = (director) => {
    this.setState({ director });
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
