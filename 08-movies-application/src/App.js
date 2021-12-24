import "./App.css";
import A from "./components/A";
import B from "./components/B";
import MoviesProvider from "./context/MoviesContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <MoviesProvider>
        <A />
        <B />
      </MoviesProvider>
    </div>
  );
}

export default App;
