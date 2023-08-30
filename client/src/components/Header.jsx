import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
function Header() {
  return (
    // <div className="header_container">
    <div className="header">
      <div className="nav">
        <div className="nav-child1">
          <div className="icon">
            <img src="/assets/profile-pic2.png" alt="" />
          </div>
          <h1>Aswanth</h1>
        </div>
        <div className="nav-child2">
          <LightModeIcon className="lightmode" />
          <MenuIcon className="menu" />
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2">
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{
            y: -40,
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{
            y: 0,
          }}
          transition={{
            delay:0.1,
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="circle1_child"
        >
          <img src="/assets/profile-pic (9).png" alt="" />
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="p1"
      >
        Hi guys 👋, I am <span>Aswanth</span>
      </motion.p>
      <motion.p
        initial={{
          y: -200,
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
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          src="/assets/Social_icons/instagram-tile.svg"
          alt=""
        />
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
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          src="/assets/Social_icons/github.svg"
          alt=""
        />
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
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          src="/assets/Social_icons/linkedin.svg"
          alt=""
        />
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
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
    // </div>
  );
}

export default Header;
