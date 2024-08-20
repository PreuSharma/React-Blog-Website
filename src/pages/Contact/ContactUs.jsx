import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you can add logic to send the message or perform any other actions.

    // Set the messageSent state to true when the message is successfully sent
    setMessageSent(true);
  };

  return (
    <div className="contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-text">
        If you have any questions, suggestions, or feedback, please feel free
        to get in touch with us. We would love to hear from you!
      </p>
      <div className="contact-form">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
      {messageSent && (
        <div className="alert">
          Your message has been received. Thank you for contacting us!
        </div>
      )}
    </div>
  );
}
