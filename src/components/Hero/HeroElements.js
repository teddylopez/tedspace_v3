import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items:center;
  padding:0;
  height: 800px;
  position: relative;
  z-index:1;

  :before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2), 0%,
      rgba(0,0,0,0.0) 100%
      ),
      linear-gradient(
      180deg, rgba(0,0,0,0.5) 0%,
      transparent 100%);
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom:0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width:768px) {
    /* z-index: 100; */
    background: linear-gradient(230deg, #4b8cf9, #4f4bf9, #f9544b, #f9c04b, #f94b7f, #4bf98f);
    background-size: 1200% 1200%;

    -webkit-animation: FloatingColors 20s ease infinite;
    -moz-animation: FloatingColors 20s ease infinite;
    -o-animation: FloatingColors 20s ease infinite;
    animation: FloatingColors 20s ease infinite;
  }
`

export const VideoBg = styled.video`
  width:90%;
  max-height: 1100px;
  -o-object-fit:cover:
  object-fit:cover;
  background:#232a34;

  @media screen and (max-width:950px) {
    display: none;
  }

  @media screen and (max-width:768px) {
    display: none;
  }
`

export const HeroContent = styled.div`
  z-index:3;
  max-width:1200px;
  position:absolute;
  padding:8px 24px;
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width:768px) {
    font-size:40px;
  }

  @media screen and (max-width:480px) {
    font-size:32px;
  }
`

export const HeroP = styled.p`
  font-family: 'Permanent Marker', cursive;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color:#fff;
  font-size:24px;
  text-align:center;
  max-width:600px;

  @media screen and (max-width:768px) {
    margin-top: -10rem;
    font-size: 55px;
    line-height: 0.8;
    transform: rotate(-9deg);
  }

  @media screen and (max-width:480px) {
    margin-top: -10rem;
    font-size: 55px;
    line-height: 0.8;
    transform: rotate(-9deg);
  }
`
export const HeroBtnWrapper = styled.div`
  margin-top:32px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
