import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import header3 from '../assets/header3.jpg';
import header4 from '../assets/header4.jpg';

const images = [header1, header2, header3,header4];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header' id="header">
      <div className="header-carousel-wrapper">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Header"
            className={`header-carousel-img${current === idx ? ' active' : ''}`}
          />
        ))}
      </div>
      <div className="header-carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${current === idx ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <a href="#explore-menu"><button >View Menu</button></a>
      </div>
    </div>
  );
};

export default Header;