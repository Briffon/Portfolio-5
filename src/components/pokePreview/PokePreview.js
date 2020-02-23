import React from "react";

const PokePreview = props => {
  return (
    <div
      data-pokemon={props.item}
      onClick={props.selected} 
      className="pokepreview-container"
    >
      <p onClick={props.selected} className="pokepreview-container"
      > {props.name}</p>
      <img onClick={props.selected} data-pokemon={props.item} src={props.url} alt={props.name} />
    </div >
  );
};

export default PokePreview;
