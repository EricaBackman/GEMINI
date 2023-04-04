import React from 'react'
import styled from 'styled-components'

function TopSlider() {
  return (
    <div>
      <Wrap>
        <p>Fri frakt och fria returer* </p>
        <p>Fri hemleverans vid köp över 299kr</p>
      </Wrap>
    </div>
  )
}

export default TopSlider

const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 3px;
background-color: #9F97BF;
p {
  margin: 0;
  padding: 0;
  color: white;
}
`
