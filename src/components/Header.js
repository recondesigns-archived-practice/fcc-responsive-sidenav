import React from "react";
import styled from "styled-components";

const Container = styled.header`
  border: 1px solid black;
`;

export default function Header() {
  return (
    <Container>
      <p>Header</p>
    </Container>
  );
}
