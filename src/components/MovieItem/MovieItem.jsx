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
  const activeClass = index === activeIndex ? "active-movie" : "";

  return (
    <div onClick={handleActive} className={`movie-item ${activeClass}`}>
      <span>{title}</span>
      <button className={btnClass} onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

export default MovieItem;
