import React from "react";
import { motion } from "framer-motion";

function Main() {
  const social = [
    { id: 1, account: "instagram-tile.svg" },
    { id: 2, account: "github.svg" },
    { id: 3, account: "linkedin.svg" },
    { id: 4, account: "fb.svg" },
  ];
  return (
    <div className="main">
      <div className="main-child main-child1">
        <motion.h3
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
        >
          Aswanth T
        </motion.h3>
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <h5>Software developer</h5>
          <p>
            I am a self motivated, independent & skilled mern stack developer. I
            am constantly seeking new challenges and opportunities to enhance my
            skills and contribute to innovative projects.
          </p>
          <div className="main_btn_parent">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="main_btn"
            >
              Work with me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="main_btn"
              style={{ marginLeft: "10px" }}
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
       
        className="main-child main-child2"
      >
        <img src="/assets/profile-pic1.png" alt="" />
      </motion.div>
      <div className="main-child main-child3">
        <motion.p initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}>Follow me</motion.p>
        <div className="main-child3_child">
          {social.map((item) => (
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
             
              className="item"
              key={item.id}
            >
              <img src={`/assets/Social_icons/${item.account}`} alt="" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
