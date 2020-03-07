import React from "react";
import TypeBubble from "../typeBubble/TypeBubble";

const PokeDisplay = props => {
  const backgroundColor = type => {
    let style = "";

    switch (type) {
      case "poison":
        style = "#A040A0";
        break;
      case "normal":
        style = "#A8A878";
        break;
      case "fighting":
        style = "#C03028";
        break;
      case "flying":
        style = "#A890F0";
        break;
      case "ground":
        style = "#E0C068";
        break;
      case "ghost":
        style = "#705898";
        break;
      case "rock":
        style = "#B8A038";
        break;
      case "bug":
        style = "#A8B820";
        break;
      case "steel":
        style = "#B8B8D0";
        break;
      case "fire":
        style = "#F08030";
        break;
      case "water":
        style = "#6890F0";
        break;
      case "grass":
        style = "#78C850";
        break;
      case "electric":
        style = "#F8D030";
        break;
      case "psychic":
        style = "#F85888";
        break;
      case "ice":
        style = "#98D8D8";
        break;
      case "dragon":
        style = "#7038F8";
        break;
      case "dark":
        style = "#705848";
        break;
      case "fairy":
        style = "#EE99AC";
        break;
      default:
        break;
    }
    return style;
  };
  return (
    <div
      className="poke-display"
      data-pokemon={props.id}
      style={{
        backgroundColor: backgroundColor(props.pokemon.types[0].type.name),
        color: "#FFFFFF"
      }}
    >
      <div className="poke-display-head">
        <img src={props.img} alt={props.pokemon.pokemon.name} />
        <p>{props.pokemon.pokemon.name}</p>
      </div>
      <div className="type-container">
        {props.pokemon.types !== []
          ? props.pokemon.types.map((type, index) => {
              return <TypeBubble key={index} type={type.type.name} />;
            })
          : null}
      </div>
      <img
        src={require("../../Icons/edit.png")}
        alt="edit button"
        onClick={props.edit}
        className="edit-button"
      />
    </div>
  );
};

export default PokeDisplay;
