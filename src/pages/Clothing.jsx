import React from 'react'
import styled from 'styled-components'
import Filter from '../components/filter/Filter'
import ClothingWrapper from '../Features/clothingFeatures/ClothingWrapper'
import MobileFilter from '../widgets/filter/MobileFilter'

function Clothing() {
  return (
    <Container>
      <MobileFilter/>
      <Filter/>
      <ClothingWrapper/>
    </Container>
  )
}

export default Clothing

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`