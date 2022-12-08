import React from 'react'
import styled from 'styled-components'
import { carouselData } from '../../utils/data'
import Slider from './Slider'
const img = carouselData
function Carousel() {
  return (
    <Container>
        <Slider image={img} />
    </Container>
  )
}

export default Carousel

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`