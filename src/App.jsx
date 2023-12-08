import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/Movieinfo";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import axios from "axios";
function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Drama",
  };
  const fetchMovies = () => {
    const response = axios.get();
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm />
      </div>
    </div>
  );
}

export default App;
