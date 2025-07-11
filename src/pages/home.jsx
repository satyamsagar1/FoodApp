import React from 'react'
import './home.css'
import Header from '../components/Header'
import ExploreMenu from '../components/exploremenu'
import Display from '../components/display'
import FeaturedDish from '../components/FeaturedDish';


const home = () => {
    const[category,setCategory] = React.useState('All');
  return (
    <div>
        <Header />
        <FeaturedDish />
        <ExploreMenu category={category} setCategory={setCategory} />
        <Display category={category} />
    </div>
  )
}

export default home