import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Shape from './Shapes.jsx';
import '../index.js'; // Only keep if it contains global CSS

function Hero({ onOpenModal }) {
 const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal = () => {
  setIsModalOpen(prev => {
    const newState = !prev;
    document.body.classList.toggle('modal--open', newState);
    return newState;
  });
};

  return (
    <section id="landing-page">
      <header className="header">
        <div className="header__content">
          <h1 className="title">Hey</h1>
          <h1 className="title title--secondary orange">I'M ALPHONSE.</h1>
          <p className="header__par">
            <span className="orange">I'm a frontend software engineer</span> with a strong passion for building web applications.
            <br />
            Here is a bit more <span className="orange click" onClick={onOpenModal}>about me</span>
          </p>
          <div className="social__list">
            <a href="https://www.linkedin.com/" className="social__link click" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Ankubana/Alphonse_profile" className="social__link click" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="/Resume.pdf" className="social__link click" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </div>
        </div>
      </header>
 <a href="#projects" class="scroll">
 <div class="scroll__icon click" ></div></a>
      <button className="mail__btn" onClick={toggleModal}>
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
      {/* Render shapes behind hero section */}
      <Shape />
    </section>
  );
}

export default Hero;