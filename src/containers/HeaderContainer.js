import React from "react";
import styled from "styled-components";
import { Avatar } from "../components/Avatar";
import { Heading } from "../components/Heading";
import { Navigation } from "../components/Navigation";
import { Socials } from "../components/Socials";
import { info } from "../data/personal";

export const HeaderContainer = () => {
  const { name, title, socials } = info;

  return (
    <Wrapper>
      <Avatar />
      <Heading name={name} title={title} />
      <Socials socials={socials} />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
