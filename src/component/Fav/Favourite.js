import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Favourite = ({movies, setMovies, movId}) => {

  const [isFav,setIsFav]=useState(true)
  const [iconColor, setIconColor] = useState('red');



  const toggleFav = () => {

    setIsFav(false)

    const updatedMovies = movies.map((movie) => {
      if (movie.id === movId) {
        return { ...movie, fav: !isFav};
      }
      return movie;
    });
    setMovies(updatedMovies);

    const movie = updatedMovies.find(item => item.id === movId);
const arr = JSON.parse(localStorage.getItem('fav'));
const newarr = arr.filter(item => item !== movie.title);
localStorage.setItem('fav', JSON.stringify(newarr));
localStorage.setItem('movies', JSON.stringify(updatedMovies));

      setIconColor('#D1D5DB');
    // localStorage.removeItem()
  }
  

  return(
      <FontAwesomeIcon  style={{ color: iconColor }} onClick={toggleFav} icon={faHeart} />
  );
}


export default Favourite

