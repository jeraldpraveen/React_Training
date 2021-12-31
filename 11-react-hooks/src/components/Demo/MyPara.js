import React from "react";

const MyPara = (props) => {
  console.log("MYPARA RUNNING");
  return <p>{props.children}</p>;
};

export default MyPara;
