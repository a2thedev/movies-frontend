import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/Movieinfo";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo
        title="Forrest Gump"
        runningTime={142}
        genre="Romantic Drama"
      />
    </div>
  );
}

export default App;
