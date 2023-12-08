const movieItem = ({ title }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="movie-item">
      <span>{title}</span>
      <button onClick={handleClick}>Favorite</button>
    </div>
  );
};

export default movieItem;
