import React from "react";
import styled from "styled-components";
import ProfilePicture from "../../assets/Profile Picture.jpg";

export const Avatar = () => (
  <Image src={ProfilePicture} alt="Profile Picture" />
);

const Image = styled.img`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px 0;
`;
