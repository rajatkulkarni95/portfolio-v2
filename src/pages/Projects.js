import React from "react";
import { Card } from "../components/Card";
import { projects } from "../data/projects";

export const ProjectPage = () => {
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};
