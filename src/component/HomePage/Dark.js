import React from 'react';
import Navbar from '../Navbar';
import ImagBg from '../ImagBg';
import Card from '../Card';
import Data from './Data';
import Search from '../Search';
import { useState, useEffect } from 'react';


function HomePage() {

// const [query, setQuery] = useState('');
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








  // const fetchData = async (inp = '') => {
  //   const url = inp 
  //     ? `http://127.0.0.1:5000/search?query=${inp}`
  //     : 'http://127.0.0.1:5000/data';
  //   try {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  //
  // useEffect(() => {
  //   fetchData();
  // }, []);
  //
  // useEffect(() => {
  //   fetchData(query);
  // }, [query]);



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

