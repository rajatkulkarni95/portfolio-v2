import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Nav>
      <List>
        <ListItem to="/">Projects</ListItem>

        <ListItem to="/work">Work</ListItem>

        <ListItem to="/skills">Skills</ListItem>

        <ListItem to="/about">About</ListItem>

        <ListItem to="/">Resume</ListItem>
      </List>
    </Nav>
  );
};

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  list-style-type: none;
`;

const ListItem = styled(NavLink)`
  margin: 0 20px;
  color: inherit;
  text-decoration: none;
`;
