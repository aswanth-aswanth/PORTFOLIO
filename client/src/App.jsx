import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Project from "./components/Project.jsx";
import ProjectModal from "./components/ProjectModal";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GlobalStyles from "./GlobalStyles.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Aboutme />
      <Skills />
      <Projects setSelectedProject={setSelectedProject}/>
      <Project />
      <Education />
      <Contact />
      <Footer />
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}

export default App;
