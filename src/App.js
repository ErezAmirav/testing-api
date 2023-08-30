import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=658ce017`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  console.log(movies);
  const addToFavorites = (movie) => {
    const newFavoritesList = [...favorites, movie];
    setFavorites(newFavoritesList);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Movies</h1>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="movies-list">
        <MovieList movies={movies} type={'movies'}/>
      </div>
      {/* <h1>Favorites</h1>
      <div className="movies-list">
      <MovieList movies={movies} type={'favorites'}/>
      </div> */}
    </div>
  );
}

export default App;
