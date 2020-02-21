import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Builder from "./pages/Builder";
import Teams from "./pages/Teams";
import Resources from "./pages/Resources";
import About from "./pages/About";
import New from "./pages/New";

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
        <Route exact path="/New" component={New} />
      </Switch>
      <Switch>
        <Route exact path="/Teams" component={Teams} />
      </Switch>

      <Switch>
        <Route exact path="/Resources" component={Resources} />
      </Switch>
      <Switch>
        <Route exact path="/About" component={About} />
      </Switch>
    </>
  );
};
export default Routes;
