import React from "react";

export const SingleForm = props => {
  return (
    <form className="singleForm" onSubmit={props.submit}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        onClick={props.modalOpen}
        name={props.name}
        type={props.type}
        defaultValue={props.val}
        onChange={props.onChange}
        placeholder={props.placeholder}
        autoComplete="off"
      />
      {props.button}
    </form >
  );
};

