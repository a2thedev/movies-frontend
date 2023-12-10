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
    try {
      const response = await axios.get("https://localhost:7276/api/movies");

      // console.log(response);
      setMovies(response.data);
    } catch (error) {
      console.warn("Error in fetchMovies request: ", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />

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
