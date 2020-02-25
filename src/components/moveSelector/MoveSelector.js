import React from "react";

const MoveSelector = props => {
  return (
    <select data-id={props.id} onChange={props.onChange}>
      {console.log(props.selectedMoves)}
      {props.selectedMoves
        ? props.selectedMoves.map((mov, index) => {
            if (index+1 === props.id) {
              return (
                <option key={index} value={mov.name}>
                  {mov.name}
                </option>
              );
            }
          })
        : null}

      {props.moves
        ? props.moves.map((move, index) => {
            let valid = false;
            props.selectedMoves.forEach(mov => {
              if (move.move.name !== mov.name) {
                valid = true;
              }
            });

            if (valid === true) {
              return (
                <option key={index} value={move.move.name}>
                  {move.move.name}
                </option>
              );
            }
          })
        : null}
    </select>
  );
};
export default MoveSelector;
