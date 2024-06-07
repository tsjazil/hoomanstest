import React, { useState } from 'react';
import Favourite from './Favourite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Data = ({movies, setMovies}) =>{
// const Data = ({ movies }) => {
  const [filtered, setFiltered] = useState([]);

  // Filter the movies based on 'fav' property
  const filteredMovies = movies.filter(item => item.fav === true);

  const handleImg = (e) => {
    e.target.src = 'http://0x0.st/Xb-a.jpg';
  };

  return (
    <div className="card-list">
      {filteredMovies.length === 0 && <h1>No favorite movies found.</h1>}

      {/* Use filteredMovies directly in the map */}
      {filteredMovies.map(movie => (
        <div key={movie.id} className="card-parent">
          <img src={movie.banner_image} onError={handleImg} alt={movie.title} className="card-image" />
          <div className="cardContent">
            <p className="movYear">{movie.year}</p>
            <h1 className="movTitle">{movie.title}</h1>
            <p className="movGenre">{movie.genre}</p>
          </div>
          <div className="movFavorite">
            <Favourite movies={movies}  setMovies={setMovies} movId={movie.id}/>
          </div>
        </div>
      ))}
      {filteredMovies.length === 0 && <h1></h1>}
    </div>
  );
};

export default Data;
            // <Favourite movName={movie.title} movId={movie.id} />
