import React from "react";

export const Header = props => {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}>Pokemon Advisor</h1>
    </header>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#3F9FFF",
    color: "white",
    fontFamily:'"Luckiest Guy", cursive',
    textTransform:'uppercase',
    height:'4rem'
  },
  title:{
      padding:'.5rem',
      fontWeight:'700',
      marginLeft:'1rem',
      letterSpacing:'.3rem'
  }
};
