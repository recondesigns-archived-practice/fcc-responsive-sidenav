import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid lightcoral;
`;

const Title = styled.h1`
  border: 1px dashed green;
`;
export default function App() {
  return (
    <Container>
      <Title>{"App Component"}</Title>
    </Container>
  );
}
