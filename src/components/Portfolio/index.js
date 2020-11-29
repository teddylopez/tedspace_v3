import React from 'react'
import {PageWrapper, PortfolioPage, PortfolioRow} from "./PortfolioElements"
import ItemSection from "./ItemSection"
import Footer from "../../components/Footer"
import {portfolioObjOne, portfolioObjTwo, portfolioObjThree, portfolioObjFour, portfolioObjFive, portfolioObjSix, portfolioObjSeven, portfolioObjEight, portfolioObjNine, portfolioObjTen, portfolioObjEleven, portfolioObjTwelve} from "./Data"

function Portfolio() {
  return (
    <>
      <PageWrapper>
        <PortfolioPage>
          <PortfolioRow>
            <ItemSection {...portfolioObjOne} portfolio_object={portfolioObjOne}/>
            <ItemSection {...portfolioObjTwo} portfolio_object={portfolioObjTwo}/>
            <ItemSection {...portfolioObjThree} portfolio_object={portfolioObjThree}/>
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...portfolioObjFour} portfolio_object={portfolioObjFour}/>
            <ItemSection {...portfolioObjFive} portfolio_object={portfolioObjFive}/>
            <ItemSection {...portfolioObjSix} portfolio_object={portfolioObjSix}/>
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...portfolioObjSeven} portfolio_object={portfolioObjSeven}/>
            <ItemSection {...portfolioObjEight} portfolio_object={portfolioObjEight}/>
            <ItemSection {...portfolioObjNine} portfolio_object={portfolioObjNine}/>
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...portfolioObjTen} portfolio_object={portfolioObjTen}/>
            <ItemSection {...portfolioObjEleven} portfolio_object={portfolioObjEleven}/>
            <ItemSection {...portfolioObjTwelve} portfolio_object={portfolioObjTwelve}/>
          </PortfolioRow>
        </PortfolioPage>
        <Footer />
      </PageWrapper>
    </>
  )
}

export default Portfolio
