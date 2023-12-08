import React, { useState } from "react";
import TextField from "../TextField/TextField";

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
      <TextField label="Title" value={title} onChange={setTitle} />
      <TextField
        label="Running Time"
        value={runningTime}
        onChange={setRunningTime}
      />
      <TextField label="Genre" value={genre} onChange={setGenre} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default NewMovieForm;
