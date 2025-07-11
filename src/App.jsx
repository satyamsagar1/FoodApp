import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/home'
import CartPage from './pages/cartpage'
import PlaceOrder from './pages/placeorder'
import Footer from './components/Footer'
import Login from './components/login'


const App = () => {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App