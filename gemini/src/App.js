// import logo from './logo.svg';
import './App.css'
import TopSlider from './components/TopSlider'
import NavbarTop from './components/NavbarTop'
import SearchBar from './components/SearchBar'
import HeroProduct from './components/HeroProduct'
import NavbarBottom from './components/NavbarBottom'
import News from './components/News'
import CategoriesCarousel from './components/CategoriesCarousel'


function App() {
  return (
    <div className="App">
      <TopSlider />
      <NavbarTop />
      <SearchBar />
      <HeroProduct />
      <News />
      <CategoriesCarousel />
      <NavbarBottom />
    </div>
  )
}

export default App
