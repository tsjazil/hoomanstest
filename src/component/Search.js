import React, { useState, useEffect } from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
// import Thumb from './imgs/demo.jpg';

// library.add(faHeart);

const Search =({query})=> {

  const [movies, setMovies] = useState([]);

  
  const handleImg= (e) => {
    e.target.src = 'http://0x0.st/Xb-a.jpg';
  };

  
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/search?query=${query}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.log('Error'));
  }, []);





  return (
    <div className="card-list">


      {movies.map(movie => (
        <div key={movie.id} className="card-parent">

          <img src={movie.banner_image} onError={(e) => handleImg(e)} alt={movie.title} className="card-image" />

          <div className="cardContent">
            <p className="movYear">{movie.year}</p>
            <h1 className="movTitle">{movie.title}</h1>
            <p className="movGenre">{movie.genre}</p>
          </div>

          <div className="movFavorite">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
