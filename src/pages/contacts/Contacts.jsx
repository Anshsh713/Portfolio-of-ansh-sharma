import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contact from "./email.png";

function Contacts() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_m8w4fhc",   
        "template_7rvbqai",  
        form.current,
        "INl_LulYkW9gx5ALi"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="contact-text">
        <h1>Get in Touch</h1>
        <p>
          Here you can let me know if you have any criticism, suggestion or
          problem, I'm waiting to hear your voice or see your message.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-head">
            <h1>Let's Work Together</h1>
            <p>Get in touch to discuss your project or just say hello!</p>
          </div>
          <div className="contact-img">
            <img src={contact} alt="Contact" />
          </div>
        </div>
        <div className="contact-inputs">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name :</label>
            <input type="text" name="user_name" placeholder=" Your Name" required />
            <label htmlFor="email">Email :</label>
            <input type="email" name="user_email" placeholder=" Your Email-ID" required />
            <label htmlFor="message">Your Message :</label>
            <textarea name="message" rows="6" placeholder=" Your Message" required></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
