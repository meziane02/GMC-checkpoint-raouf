import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
