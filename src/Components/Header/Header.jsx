import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

import './header.scss'
const Header = () => {
    const data = [
        {
            id:1,
            url: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id:2,
            url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
            id:3,
            url: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }
        
        
      ];

  return (
    <div className="header">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            data.map(images =>(
                <SwiperSlide key={images.id}><img src={images.url} alt=''></img></SwiperSlide>
            ))
        }

      </Swiper>
    </div>
  )
}

export default Header