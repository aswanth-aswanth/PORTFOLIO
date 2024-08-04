// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useStore } from "../store/store";

const ContactSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#444748" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const darkMode = useStore((state) => state.darkMode);

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
        form.current.reset();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Failed to send email. Please try again.");
        console.log("FAILED...", error.text);
      });
  };

  return (
    <ContactSection darkMode={darkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </SectionTitle>
      <ContactForm
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input type="text" name="user_name" placeholder="Full name" required />
        <Input type="email" name="user_email" placeholder="Your email" required />
        <TextArea name="message" placeholder="Your message goes here" required />
        <SubmitButton
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? <LoadingSpinner /> : "Submit"}
        </SubmitButton>
      </ContactForm>
      <ToastContainer position="bottom-right" />
    </ContactSection>
  );
}

export default Contact;