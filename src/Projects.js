import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="row">
          <div className="col-sm-4">
            <img src={`/img/weather.jpg`} />
          </div>
          <div className="col-sm-4">
            <img src={require(`./img/dictionary.jpg`).default} />
          </div>
          <div className="col-sm-4">
            <img src={require(`./img/timezone.jpg`).default} />
          </div>
        </div>
      </div>
    </div>
  );
}
