import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../images/Logos/LOGO1.png'
import ReactSwitch from 'react-switch'
import { ColorContext } from '../context/ColorContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const { theme, toggleTheme } = useContext(ColorContext)
  return (
    <div>
      <NavbarWrap className="header-top">
        <NavbarLinkWrap>
          <NavbarTopHeader1 className="navbar-header">
           <Link to={"/"} className='link'>
           <h3>GEMINI</h3>
           </Link>
          </NavbarTopHeader1>
          <NavLogo>
          <Link to={"/"} className='link'>
            <img className="nav-logo" src={logo} alt="Logo of Moon" />
          </Link>
          </NavLogo>
          <Switch className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} onColor='#9F97BF' offColor='#9F97BF' uncheckedIcon='🌙' checkedIcon='🌞' height={25} width={50} />
          </Switch>
          </NavbarLinkWrap>
      </NavbarWrap>
    </div>
  )
}

export default Navbar

const NavbarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #353240;
  height: 3rem;
  width: 100%;
  margin: 0;
  padding: 0;

  .lable {
    color: #d4c9ff;
    font-size: 1rem;
  }
`
const NavbarLinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

`
const Switch = styled.div`
position: absolute;
right: 10px;
`
const NavbarTopHeader1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4c9ff;
.link {
  text-decoration: none;
}
  &.navbar-header h3 {
    font-family: 'El Messiri', sans-serif;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    color: #d4c9ff;
  }
`
const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  margin-bottom: 5px;

  &.nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15px;
    width: 15px;
  }
`
