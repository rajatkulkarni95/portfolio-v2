import React from "react";
import styled from "styled-components";

export const Socials = ({ socials }) => {
  return (
    <Wrapper>
      {socials.map((social) => (
        <Link href={social.url} key={social.site}>
          {social.icon}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px 0 15px;
`;

const Link = styled.a`
  font-size: 30px;
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
`;
