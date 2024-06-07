import { useState, useEffect } from 'react';

function Fav() {
  const [data, setData] = useState([]);
  const [storedItems, setStoredItems] = useState([]);

  const fetchData = async (key) => {
    const url = `http://127.0.0.1:5000/search?query=${key}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData((prevData) => {
        // Avoid duplication by checking if the result already exists
        const newData = [...prevData, ...result];
        return Array.from(new Set(newData.map(JSON.stringify))).map(JSON.parse);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Retrieve all items from localStorage when the component mounts
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items.push({ key, value });
      fetchData(key);
    }
    setStoredItems(items);
  }, []);

  return (
    <div>
      <h1 className="cardHeader">Movies</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fav;

