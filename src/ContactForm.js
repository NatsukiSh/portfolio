import React from "react";
import "./ContactForm.css";

export default ContactForm;

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
    <div className="Contact-container mt-5">
      <h2 className="mb-3">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email Address:
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <input className="form-control" type="text" id="message" required />
        </div>
        <button className="btn btn-outline-inform" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
