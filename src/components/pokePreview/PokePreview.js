import React from "react";

const PokePreview = props => {
  return (
    <div
      style={styles.container}
      data-pokemon={props.item}
      onClick={props.selected}
    >
      <p data-pokemon={props.item}>
        {props.name}
        <img
          data-pokemon={props.item}
          style={styles.previewImg}
          src={props.url}
          alt={props.name}
        />
      </p>
    </div>
  );
};

export default PokePreview;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "1rem",
    flexDirection: "column",
    alignItems: 'center'
  },
  previewImg: {
    width: "50px"
  }
};
