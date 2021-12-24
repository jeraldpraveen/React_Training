import React, { Component } from "react";

export const MoviesProvider = React.createContext();

export class MoviesContext extends Component {
  constructor() {
    super();
    this.state = {
      director: "Shankar",
      movie: "Gentleman",
    };
  }

  render() {
    return <div></div>;
  }
}

export default MoviesContext;
