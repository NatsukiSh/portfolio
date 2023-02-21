import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <form>
        <label className="label">
          <span className="label-text">Name:</span>
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
}
