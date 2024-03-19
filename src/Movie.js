import React, { useState, useEffect } from 'react';

const Movie = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/movies/${movie}`)
    .then(response => response.json())
    .then(response => setSelectedMovie(response))
    // .then(response => console.log(selectedMovie))
    // function capitalizeString(inputString) {
    //   return inputString.toUpperCase();
    // }
  }, [movie])

 if (selectedMovie === '') {
  return (
    <p>Loading...</p>
  )
  return (
    <div className="movie-info">
      <div className="details-pane">
        <div className="details-text">
          
          {/* <ul>
            {selectedMovie.map((details, index) => {(
              <li key={index}>{details}</li>)}
            )}
          </ul> */}

          <ul>
            {selectedMovie.map(detail => {
             
              return(
                <li> {detail}</li>
              )
            })}
          </ul> 

          {/* <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.plot}</p>
          <img src={selectedMovie.poster} alt={selectedMovie.title} /> */}
        </div>
      </div>
    </div>
  );
};

export default Movie;



{/* <Route path='/movie/:selectedMovie' element ={ <Movie/>} /> */}
{/* <Route path='/wallets/:walletID' element ={ <Product/>} /> */}



// {movie.info.map((details, index) => (
//     <li key={index}>{details}</li>