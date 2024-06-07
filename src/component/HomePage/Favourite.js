import React , { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Favourite = ({movies, setMovies, movId}) => {

  const [isFav,setIsFav]=useState(false)

  // const [data, setData] = useState(movie)
  const [iconColor, setIconColor] = useState('#D1D5DB');

  useEffect(() => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movId) {
        return { ...movie, fav: isFav};
      }
      return movie;
    });
    setMovies(updatedMovies);
  },[]);


  const toggleFav = () => {
     
    setIsFav(!isFav)

    const updatedMovies = movies.map((movie) => {
      if (movie.id === movId) {
        return { ...movie, fav: !isFav};
      }
      return movie;
    });
    setMovies(updatedMovies);


    const jsonString = localStorage.getItem('fav');
    const arr = JSON.parse(jsonString) || [];



    // console.log(updatedMovies)
    const movie = updatedMovies.find(item => item.id === movId);
    arr.push(movie.title)
    // console.log(movie)

    
    if(movie.fav){
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
      localStorage.setItem('fav',JSON.stringify(arr))
      // localStorage.setItem('fav',movId) 
      setIconColor('red');
    } else{ 
        localStorage.removeItem(movie.title);
        setIconColor('#D1D5DB');
    }
  }
  

  return(
      <FontAwesomeIcon  style={{ color: iconColor }} onClick={toggleFav} icon={faHeart} />
  );
}

export default Favourite

    // const amovie = { ...movie, 'fav': !isFav};
    // console.log(amovie)
    // localStorage.setItem(movie.id, JSON.stringify(amovie));
    // setData(amovie)
