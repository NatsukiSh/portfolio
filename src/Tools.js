import { fa } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from "react";
import "./Tools.css";

export default function Tools() {
  const [afterClick, setAfterClick] = useState(false);
  return (
    <div className="Tools">
      <div className="container">
        <div>
          <input type="submit" value="Click" onClick={onClick} />{" "}
          {afterClick ? <afterClick /> : null}
        </div>
      )
        <h2 id="tools">My Projects build with</h2>
        <div className="grid grid-3-columns">
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-square-js"></i>
        </div>
        <div className="grid grid-3-columns">
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-square-github"></i>
        </div>
      </div>
    </div>
}
