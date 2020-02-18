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
          <img style={styles.icon} src={require('../../Icons/home.png')} alt="home icon"></img>
          Home
        </NavLink>
        <NavLink to="/Builder" style={styles.listItem}>
        <img style={styles.icon} src={require('../../Icons/pokeballs.png')} alt="home icon"></img>
          Builder
        </NavLink>
        <NavLink to="/Teams" style={styles.listItem}>
        <img style={styles.icon} src={require('../../Icons/pikachu.png')} alt="home icon"></img>
          Teams
        </NavLink>
        <NavLink to="/Resources" style={styles.listItem}>
        <img style={styles.icon} src={require('../../Icons/dex.png')} alt="home icon"></img>
          Resources
        </NavLink>
        <NavLink to="/About" style={styles.listItem}>
        <img style={styles.icon} src={require('../../Icons/trainer.png')} alt="home icon"></img>
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
    width: "12%",
    overflow:'hidden',
    height:'100vh'
  },
  listItem: {
    display: "flex",
    textAlign: "left",
    color: "white",
    margin: "1rem",
    fontSize: "1.5em",
    fontWeight: "400",
    textDecoration: "none",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    padding:'1rem'
  },
  logoContainer: {
    backgroundColor: "#1AEDAD",
    padding: "1rem",
    color: "white",
    width:'100%',
    height:'2rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:'50px',
    height:'50px'
  },
  icon:{
    width:'30px',
    marginRight:'.8rem'
  }
};
