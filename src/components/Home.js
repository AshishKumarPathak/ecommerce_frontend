// Home.js

import React from 'react';
import Slider from 'react-slick';
import { dummyProducts } from './Product'; // Import the dummy data
import Footer from './Footer'; // Import the Footer component
import './Home.css'; // Import CSS for styling

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      <h1>Welcome to Flipkart</h1>
      <Slider {...settings} className="slider">
        <div>
          <img src="./slide1.png" alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src="./slide2.png" alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src="./slide3.png" alt="Slide 3" className="slider-image" />
        </div>
      </Slider>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="featured-list">
          {dummyProducts.slice(0, 5).map(product => (
            <div key={product.id} className="featured-item">
              <img src={product.image} alt={product.name} className="featured-image" />
              <h3 className="featured-name">{product.name}</h3>
              <p className="featured-price">Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Home;
