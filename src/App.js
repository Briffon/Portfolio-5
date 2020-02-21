import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/header/Header";
function App() {

  return (
    <Router>
      <div className="html">
        <div className="html-content">
          <Header content={<Routes />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
