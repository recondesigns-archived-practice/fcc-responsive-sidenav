import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/Home";

const Container = styled.div`
  height: 100vh;
  border: 2px solid lightcoral;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <HomePage />
    </Container>
  );
}
