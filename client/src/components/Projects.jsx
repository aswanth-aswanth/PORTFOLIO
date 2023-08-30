import React from "react";
import { motion } from "framer-motion";
function Projects() {
  const projectlist = [
    { id: 1, name: "PROJECT MANAGEMENT", url: "project-management.png" },
    { id: 2, name: "TASK MANAGEMENT", url: "task-app.png" },
    { id: 3, name: "BLOG APP", url: "blog-app.png" },
    { id: 4, name: "CHAT APP", url: "chatapp.png" },
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
