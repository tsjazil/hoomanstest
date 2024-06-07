import React, { useState } from 'react';
import './ImageSlider.css';
import img1 from './imgs/reel1.jpg';
import img2 from './imgs/reel2.png';

const images = [
  {img1},
  {img2},
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt="slide" className="slide-image" />
      </div>
      <div className="navigation">
        {images.map((_, index) => (
          <span
            key={index}
            className={`nav-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <button onClick={goToPrevious} className="nav-button prev-button">❮</button>
      <button onClick={goToNext} className="nav-button next-button">❯</button>
    </div>
  );
};

export default ImageSlider;
