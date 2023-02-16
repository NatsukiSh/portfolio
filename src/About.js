import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="container">
        <h2 id="about">About me</h2>
        <div className="grid grid-2-columns">
          <p>
            My name is Natsuki, a Frontend Web Developer. I highly motivated
            detail-oriented and passionate about creating visually appealing and
            user-friendly websites. I am looking for new challenges and
            opportunities to grow as a Frontend Web Developer.
            <a href="#projects" className="btn btn-outline-info">
              To my Projects
            </a>
          </p>
          <img src={require(`./img/me.jpg`)} alt="Natsuki" title="Natsuki" />
        </div>
      </div>
    </div>
  );
}
