import React from "react";

function Contact() {
  return (
    <div className="contact">
      <hr />
      <form className="contact-form">
        <h3>Contact</h3>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Your email" />
        <textarea name="" id="" placeholder="Your message goes here" cols="30" rows="10"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
