import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <Link to='/'><h1>HungryHub</h1></Link>
                <p>We are a food delivery service that brings delicious meals from your favorite restaurants right to your doorstep. Our mission is to make dining out at home easy and enjoyable.</p>
                <p>Follow us on:</p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" className="social-icon" />
                    {/* <img src={assets.instagram_icon} alt="Instagram" className="social-icon" /> */}
                    <img src={assets.twitter_icon} alt="Twitter" className="social-icon" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" className="social-icon" />
                </div>    
                <form className="footer-newsletter" onSubmit={e => e.preventDefault()}>
                  <label htmlFor="newsletter-email">Subscribe to our newsletter:</label>
                  <div className="footer-newsletter-row">
                    <input id="newsletter-email" type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                
                <p>Privacy Policy | Terms of Service</p>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-251-659-249</li>
                    <li>contact@hungryhub.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>© 2023 HungryHub. All rights reserved.</p>
    </div>
  )
}

export default Footer