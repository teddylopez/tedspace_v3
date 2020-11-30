import styled from "styled-components";
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 20px;
  margin-bottom: 0;
`
export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const WebsiteColumn = styled.div`
  display:flex;
  flex-direction:column;
`

export const WebsiteContact = styled.small`
  color: #fff;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #ff1744;
    transition: all 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  max-width: 1100px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`

export const WebsiteRights = styled.small`
  color: #fff;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #ff1744;
    transition: all 0.3s ease-in-out;
  }
`
