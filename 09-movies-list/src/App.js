import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <Navbar />
      <AddMovie />
      <MoviesList />
    </div>
  );
}

export default App;
