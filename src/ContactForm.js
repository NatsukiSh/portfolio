import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState("send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conForm);
  };
  return (
    <div className="Contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="FillingFormName">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="FillingFormEmail">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            placeholder="Enter your Email"
          />
        </div>
        <div className="FillingFormMessage">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <input
            className="form-control"
            type="text"
            id="message"
            required
            placeholder="Got a question or proposal, or just want to say hello? Go ahead."
          />
        </div>
        <button className="btn btn-outline-info" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
