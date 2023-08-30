import React from "react";
import { motion } from "framer-motion";
function Projects() {
  const projectlist = [
    { id: 1, name: "PROJECT MANAGEMENT", url: "project.png" },
    { id: 2, name: "TASK MANAGEMENT", url: "Frame1.jpg" },
    { id: 3, name: "BLOG APP", url: "Desktop1.jpg" },
    { id: 4, name: "BLOG APP", url: "Desktop1.jpg" },
  ];
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="project-container">
        {projectlist.map((item) => (
          <div key={item.id} className="project-container2">
            <div className="project-items">
              <img src={`/assets/projects/${item.url}`} alt="" />
              <button>{item.name}</button>
            </div>
          </div>
        ))}
      </div>
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
