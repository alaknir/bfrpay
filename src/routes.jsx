import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { SignUp } from "./layouts";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/singup" component={SignUp} />
      <Redirect from="/" to="/singup" />
    </Router>
  );
};

export default Routes;
