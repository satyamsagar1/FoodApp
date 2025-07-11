import React, { useMemo, useContext } from 'react';
import { food_list } from '../assets/assets';
import { context } from '../context/context';
import './FeaturedDish.css';

const FeaturedDish = () => {
  const { addToCart } = useContext(context);
  // Pick a random dish each render
  const featured = useMemo(() => {
    return food_list[Math.floor(Math.random() * food_list.length)];
  }, []);

  return (
    <div className="featured-dish">
      <img src={featured.image} alt={featured.name} className="featured-dish-img" />
      <div className="featured-dish-info">
        <span className="featured-dish-badge">Dish of the Day</span>
        <h2>{featured.name}</h2>
        <p>{featured.description}</p>
        <button className="featured-dish-btn" onClick={() => addToCart(featured._id)}>Try Now</button>
      </div>
    </div>
  );
};

export default FeaturedDish; 