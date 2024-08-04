// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { projectLists } from "../data/data";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${(props) => (props.darkMode ? "#444748" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectItem = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  color: #fff;
  text-align: center;
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Projects({ setSelectedProject }) {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <ProjectsSection darkMode={darkMode}>
      <SectionTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </SectionTitle>
      <ProjectGrid>
        {projectLists.map((project, index) => (
          <ProjectItem
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
          >
            <img src={`/assets/projects/${project.url}`} alt={project.name} />
            <ProjectOverlay>
              <h3>{project.name}</h3>
            </ProjectOverlay>
          </ProjectItem>
        ))}
      </ProjectGrid>
      <LoadMoreButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Load More
      </LoadMoreButton>
    </ProjectsSection>
  );
}

export default Projects;