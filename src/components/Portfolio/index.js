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
  pitcherTrendsObj,
  amazonObj,
  tedSurfObj,
  monthlyVueObj,
  depthChartObj,
  tedTypeObj,
  teddygramsObj,
  tednessObj,
  tedTalksObj,
  beatsByTedObj,
  tedmetricsObj,
  tedWeathermanObj,
  tedspaceObj,
  tedspaceReactObj,
  tedtrackerObj,
  covidTrackerObj,
  trailerHitchObj,
  statLines,
} from "./Data";

function Portfolio() {
  return (
    <>
      <PageWrapper>
        <PortfolioPage>
          <PortfolioRow>
          <ItemSection
            {...statLines}
            portfolio_object={statLines}
          />
            <ItemSection
              {...covidTrackerObj}
              portfolio_object={covidTrackerObj}
            />
            <ItemSection
              {...pitcherTrendsObj}
              portfolio_object={pitcherTrendsObj}
            />
            <ItemSection {...tedSurfObj} portfolio_object={tedSurfObj} />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection
              {...trailerHitchObj}
              portfolio_object={trailerHitchObj}
            />
            <ItemSection {...tedtrackerObj} portfolio_object={tedtrackerObj} />
            <ItemSection {...amazonObj} portfolio_object={amazonObj} />
            <ItemSection {...depthChartObj} portfolio_object={depthChartObj} />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...tedTalksObj} portfolio_object={tedTalksObj} />
            <ItemSection {...tedspaceObj} portfolio_object={tedspaceObj} />
            <ItemSection
              {...tedspaceReactObj}
              portfolio_object={tedspaceReactObj}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...beatsByTedObj} portfolio_object={beatsByTedObj} />
            <ItemSection {...tedmetricsObj} portfolio_object={tedmetricsObj} />
            <ItemSection {...tednessObj} portfolio_object={tednessObj} />
            <ItemSection
              {...tedWeathermanObj}
              portfolio_object={tedWeathermanObj}
            />
          </PortfolioRow>
          <PortfolioRow>
            <ItemSection {...monthlyVueObj} portfolio_object={monthlyVueObj} />
            <ItemSection {...tedTypeObj} portfolio_object={tedTypeObj} />
            <ItemSection {...teddygramsObj} portfolio_object={teddygramsObj} />
          </PortfolioRow>
        </PortfolioPage>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default Portfolio;
