import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w5pd3iu",
        "template_sb9f92m",
        form.current,
        "dwP4clCBNXpMupWCx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="FillingFormName">
          <label className="form-label" htmlFor="name"></label>
          <input
            className="form-control"
            type="text"
            name="user_name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="FillingFormEmail">
          <label className="form-label" htmlFor="email"></label>
          <input
            className="form-control"
            type="email"
            name="user_email"
            required
            placeholder="Enter your Email"
          />
        </div>
        <div className="FillingFormMessage">
          <label className="form-label" htmlFor="message"></label>
          <textarea
            className="form-control"
            type="text"
            name="message"
            required
            placeholder="Got a question or proposal, or just want to say hello? Go ahead."
          />
        </div>
        <button className="btn btn-outline-info" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
