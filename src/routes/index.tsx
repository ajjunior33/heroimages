import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default Routes;
