import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../context/context'




const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]= useState("Home");
    const{getTotalCartAmount}=useContext(context);

return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="Logo" /> */}
        <Link to='/'><h1 className='logo'>HungryHub</h1></Link>
        <ul className="navbar-menu">
            <a href='/'
                onClick={() => setMenu("Home")}
                className={menu === "Home" ? "active" : ""}
            >
                Home
            </a>
            <a href='#explore-menu'
                onClick={() => setMenu("Menu")}
                className={menu === "Menu" ? "active" : ""}
            >
                Menu
            </a>
            <a href='#blog'
                onClick={() => setMenu("Blog")}
                className={menu === "Blog" ? "active" : ""}
            >
                Blog
            </a>
            <a href='#footer'
                onClick={() => setMenu("Contact-us")}
                className={menu === "Contact-us" ? "active" : ""}
            >
                Contact-us
            </a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
    
        </div>
    </div>
)
}

export default Navbar