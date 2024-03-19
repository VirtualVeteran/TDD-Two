import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, {useState, useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';
import Movie from './Movie.js'
import Homepage from './Homepage.js';

export default function GMDB() {
  const [movieList, setMovieList] = useState([])
  const[clickedMovie, setClickedMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/movies`)
    .then((res) => res.json())
    .then(data => setMovieList(data))
    .then(() => console.log('this is the list', movieList))
    .catch(error => console.log(error));
  }, []);

  if ( movieList.length === 0){
    return <div>Loading</div>
  }
  
  const handleMovieClick = (event)  => {
    setClickedMovie(event.target.id);
    console.log('this is the selected movie ID: ', clickedMovie);
    // navigate(`/movie/${clickedMovie}`)
  };


  return (
    <>
      <Link className="homeLink" id="movies" to='/'>{" > movies"}</Link>
      <Routes>
        <Route exact path='/' element={ <Homepage movieList={movieList} clickedMovie={handleMovieClick}/>}/>
        <Route path = "/id/:id" element={ <Movie  movie={clickedMovie}/>}/>
      </Routes>
      <ul >
        {/* <li>{clickedMovie.title}</li>
        <li>{clickedMovie.poster}</li>
        <li>{clickedMovie.cast}</li> */}
      </ul>

      <ul>
        {movieList.map(movie => {
          return(
            <div onClick = {(event) => handleMovieClick(event)} className='selectedMovie' id={movie.movieId}>
              <li id={`${movie.movieId}`}>{movie.title}</li>
              <img id={movie.movieId} src={`${movie.poster}`} />
            </div>
          )
        })}
      </ul> 
    </>
  )
}


// <ul onClick = {(e) => selectWallet(e)} className='walletDiv'>
// <li>{item.image}</li>
// <li>{item.name}</li>
// <li>{item.price}</li>
// </ul>