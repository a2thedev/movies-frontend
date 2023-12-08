import React, { useState } from "react";

const NewMovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      runningTime,
      genre,
    };
    onNewMovie(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Movie</h4>
      <div>
        <label>TItle</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Running Time</label>
        <input
          value={runningTime}
          onChange={(e) => setRunningTime(e.target.value)}
        />
      </div>
      <div>
        <label>Genre</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default NewMovieForm;
