import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements"
import {Button} from "../ButtonElement"
import {videos} from "../Hero/Data"

function Hero() {
  const [hover, setHover] = useState(false)
  const video = videos[Math.floor(Math.random()*videos.length)];
  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
      <HeroContent>
        {/* <HeroH1>tedlopez</HeroH1> */}
        <HeroP>software engineer & web developer</HeroP>
        {/*
        <HeroBtnWrapper>
          <Button to="contact" primary="true" dark="true">
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        */}
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
