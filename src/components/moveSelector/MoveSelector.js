import React from "react";

const MoveSelector = props => {
  return (
    <select data-id={props.id} onChange={props.onChange}>

      {props.selectedMoves ? props.selectedMoves.map((move, index) => {
        if (props.id - 1 === move.id) {
          if (move.move) {
            return <option key={index} value={move}> {move.move.name}</option>

          } else {
            return <option key={index} value={move}> {move.name}</option>
          }

        }
      }) : null}
      {props.moves ? props.moves.map((move, index) => {
        let valid = true;
        props.selectedMoves.forEach(mov => {
          if (mov.name === move.move.name) {
            valid = false;
          }
        })
        if (valid === true) {
          return <option key={index}>{move.move.name}</option>
        }
      }) : null}

    </select>
  );
};
export default MoveSelector;
