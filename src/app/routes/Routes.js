import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../About";
import Home from "../Home";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

export default () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return <Route exact key={index} {...route} />;
      })}
    </Switch>
  );
};
