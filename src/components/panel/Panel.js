import React from "react";

const Panel = props => {

  return (
    <div style={styles.container}>
      <h2>Pokemon 1/6</h2>
      <h4 style={styles.name}>{props.name}</h4>
      <img src={props.img} alt={props.name} style={styles.img} />
      {props.types !==[] ?props.types.map((type,index)=>{
        return <p key={index}>{type.type.name}</p>
      }):null}
      <button style={styles.button} onClick={props.submit}>
        Submit
      </button>
    </div>
  );
};

export default Panel;

const styles = {
  container: {
    backgroundColor: "#342E37",
    display: "flex",
    flexDirection: "column",
    width: "12%",
    height: "100vh",
    color: "white",
    textAlign: "center"
  },
  img: {
    width: "50px",
    margin: "0 auto"
  },
  name: {
    fontSize: "1.2em",
    margin: "0"
  }
};
