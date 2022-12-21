import React from 'react'
import Contact from '../../Components/Contact/Contact'
import FeatureProduct from '../../Components/FeaturedProduct/FeatureProduct'
import GridItems from '../../Components/Grid-Items/GridItems'
import Header from '../../Components/Header/Header'
import './home.scss'

const Home = () => {


  return (
    <div className='home'>
        <Header/>
        <FeatureProduct type='Featured Product'/>
        <GridItems/>
        <FeatureProduct type='Trending Product'/>
        <Contact/>
    </div>
  )
}

export default Home