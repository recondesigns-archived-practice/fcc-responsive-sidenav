import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppProvider";
import menuIconImg from "../assets/menu-icon.svg";

const Container = styled.header`
  padding: 20px 16px 20px 16px;
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
`;

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  /* border: 1px dashed green; */
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useContext(AppContext);

  function handleClick(state, setter) {
    if (state === false) {
      setter(() => true);
    } else if (state === true) {
      setter(() => false);
    }
  }

  return (
    <Container>
      <MenuIcon
        src={menuIconImg}
        alt={"open menu"}
        onClick={() => handleClick(isMenuOpen, setIsMenuOpen)}
      />
    </Container>
  );
}
