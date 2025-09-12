// src/components/Projects.jsx
import React from 'react';
import frontendImg from '../Assets/Develope.png';
import internshipImg from '../Assets/internship_project.png';
import movieImg from '../Assets/Books_sub.png';
import bookImg from '../Assets/library_img.png';
import skintric from'../Assets/skinstric.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faAppStore,  } from '@fortawesome/free-brands-svg-icons';
const projects = [
  {
    title: 'Frontend Developer',
    subtitle:'HTML, CSS, JavaScript, React',
    image:frontendImg,
    description: `Motivated and detail-oriented Front-End Developer with hands-on training from a full-time coding bootcamp. Skilled in responsive, interactive web apps.`,
  },
  {
    title: 'Internship Project',
    subtitle: 'HTML, CSS, JavaScript, React',
    image:internshipImg,
    description: `Skilled in building responsive and interactive web applications. Eager to contribute to a collaborative team.`,
     github: 'https://github.com/Ankubana/Virtual_internship_NFT-marketplace',
      live: 'https://www.linkedin.com/feed',
    appStore: 'https://github.com/Ankubana/Virtual_internship_NFT-marketplace',
  },
  {
    title: 'Online Movie Platform',
    subtitle: 'HTML, CSS, JavaScript,React',
    image:movieImg,
    description: `E-commerce platform for movies — browse, purchase, rent, or stream with secure payments and personalized suggestions.`,
     github: 'https://github.com/Ankubana/Movies_Ecommerce',
     live: 'https://www.linkedin.com/feed',
    appStore:'https://github.com/Ankubana/Movies_Ecommerce',
  },
  {
    title: 'Online Book Store',
    subtitle: 'HTML, CSS, JavaScript, React',
    image:bookImg,
    description: `KubaRainbow: A digital library offering books, articles, and learning materials online with flexible access anywhere.`,
    github: 'https://github.com/Ankubana/Alpha_Ecommerce_Library',
    live: '#',
    appStore: 'https://github.com/Ankubana/Alpha_Ecommerce_Library',
  },
    {
    title: 'Online Book Store',
    subtitle: 'HTML, CSS, JavaScript, React',
    image:skintric,
    description: `Ai skinstric prediction .`,
    github: 'https://github.com/Ankubana/skinstric_internship',
    live: '#',
    appStore: 'https://skinstricinternship-frontend.vercel.app/',
  },
];

function Projects() {
  return (
    <section id="projects"  style={{ position: 'relative' }}>
      <div className="container">
        <div className="row">
          <ul className="project__link">
            {projects.map((project, idx) => (
              <li className="project" key={idx}>
                <div className="project__wrapper">
                  <img src={project.image} alt={project.title} className="project__img" />
                  <div className="project__wrapper--bg">
                    <div className="project__description">
                      <h3 className="project__description--title">{project.title}</h3>
                      <h4 className="project__description--sub-title">{project.subtitle}</h4>
                      <p className="project__description--par">{project.description}</p>
                      <div className="project__description--links">
                        {project.github && (
                          <a href={project.github} className="project__decription--link" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"><FontAwesomeIcon icon={faLinkedin}/> </i>
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} className="project__decription--link" target="_blank" rel="noreferrer">
                          
                         <i className="fas fa-link"><FontAwesomeIcon icon={faGithub}/></i> 
                          </a>
                        )}
                        {project.appStore && (
                          <a href={project.appStore} className="project__decription--link" target="_blank" rel="noreferrer">
                            <i className="fab fa-app-store"><FontAwesomeIcon icon={faAppStore}/></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;