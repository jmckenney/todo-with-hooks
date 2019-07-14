import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function MovieInput({ saveMovie }) {
  const [value, setValue] = useState();
  const [apikey, setApikey] = useState();
  const handleMovieChange = function(event) {
    setValue(event.target.value);
  };
  const handleApiChange = function(event) {
    setApikey(event.target.value);
  };
  const handleSubmit = function(event) {
    event.preventDefault();
    saveMovie(value, apikey);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          placeholder="Search Movies by Keyword"
          margin="normal"
          onChange={handleMovieChange}
          value={value}
        />
        <TextField
          variant="outlined"
          placeholder="OMDBapi key"
          margin="normal"
          onChange={handleApiChange}
          value={apikey}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MovieInput;
