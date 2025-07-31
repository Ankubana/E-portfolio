
// Navbar.jsx
import React, { useState } from 'react';
import vision_img from "../Assets/Vision_img.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Navbar() {
const [darkMode,setDarkMode] = useState(false);
  // Toggle dark mode
  const openResumeInNewTab = () => {
  window.open(`${window.location.href.split('#')[0]}#/Resume`, "_blank", "noopener,noreferrer");
};
const toggleContrast = () => {
      setDarkMode(prev=>{
      const newMode = !prev;
      document.body.classList.toggle('dark-theme', newMode);
      return newMode;
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(prev => {
      const newState = !prev;
      document.body.classList.toggle('modal--open', newState);
      return newState;
    });
  };
  return (
    <section>
      <nav>
        <div className="logo__wrapper">
          <img src={vision_img} alt="Logo" className="log__img" />
          <div className="logo__title">Kuba<span className="orange">Vision</span></div>
        </div>
        <ul className="nav__link--list">

          
          <li className="nav__link">
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault(); // prevents default navigation
      openResumeInNewTab();
    }}
    className="nav_link--anchor link__hover--effect"
  >
    Resume
  </a>
</li>
    <li className="nav__link"><a href="#projects" className="nav_link--anchor link__hover--effect">Projects</a></li>
          <li className="nav__link"><a href="#" className="nav_link--anchor  nav_link-effect  link__hover--effect  link_hover-effect--black" onClick={toggleModal}>Contact</a></li>
          <li className="nav__link click">
            <a href="#" className="nav_link--anchor" onClick={toggleContrast}><FontAwesomeIcon icon={faAdjust} /></a>
          </li>
        </ul>
        
      </nav>
      
    </section>
  );
}

export default Navbar;

