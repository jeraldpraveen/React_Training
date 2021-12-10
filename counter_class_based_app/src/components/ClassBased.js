import React, { Component } from "react";
import "./ClassBased.css";

class ClassBased extends Component {
  render() {
    return (
      <div className="counter">
        <h1>Counter Application</h1>
        <div className="counter-display">1</div>
        <br />
        <button className="counter-button">Add</button>
        <button className="counter-button">Sub</button>
      </div>
    );
  }
}

export default ClassBased;
