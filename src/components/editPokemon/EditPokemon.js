import React from "react";
import MoveSelector from "../moveSelector/MoveSelector";
import AbilitySelector from "../abilitySelector/AbilitySelector";
const EditPokemon = props => {
  return (
    <div>
      <img src={props.pokemon.img} alt="" />
      {props.pokemon.pokemon ? console.log(props.pokemon.pokemon.moves) : null}
      {console.log(props.pokemon)}
      {console.log(props.selectedMoves)}
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
        ><button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditPokemon;
