import React, { Component } from "react";
import Hello from "./Hello";

export class Reference extends Component {
  input = React.createRef();
  hello = null;
  onFocus = (value) => {
    if (value === 1) {
      this.refs.text1.focus();
    }
    if (value === 2) {
      this.input.current.focus();
    } else {
      this.hello.setState({ name: "Test" });
    }
  };

  onHello = (comp) => {
    if (comp) {
      this.hello = comp;
    }
  };

  render() {
    return (
      <div>
        <Hello ref={this.onHello} />
        <input ref="text1"></input>
        <br />
        <input ref={this.input}></input>
        <br />
        <button onClick={() => this.onFocus(1)}>Focus1</button>
        <br></br>
        <button onClick={() => this.onFocus(2)}>Focus2</button>
        <br></br>
        <button onClick={() => this.onFocus(3)}>Change</button>
        <br></br>
      </div>
    );
  }
}

export default Reference;
