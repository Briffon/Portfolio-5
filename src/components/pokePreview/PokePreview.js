import React from "react";

const PokePreview = props => {
  return (
    <div
      data-pokemon={props.item}
      onClick={props.selected}
      className="pokepreview-container"
    >
      <p>{props.name}</p>
      <img data-pokemon={props.item} src={props.url} alt={props.name} />
    </div>
  );
};

export default PokePreview;
