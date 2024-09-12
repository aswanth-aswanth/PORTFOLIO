import { useEffect } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useStore } from "../store/store.js";
import "./ProjectModal.css";

const modalVariant = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: "0",
    transition: { type: "spring", stiffness: 100 },
  },
  exit: { opacity: 0, y: "-100vh", transition: { ease: "easeInOut" } },
};

function ProjectModal({ project, closeModal }) {
  const darkMode = useStore((state) => state.darkMode);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeModal();
    }
  };

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [closeModal]);

  return (
    <div className="modal-backdrop" onClick={handleOutsideClick}>
      <motion.div
        className={`modal-content ${darkMode ? "dark-mode" : ""}`}
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-header">
          <h2>{project?.name}</h2>
          <CloseIcon className="close-icon" onClick={closeModal} />
        </div>
        <div className="modal-image-container">
          <img
            src={`/assets/projects/${project?.url}`}
            alt={project?.name}
            className="modal-image"
          />
        </div>
        <div className="modal-body">
          <p>{project?.description}</p>
          <h4>Technologies:</h4>
          <ul className="project_tech">
            {project?.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
