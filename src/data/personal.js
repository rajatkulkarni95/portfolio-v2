import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const info = {
  name: "Rajat Kulkarni",
  title: "Web Developer",
  socials: [
    {
      site: "github",
      url: "https://github.com/rajatkulkarni95",
      icon: <AiFillGithub />,
    },
    {
      site: "linkedin",
      url: "https://linkedin.com/rajatkulkarni95",
      icon: <AiFillLinkedin />,
    },
    {
      site: "gmail",
      url: "mailto:rajatkulkarni95@gmail.com",
      icon: <AiOutlineMail />,
    },
  ],
};
