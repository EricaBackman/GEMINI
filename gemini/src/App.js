import './App.css'
import TopSlider from './components/TopSlider'
import NavbarTop from './components/NavbarTop'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <TopSlider />
      <NavbarTop />
      <SearchBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
