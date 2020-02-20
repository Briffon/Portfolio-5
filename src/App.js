import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      {console.log(window.screen.width)}
      <div className="html">
        <div className="html-content">
          <Header content={<Routes />}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
