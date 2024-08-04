// Main.jsx
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { social } from "../data/data";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContentSection = styled.section`
  max-width: 600px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${(props) => (props.darkMode ? "#ddd" : "#666")};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:first-child {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }

  &:last-child {
    background-color: #6c757d;
    color: white;

    &:hover {
      background-color: #545b62;
    }
  }
`;

const ImageSection = styled(motion.section)`
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  img {
    width: 30px;
    height: 30px;
  }
`;

function Main() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <MainContainer darkMode={darkMode}>
      <ContentSection>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aswanth T
        </Title>
        <Subtitle
          darkMode={darkMode}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Web Developer
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I am a self-motivated, independent & skilled MERN stack developer. I am constantly seeking new challenges and opportunities to enhance my skills and contribute to innovative projects.
        </Description>
        <ButtonGroup>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work with me
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </Button>
        </ButtonGroup>
      </ContentSection>
      <ImageSection
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img src="/assets/profile-pic1.webp" alt="Aswanth T" />
      </ImageSection>
      <SocialLinks>
        {social.map((item) => (
          <SocialIcon
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={`/assets/Social_icons/${item.account}`} alt={item.account} />
          </SocialIcon>
        ))}
      </SocialLinks>
    </MainContainer>
  );
}

export default Main;