import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  WebsiteColumn,
  WebsiteContact,
  SocialIcons,
  SocialIconLink } from "./FooterElements"
import { DiGithubBadge } from "react-icons/di";
import {FaLinkedin} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll"

function Footer() {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>tedlopez</SocialLogo>
            <WebsiteColumn>
              <WebsiteContact>240-271-7135 · tedmlopez@gmail.com</WebsiteContact>
              <WebsiteRights>tedlopez ©️ {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
            </WebsiteColumn>
            <SocialIcons>
              <SocialIconLink href="https://www.linkedin.com/in/tedmlopez/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin size="1.5rem" />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/teddylopez" target="_blank" aria-label="GitHub">
                <DiGithubBadge size="2rem" />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
