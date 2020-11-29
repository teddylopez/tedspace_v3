import React from 'react'
import Footer from "../../components/Footer"
import {useStateValue} from "../StateProvider"
import {ItemContainer, ContainerRow, ContainerColumn, PortfolioItemImg, PortfolioItemDetails, PortfolioItemDesc, PortfolioItemTitle, PortfolioItemSubtitle, PortfolioTechList, PortfolioTechItem, LinkContainer, PortfolioRepoLink, PageWrapper} from "./PortfolioElements"

function ItemPage() {
  const[{portfolioItem}, dispatch] = useStateValue();

  return (
    <>
      <PageWrapper>
      <ItemContainer>
        <ContainerRow>
          <div>
          <LinkContainer href={portfolioItem?.url} target="_blank">
            <PortfolioItemImg src={portfolioItem?.image} to={portfolioItem?.url} />
          </LinkContainer>
          </div>
          <div>
          <PortfolioItemDetails>
            <ContainerColumn>
            <PortfolioItemTitle>{portfolioItem?.title}</PortfolioItemTitle>
            <PortfolioItemSubtitle>{portfolioItem?.subtitle}</PortfolioItemSubtitle>
            <PortfolioRepoLink href={portfolioItem?.git} target="_blank">
              View the source code here
            </PortfolioRepoLink>
            <PortfolioTechList>
              Technology Used:
              {portfolioItem?.tech.map((item, i) => {
                 console.log("Entered");
                 return (<PortfolioTechItem key={i}>{item}</PortfolioTechItem>)
              })}
            </PortfolioTechList>
            <PortfolioItemDesc>
              {portfolioItem?.desc}
            </PortfolioItemDesc>
            </ContainerColumn>

          </PortfolioItemDetails>
          </div>
        </ContainerRow>
      </ItemContainer>
    <Footer />
    </PageWrapper>
    </>
  )
}

export default ItemPage
