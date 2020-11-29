import styled from "styled-components"
import { Link as LinkR } from "react-router-dom";

export const CarouselContainer = styled.div`
  height: 500px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`

export const CarouselLinkContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items:center;
  position: absolute;
  width: 100%;
  z-index:1;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`

export const CarouselLink = styled(LinkR)`
  font-family: 'Permanent Marker', cursive;
  transform: rotate(-4deg);
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #ff1744;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 5px 0 #000;
  font-size: 8rem;
  position: relative;
  z-index: 2;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

export const CarouselImg = styled.img`
  max-height: 80%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
