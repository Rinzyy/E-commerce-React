import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
            <div className="item">
                    <img src='/img/en.png' alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <a className='link' href='#featured'>Featured</a>
                </div>
                <div className="item">
                    <a className='link' offset href='#categories'>Categories</a>
                    {/* <Link className='link' to='#Trending'>Trending</Link> */}
                </div>
            </div>
            <div className="center">
                <Link className='link' to='/'><h1>RINDYSTORE</h1></Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to='/'>Home</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/'>About</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/'>Contact</Link>
                </div>
                <div className="item">
                    <Link className='link' to='/'>Stores</Link>
                </div>
                <div className="icon">
                    <SearchIcon/>
                    <Person2OutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon">
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar