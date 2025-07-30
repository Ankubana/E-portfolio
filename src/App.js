import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import Resume from './components/Resume';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isResumePage = location.pathname === "/Resume";

  return (
    <>
      {!isResumePage && <BackgroundShapes />}
      {!isResumePage && <Navbar />}
      {!isResumePage && <Hero />}
      {!isResumePage && <Modal />}
      {!isResumePage && <Projects />}
      {!isResumePage && <Footer />}
      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;