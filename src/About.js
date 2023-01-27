import React from "react";
import "./About.css";
import Typewriter from "./Typewriter";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <h2 className="grid grid-2-columns">About me</h2>
        <Typewriter />
        <p className="grid grid-2-columns">
          My name is Natsuki, a React Developer. I highly motivated
          detail-oriented and passionate about creating visually appealing and
          user-friendly websites.
        </p>
      </div>
    </div>
  );
}
