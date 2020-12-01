import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PageWrapper = styled.div`
  z-index: 1;
  color: #333;
  text-align: center;
  overflow: hidden;
  display: table;
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-shadow: none !important;
  background: #f2994a;
  background: -webkit-linear-gradient(left, #f2c94c, #f2994a);
  background: -o-linear-gradient(left, #f2c94c, #f2994a);
  background: linear-gradient(to right, #f2c94c, #f2994a);
`;
export const PortfolioPage = styled.div`
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PortfolioRow = styled.div`
  display: flex;
  z-index: 1;
  padding: 0 5px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemWrapper = styled(LinkR)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  width: 100%;
  z-index: 1;
  text-align: left;
  text-decoration: none;
  color: #010606;
  transition: all 0.75s ease-in-out 0s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    margin: 20px auto;
    width: 100%;
    padding: 8px;
  }
`;

export const HiddenItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 350px;
  background: transparent;
  margin: 10px;
  padding: 20px;
  width: 100%;
  transition: all 0.75s ease-in-out 0s;
`;

export const ItemTitle = styled.h3`
  margin-top: 10px;
  font-size: 21px;
`;

export const ItemSubtitle = styled.h3`
  font-size: 14px;
`;

export const ItemPhoto = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const ItemContainer = styled.div`
  max-width: 1500px;
  margin: 10% auto;

  @media screen and (max-width: 768px) {
    margin: 25% 0 0 0;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justfy-content: center;
  text-align: left;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PortfolioItemImg = styled.img`
  max-width: 700px;
  transition: all 0.75s ease-in-out 0s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10%;

    &:hover {
      transform: none;
    }
  }
`;

export const PortfolioItemDetails = styled.div`
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const PortfolioItemDesc = styled.div`
  margin: 20px 0;
`;

export const PortfolioItemTitle = styled.h1`
  font-family: "Permanent Marker", cursive;
  margin-bottom: 10px;
`;

export const PortfolioItemSubtitle = styled.h3`
  margin: 10px 0;
`;

export const PortfolioTechList = styled.ul`
  margin: 0;
  list-style-type: none;
`;

export const PortfolioTechItem = styled.li``;

export const LinkContainer = styled.a``;

export const PBtnContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    width: 50%;
    display: flex;
    margin: 40px auto;
  }
`;

export const PortfolioRepoLink = styled.a`
  text-decoration: none;
  margin-bottom: 10px;
  color: #2962ff;
`;
