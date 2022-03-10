import React, { Component } from "react";

export class Reference extends Component {
  input = React.createRef();

  onFocus = (value) => {
    if (value === 1) {
      this.refs.text1.focus();
    } else {
      this.input.current.focus();
    }
  };

  render() {
    return (
      <div>
        <input ref="text1"></input>
        <br />
        <input ref={this.input}></input>
        <br />
        <button onClick={() => this.onFocus(1)}>Focus1</button>
        <br></br>
        <button onClick={() => this.onFocus(2)}>Focus2</button>
        <br></br>
      </div>
    );
  }
}

export default Reference;
