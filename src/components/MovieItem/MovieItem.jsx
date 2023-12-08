import React, { useState } from "react";
import "./MovieItem.css";
const MovieItem = ({ title, activeIndex, setActiveIndex, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? "active-btn" : "";

  return (
    <div onClick={handleActive} className="movie-item">
      <span>{title}</span>
      <button className={btnClass} onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

export default MovieItem;
