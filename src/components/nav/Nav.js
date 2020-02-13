import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = props => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img style={styles.logo} src={require("../../art/Logo.png")} alt="logo" ></img>
      </div>
      <div style={styles.list}>
        <NavLink to="/Home" style={styles.listItem}>
          Home
        </NavLink>
        <NavLink to="/Builder" style={styles.listItem}>
          Builder
        </NavLink>
        <NavLink to="/Teams" style={styles.listItem}>
          Teams
        </NavLink>
        <NavLink to="/Resources" style={styles.listItem}>
          Resources
        </NavLink>
        <NavLink to="/About" style={styles.listItem}>
          About
        </NavLink>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#342E37",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
    width: "10%",
    overflow:'hidden'
  },
  listItem: {
    display: "inline-block",
    textAlign: "left",
    color: "white",
    margin: "1rem",
    fontSize: "1.5em",
    fontWeight: "600",
    textDecoration: "none"
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column"
  },
  logoContainer: {
    backgroundColor: "#0F4D8C",
    padding: "1rem",
    textAlign: "center",
    color: "white",
    width:'100%',
  },
  logo:{
    width:'50px',
    margin:'auto'
  }
};
