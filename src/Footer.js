import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className="contact-info">
        <div className="grid grid-4-columns">
          <a
            href="https://www.linkedin.com/in/natsukishuko/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto:natsukishuko@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/NatsukiSh/portfolio"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer" title="My Resume">
            <i class="fa-solid fa-file"></i>
          </a>
        </div>
        <hr />
        <h5>
          Designed and developed by{" "}
          <a
            href="https://www.linkedin.com/in/natsukishuko/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="text-decoration-none"
          >
            Natsuki Shuko
          </a>
          , and it is{" "}
          <a
            href="https://github.com/NatsukiSh/portfolio"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="text-decoration-none"
          >
            Open-sourced
          </a>
        </h5>
      </div>
    </div>
  );
}
