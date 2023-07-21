import React from "react";
import "./contactme.css";

const ContactMe = () => {
  return (
    <section className="contact" id="contactme">
      <div className="main-text">
        <span>Ask me any Question?</span>
        <h2>Contact me</h2>
      </div>
      <form action="#">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="number" placeholder="Your Number" />

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
        <div className="btn-box form-btn">
          <button type="submit" className="btn btn-active btn-accent">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
