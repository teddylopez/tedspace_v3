import React from "react";
import {
  PageWrapper,
  PortfolioPage,
  PortfolioRow,
  HiddenItem,
} from "./PortfolioElements";
import ItemSection from "./ItemSection";
import Footer from "../../components/Footer";
import {
  portfolioObjOne,
  portfolioObjTwo,
  portfolioObjThree,
  portfolioObjFour,
  portfolioObjFive,
  portfolioObjSix,
  portfolioObjSeven,
  portfolioObjEight,
  portfolioObjNine,
  portfolioObjTen,
  portfolioObjEleven,
  portfolioObjTwelve,
  portfolioObjThirteen,
  portfolioObjFourteen,
  portfolioObjFifteen,
  portfolioObjSixteen,
  portfolioObjSeventeen,
  portfolioObjEighteen,
} from "./Data";

function Portfolio() {
  return (
    <>
      <PageWrapper>
        <PortfolioPage>
          <PortfolioRow>
            <ItemSection
              {...portfolioObjSixteen}
              portfolio_object={portfolioObjSixteen}
            />
            <ItemSection
              {...portfolioObjOne}
              portfolio_object={portfolioObjOne}
            />
            <ItemSection
              {...portfolioObjThree}
              portfolio_object={portfolioObjThree}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection
              {...portfolioObjFifteen}
              portfolio_object={portfolioObjFifteen}
            />
            <ItemSection
              {...portfolioObjTwo}
              portfolio_object={portfolioObjTwo}
            />
            <ItemSection
              {...portfolioObjFive}
              portfolio_object={portfolioObjFive}
            />
            <ItemSection
              {...portfolioObjFourteen}
              portfolio_object={portfolioObjFourteen}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection
              {...portfolioObjNine}
              portfolio_object={portfolioObjNine}
            />
            <ItemSection
              {...portfolioObjThirteen}
              portfolio_object={portfolioObjThirteen}
            />
            <ItemSection
              {...portfolioObjEight}
              portfolio_object={portfolioObjEight}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection
              {...portfolioObjTen}
              portfolio_object={portfolioObjTen}
            />
            <ItemSection
              {...portfolioObjEleven}
              portfolio_object={portfolioObjEleven}
            />
            <ItemSection
              {...portfolioObjTwelve}
              portfolio_object={portfolioObjTwelve}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection
              {...portfolioObjFour}
              portfolio_object={portfolioObjFour}
            />
            <ItemSection
              {...portfolioObjSix}
              portfolio_object={portfolioObjSix}
            />
            <ItemSection
              {...portfolioObjSeven}
              portfolio_object={portfolioObjSeven}
            />
          </PortfolioRow>
        </PortfolioPage>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default Portfolio;
