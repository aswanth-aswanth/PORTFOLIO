import React from "react";
import { motion } from "framer-motion";
function Skills() {
  const IMG_URL = [
    { id: 1, tech: "HTML5.svg", name: "HTML" },
    { id: 2, tech: "CSS3.svg", name: "CSS" },
    { id: 3, tech: "js.svg", name: "JAVASCRIPT" },
    { id: 4, tech: "React.svg", name: "REACT" },
    { id: 5, tech: "sass.svg", name: "SASS" },
    { id: 6, tech: "Tailwind.svg", name: "TAILWINDCSS" },
    { id: 7, tech: "redux.svg", name: "REDUX" },
    { id: 8, tech: "Figma.svg", name: "FIGMA" },
    { id: 9, tech: "mongodb.svg", name: "MONGODB" },
    { id: 10, tech: "postman.svg", name: "POSTMAN" },
    { id: 11, tech: "github.svg", name: "GITHUB" },
    { id: 12, tech: "nodejs.svg", name: "NODEJS" },
  ];
  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <div className="skills_parent">
        {IMG_URL.map((item) => (
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay:0.2
            }}
            key={item.id}
            className="skill_child"
          >
            <img src={`/assets/skills/${item.tech}`} alt="" />{" "}
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
