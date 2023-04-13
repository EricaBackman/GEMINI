import './App.css'
import TopSlider from './components/TopSlider'
import NavbarTop from './components/NavbarTop'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavbarBottom from './components/NavbarBottom'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Products from './pages/Products'
import ProductItem from './pages/ProductItem'

function App() {
  return (
    <div className="App">
      <TopSlider />
      <NavbarTop />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:id" element={<ProductItem />} />
      </Routes>
      <Footer />
      <NavbarBottom />
    </div>
  )
}

export default App
