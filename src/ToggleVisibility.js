import React, { useState } from "react";
import "./ToggleVisibility.css";

export default function ToggleVisibility({ children }) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }

  var buttonText = show ? "**Hide**" : "**Check out my Tools**";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
