import React from "react";
import { motion } from "framer-motion";
import { educationItems } from "../data/data";
function Education() {
  return (
    <motion.div
      initial={{
        x: -50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.2,
      }}
      className="education"
    >
      <h3>Education</h3>
      <div className="container1">
        <div className="container2">
          {educationItems.map((item) => (
            <div key={item.id} className={`item ${item.class}`}>
              <div className="item_child1">
                <img src={`/assets/education/${item.img}`} alt="" />
              </div>
              <div className="item_child2">
                <h3>{item.year}</h3>
                <p>{item.school}</p>
                <p>{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
