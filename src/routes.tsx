import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Principal from "./pages/principal";
import React from "react";

export default function myRoutes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Principal" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}
