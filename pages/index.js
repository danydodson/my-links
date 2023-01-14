import React from 'react'
import Buttons from '../components/Buttons'
import LinkIcons from '../components/LinkIcons'
// import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Footer from '../components/Footer'

export default function index() {
  return (
    <>
      <Intro />
      <LinkIcons />
      <Buttons />
      <Footer></Footer>
    </>
  )
}
