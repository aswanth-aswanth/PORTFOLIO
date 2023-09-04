import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/store";

function Aboutme() {
  const darkMode = useStore((state) => state.darkMode);
  const whitetext = {
    color: "white",
  };
  const frontend = [
    {
      id: 1,
      icon: "HTML5.svg",
      name: "HTML",
    },
    {
      id: 2,
      icon: "CSS3.svg",
      name: "CSS",
    },
    {
      id: 3,
      icon: "js.svg",
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      icon: "React.svg",
      name: "REACT",
    },
    {
      id: 5,
      icon: "Tailwind.svg",
      name: "TAILWIND",
    },
    {
      id: 6,
      icon: "sass.svg",
      name: "SASS",
    },
    {
      id: 7,
      icon: "Figma.svg",
      name: "FIGMA",
    },
  ];
  const backend = [
    {
      id: 1,
      icon: "nodejs.svg",
      name: "NODEJS",
    },
    {
      id: 2,
      icon: "mongodb.svg",
      name: "MONOGODB",
    },
    {
      id: 3,
      icon: "postman.svg",
      name: "POSTMAN",
    },
    {
      id: 4,
      icon: "github.svg",
      name: "GITHUB",
    },
  ];
  const [skills, setSkills] = useState({
    selected: 1,
    data: frontend,
  });
  return (
    <>
      <div className="aboutme_container">
        <div className="aboutme">
          <div className="longbar"></div>
          <div className="aboutbottomdiv"></div>
          <div className="aboutme_container">
            <motion.h3 >About me</motion.h3>
            <motion.p
              initial={{
                y: 240,
                // opacity:0
              }}
              whileInView={{
                y: 140,
                opacity: 1,
              }}
              // viewport={{ amount: "all" }}
            >
              I’m a self-motivated, independent & skilled MERN stack developer.
              I’m constantly learning & staying up to date with the latest
              trends in web development. I excel in front-end technologies like
              HTML, CSS, JS & REACTJS & I’m proficient in back-end technologies
              like Node.js, express js & MongoDB. Let’s build amazing together.
              Feel free to explore my portfolio & reach out for collaboration or
              any questions.
            </motion.p>
          </div>
        </div>
        <div className="aboutmesmall">
          <motion.h3
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="h3_1"
            style={darkMode ? whitetext : null}
          >
            About Me
          </motion.h3>
          <motion.p
            initial={{
              // y: 100,
              opacity: 0,
              // scale: 0.5,
            }}
            whileInView={{
              // y: 0,
              opacity: 1,
              // scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.4,
            }}
            style={darkMode ? whitetext : null}
          >
            I’m a self-motivated, independent & skilled MERN stack developer.
            I’m constantly learning & staying up to date with the latest trends
            in web development. I excel in front-end technologies like HTML,
            CSS, JS & REACTJS & I’m proficient in back-end technologies like
            Node.js, express js & MongoDB. Let’s build amazing together. Feel
            free to explore my portfolio & reach out for collaboration or any
            questions.
          </motion.p>
          <h3 className="h3_2" style={darkMode ? whitetext : null}>
            My skills
          </h3>
          <div className="aboutmesmall_skills">
            <div>
              <div className="child1">
                <button
                  onClick={() => setSkills({ selected: 1, data: frontend })}
                  className={`frontend_btn  ${
                    skills.selected == 1 && "selected"
                  }`}
                  style={darkMode ? whitetext : null}
                >
                  Frontend
                </button>
                <button
                  onClick={() => setSkills({ selected: 2, data: backend })}
                  className={`backend_btn ${
                    skills.selected == 2 && "selected"
                  }`}
                  style={darkMode ? whitetext : null}
                >
                  Backend
                </button>
                <button className="all_btn" style={darkMode ? whitetext : null}>
                  Others
                </button>
              </div>
              <motion.div
                initial={{
                  // x: -100,
                  scale: 0.7,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="child2"
              >
                {skills.data.map((item) => (
                  <div key={item.id} className="item">
                    <img src={`/assets/skills/${item.icon}`} alt="" />
                    <p style={darkMode ? whitetext : null}>{item.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
