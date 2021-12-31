import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParaHandler}>Para Hide/Show</Button>
    </div>
  );
}

export default App;

// let obj1 = {};
// let obj2 = {};
// obj1 === obj2;
//obj2 = obj1;
// obj1 === obj2;

// The Closure Compiler compiles JavaScript into compact, high-performance code.
// The compiler removes dead code and rewrites and minimizes what's left so that it downloads and runs quickly.
//  It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.
