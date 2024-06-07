// App.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart);

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch('http://127.0.0.1:5000')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movie-list" style={styles.movieList}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          genres={movie.genres}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
};

const MovieCard = ({ title, year, genres, imageUrl }) => {
  return (
    <div className="movie-card" style={styles.movieCard}>
      <img
        src={imageUrl}
        alt={title}
        style={styles.movieCardImage}
      />
      <div style={styles.movieCardDetails}>
        <div style={styles.movieCardYear}>{year}</div>
        <div style={styles.movieCardTitle}>{title}</div>
        <div style={styles.movieCardGenres}>{genres.join(', ')}</div>
      </div>
      <div style={styles.movieCardFavorite}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

const styles = {
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px'
  },
  movieCard: {
    position: 'relative',
    width: '300px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    margin: '10px'
  },
  movieCardImage: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  movieCardDetails: {
    padding: '10px',
    backgroundColor: 'white',
    textAlign: 'left'
  },
  movieCardYear: {
    fontSize: '12px',
    color: 'gray'
  },
  movieCardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
  },
  movieCardGenres: {
    fontSize: '14px',
    color: '#666'
  },
  movieCardFavorite: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    color: 'red'
  }
};

export default App;
