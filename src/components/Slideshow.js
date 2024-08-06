import React, { useState } from 'react';
import './Slideshow.css'; // Import CSS for styling

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/slide1.png',
    '/slide2.png',
    '/slide3.png'
    // Add more images here
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={goToPrevSlide}>❮</button>
      <img src={slides[currentSlide]} alt="Slide" className="slide-image" />
      <button className="next" onClick={goToNextSlide}>❯</button>
    </div>
  );
};

export default Slideshow;
