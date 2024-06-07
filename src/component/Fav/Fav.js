import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Data from './Data';

function Fav() {
  const [data, setData] = useState([]);
  const [storedItems, setStoredItems] = useState([]);
  const val = JSON.parse(localStorage.getItem('movies'))
  useEffect(()=>{
    if(val)
      setData(JSON.parse(localStorage.getItem('movies')))
    else
      console.log('error')
  })


  return (
    <div>
      <Navbar />
      <h1 className="cardHeader">Movies</h1>
      <Data movies={data} setMovies={setData} />
    </div>
  );
};

export default Fav;
