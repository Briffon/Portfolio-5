import React from "react";

const Panel = props => {
  return (
    <div style={styles.container}>
      <h2>Pokemon 1/6</h2>
      <h4>{props.name}</h4>
      <img src={props.img} alt={props.name} />
      <button style={styles.button} onClick={props.submit}>Submit</button>
    </div>
  );
};

export default Panel;

const styles = {
  container: {
    backgroundColor: "#342E37",
    display:'flex',
    flexDirection:'column',
    width:'12%',
    height:'100vh'
  }
};
