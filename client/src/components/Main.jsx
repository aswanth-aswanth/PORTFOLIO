import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";

function Main() {
  const darkMode = useStore((state) => state.darkMode);

  const social = [
    { id: 1, account: "instagram-tile.svg", link: "https://www.instagram.com/aswanthndl/" },
    { id: 2, account: "github.svg", link: "https://github.com/aswanth-aswanth" },
    {
      id: 3,
      account: "linkedin.svg",
      link: "www.linkedin.com/in/aswanth-t-5525801ba",
    },
    { id: 4, account: "fb.svg" ,link:" "},
  ];
  const whitetext = {
    color: "white",
  };
  // darkMode?(document.getElementById("root").style.backgroundColor='#444748'):(document.getElementById("root").style.backgroundColor='#444748')
  if (darkMode) {
    document.getElementById("root").style.backgroundColor = "#444748";
  } else {
    document.getElementById("root").style.backgroundColor = "white";
  }
  return (
    <div className={`main ${darkMode && "dark1"}`}>
      <div className={`main-child main-child1`}>
        <motion.h3
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          style={darkMode ? whitetext : null}
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
          <h5 style={darkMode ? whitetext : null}>Software developer</h5>
          <p style={darkMode ? whitetext : null}>
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
        <img src="/assets/profile-pic1.webp" alt="" />
      </motion.div>
      <div className="main-child main-child3">
        <motion.p
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          style={darkMode ? whitetext : null}
        >
          Follow me
        </motion.p>
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
              <a href={item.link}>
                <img src={`/assets/Social_icons/${item.account}`} alt="" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
