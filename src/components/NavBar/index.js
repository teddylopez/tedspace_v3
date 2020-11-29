import React, {useState, useEffect} from "react";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import {animateScroll as scroll} from "react-scroll"
import { useLocation } from 'react-router-dom'
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

function NavBar({toggle}) {
  const [scrollNav, setScrollNav] = useState(false)
  let location = useLocation();

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>tedlopez</NavLogo>
          <MobileIcon onClick={toggle}>
            <GiFullMotorcycleHelmet />
          </MobileIcon>
          { !location.pathname.includes("portfolio") ?
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contact</NavLinks>
              </NavItem>
            </NavMenu>
          : " "
          }

          { location.pathname !== "/portfolio" ?
          <NavBtn>
            <NavBtnLink to="/portfolio">{ location.pathname.includes("portfolio/") ? "Back to portfolio" : "Portfolio"}</NavBtnLink>
          </NavBtn>
          : "" }
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
