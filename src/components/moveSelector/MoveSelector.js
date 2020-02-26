import React from "react";

const MoveSelector = props => {
  return (
    <select data-id={props.id} onChange={props.onChange}>
      {props.selectedMoves
        ? props.selectedMoves.map((mov, index) => {
            if (index + 1 === props.id) {
              if (mov.disabled === true) {
              } else {
                return (
                  <option key={index} value={mov.name}>
                    {mov.name}
                  </option>
                );
              }
            }
          })
        : null}

      {props.moves
        ? props.moves.map((move, index) => {
            let valid = false;
            props.selectedMoves.forEach(mov => {
              if (move.move.name !== mov.name) {
                valid = true;
                return (
                  <option key={index} value={move.move.name} disabled>
                    {move.move.name}
                  </option>
                );
              }
            });

            if (valid === true) {
              return (
                <option key={index} value={move.move.name}>
                  {move.move.name}
                </option>
              );
            } else {
            }
          })
        : null}
    </select>
  );
};
export default MoveSelector;
