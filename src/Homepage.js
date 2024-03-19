import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Homepage = ({ movieList, clickedMovie }) => {
  function capitalizeString(inputString) {
    return inputString.toUpperCase();
  }

  return (
    <div className='grid-container'>
      {movieList.map(movie => (
        <div key={movie.id}>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={`/title/${movie.title}`} onClick={() => clickedMovie(movie) }>
            <li>{capitalizeString(movie.title)}</li>
            <img src={`${movie.poster}`} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;