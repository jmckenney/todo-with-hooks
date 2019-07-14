import React, { useState } from "react";
import logo from "./logo.svg";
import MovieInput from "./MovieInput/MovieInput";
import Movies from "./Movies/Movies";
import "./App.css";
import { useFetchMovies } from "./client/client";
import Modal from "@material-ui/core/Modal";

function App() {
  const [movie, setMovie] = useState("");
  const [apikey, setApikey] = useState("");
  const [isLoading] = useState(false);
  const result = useFetchMovies(movie, apikey);

  const movies = result.Search.map(movie => movie.Title);
  const saveMovie = (movie, apikey) => {
    setMovie(movie);
    setApikey(apikey);
  };
  const modalStyle = {
    position: "absolute",
    left: "50vw",
    top: "50vh",
    width: "auto",
    height: "50px",
    backgroundColor: "white",
    alignSelf: "center",
    transform: "translateX(-50%) translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3em",
    borderRadius: "1em"
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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isLoading}
      >
        <div style={modalStyle}>Loading...</div>
      </Modal>
    </div>
  );
}

export default App;
