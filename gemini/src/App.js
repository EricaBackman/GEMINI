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
import { ColorContext } from './context/ColorContext'
import { useState } from 'react'


function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ColorContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
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
    </ColorContext.Provider>
  )
}

export default App
