import React from "react";
import MoveSelector from "../moveSelector/MoveSelector";
import AbilitySelector from "../abilitySelector/AbilitySelector";
const EditPokemon = props => {
  return (
    <div className="edit-container">
      <img src={props.pokemon ? props.pokemon.img : null} alt="" />

      <form onSubmit={props.submit}>
        <AbilitySelector
          selectedAbility={props.pokemon.pokemon ? props.pokemon.ability : null}
          onChange={props.onChangeAbility}
          abilities={
            props.pokemon.pokemon ? props.pokemon.pokemon.abilities : null
          }
        />
        <MoveSelector
          moves={props.pokemon.pokemon ? props.pokemon.pokemon.moves : null}
          selectedMoves={props.selectedMoves ? props.selectedMoves : null}
          id={1}
          onChange={props.onChangeMoves}
        />
        <MoveSelector
          moves={props.pokemon.pokemon ? props.pokemon.pokemon.moves : null}
          selectedMoves={props.selectedMoves ? props.selectedMoves : null}
          id={2}
          onChange={props.onChangeMoves}
        />
        <MoveSelector
          moves={props.pokemon.pokemon ? props.pokemon.pokemon.moves : null}
          selectedMoves={props.selectedMoves ? props.selectedMoves : null}
          id={3}
          onChange={props.onChangeMoves}
        />
        <MoveSelector
          moves={props.pokemon.pokemon ? props.pokemon.pokemon.moves : null}
          selectedMoves={props.selectedMoves ? props.selectedMoves : null}
          id={4}
          onChange={props.onChangeMoves}
        />

        <div className="edit-buttons">
          <button type="submit"><img
            src={require("../../Icons/18.png")}
            alt="delete icon"
          /></button>
          <img
            onClick={props.delete}
            src={require("../../Icons/delete.png")}
            alt="delete icon"
          />
          
        </div>
      </form>
    </div>
  );
};

export default EditPokemon;
