import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="main-child main-child1">
        <h3>Aswanth T</h3>
        <div>
          <h5>Software developer</h5>
          <p>
            I am a self motivated, independent & skilled mern stack developer. I
            am constantly seeking new challenges and opportunities to enhance my
            skills and contribute to innovative projects.
          </p>
          <div className="main_btn_parent">
            <button className="main_btn">Work with me</button>
            <button className="main_btn" style={{marginLeft:'10px'}}>Download CV</button>
          </div>
        </div>
      </div>
      <div className="main-child main-child2">
        <img src="/assets/profile-pic1.png" alt="" />
      </div>
      <div className="main-child main-child3">
        <p>Follow me</p>
        <div className="main-child3_child">
          <div className="item"><img src="/assets/Social_icons/instagram-tile.svg" alt="" /></div>
          <div className="item item2"><img src="/assets/Social_icons/github.svg" alt="" /></div>
          <div className="item"><img src="/assets/Social_icons/linkedin.svg" alt="" /></div>
          <div className="item"><img src="/assets/Social_icons/fb.svg" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
