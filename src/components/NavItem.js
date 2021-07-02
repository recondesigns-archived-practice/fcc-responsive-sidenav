import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 2px solid dodgerblue; */
`;

const ItemLabel = styled.p`
  padding: 16px 16px 16px 16px;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #414141;
  opacity: 0.6;
  /* border: 1px dashed green; */

  &:hover {
    font-weight: 600;
    opacity: 0.8;
  }
`;

export default function NavItem(props) {
  const { label } = props;
  return (
    <Container>
      <ItemLabel>{label}</ItemLabel>
    </Container>
  );
}
