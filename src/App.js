import React, { useState } from "react";
import logo from "./logo.svg";
import MovieInput from "./MovieInput/MovieInput";
import Movies from "./Movies/Movies";
import "./App.css";
import { useFetchMovies } from "./client/client";

function App() {
  const [movie, setMovie] = useState("");
  const [apikey, setApikey] = useState("");
  const result = useFetchMovies(movie, apikey);

  const movies = result.Search.map(movie => movie.Title);
  const saveMovie = (movie, apikey) => {
    setMovie(movie);
    setApikey(apikey);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <MovieInput saveMovie={saveMovie} />
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
