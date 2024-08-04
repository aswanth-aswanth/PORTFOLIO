// Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { allSkills } from "../data/data";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: ${(props) => (props.darkMode ? "#444" : "#fff")};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

function Skills() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <SkillsSection darkMode={darkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </SectionTitle>
      <SkillsGrid>
        {allSkills.map((item, index) => (
          <SkillItem
            key={item.id}
            darkMode={darkMode}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={`/assets/skills/${item.tech}`} alt={item.name} />
            <p>{item.name}</p>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;