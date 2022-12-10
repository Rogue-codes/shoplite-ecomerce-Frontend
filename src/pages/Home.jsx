import React from 'react'
import styled from 'styled-components'
import Carousel from '../components/carousel/Carousel'
import ChooseYourStyle from '../Features/homeFeatures/ChooseYourStyle'
import Collection from '../Features/homeFeatures/Collection'
import FeaturedCollection from '../Features/homeFeatures/FeaturedCollection'
import Features from '../Features/homeFeatures/Features'

function Home() {
  return (
    <Container>
        <Carousel/>
        <Features/>
        <ChooseYourStyle/>
        <Collection/>
        <FeaturedCollection/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
`