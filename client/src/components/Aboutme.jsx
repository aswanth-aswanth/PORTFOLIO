// Aboutme.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { frontendIcons, backendIcons } from "../data/data";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#444748" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SkillTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SkillTab = styled.button`
  background-color: ${(props) => (props.selected ? "#007bff" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : props.darkMode ? "#fff" : "#333")};
  border: 1px solid #007bff;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
  }
`;

function Aboutme() {
  const darkMode = useStore((state) => state.darkMode);
  const [skills, setSkills] = useState({
    selected: 1,
    data: frontendIcons,
  });

  const handleSkillSelection = (selectedSkills) => {
    setSkills({ selected: selectedSkills, data: selectedSkills === 1 ? frontendIcons : backendIcons });
  };

  return (
    <AboutSection darkMode={darkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </SectionTitle>
      <AboutContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          I'm a self-motivated, independent & skilled MERN stack developer. I'm constantly learning & staying up to date with the latest trends in web development. I excel in front-end technologies like HTML, CSS, JS & REACTJS & I'm proficient in back-end technologies like Node.js, express js & MongoDB. Let's build amazing together. Feel free to explore my portfolio & reach out for collaboration or any questions.
        </p>
      </AboutContent>
      <SkillsSection>
        <SkillsTitle>My Skills</SkillsTitle>
        <SkillTabs>
          <SkillTab
            selected={skills.selected === 1}
            darkMode={darkMode}
            onClick={() => handleSkillSelection(1)}
          >
            Frontend
          </SkillTab>
          <SkillTab
            selected={skills.selected === 2}
            darkMode={darkMode}
            onClick={() => handleSkillSelection(2)}
          >
            Backend
          </SkillTab>
        </SkillTabs>
        <SkillsGrid
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.data.map((item) => (
            <SkillItem key={item.id}>
              <img src={`/assets/skills/${item.icon}`} alt={item.name} />
              <p>{item.name}</p>
            </SkillItem>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </AboutSection>
  );
}

export default Aboutme;