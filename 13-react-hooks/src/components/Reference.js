import React, { Component } from "react";

export class Reference extends Component {
  onFocus = () => {
    this.refs.text1.focus();
  };

  render() {
    return (
      <div>
        <input ref="text"></input>
        <button onClick={this.onFocus}>Focus</button>
        <input ref="text1"></input>
      </div>
    );
  }
}

export default Reference;
