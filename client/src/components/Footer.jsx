// Footer.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStore } from "../store/store";

const FooterContainer = styled.footer`
  background-color: ${(props) => (props.darkMode ? "#222" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 2rem 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

function Footer() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <FooterContainer darkMode={darkMode}>
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/aswanth-t-5525801ba/"
          target="_blank"
          rel="noopener noreferrer"
          darkMode={darkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://github.com/aswanth-aswanth"
          target="_blank"
          rel="noopener noreferrer"
          darkMode={darkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          GitHub
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/aswanthndl/"
          target="_blank"
          rel="noopener noreferrer"
          darkMode={darkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Instagram
        </SocialLink>
      </SocialLinks>
      <Copyright>© 2023 Aswanth. All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
