import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  const toggleParaHandler = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPara && <p>This is NEW!!!!</p>}
      <Button onClick={toggleParaHandler}>Para Hide/Show</Button>
    </div>
  );
}

export default App;
