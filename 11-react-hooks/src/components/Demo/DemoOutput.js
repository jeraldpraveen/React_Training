import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyPara>{props.show ? "This is new!" : ""}</MyPara>;
};

export default DemoOutput;
