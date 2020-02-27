import React from "react";

const MoveSelector = props => {
  return (
    <select data-id={props.id} onChange={props.onChange}>

      {props.selectedMoves ? props.selectedMoves.map((move, index) => {
        console.log(props.selectedMoves)
        if (props.id - 1 === move.id) {
          if (move.move) {
            return <option key={index} value={move}> {move.move.name}</option>

          } else {
            return <option key={index} value={move}> {move.name}</option>
          }

        }
      }) : null}
      {props.moves ? props.moves.map((move, index) => {
        console.log(move.move.name)
        let valid = true;
        props.selectedMoves.forEach(mov => {
          console.log(mov)
          if (mov.name === move.move.name) {
            console.log('test')
            valid = false;
          }
        })
        if (valid === true) {
          console.log('return')
          return <option key={index}>{move.move.name}</option>
        }
      }) : null}

    </select>
  );
};
export default MoveSelector;
