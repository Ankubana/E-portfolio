import React, { useState } from 'react';
import vision_img from "../Assets/Vision_img.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  function openMenu() {
    setMenuOpen(true);
    document.body.classList.add('menu--open');
  }

  function closeMenu() {
    setMenuOpen(true);
    document.body.classList.remove('menu--open');
  }

  const openResumeInNewTab = () => {
    window.open(`${window.location.href.split('#')[0]}#/Resume`, "_blank", "noopener,noreferrer");
  };

  const toggleContrast = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      document.body.classList.toggle('dark-theme', newMode);
      return newMode;
    });
  };

  const toggleModal = () => {
 setMenuOpen(true)
    setIsModalOpen(prev => {
      const newState =!prev;
      document.body.classList.toggle('modal--open',newState);
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
                e.preventDefault();
                openResumeInNewTab();
              }}
              className="nav_link--anchor link__hover--effect"
            >
              Resume
            </a>
          </li>
          <li className="nav__list">
            <a href="#projects" className="nav_link--anchor link__hover--effect">Projects</a>
          </li>
          <li className="nav__list">
            <a href="#" className="nav_link--anchor  nav_link-effect  link__hover--effect  link_hover-effect--black" onClick={toggleModal}>Contact</a>
          </li>
          <li className="nav__list click">
            <a href="#" className="nav_link--anchor" onClick={toggleContrast}><FontAwesomeIcon icon={faAdjust} /></a>
          </li>
          <button className="btn__menu" onClick={openMenu} aria-label="Open Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>

        <div className={`menu__backdrop ${menuOpen ? 'menu--open' : ''}`} onClick={closeMenu}>
          <button className="btn__menu btn__menu--close" onClick={closeMenu} aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>Resume</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;