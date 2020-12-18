import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarRoute,
  SideBarLink,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarRoute to="/" onClick={toggle}>
            tedlopez
          </SideBarRoute>
          <SideBarRoute to="/portfolio" onClick={toggle}>
            Portfolio
          </SideBarRoute>
          <SideBarLink
            href="https://github.com/teddylopez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </SideBarLink>
          <SideBarLink
            href="https://www.linkedin.com/in/tedmlopez/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
