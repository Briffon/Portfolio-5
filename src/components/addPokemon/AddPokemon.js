import React from "react";

const AddPokemon = props => {
  return (
    <div
      onClick={
        props.count >= 6 ? props.submitTeam: props.click}
      className={props.count >= 6 ? "add-pokemon disabled" : "add-pokemon"}
    >
      <img
        src={
          props.count >= 6
            ? require("../../Icons/18.png")
            : require("../../Icons/2.svg")
        }
        alt="add pokemon button"
      />
      <p>{props.count >= 6 ?'SUMBIT TEAM':`Add Pokemon (${props.count}/6)`}</p>
    </div>
  );
};

export default AddPokemon;
