import React, { Component } from "react";

export class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Hello" };
  }

  render() {
    return <div>{this.state.name} component</div>;
  }
}

export default Hello;
