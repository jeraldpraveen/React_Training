import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import MoviesProvider from "./context/MoviesContext";

function App() {
  return (
    <div className="App">
      <h1>Movies List</h1>
      <MoviesProvider>
        <Navbar />
        <AddMovie />
        <MoviesList />
      </MoviesProvider>
    </div>
  );
}

export default App;
