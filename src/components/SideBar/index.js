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
      <SideBarWrapper>
        <SideBarMenu>
            <SideBarRoute to="/" onClick={toggle}>tedlopez</SideBarRoute>
            <SideBarRoute to="/portfolio" onClick={toggle}>portfolio</SideBarRoute>
        </SideBarMenu>
      </SideBarWrapper>
      <SideBtnWrap>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;
