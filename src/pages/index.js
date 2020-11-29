import React from 'react'
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection"
import Services from "../components/Services"
import Resume from "../components/Resume"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data"

function Home() {
  return (
    <>
      <Hero />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Resume />
      <Carousel />
      <InfoSection {...homeObjThree}/>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
