import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  font-family: sans-serif;
  color: #414141;
  text-align: center;
`;

export default function HomePage() {
  return (
    <Container>
      <Title>{"Home page"}</Title>
    </Container>
  );
}
