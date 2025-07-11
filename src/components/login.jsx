
import React ,{useState}from 'react'
import './login.css'
import {assets} from '../assets/assets'

const login = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("login");
  return (
    <div className='login'>
        <form action="" className="login-container">
            <div className='login-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
              {currState ==="login" ?<></>: <input type="text" placeholder='Username' required/>}
              <input type="email" placeholder='Email' required/>
              <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
            <div className="login-condition">
              <input type="checkbox" required />
              <p>I agree to the terms and conditions</p>
            </div>
            {currState==="login" ?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Sign Up</span></p>
             :<p>Already have an account? <span onClick={()=>setCurrState("login")}>Login</span></p>
            }
        </form>
    </div>
  )
}

export default login