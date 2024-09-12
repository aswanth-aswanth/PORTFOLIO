import { motion } from "framer-motion";
import { headerSmallIcons } from "../data/data.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
    },
  },
  tap: { scale: 0.9 },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: { scale: 0.95 },
};

function EnhancedHeaderSection() {
  return (
    <>
      <motion.div
        className="icons"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {headerSmallIcons.map((item, index) => (
          <motion.a
            href={item.link}
            key={item.id}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.img
              src={`/assets/Social_icons/${item.file}`}
              alt=""
              variants={iconVariants}
            />
          </motion.a>
        ))}
      </motion.div>
      <motion.div
        className="buttons"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={buttonVariants}>Work with me</motion.span>
        </motion.button>
        <motion.button
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.span variants={buttonVariants}>Download CV</motion.span>
        </motion.button>
      </motion.div>
    </>
  );
}

export default EnhancedHeaderSection;
