import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("APP RUNNING");

  const toggleParaHandler = useCallback(() => {
    setShowPara((prevShowPara) => !prevShowPara);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
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
