import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h3>Categories</h3>
                <span>Man</span>
                <span>Woman</span>
                <span>Shoes</span>
                <span>Accesories</span>
                <span>New Arrival</span>

            </div>
            <div className="item">
                <h3>Links</h3>
                <span>FAQs</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h3>About</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
            <div className="item">
                <h3>Contact</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <h2 className='logo'>RINDYSTORE</h2>
                <span className='copyright'> @Copyright 2023. All right reserved.</span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer