import React, { useRef, useState } from "react";
import "./SideBtn.css";

export default function SideBtn() {
  const [activeLink, setActiveLink] = useState(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);

  const handleClick = (event) => {
    setActiveLink(event.currentTarget);
  };

  return (
    <div className="SideBtn">
      <div className="sbn-list">
        <div className="sbn sbn11">
          <ul>
            <li>
              <a
                href="./#Home"
                onClick={handleClick}
                ref={link1Ref}
                className={activeLink === link1Ref.current ? "is-active" : ""}
                title="Top page"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="./#About"
                onClick={handleClick}
                ref={link2Ref}
                className={activeLink === link2Ref.current ? "is-active" : ""}
                title="About me"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="./#Projects"
                onClick={handleClick}
                ref={link3Ref}
                className={activeLink === link3Ref.current ? "is-active" : ""}
                title="My Projects"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="./#Contact"
                onClick={handleClick}
                ref={link4Ref}
                className={activeLink === link4Ref.current ? "is-active" : ""}
                title="Contact me"
              >
                4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
