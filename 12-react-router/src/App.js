import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" component={Home} exact />
          <Route path="/contactus" component={ContactUs} exact />
          <Route path="/services" component={Services} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
