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
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ delay: 0.3 }}
            key={item.id}
            className="project-container2"
          >
            <div className="project-items">
              <img src={`/assets/projects/${item.url}`} alt="" />
              <button>{item.name}</button>
            </div>
          </motion.div>
        ))}
      </div>
      <button>Load more</button>
    </div>
  );
}

export default Projects;
