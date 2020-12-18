import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { CgSmileSad } from "react-icons/cg";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(CgSmileSad)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 3rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80%;
`;

export const SideBarMenu = styled.ul`
  display: flex:
  flex-direction: column;
  text-align: center;
`;

export const SideBarRoute = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 70px;

  &:hover {
    color: #c8102e;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 70px;
`;
