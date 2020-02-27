import React from "react";

const GalleryButtons = props => {
  return (
    <div className="dex-button-container">
      <input
        className="dex-button"
        onClick={props.next}
        type="button"
        value="<"
      ></input>
      <input
        className="dex-button"
        onClick={props.next}
        type="button"
        value=">"
      ></input>
    </div>
  );
};

export default GalleryButtons;
