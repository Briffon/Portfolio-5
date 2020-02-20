import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div className={`nav-container ${props.show}`}>
      <div onClick={props.close} className="logo-container">
        <img
          className="logo"
          src={require("../../art/Logo.png")}
          alt="logo"
        ></img>
      </div>
      <div className="list">
        <NavLink to="/Home" className="list-item">
          <img
            className="icon"
            src={require("../../Icons/home.png")}
            alt="home icon"
          ></img>
          Home
        </NavLink>
        <NavLink to="/Builder" className="list-item">
          <img
            className="icon"
            src={require("../../Icons/pokeballs.png")}
            alt="home icon"
          ></img>
          Builder
        </NavLink>
        <NavLink to="/Teams" className="list-item">
          <img
            className="icon"
            src={require("../../Icons/pikachu.png")}
            alt="home icon"
          ></img>
          Teams
        </NavLink>
        <NavLink to="/Resources" className="list-item">
          <img
            className="icon"
            src={require("../../Icons/dex.png")}
            alt="home icon"
          ></img>
          Resources
        </NavLink>
        <NavLink to="/About" className="list-item">
          <img
            className="icon"
            src={require("../../Icons/trainer.png")}
            alt="home icon"
          ></img>
          About
        </NavLink>
      </div>
    </div>
  );
};
export default Nav;

// const styles = {
//   container: {
//     backgroundColor: "#342E37",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "left",
//     width: "12%",
//     overflow: "hidden",
//     height: "100vh"
//   },
//   listItem: {
//     textDecoration: "none",
//     color: "white",
//     fontSize:'1.5em',
//     fontWeight:'500',
//     padding:'.2rem',
//     margin: "0 auto",
//     marginBottom:'1rem',
//     display: "flex",
//     justifyContent:'space-between',
//     textAlign:'left',
//   },
//   list: {
//     listStyle: "none",
//     marginTop: "1rem",
//     backgroundColor:'gray',
//     border:'none',
//     display: "flex",
//     flexDirection:'column',
//     padding:'1rem',
//     // boxShadow:'10px 10px 5px black'

//   },
//   logoContainer: {
//     backgroundColor: "#1AEDAD",
//     padding: "1rem",
//     color: "white",
//     width: "100%",
//     height: "2rem",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   logo: {
//     width: "50px",
//     height: "50px"
//   },
//   icon: {
//     width: "30px",
//     marginRight: ".8rem"
//   }
// };
