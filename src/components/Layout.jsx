import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import styled from 'styled-components'
import NewsLetter from './NewsLetter'
function Layout() {
  return (
    <Container>
      <Header/>
      <Outlet/>
      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Layout

const Container = styled.div`
@media (max-width: 768px) {
  min-height: auto;
}
  width: 100%;
  min-height: 100vh;
  position: relative;
`