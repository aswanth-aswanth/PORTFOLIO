import { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store.js";
import { projectLists } from "../data/data.js";
import ProjectModal from "./ProjectModal";

function Projects() {
  const darkMode = useStore((state) => state.darkMode);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const whitetext = {
    color: "white",
  };

  return (
    <div className="projects">
      <h3 style={darkMode ? whitetext : null}>Projects</h3>
      <div className="project-container">
        {projectLists.map((item) => (
          <div key={item.id} className="project-container2">
            <div className="project-items" onClick={() => openModal(item)}>
              <img src={`/assets/projects/${item.url}`} alt={item.name} />
              <button>{item?.name}</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Load more
      </motion.button>
    </div>
  );
}

export default Projects;
