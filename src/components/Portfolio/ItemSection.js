import React, {useEffect, useHistory} from 'react'
import {ItemPhoto, ItemTitle, ItemSubtitle, ItemWrapper} from "./PortfolioElements"
import { useStateValue } from "../StateProvider";

function ItemSection({portfolio_object}) {

  const[{portfolioItem}, dispatch] = useStateValue();

  const setPortfolioItem = () => {

    dispatch({
      type: "SET_PORTFOLIO_ITEM",
      item: {
        id: portfolio_object.id,
        name: portfolio_object.name,
        title: portfolio_object.title,
        subtitle: portfolio_object.subtitle,
        image: portfolio_object.image,
        thumbnail: portfolio_object.thumbnail,
        desc: portfolio_object.desc,
        tech: portfolio_object.tech,
        url: portfolio_object.url,
        git: portfolio_object.git
      }
    })
  }

  return (
    <ItemWrapper onClick={setPortfolioItem} to={`/portfolio/${portfolio_object.name}`} portfolio_object={portfolio_object} thumbnail={portfolio_object.thumbnail} title={portfolio_object.title} subtitle={portfolio_object.subtitle}>
      <ItemPhoto src={portfolio_object.thumbnail}/>
      <ItemTitle>{portfolio_object.title}</ItemTitle>
      <ItemSubtitle>{portfolio_object.subtitle}</ItemSubtitle>
    </ItemWrapper>
  )
}

export default ItemSection
