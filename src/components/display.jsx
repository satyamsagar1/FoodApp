import React from 'react'
import { useContext } from 'react'
import { context } from '../context/context'
import './display.css'
import FoodItem from './fooditem'


const display = ({category}) => {

    const {food_list}=useContext(context);

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
            {food_list.map((item,index) => {
              if(category==="All" || item.category===category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })}
        </div>
    </div>
  )
}

export default display