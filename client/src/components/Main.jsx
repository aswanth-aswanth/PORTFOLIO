import { motion } from "framer-motion";
import { useStore } from "../store/store";
import { social } from "../data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

function SocialLink({ item }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{ scale: 0.9 }}
      className="item"
    >
      <a href={item.link}>
        <img src={`/assets/Social_icons/${item.account}`} alt="" />
      </a>
    </motion.div>
  );
}

function Main() {
  const darkMode = useStore((state) => state.darkMode);
  const whitetext = {
    color: "white",
  };

  if (darkMode) {
    document.getElementById("root").style.backgroundColor = "#444748";
  } else {
    document.getElementById("root").style.backgroundColor = "white";
  }

  return (
    <div className={`main ${darkMode && "dark1"}`}>
      <div className={`main-child main-child1`}>
        <motion.h3
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={darkMode ? whitetext : null}
        >
          Aswanth T
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h5 style={darkMode ? whitetext : null}>Web developer</h5>
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
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="main-child main-child2"
      >
        <img src="/assets/profile-pic1.webp" alt="" />
      </motion.div>
      <div className="main-child main-child3">
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={darkMode ? whitetext : null}
        >
          Follow me
        </motion.p>
        <motion.div
          className="main-child3_child"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
        >
          {social.map((item) => (
            <SocialLink key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
