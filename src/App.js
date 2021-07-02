import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Home";

const Container = styled.div`
  position: relative;
  height: 100vh;
  border: 2px solid lightcoral;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <SideNav />
      <HomePage />
    </Container>
  );
}
