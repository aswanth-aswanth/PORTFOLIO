import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "./loading.css";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_prlxd1n", "template_p94lodd", form.current, {
        publicKey: "CWV4PhrET5jf5VjQJ",
      })
      .then(() => {
        setIsLoading(false);
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Failed to send email. Please try again.");
        console.log("FAILED...", error.text);
      });
  };

  return (
    <div className="contact">
      <hr />
      <motion.form initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 17 }} className="contact-form" ref={form} onSubmit={sendEmail}>
        <h3>Contact</h3>
        <input type="text" name="user_name" placeholder="Full name" />
        <input type="email" name="user_email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message goes here" cols="30" rows="10"></textarea>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} type="submit" disabled={isLoading}>
          {isLoading ? (
            <div className="loading-circle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Submit"
          )}
        </motion.button>
      </motion.form>
      <ToastContainer />
    </div>
  );
}

export default Contact;
