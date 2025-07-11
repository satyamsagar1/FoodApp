import React from 'react'
import './exploremenu.css'
import {menu_list} from '../assets/assets'

const exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid excepturi, obcaecati esse blanditiis sapiente recusandae eveniet dolorem accusantium nulla.</p>
        <div className="explore-menu-list">
           {menu_list.map((item, index) => {
            return(
                <div  onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} className="explore-menu-item" key={index}>
                    <img className={category===item.menu_name ?"active":""} src={item.menu_image} alt={item.menu_name} />
                    <h3>{item.menu_name}</h3>
                    {/* <p>{item.description}</p> */}
                    {/* <span>${item.price}</span> */}
                </div>
            )
           })}
        
        </div>
        <hr />
    </div>
  )
}

export default exploremenu