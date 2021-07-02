import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: #f1f5f8;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <SideNav />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/about"} component={AboutPage} />
        <Route exact path={"/projects"} component={ProjectsPage} />
        <Route exact path={"/contact"} component={ContactPage} />
      </Switch>
    </Container>
  );
}
