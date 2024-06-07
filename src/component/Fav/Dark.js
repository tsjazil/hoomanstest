import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
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
  // useEffect(() => {
  //   // Function to update data when localStorage changes
  //   const updateData = () => {
  //     const items = [];
  //     for (let i = 0; i < localStorage.length; i++) {
  //       const key = localStorage.key(i);
  //       items.push(key); // Push the key into items array
  //     }
  //     setStoredItems(items); // Set storedItems state after populating items array
  //
  //     // Fetch data for each key in localStorage
  //     items.forEach(async (key) => {
  //       try {
  //         const response = await fetch(`http://127.0.0.1:5000/search?query=${key}`);
  //         const result = await response.json();
  //         setData((prevData) => {
  //           const newData = [...prevData, ...result];
  //           return Array.from(new Set(newData.map(JSON.stringify))).map(JSON.parse);
  //         });
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     });
  //   };
  //
  //   // Initial data fetch
  //   updateData();
  //
  //   // Event listener for changes in localStorage
  //   window.addEventListener('storage', updateData);
  //
  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('storage', updateData);
  //   };
  // }, []);


  return (
    <div>
      <h1 className="cardHeader">Movies</h1>
      <Data movies={data} setMovies={setData} />
    </div>
  );
};

export default Fav;
      // <Data movies={data} />
