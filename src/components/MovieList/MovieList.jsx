import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({}) => {
  const movies = ["Princess Bride", "Forrest Gump", "Iron Man", "Pulp Fiction"];
  const movieItems = movies.map((movie) => (
    <MovieItem key={movie} title={movie} />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div>{movieItems}</div>
    </div>
  );
};

export default MovieList;
