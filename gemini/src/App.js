// import logo from './logo.svg';
import './App.css'
import TopSlider from './components/TopSlider'
import NavbarTop from './components/NavbarTop'
import SearchBar from './components/SearchBar'
import HeroProduct from './components/HeroProduct'
import NavbarBottom from './components/NavbarBottom'
import News from './components/News'
import Categories from './components/Categories'


function App() {
  return (
    <div className="App">
      <TopSlider />
      <NavbarTop />
      <SearchBar />
      <HeroProduct />
      <News />
      <Categories />
      <NavbarBottom />
    </div>
  )
}

export default App
