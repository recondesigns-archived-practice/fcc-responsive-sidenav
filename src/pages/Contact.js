import React from "react";
import styled from "styled-components";

const Page = styled.div`
  border: 2px solid lightcoral;
`;

const Title = styled.h1`
  font-family: sans-serif;
  border: 1px dashed green;
`;

export default function ContactPage() {
  return (
    <Page>
      <Title>{"Contact page"}</Title>
    </Page>
  );
}