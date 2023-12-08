import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies = [], activeIndex, setActiveIndex }) => {
  const movieItems = movies.map((movie, i) => (
    <MovieItem
      key={movie.title}
      title={movie.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div>{movieItems}</div>
    </div>
  );
};

export default MovieList;
