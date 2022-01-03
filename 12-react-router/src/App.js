import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <h1>REACT ROUTER</h1>
      <Navbar />
      <Home />
      <ContactUs />
      <Services />
    </div>
  );
}

export default App;
