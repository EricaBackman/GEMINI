import React from 'react'
import HeroProduct from '../components/HeroProduct'
import NavbarBottom from '../components/NavbarBottom'
import News from '../components/News'
import CategoriesCarousel from '../components/CategoriesCarousel'
import carouselData from '../CarouselData'


function Home() {
  return (
    <div className="home">
      <HeroProduct />
      <News />
      <CategoriesCarousel images={carouselData} />
      <NavbarBottom />
    </div>
  )
}
export default Home
