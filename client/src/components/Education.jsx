// Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { educationItems } from "../data/data";
import styled from "styled-components";
import { useStore } from "../store/store";

const EducationSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #007bff;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.isEven ? "flex-start" : "flex-end")};
  padding-bottom: 2rem;
  width: 100%;
`;

const TimelineContent = styled.div`
  background-color: ${(props) => (props.darkMode ? "#444" : "#fff")};
  border-radius: 8px;
  padding: 1.5rem;
  width: calc(50% - 2rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background-color: #007bff;
    border-radius: 50%;
    ${(props) => (props.isEven ? "right: -30px;" : "left: -30px;")}
  }
`;

const Year = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const School = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.p`
  font-size: 1rem;
`;

function Education() {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <EducationSection darkMode={darkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionTitle>
      <TimelineContainer>
        {educationItems.map((item, index) => (
          <TimelineItem
            key={item.id}
            isEven={index % 2 === 0}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineContent darkMode={darkMode} isEven={index % 2 === 0}>
              <Year>{item.year}</Year>
              <School>{item.school}</School>
              <Degree>{item.degree}</Degree>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </EducationSection>
  );
}

export default Education;