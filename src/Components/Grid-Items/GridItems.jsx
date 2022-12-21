import React from 'react'
import './griditem.scss'

const GridItems = () => {
  return (
    <section id="categories" className='gridItem'>
        <div className="item1">
        <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button> Man</button>
        </div>

        <div className="item2">
        <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button> Shoe</button>
        </div>  
        <div className="item3">
        <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button> Pants</button>
        </div>
        <div className="item4">
        <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
          <button> Hat</button>
        </div>
        <div className="item5">
        <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />

          <button> Woman</button>
        </div>
        <div className="item6">
        <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button> Shirt</button>

        </div>
    </section>
  )
}

export default GridItems