import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";

import { useStore } from "../store/store.js";

function Header() {
  const setDarkMode = useStore((state) => state.setDarkMode);
  const darkMode = useStore((state) => state.darkMode);

  return (
    <div className={`header ${darkMode? `headerdark`:null}`} >
      <div className="nav">
        <div className="nav-child1">
          <div className="icon">
            <img src="/assets/profile-pic22.webp" alt="" />
          </div>
          <h1>Aswanth</h1>
        </div>
        <div className="nav-child2">
          {darkMode ? (
            <LightModeIcon
              onClick={() => setDarkMode()}
              className="lightmode"
            />
          ) : (
            <DarkModeIcon onClick={() => setDarkMode()} className="lightmode" />
          )}
          <a href="mailto:aswanthndl@gmail.com" style={{color:'white'}}>
            <MailOutlineIcon className="menu" />
          </a>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{
            y: -40,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{ amount: "all" }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 14,
          }}
          className="circle1_child"
        >
          <img src="/assets/profile-pic (9).webp" alt="" />
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          type: "spring",
          stiffness: 400,
          // damping:8
        }}
        className="p1"
      >
        Hi guys 👋, I am <span>Aswanth</span>
      </motion.p>
      <motion.p
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className="p2"
      >
        A software developer
      </motion.p>
      <p className="p3">Follow me</p>
      <div className="icons">
        <a href="https://www.instagram.com/aswanthndl/">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ amount: "all", margin: "-100px" }}
            transition={{
              opacity: { delay: 0.5 },
              x: { delay: 0.5, type: "spring", stiffness: 400, damping: 17 },
              scale: { type: "spring", stiffness: 400, damping: 17 }, // No delay for scale
            }}
            src="/assets/Social_icons/instagram-tile.svg"
            alt=""
          />
        </a>
        <a href="https://github.com/aswanth-aswanth">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ amount: "all", margin: "-100px" }}
            transition={{
              opacity: { delay: 0.5 },
              x: { delay: 0.5, type: "spring", stiffness: 400, damping: 17 },
              scale: { type: "spring", stiffness: 400, damping: 17 }, // No delay for scale
            }}
            src="/assets/Social_icons/github.svg"
            alt=""
          />
        </a>
        <a href="www.linkedin.com/in/aswanth-t-5525801ba">
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ amount: "all", margin: "-100px" }}
            transition={{
              opacity: { delay: 0.5 },
              x: { delay: 0.5, type: "spring", stiffness: 400, damping: 17 },
              scale: { type: "spring", stiffness: 400, damping: 17 }, // No delay for scale
            }}
            src="/assets/Social_icons/linkedin.svg"
            alt=""
          />
        </a>
      </div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ amount: "all" }}
        className="buttons"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Work with me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Download CV
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Header;
