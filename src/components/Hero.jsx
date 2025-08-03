import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Shape from "./Shapes.jsx";
import WavingHand from "./Hand_weve";
function Hero({ onOpenModal }) {
  const [showArrow, setShowArrow] = useState(false);
  const [arrowPos, setArrowPos] = useState(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  const handleAboutClick = () => {
    setShowArrow(true);
  };
  const handleArrowClick = () => {
    alert("Arrow clicked! You can do anything here.");
  };
  const handleEnvelopeClick = () => {
    onOpenModal?.(); // open modal in App.js
  };
  useEffect(() => {
    const updateArrow = () => {
      if (showArrow && aboutMeRef.current && resumeRef.current) {
        const start = aboutMeRef.current.getBoundingClientRect();
        const end = resumeRef.current.getBoundingClientRect();
        const container = document.getElementById("landing-page").getBoundingClientRect();

        setArrowPos({
          x1: start.left + start.width / 2 - container.left,
          y1: start.top + start.height / 2 - container.top,
          x2: end.left + end.width / 2 - container.left,
          y2: end.top + end.height / 2 - container.top,
        });
      }
    };
    updateArrow();
    window.addEventListener("resize", updateArrow);
    return () => window.removeEventListener("resize", updateArrow);
  }, [showArrow]);

  return (
    <section id="landing-page" style={{ position: "relative", padding: "2rem", minHeight: "400px" }}>
      <header className="header">
        <div className="header__content">
          <h1 className="title">
            Hey <span className="wave"><WavingHand /></span>
          </h1>
          <h1 className="title title--secondary orange">I'M ALPHONSE.</h1>

          <p className="header__par">
            <span className="orange">I'm a frontend software engineer</span>{" "}
            with a strong passion for building web applications.
            <br />
            Here is a bit more{" "}
            <span
              className="orange click"
              onClick={handleAboutClick}
              ref={aboutMeRef}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              about me
            </span>
          </p>

          <div className="social__list" style={{ marginTop: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/alphonse-nkubana"
              className="social__link click"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "1rem" }}
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Ankubana/Profile"
              className="social__link click"
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: "1rem" }}
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="/Asset/Alphonse_Resume.pdf"  // Make sure the path is correct relative to the public folder
              className="social__link click"
              download="Alphonse_Resume.pdf"
            >
              <FontAwesomeIcon icon={faFilePdf} size="2x" />
            </a>
          </div>
        </div>
      </header>

      <button
        className="mail__btn"
        onClick={handleEnvelopeClick}
        aria-label="Contact"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </button>

      {/* Arrow */}
      {showArrow && arrowPos && (
        <svg className="arrow-svg">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="15"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 15 3.5, 0 7" fill="blue" />
            </marker>
          </defs>
          <g onClick={handleArrowClick} style={{ cursor: "pointer" }}>
            <line
              x1={arrowPos.x1}
              y1={arrowPos.y1}
              x2={arrowPos.x2}
              y2={arrowPos.y2}
              stroke="green"
              strokeWidth={3}
              markerEnd="url(#arrowhead)"
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}
      <Shape />
    </section>
  );
}
export default Hero;