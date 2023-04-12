import React from 'react'
import styled from 'styled-components'
import NewsImage from '../images/Crystals/crystal-L4.jpg'

function News() {
  return (
    <>
    <NewsWrapper>
    <Header>
        <h2>NYHETER</h2>
      </Header>
      <Image>
        <img className='news-image' src={NewsImage} alt="" />
      </Image>
      <Button>
      <button>TILL NYHETER</button>
      </Button>
    </NewsWrapper>
    </>
  )
}

export default News

const NewsWrapper = styled.div`
width: 100%;

margin: 0;
padding: 0;
`
const Header = styled.div`
margin-top: 1.5rem;

h2 {
  font-size: 2rem;
}
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
  margin-bottom: 3rem;

}
`
