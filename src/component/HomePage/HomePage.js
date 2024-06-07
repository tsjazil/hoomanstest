import React from 'react';
import Navbar from '../Navbar';
import ImagBg from '../ImagBg';
import Data from './Data';
import { useState, useEffect } from 'react';


function HomePage() {

const [data, setData] = useState([]);
const [query, setQuery] = useState('');

  const fetchData = async (inp = '') => {
    const url = inp 
      ? `https://bashbuster-testmovie.hf.space/search?query=${inp}`
      : 'https://bashbuster-testmovie.hf.space/data';
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const dat = localStorage.getItem('movies');
    
    if (!dat) {
      fetchData();
    }else{
    setData(JSON.parse(dat))
    }
  }, []);

  useEffect(() => {
      fetchData(query);
  }, [query]);


return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
      {query === '' && (
        <>
          <ImagBg />
        </>
      )}
      <h1 className="cardHeader">Movies</h1>
      <Data movies={data} setMovies={setData} />
  </div>
);
};


export default HomePage;

