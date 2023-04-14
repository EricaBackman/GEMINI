import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ErrorPage() {
  return (
    <>
    <Error>
      <h1>Hoppsan, det gick inte riktigt som det skulle här!</h1>
      <Link to={"/"}>
      <button>TILLBAKA TILL STARTSIDAN</button>
      </Link>
    </Error>
    </>
  )
}

export default ErrorPage

const Error = styled.div`
padding-top: 7rem;
padding-bottom: 10rem;
padding-left: 5rem;
padding-right: 5rem;
button {
  width: 200px;
  height: 35px;
  font-family: 'Darker Grotesque', sans-serif;
  border: none;
  border-radius: 3px;
  background-color: #6A6580;
  color: white;
  padding: 0;
  margin-bottom: 3rem;
  margin-top: 3rem;
  cursor: pointer;
}
`
