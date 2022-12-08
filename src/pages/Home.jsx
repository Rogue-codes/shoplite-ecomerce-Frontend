import React from 'react'
import Carousel from '../components/carousel/Carousel'
import ChooseYourStyle from '../Features/homeFeatures/ChooseYourStyle'
import Collection from '../Features/homeFeatures/Collection'
import FeaturedCollection from '../Features/homeFeatures/FeaturedCollection'
import Features from '../Features/homeFeatures/Features'

function Home() {
  return (
    <div>
        <Carousel/>
        <Features/>
        <ChooseYourStyle/>
        <Collection/>
        <FeaturedCollection/>
    </div>
  )
}

export default Home