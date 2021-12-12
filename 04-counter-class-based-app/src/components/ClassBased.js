import React, { Component } from "react";
import "./ClassBased.css";

class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  add = () => {
    this.setState({ number: this.state.number + 1 });
  };

  sub = () => {
    this.state.number > 0 && this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div className="counter">
        <h1>Counter Application</h1>
        <div className="counter-display">{this.state.number}</div>
        <br />
        <button className="counter-button" onClick={this.add}>
          Add
        </button>
        <button className="counter-button" onClick={this.sub}>
          Sub
        </button>
      </div>
    );
  }
}

export default ClassBased;
