import React from "react";

const GalleryButtons = props => {
  return (
    <div className="dex-button-container">
      <button className="dex-button" onClick={props.previous}>
        >
      </button>
      <input
        className="dex-button"
        onClick={props.next}
        type="button"
        value="<"
      ></input>
    </div>
  );
};

export default GalleryButtons;
