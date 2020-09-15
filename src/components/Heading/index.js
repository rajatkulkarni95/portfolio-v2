import React from "react";
import styled from "styled-components";

export const Heading = ({ name, title }) => (
  <React.Fragment>
    <Name>{name}</Name>
    <Title>{title}</Title>
  </React.Fragment>
);

const Name = styled.h1`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: 700;
`;

const Title = styled.h3`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: 500;
  font-style: italic;
`;
