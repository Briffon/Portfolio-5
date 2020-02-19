import React from "react";

const Modal = props => {
  return <div className={props.class} style={styles.container}>{props.content}</div>;
};

export default Modal;

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
};
