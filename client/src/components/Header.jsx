import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from '@mui/icons-material/Menu';
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
            <MenuIcon className="menu"/>
            {/* <ul>
              <li className="li1"></li>
              <li className="li2"></li>
              <li className="li1"></li>
            </ul> */}
          </div>
        </div>
        <div className="circle1"></div>
        <div className="circle2">
          <div className="circle1_child">
            <img src="/assets/profile-pic (9).png" alt="" />
          </div>
        </div>
        <p className="p1">
          Hi guys 👋, I am <span>Aswanth</span>
        </p>
        <p className="p2">A software developer</p>
        <p className="p3">Follow me</p>
        <div className="icons">
          <img src="/assets/Social_icons/instagram-tile.svg" alt="" />
          <img src="/assets/Social_icons/github.svg" alt="" />
          <img src="/assets/Social_icons/linkedin.svg" alt="" />
        </div>
        <div className="buttons">
          <button>Work with me</button>
          <button>Download CV</button>
        </div>
      </div>
    // </div>
  );
}

export default Header;
