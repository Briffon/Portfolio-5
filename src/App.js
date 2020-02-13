import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Nav />
        <div style={styles.content}>
          <Header />
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;

const styles = {
  container: {
    height: "100vh",
    display:'flex',
  },
  content:{
    // display:'flex',
    // flexDirection:'column',
    width:'100%',
  }
};
