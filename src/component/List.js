import React, { useState, useEffect } from 'react';


const List = () => {
  const [data, setData] = useState([]);
  const fetchData = async (query = '') => {
    const url = query 
      ? `http://127.0.0.1:5000/search?query=${query}`
      : 'http://127.0.0.1:5000/data';
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);
}

export default List
