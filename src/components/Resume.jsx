import React, { useEffect } from "react";
import AOS from "aos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "aos/dist/aos.css";
const Resume = () => {

  useEffect(() => {
  AOS.init({ duration: 5000, once: true });
  // Add dark class to body
  document.body.classList.add('resume-dark');
  // Cleanup: remove class when unmounting
  return () => {
    document.body.classList.remove('resume-dark');
  };
}, []);

  // Helper to generate alternating fade directions and incremental delays
  const renderAnimatedLines = (lines) => {
    return lines.map((text, i) => (
      <p
        key={i}
        data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={i * 150} // 150ms delay per line
        style={{ marginBottom: 12 }}
      >
        {text}
      </p>
    ));
  };
  // Similarly for list items
  const renderAnimatedListItems = (items) => {
    return items.map((text, i) => (
      <li
        key={i}
        data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={i * 150}
        style={{ marginBottom: 8 }}
      >
        {text}
      </li>
    ));
  };

  return (
    
    <div style={styles.container} className="resume-container">
      <Link to="/Hero" className="Resume__link">
      <FontAwesomeIcon icon="arrow-left" />Back
              </Link>

      {/* Header */}
      <header style={styles.header} className="resume-container">
        
        
        <h1 data-aos="fade-right" data-aos-delay={0}>Alphonse NKUBANA</h1>
        <p style={styles.contact} data-aos="fade-left" data-aos-delay={150}>
        <span className="resume-container">Frontend Developer</span><br />
          <a href="https://www.linkedin.com/in/alphonse-nkubana" style={{color:"#2980b9"}}>LinkedIn</a> | <a href="https://github.com/Ankubana"style={{color:"#2980b9"}}>GitHub</a> |<span className="resume-container"> (+1) 612-636-3702 | kubalpha1@gmail.com</span><br />
         <span className="resume-container"> Blaine, Minnesota, USA |<a href="https://github.com/Ankubana/Profile" style={{color:"#2980b9"}}>Portfolio</a></span>
        </p>
      </header>   
      {/* Summary */}
      <section style={styles.section} className="resume-container">
        <h2 style={styles.heading} data-aos="fade-right" data-aos-delay={0}>Professional Summary</h2>
        {renderAnimatedLines([
          "• Motivated and detail-oriented Frontend Developer with hands-on experience gained through intensive bootcamp training and real-world projects.",
          "• Skilled in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.",
          "• Former IT and Communication Specialist with proven technical support, troubleshooting, and team collaboration skills.",
          "• Contributed to curriculum development as a practitioner, demonstrating strong understanding of tech education and user-focused learning.",
          "• Committed to continuous learning and ready to bring creativity, problem-solving, and passion for clean code to a dynamic development team."
       
       ])}
      </section>

      {/* Experience */}
      <section style={styles.section} className="resume-container">
        <h2 style={styles.heading} data-aos="fade-left" data-aos-delay={0}>Professional Experience</h2>

        <div style={{ marginTop: 20 }}>
          <h3 data-aos="fade-right" data-aos-delay={0}>Frontend Engineer – Personal Projects | Feb 2025 – Present</h3>
          <ul>
            {renderAnimatedListItems([
              "• Completed a frontend development bootcamp (HTML, CSS, JS, React, Git•	Completed an intensive frontend development bootcamp covering HTML, CSS, JavaScript, React, Git, and responsive web design).",
              "• Built multiple real-world projects including an NFT marketplace, online library and online movie store.",
              "• Used modern tools: React Router, Axios, Tailwind CSS, GitHub•	Practiced modern frontend tooling like React Router, Axios, Tailwind CSS, and GitHub for version control.",
              "• I am familiar with working with RESTful APIs and implementing user interface animations.",
              "• Designed clean, user-focused interfaces with a mobile-first approach."
            ])}
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <h4 data-aos="fade-left" data-aos-delay={0}>Projects:</h4>
          <ul>
            {renderAnimatedListItems([
              "NFT Marketplace",
              "Online Library System",
              "Movie Store Platform"
            ])}
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 data-aos="fade-right" data-aos-delay={0}>Full-Stack Developer | Feb 2021 – May 2022</h3>
          <ul>
            {renderAnimatedListItems([
              "• Designed and developed a fully functional multi-vendor e-commerce platform to allow individuals to register, list, and sell products online..",
              "• Implemented auth, product listing, search, shopping cart•	Built user authentication, product listing, search functionality, and shopping cart features using PHP and MySQL.",
              "• Used HTML, CSS, Bootstrap, JavaScript for UICreated responsive, mobile-friendly front-end interfaces using HTML, CSS, Bootstrap, and   JavaScript.",
              "• Structured vendor/customer databases and transactionsImplemented database structure for user roles (vendors/customers), product categories, orders, and transactions.",
              "• Enabled dynamic content loading and form validations to enhance user experience and prevent errors",
              "• Secured code with SQL injection prevention, session handlingFocused on security measures like form validation, SQL injection prevention, and session handling."
            ])}
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 data-aos="fade-left" data-aos-delay={0}>IT & Communication Specialist – MCT Global | 2019 – 2021</h3>
          <ul>
            {renderAnimatedListItems([
              "• Supported the company’s digital infrastructure including computer systems, software, and communication tools.",
              "• Provided technical assistance to internal teams, helping to ensure efficient operations.",
              "• Coordinated technical communication between departments and stakeholders.",
              "• Gained experience in troubleshooting, team collaboration, and tech support — transferable skills to frontend debugging and client support roles.",
            ])}
          </ul>
        </div>
         <div style={{ marginTop: 32 }}>
          <h3 data-aos="fade-left" data-aos-delay={0}>Curriculum Development Practitioner | on-site May 2015-September 2018</h3>
          <ul>
            {renderAnimatedListItems([
              "• Participated in curriculum design for tech training programs, focusing on practical and industry-relevant frontend development content.",
              "• Helped shape the learning experience for aspiring developers by reviewing and improving course structure, materials, and learning objectives.",
              "• Coordinated technical communication between departments and stakeholders.",
              "• Applied deep understanding of how people learn tech skills, which enhances your ability to work in team-based and mentorship-driven environments.",
            ])}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section style={styles.section} className="resume-container">
        <h2 style={styles.heading} data-aos="fade-right" data-aos-delay={0}>Technical Skills</h2>
        <ul>
          {renderAnimatedListItems([
            "Languages: JavaScript, HTML, CSS, PHP",
            "Frameworks: React, Tailwind CSS, Firebase, React Query",
            "Tools: GitHub, VS Code, Chrome DevTools"
          ])}
        </ul>
      </section>

      {/* Education */}
      <section style={styles.section} className="resume-container">
        <h2 style={styles.heading} data-aos="fade-left" data-aos-delay={0}>Education</h2>
        {renderAnimatedLines([
          "Frontend Simplified – Frontend Bootcamp (Feb 2025 – Aug 2025)",
          "AUCA – BSc in Information Science, Major in IT (2007 – 2011)"
        ])}
      </section>

      {/* Interests */}
      <section style={styles.section} className="resume-container">
        <h2 style={styles.heading} data-aos="fade-right" data-aos-delay={0}>Interests</h2>
        <p data-aos="fade-left" data-aos-delay={150}>
          Soccer (watching and playing), tech community events, teamwork and collaboration.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    maxWidth: 900,
    margin: "0 auto",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    paddingBottom: 20,
  },
  contact: {
    fontSize: "0.9em",
    color: "#555",
  },
  section: {
    marginTop: 40,
  },
  heading: {
    color: "#2980b9",
    borderBottom: "2px solid #2980b9",
    paddingBottom: 5,
    marginBottom: 10,
  },
};

export default Resume;
