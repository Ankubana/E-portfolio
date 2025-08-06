// src/components/Footer.jsx
import React, { useState } from 'react';
import vision_img from "../Assets/Vision_img.jpeg";

function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
      setIsModalOpen(prev => {
        const newState = !prev;
        document.body.classList.toggle('modal--open', newState);
        return newState;
      });
    };
  return (
    <footer>
      <div className="container">
        <div className="row row__footer">
          <div className="footer__log--wrapper">
            <figure className="footer__log">
              <img src={vision_img} alt="KubaVision Logo" className="footer__log--img" />
              <figcaption className="foot__logo--title">
               <span className="white_color">kuba</span> <span className="orange">Vision</span>
              </figcaption>
            </figure>
          </div>

          <div className="footer__social--list">
            <a
              href="https://github.com/Ankubana"
              className="footer_social--link link__hover--effect link__hover-effect--white"
              target="_blank"
             download
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/alphonse-nkubana"
              className="footer_social--link link__hover--effect link__hover-effect--white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="footer_social--link link__hover--effect link__hover-effect--white"
              onClick={toggleModal}
            >
              Contact
            </a>

            <a
              href="/Assets/Resume.pdf"
              className="footer_social--link link__hover--effect link__hover-effect--white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="copyright">&copy; 2025 Nkubana</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;