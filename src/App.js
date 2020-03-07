import React, { useState } from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/header/Header";
import { useLastLocation } from 'react-router-last-location';
function App() {
  const [page, setPage] = useState('');

  const onClick = (e, txt) => {
    setPage(txt)
  }
  return (
    <Router>
      <div className="html">
        <div className="html-content">
          <Header click={onClick} page=
            {page !== '' ? page : 'Pokemon Advisor'} content={<Routes />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
