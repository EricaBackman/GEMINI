import React from 'react'
import styled from 'styled-components'
import NewsImage from '../images/crystal-L4.jpg'

function News() {
  return (
    <>
    <newsWrapper>
    <Header>
        <h2>NYHETER</h2>
      </Header>
      <Image>
        <img className='news-image' src={NewsImage} alt="" />
      </Image>
      <Button>
      <button>TILL NYHETER</button>
      </Button>
    </newsWrapper>
    </>
  )
}

export default News

const Header = styled.div`
margin-top: 1.5rem;
`
const Image = styled.div`
margin: 1.5rem 0rem;

.news-image {
  height: 20rem;
  width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
}
`
const Button = styled.div`
button {
  width: 170px;
  height: 35px;
  font-family: 'Darker Grotesque', sans-serif;
  border: none;
  border-radius: 3px;
  background-color: #6A6580;
  color: white;
  padding: 0;
  margin-bottom: 5rem;

}
`
