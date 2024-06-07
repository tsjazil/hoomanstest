import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/data') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img src={movie.banner_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
