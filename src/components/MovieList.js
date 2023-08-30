import React, { useState } from 'react';
import './MovieList.css';

const MovieList = (props) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (movie) => {
    const newFavoritesList = [...favorites, movie];
    setFavorites(newFavoritesList);
  };
  console.log(favorites);
  if (props.type === 'movies') {
    return (
      <>
        {props.movies.map((movie, index) => (
          <div className="mList img-container" key={index}>
            <img src={movie.Poster} alt="" />
            <div
              className="overlay"
              onClick={() => addToFavorites(movie.imdbID)}
            >
              Add to Favorites
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {props.movies.map((movie, index) => (
          <div className="mList img-container" key={index}>
            <img src={movie.Poster} alt="" />
            <div
              className="overlay"
              onClick={() => addToFavorites(movie.imdbID)}
            >
              Remove from Favorites
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default MovieList;
