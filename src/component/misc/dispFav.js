import React from 'react'
import Favourite from './Favourite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Data = ({movies}) =>{


  console.log(movies.error)

  const handleImg= (e) => {
    e.target.src = 'http://0x0.st/Xb-a.jpg';
  };

  return (
    <div className="card-list">
      {movies.error === "No matching data found" && 
      <h1>No Movies Found..</h1>}
      {movies.error != "No matching data found" && movies.map(movie => (
        <div key={movie.id} className="card-parent">

          <img src={movie.banner_image} onError={(e) => handleImg(e)} alt={movie.title} className="card-image" />

          <div className="cardContent">
            <p className="movYear">{movie.year}</p>
            <h1 className="movTitle">{movie.title}</h1>
            <p className="movGenre">{movie.genre}</p>
          </div>

          <div className="movFavorite">
            <Favourite movName={movie.title} movId={movie.id}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;

    // {error && <h2>No Movies Found </h2>}
