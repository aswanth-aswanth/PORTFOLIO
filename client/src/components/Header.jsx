import LightModeIcon from "@mui/icons-material/LightMode";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { motion, useAnimation, useInView } from "framer-motion";
import { useStore } from "../store/store.js";
import { useEffect, useRef } from "react";
import EnhancedHeaderSection from "./EnhancedHeaderSection.jsx";

function Header() {
  const setDarkMode = useStore((state) => state.setDarkMode);
  const darkMode = useStore((state) => state.darkMode);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: -40 });
    }
  }, [isInView, controls]);

  const icon = darkMode ? (
    <LightModeIcon onClick={() => setDarkMode()} className="lightmode" />
  ) : (
    <DarkModeOutlinedIcon onClick={() => setDarkMode()} className="lightmode" />
  );

  return (
    <div className={`header ${darkMode ? `headerdark` : null}`}>
      <div className="nav">
        <div className="nav-child1">
          <div className="icon">
            <img src="/assets/profile-pic22.webp" alt="" />
          </div>
          <h1>Aswanth</h1>
        </div>
        <div className="nav-child2">
          {icon}
          <a href="mailto:aswanthndl@gmail.com" style={{ color: "white" }}>
            <MailOutlineIcon className="menu" />
          </a>
        </div>
      </div>
      <div className="circle1"></div>
      <div className="circle2">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ y: -40 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 14,
          }}
          className="circle1_child"
        >
          <img src="/assets/profile-pic (5).png" alt="" />
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
        a web developer
      </motion.p>
      <p className="p3">Follow me</p>
      <EnhancedHeaderSection />
    </div>
  );
}

export default Header;
