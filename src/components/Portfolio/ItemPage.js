import React, { useEffect } from 'react'
import Footer from "../../components/Footer"
import {useStateValue} from "../StateProvider"
import {ItemContainer, ContainerRow, ContainerColumn, PortfolioItemImg, PortfolioItemDetails, PortfolioItemDesc, PortfolioItemTitle, PortfolioItemSubtitle, PortfolioTechList, PortfolioTechItem, LinkContainer, PortfolioRepoLink, PageWrapper} from "./PortfolioElements"

function ItemPage() {
  const [{portfolioItem}, dispatch] = useStateValue();

  // Use local storage for item if portfolio object is null:
  useEffect(() => {
    const storage_data = JSON.parse(localStorage.getItem("portfolio-item"))

    if (storage_data && !portfolioItem) {
      dispatch({
        type: "SET_PORTFOLIO_ITEM",
        item: {
          id: storage_data.id,
          name: storage_data.name,
          title: storage_data.title,
          subtitle: storage_data.subtitle,
          image: storage_data.image,
          thumbnail: storage_data.thumbnail,
          desc: storage_data.desc,
          tech: storage_data.tech,
          url: storage_data.url,
          git: storage_data.git
        }
      })
    }

  }, [])

  // Set local storage to portfolio item:
  useEffect(() => {
    window.localStorage.setItem("portfolio-item", JSON.stringify(portfolioItem))
  })

  return (
    <>
      <PageWrapper>
        <ItemContainer>
          <ContainerRow>
            <LinkContainer href={portfolioItem?.url} target="_blank">
              <PortfolioItemImg src={portfolioItem?.image} to={portfolioItem?.url} />
            </LinkContainer>
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
          </ContainerRow>
        </ItemContainer>
        <Footer />
      </PageWrapper>
    </>
  )
}

export default ItemPage
