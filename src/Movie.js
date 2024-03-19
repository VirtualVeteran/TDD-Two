import React, { useState } from 'react';

const Movie = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState('');

  function capitalizeString(inputString) {
    return inputString.toUpperCase();
  }

  return (
    <div className="movie-info">
      <div className="details-pane">
        <div className="details-text">
          <h1>{capitalizeString(movie.movieId)}</h1>
          <p>{movie.title}</p>
           <li>{selectedMovie}</li>
            <div className="poster-pane">
         {selectedMovie === '' ? (
            <img src={process.env.PUBLIC_URL + movie.poster} alt={movie.title} />
          ) : (
            <img src={process.env.PUBLIC_URL + movie.poster} alt={movie.title} />
          )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Movie;
