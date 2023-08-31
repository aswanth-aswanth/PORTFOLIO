import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div className="contact">
      <hr />
      <motion.form
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          type: "spring",
          // stiffness:20
          stiffness: 400,
          damping: 17,
        }}
        className="contact-form"
      >
        <h3>Contact</h3>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Your email" />
        <textarea
          name=""
          id=""
          placeholder="Your message goes here"
          cols="30"
          rows="10"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
