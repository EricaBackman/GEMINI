import React from 'react'
import HeroProduct from '../components/HeroProduct'
import News from '../components/News'
import CategoriesCarousel from '../components/CategoriesCarousel'
import carouselData from '../CarouselData'


function Home() {
  return (
    <div className="home">
      <HeroProduct />
      <News />
      <CategoriesCarousel images={carouselData} />
    </div>
  )
}
export default Home
