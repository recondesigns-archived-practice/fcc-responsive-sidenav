import React from "react";
import styled from "styled-components";

const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: sans-serif;
`;

export default function AboutPage() {
  return (
    <Page>
      <Title>{"About page"}</Title>
    </Page>
  );
}
