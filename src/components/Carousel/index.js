import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CarouselContainer, CarouselImg, CarouselLinkContainer, CarouselLink} from "./CarouselElements"

function Carousel() {

  const photos = [
    {
      name: "photo_1",
      src: require('../../images/carousel/carousel_one.png').default,
    },
    {
      name: "photo_2",
      src: require('../../images/carousel/carousel_two.png').default,
    },
    {
      name: "photo_3",
      src: require('../../images/carousel/carousel_three.png').default,
    },
    {
      name: "photo_4",
      src: require('../../images/carousel/carousel_four.png').default,
    },
  ]

  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <CarouselContainer>
      <CarouselLinkContainer>
        <CarouselLink to="/portfolio">View My Work</CarouselLink>
      </CarouselLinkContainer>
      <Slider {...settings}>
        {photos.map((photo) => {
          return <CarouselImg key={photo.name} src={photo.src} />
        })}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
