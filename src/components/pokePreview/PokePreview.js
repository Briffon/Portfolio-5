import React from "react";

const PokePreview = props => {
  return (
    <div
      data-pokemon={props.item}
      onClick={props.selected}
      className="pokepreview-container"
    >
      <img
        onClick={props.selected}
        data-pokemon={props.item}
        src={props.url}
        alt={props.name}
      />
      <p onClick={props.selected} >
        {" "}
        {props.name}
      </p>
    </div>
  );
};

export default PokePreview;
