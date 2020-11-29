import React from 'react'
import {Button} from '../ButtonElement'
import {
  CardContainer,
  CardWrapper,
  CardRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from "./InfoElements"

function Card({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, img, alt, primary, dark, dark2}) {
  return (
    <>
      <CardContainer id={id} lightBg={lightBg}>
        <CardWrapper>
          <CardRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </CardRow>
        </CardWrapper>
      </CardContainer>
    </>
  )
}

export default Card
