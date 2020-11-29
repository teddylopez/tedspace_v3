import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from "./HeroElements"
import {Button} from "../ButtonElement"
import {videos} from "../Hero/Data"
import { useMediaQuery } from 'react-responsive';

function Hero() {
  const [hover, setHover] = useState(false)
  const isMobile = useMediaQuery({ maxDeviceWidth: 1224 })
  const video = videos[Math.floor(Math.random()*videos.length)];
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      { !isMobile ?
        <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg>
        : <VideoBg></VideoBg>
      }
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
