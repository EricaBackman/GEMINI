import React from 'react'
import styled from 'styled-components'
import CardImage from '../images/Tarot/L1.jpg'
import { useEffect, useState } from 'react'


function TarotCard() {

  const [cards, setCards] = useState('')

  useEffect(() => {
    fetch('../../public/products.json')
      .then((response) => response.json())
      .then((result) => {
        setCards(result)
      })
  }, [])

  return (
    <>
      <TarotOrakel>
        <h1>TAROT & ORAKELKORT</h1>
        <img src={CardImage} alt="Tarot cards" />
        <Products>
          {cards.map((card) => (
            <div className='card-item' key={card.id}>
              <img src={card.img} alt={card.title} />
            </div>
          ))}
        </Products>
      </TarotOrakel>
    </>
  )
}

export default TarotCard

const TarotOrakel = styled.div`

`

const Products = styled.div`

`
