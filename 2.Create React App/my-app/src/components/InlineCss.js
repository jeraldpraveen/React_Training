import React from "react";
import "./InlineCss.css";

const InlineCss = () => {
  var isValid = true;
  return (
    // <div style={{ backgroundColor: "green", textAlign: "center" }}>
    <div className="inline">
      <h1>InlineCss</h1>
      <label style={{ color: "purple" }}>Label</label>
      <br />
      <label style={{ color: isValid ? "blue" : "red" }}>
        Label With Condition
      </label>
    </div>
  );
};

export default InlineCss;
