import React from "react";

const AbilitySelector = props => {
  return (
    <select
      data-info={JSON.stringify(props.selectedAbility)}
      onChange={props.onChange}
    >
    {props.selectedAbility ? <option value={props.selectedAbility}>{props.selectedAbility.name}</option>:null}
    {/* {props.selectedAbility ? console.log(props.selectedAbility.name) :null}
      {props.selectedAbility ?  (
        <option
          value={props.selectedAbility.name}
        >
          {props.selectedAbility !== " "
            ? props.selectedAbility.ability.name
            : null}
        </option>
      ) : null}*/}
      {props.abilities
        ? props.abilities.map((abil, index) => {
            if (abil.ability.name !== props.selectedAbility.name) {
              return (
                <option key={index} value={abil.ability.name}>
                  {abil.ability.name}
                </option>
              );
            }
          })
        : null} 
    </select>
  );
};
export default AbilitySelector;
