import React from 'react'
import styled from 'styled-components'
import logo from '../images/Logos/LOGO1.png'

function Navbar() {
  return (
    <div>
      <NavbarWrap>
          <NavbarLinkWrap>
            <NavbarTopHeader1 className="navbar-header">
              <h3>GEMINI</h3>
            </NavbarTopHeader1>
            <NavLogo>
              <img className="nav-logo" src={logo} alt="Logo of Moon" />
            </NavLogo>
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
`

const NavbarLinkWrap = styled.div`
  display: flex;
`

const NavbarTopHeader1 = styled.div`
  display: flex;
  align-items: center;
  color: #d4c9ff;

  &.navbar-header h3 {
    font-family: 'El Messiri', sans-serif;
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
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
