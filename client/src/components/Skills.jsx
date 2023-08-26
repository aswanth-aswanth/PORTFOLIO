import React from "react";

function Skills() {
  const IMG_URL = [
    { id: 1, tech: "HTML5.svg" ,name:"HTML"},
    { id: 2, tech: "CSS3.svg" ,name:"CSS"},
    { id: 3, tech: "js.svg",name:"JAVASCRIPT" },
    { id: 4, tech: "React.svg",name:"REACT" },
    { id: 5, tech: "sass.svg" ,name:"SASS"},
    { id: 6, tech: "Tailwind.svg" ,name:"TAILWINDCSS"},
    { id: 7, tech: "redux.svg" ,name:"REDUX"},
    { id: 8, tech: "Figma.svg",name:"FIGMA" },
    { id: 9, tech: "mongodb.svg",name:"MONGODB" },
    { id: 10, tech: "postman.svg" ,name:"POSTMAN"},
    { id: 11, tech: "github.svg",name:"GITHUB" },
    { id: 12, tech: "nodejs.svg",name:"NODEJS" },
  ];
  return (
    <div className="skills">
      <h3>SKILLS</h3>
      <div className="skills_parent">
        {IMG_URL.map((item) => (
          <div key={item.id} className="skill_child">
            <img src={`/assets/skills/${item.tech}`} alt="" /> <p>{item.name}</p>
          </div>
        ))}
        {/* <div className="skill_child">
          <img src="/assets/skills/CSS3.svg" alt="" /> <p>CSS</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/js.svg" alt="" /> <p>JAVASCRIPT</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/React.svg" alt="" /> <p>REACTJS</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/sass.svg" alt="" /> <p>SASS</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/Tailwind.svg" alt="" /> <p>TAILWINDCSS</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/redux.svg" alt="" /> <p>REDUX</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/Figma.svg" alt="" /> <p>FIGMA</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/mongodb.svg" alt="" /> <p>MONGODB</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/postman.svg" alt="" /> <p>POSTMAN</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/github.svg" alt="" /> <p>GITHUB</p>
        </div>
        <div className="skill_child">
          <img src="/assets/skills/nodejs.svg" alt="" /> <p>NODEJS</p>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
