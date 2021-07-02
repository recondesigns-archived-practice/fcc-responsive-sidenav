import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";
import { useHistory } from "react-router-dom";
import NavItem from "./NavItem";
import logoImg from "../assets/logo.svg";
import closeX from "../assets/close-icon.svg";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
  background: #ffffff;
  /* border: 2px dashed blue; */

  @media (min-width: 1023px) {
    width: 400px;
  }
`;

const NavHeaderWrapper = styled.div`
  padding: 15px 16px 15px 16px;
  display: flex;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid dodgerblue; */
`;

const LogoImage = styled.img`
  width: 148px;
  height: 28px;
  /* border: 1px dashed green; */
`;

const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  /* border: 1px dashed green; */
`;

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useContext(AppContext);
  let history = useHistory();

  function setNavDisplay(navState) {
    if (navState === false) {
      return "none";
    } else if (navState === true) {
      return "block";
    }
  }

  function closeMenu(state, setter) {
    if (state === false) {
      setter(() => true);
    } else if (state === true) {
      setter(() => false);
    }
  }

  function setRoute(func, path) {
    func.push(path);
    closeMenu(isMenuOpen, setIsMenuOpen);
  }

  let navDisplay = setNavDisplay(isMenuOpen);
  // console.log(history);

  return (
    <Container display={navDisplay}>
      <NavHeaderWrapper>
        <LogoImage src={logoImg} alt={"random logo"} />
        <CloseIcon
          src={closeX}
          alt={"close menu"}
          onClick={() => closeMenu(isMenuOpen, setIsMenuOpen)}
        />
      </NavHeaderWrapper>
      <NavItem label={"Home"} onclick={() => setRoute(history, "/")} />
      <NavItem label={"About"} onclick={() => setRoute(history, "/about")} />
      <NavItem
        label={"Projects"}
        onclick={() => setRoute(history, "/projects")}
      />
      <NavItem
        label={"Contact"}
        onclick={() => setRoute(history, "/contact")}
      />
    </Container>
  );
}
