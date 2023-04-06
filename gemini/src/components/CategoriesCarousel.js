import React from 'react'
import styled from 'styled-components'

//Import images
import Incenses from '../images/Incenses/L1.jpg'
import Crystals from '../images/Crystals/L12.jpg'
import Etherics from '../images/Etheric/L5.jpg'
import Tarotes from '../images/Tarot/L11.jpg'

function CategoriesCarousel() {
  return (
    <>
    <CategoryWrapper>
    <Header>
        <h2>KATEGORIER</h2>
      </Header>
      <SlideWrapper>
        <Incense>
          <img src={Incenses} alt="Rökelse" />
        </Incense>
        <Crystal>
          <img src={Crystals} alt="Gröna stenar" />
        </Crystal>
        <Etheric>
          <img src={Etherics} alt="Eterisk olja" />
        </Etheric>
        <Tarot>
          <img src={Tarotes} alt="Tarotkort" />
        </Tarot>

      </SlideWrapper>
    </CategoryWrapper>


    </>
  )
}

export default CategoriesCarousel

const CategoryWrapper = styled.div`

`
const Header = styled.div`

`
const SlideWrapper = styled.div`

`
const Incense = styled.div`

`
const Crystal = styled.div`

`
const Etheric = styled.div`

`
const Tarot = styled.div`

`
