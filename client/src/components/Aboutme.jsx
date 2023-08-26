import React from "react";

function Aboutme() {
  return (
    <>
      <div className="aboutme_container">
        <div className="aboutme">
          <div className="longbar"></div>
          <div className="aboutbottomdiv"></div>
          <div className="aboutme_container">
            <h3>About me</h3>
            <p>
              I’m a selft-motivated, independent & skilled MERN stack developer.
              I’m constantly learning & staying up to date with the latest
              trends in web development. I excel in front-end technologies like
              HTML, CSS, JS & REACTJS & I’m proficient in back-end technologies
              like Node.js, express js & MongoDB. Let’s build amazing together.
              Feel free to explore my portfolio & reach out for collaboration or
              any questions.
            </p>
          </div>
        </div>
        <div className="aboutmesmall">
          <h3 className="h3_1">About Me</h3>
          <p>
            I’m a self-motivated, independent & skilled MERN stack developer.
            I’m constantly learning & staying up to date with the latest trends
            in web development. I excel in front-end technologies like HTML,
            CSS, JS & REACTJS & I’m proficient in back-end technologies like
            Node.js, express js & MongoDB. Let’s build amazing together. Feel
            free to explore my portfolio & reach out for collaboration or any
            questions.
          </p>
          <h3 className="h3_2">My skills</h3>
          <div className="aboutmesmall_skills">
            <div className="child1">
              <button>Frontend</button>
              <button>Backend</button>
              <button>Others</button>
            </div>
            <div className="child2">
              <div className="item">
                <img src="/assets/skills/HTML5.svg" alt="" />
                <p>HTML</p>
              </div>
              <div className="item">
                <img src="/assets/skills/CSS3.svg" alt="" />
                <p>CSS</p>
              </div>
              <div className="item">
                <img src="/assets/skills/js.svg" alt="" />
                <p>JAVASCRIPT</p>
              </div>
              <div className="item">
                <img src="/assets/skills/React.svg" alt="" />
                <p>REACT</p>
              </div>
              <div className="item">
                <img src="/assets/skills/Tailwind.svg" alt="" />
                <p>TAILWIND</p>
              </div>
              <div className="item">
                <img src="/assets/skills/sass.svg" alt="" />
                <p>SASS</p>
              </div>
              <div className="item">
                <img src="/assets/skills/Figma.svg" alt="" />
                <p>FIGMA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
