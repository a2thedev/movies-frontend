import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/Movieinfo";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMovies = async () => {
    const response = await axios.get("https://localhost:7276/api/movies");
    console.log(response);
  };
  useEffect(() => {}, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />
      <button onClick={fetchMovies}>fetch Movies</button>
      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie} />
      </div>
    </div>
  );
}

export default App;
