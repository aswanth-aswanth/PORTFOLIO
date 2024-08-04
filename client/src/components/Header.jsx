// Header.jsx
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { motion } from "framer-motion";
import { headerSmallIcons } from "../data/data.js";
import { useStore } from "../store/store.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${(props) => (props.darkMode ? "#222" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  & > * {
    margin-left: 1rem;
  }
`;

function Header() {
  const setDarkMode = useStore((state) => state.setDarkMode);
  const darkMode = useStore((state) => state.darkMode);

  const icon = darkMode ? (
    <LightModeIcon onClick={() => setDarkMode()} className="lightmode" />
  ) : (
    <DarkModeOutlinedIcon onClick={() => setDarkMode()} className="lightmode" />
  );

  return (
    <HeaderContainer darkMode={darkMode}>
      <NavContainer>
        <Logo>
          <img src="/assets/profile-pic22.webp" alt="Profile" />
          <h1>Aswanth</h1>
        </Logo>
        <NavLinks>
          {icon}
          <a href="mailto:aswanthndl@gmail.com" style={{ color: "inherit" }}>
            <MailOutlineIcon className="menu" />
          </a>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;