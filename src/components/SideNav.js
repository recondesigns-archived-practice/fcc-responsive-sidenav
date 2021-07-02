import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";
import logoImg from "../assets/logo.svg";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: ${(props) => props.display};
  background: #ffffff;
  border: 2px dashed blue;
`;

const LogoImage = styled.img`
  width: 148px;
  height: 28px;
  border: 1px dashed green;
`;

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useContext(AppContext);

  function setNavDisplay(navState) {
    if (navState === false) {
      return "none";
    } else if (navState === true) {
      return "block";
    }
  }

  let navDisplay = setNavDisplay(isMenuOpen);
  console.log(navDisplay);

  return (
    <Container display={navDisplay}>
      <LogoImage src={logoImg} alt={"random logo"} />
    </Container>
  );
}
