import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBtnWrap,
  SideBarRoute,
} from "./SideBarElements";

function SideBar({isOpen, toggle}) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
        <SideBarMenu>
          <SideBarRoute to="/" onClick={toggle}>tedlopez</SideBarRoute>
          <SideBarRoute to="/portfolio" onClick={toggle}>portfolio</SideBarRoute>
        </SideBarMenu>
    </SideBarContainer>
  );
}

export default SideBar;
