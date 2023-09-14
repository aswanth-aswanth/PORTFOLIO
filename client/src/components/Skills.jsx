import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { allSkills as IMG_URL } from "../data/data";

function Skills() {
  const darkMode = useStore((state) => state.darkMode);
  const whitetext = {
    color: "white",
  };
  return (
    <div className={`skills ${darkMode ? "dark1" : null}`}>
      <h3 style={darkMode ? whitetext : null}>SKILLS</h3>
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
              delay: 0.2,
            }}
            key={item.id}
            className="skill_child"
          >
            <img src={`/assets/skills/${item.tech}`} alt="" /> <p style={darkMode ? whitetext : null}>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
