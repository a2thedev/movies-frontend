const MovieInfo = ({ movieObj }) => {
  return (
    <div>
      <h4>{movieObj.title}</h4>
      <div>
        <div>
          <span>Running Time</span>
          <span>{movieObj.runningTime}</span>
        </div>
        <div>
          <span>Genre</span>
          <span>{movieObj.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
