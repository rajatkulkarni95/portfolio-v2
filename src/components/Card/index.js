import React from "react";
import styled from "styled-components";

export const Card = ({ name, description }) => (
  <Wrapper>
    <h3>{name}</h3>
    <p>{description}</p>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.accent};
  padding: 10px;
  margin: 10px 20px;
  border-radius: 3px;
`;
