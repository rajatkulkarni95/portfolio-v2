import { Route, Switch } from "react-router-dom";
import React from "react";
import { ProjectPage } from "../pages/Projects";
import { SkillsPage } from "../pages/Skills";
import { WorkPage } from "../pages/Work";
import { ErrorPage } from "../pages/404";
import { AboutPage } from "../pages/About";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProjectPage />
      </Route>
      <Route exact path="/skills">
        <SkillsPage />
      </Route>
      <Route exact path="/work">
        <WorkPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
