import React from "react";

const Suggestion = props => {
  return (
    <div className={`suggestion-container ` + props.show}>
      {props.suggestions.map((item, index) => {
        return <p data-pokemon={props.item} onClick={props.select} key={index}> {item}</p>;
      })}
    </div>
  );
};

export default Suggestion;
