import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Resources from "./pages/Resources";
import Builder from "./pages/Builder";
import Analyze from "./pages/Analyze";


const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/Home" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/Builder" component={Builder} />
      </Switch>
      <Switch>
        <Route exact path="/Teams" component={Teams} />
      </Switch>

      <Switch>
        <Route exact path="/Resources" component={Resources} />
      </Switch>
      <Switch>
        <Route exact path="/Analyze" component={Analyze} />
      </Switch>
    </>
  );
};
export default Routes;
