import React from "react";
import "./Projects.css";
import Tools from "./Tools";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container">
        <h2 id="projects">My Projects</h2>
        <div className="row">
          <div className="col-sm-4">
            <a
              href="https://funny-beignet-7cc5ec.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require(`./img/weather.jpg`)}
                alt="Weather App"
                title="Weather App"
              />
            </a>
            <h3>Weather App</h3>
            <p>
              <small>
                <i className="fa-brands fa-react"></i>
                <a
                  href="https://github.com/NatsukiSh/weather-react-challenge"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Open-source
                </a>
                code and on{" "}
                <a
                  href="https://funny-beignet-7cc5ec.netlify.app/"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Netlify
                </a>
              </small>
            </p>
          </div>
          <div className="col-sm-4">
            <a
              href="https://magical-kringle-3a7435.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={require(`./img/dictionary.jpg`)}
                alt="Dictionary App"
                title="Dictionary App"
              />
            </a>
            <h3>Dictionary App</h3>
            <p>
              <small>
                <i className="fa-brands fa-react"></i>
                <a
                  href="https://github.com/NatsukiSh/dictionary-project"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Open-source
                </a>
                code and on{" "}
                <a
                  href="https://magical-kringle-3a7435.netlify.app/"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Netlify
                </a>
              </small>
            </p>
          </div>
          <div className="col-sm-4">
            <a
              href="https://playful-khapse-f27e8a.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={require(`./img/timezone.jpg`)}
                alt="Timezone App"
                title="Timezone App"
              />
            </a>
            <h3>Timezone App</h3>
            <p>
              <small>
                <i className="fa-brands fa-react"></i>
                <a
                  href="https://github.com/NatsukiSh/world-clock-project"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Open-source
                </a>
                code and on{" "}
                <a
                  href="https://playful-khapse-f27e8a.netlify.app/"
                  target="_blank"
                  className="text-decoration-none"
                  rel="noreferrer"
                >
                  Netlify
                </a>
              </small>
            </p>
          </div>
          <a href="#tools" className="btn btn-outline-info">
            Tools
          </a>
          <Tools />
        </div>
      </div>
    </div>
  );
}
