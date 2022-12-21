import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className='Card'>
            <div className="image">
            <img className='main' src={item.img} alt="main" />
            <img className='second' src={item.img2} alt="second" />
            </div>
            <h4 className='productname'>{item.title}</h4>
            <div className="price">
                <h4 className='old'>${item.oldPrice}</h4>
                <h4>${item.newPrice}</h4>
            </div>
        </div>
    </Link>
  )
}

export default Card