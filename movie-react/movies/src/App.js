import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const App = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://via.placeholder.com/200",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A sci-fi masterpiece about space and time travel.",
      posterURL: "https://via.placeholder.com/200",
      rating: 9.0,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
